<?php
App::uses('AppController', 'Controller');
App::uses('Security', 'Utility');
App::uses('CakeEmail', 'Network/Email');

class AdminController extends AppController {

    var $components = array('Email');
    public $uses = array();

    /* View Profile- Display group categories and campaigns */
    public function group_profile() {
        $this->layout = '';
        CakeLog::write('info', 'In AdminController,group_profile()');
        //session
        $session_group_id = '';
        $session_group_id = CakeSession::read('session_group_id');
        $session_user_id = CakeSession::read('session_id');
        if (empty($session_user_id)) {
            $this->redirect('../');
        }

        if (empty($session_group_id)) {
            $session_group_id = trim($this->request->data['group_id']);
            CakeSession::write('session_group_id', $session_group_id);
        }
        // display group admin profile
        $this->loadModel('Group');
        $groupInfo = $this->Group->query("Select * from mst_group GD
                                            Join mst_group_class GC ON GD.nbr_group_class_id = GC.nbr_group_class_id
                                            Join mst_group_type GT ON GD.nbr_group_type_id = GT.nbr_group_type_id
                                            where GD.nbr_group_id = $session_group_id");

        $this->set('groupInfo', $groupInfo);

        // display group type
        $this->displayGroupClass();

        // display group categories
        $this->loadModel('Category');
        $groupCategoriesList = $this->Category->query("select C.nbr_category_id , txt_category_name from category_group_trans CT
                                                   Join mst_category C ON CT.nbr_category_id = C.nbr_category_id
                                                   where CT.nbr_group_id = '$session_group_id' order by C.txt_category_name asc");

        $this->set('groupCateoriesList', $groupCategoriesList);

        // display group campaign
        $this->loadModel('Campaign');
        $displayCampaign = array(
            'conditions' => array(
                'and' => array(
                    'Campaign.nbr_group_id' => $session_group_id,
                    'Campaign.bol_status' => '0')),
        'order' => array('Campaign.dat_created' => 'desc'));
        $groupcampaigns = $this->Campaign->query("Select * from mst_campaign C
                                                  Join mst_campaign_status CampSt ON CampSt.nbr_campaign_status_id = C.nbr_campaign_status_id");
        $this->set('groupCampaignsList', $groupcampaigns);

        //display join group request
        $this->loadModel('Request');
        $RequestRequest = $this->Request->query("select `nbr_request_id`,`txt_email`,`txt_status` from `user_request_dtls` J
                                                    Join `mst_user` U ON J.`nbr_user_id` = U.`nbr_user_id`
                                                    where J.`nbr_group_id` = '$session_group_id' and `txt_status` != 'Owner'");

        $this->set('RequestRequest', $RequestRequest);

        //count no of ideas
        $this->loadModel('Idea');
        $Total_Ideas = $this->Idea->find('all', array(
            'conditions' => array('nbr_group_id' => $session_group_id)));
        $count = sizeof($Total_Ideas);
        $this->set('TotalIdeas', $count);

        /* display group categories idea count*/
        $this->loadModel('Category');
        $groupCategoriesIdeaCount = $this->Category->query("SELECT I.nbr_group_id,I.nbr_category_id,C.txt_category_name,count(I.nbr_category_id) As Idea_Count FROM mst_idea I
                                                        Join mst_category C ON C.nbr_category_id = I.nbr_category_id
                                                        group by I.nbr_category_id
                                                        having I.nbr_group_id = '$session_group_id' order by C.txt_category_name asc");
        $this->set('groupCategoriesIdeaCount', $groupCategoriesIdeaCount);

        //count no of users
        $this->loadModel('Request');
        $condition = array(
            'conditions' => array(
                'and' => array(
                    'Request.nbr_group_id' => $session_group_id,
                    'Request.txt_status' => 'Accepted')));
        $totalUsers = $this->Request->find('all',$condition);
        $count = sizeof($totalUsers);
        $this->set('TotalUsers', $count);
    }

    /* Display Create group page and no of groups created - on create_group page */
    public function create_group() {
        $this->layout = '';
        CakeLog::write('info', 'In AdminController,create_group()');
        $this->loadModel('GroupClass');
        $this->loadModel('User');
        $this->loadModel('Group');
        $session_user_id = CakeSession::read('session_id');

        $group_class = $this->GroupClass->find('all');
        $this->set('GroupClass', $group_class);

        $groupInfo = $this->Group->find('all', array(
            'order' => array('Group.txt_group_name' => 'asc')));
        $this->set('groupInfo', $groupInfo);

        //display user profile image in header
        $userInfo = $this->User->find('first', array(
            'conditions' => array('User.nbr_user_id' => $session_user_id)));
        $this->set('userInfo', $userInfo);
    }

    function createGroup() {
        $this->layout = '';
        CakeLog::write('info', 'In AdminController,createGroup()');
        $this->loadModel('Group');
        $displaymessage = '';
        if($this->request->is('post')){
            $result = $this->request->data;
            $error = $this->Group->validation($result);

            if ($error === '') {
                $session_user_id = CakeSession::read('session_id');
                $user_email = CakeSession::read('session_email');
                $group_name = trim($this->request->data['group_name']);
                $group_code = trim($this->request->data['group_code']);
                $group_class_id = trim($this->request->data['group_class_id']);
                $group_description = trim($this->request->data['group_description']);
                $group_type_id = $this->request->data['group_type_id'];
                date_default_timezone_set('Asia/Kolkata');
                $current_date = date("Y-m-d H:i:s");

                if (!empty($result)) {
                    $flag = true;
                    $this->loadModel('Group');
                    $group_info = $this->Group->find('all');

                    foreach ($group_info AS $value) {
                        $db_group_code = trim($value['Group']['txt_group_code']);

                        if (strtolower($db_group_code) == strtolower($group_code)) {
                            $displaymessage = "Group already registered with this group code:";
                            $flag = false;
                            break;
                        }
                    }
                    if ($flag == true) {
                        if ($this->Group->save(array('nbr_owner_id' => $session_user_id ,'txt_group_name' => $group_name, 'txt_group_code' => $group_code,
                                'nbr_group_class_id' => $group_class_id, 'txt_group_desc'=> $group_description , 'nbr_group_type_id' => $group_type_id,'dat_created' => $current_date))) {
                            // Add default categories
                            $groupInfo = $this->Group->query("Select nbr_group_id from mst_group where txt_group_code = '$group_code'");
                            $groupId = $groupInfo['0']['mst_group']['nbr_group_id'];
                            $this->Group->query("INSERT INTO `category_group_trans`(`nbr_category_id`,`nbr_group_id`)
                                        SELECT `nbr_category_id`, $groupId FROM `mst_group_default_category` where `nbr_group_class_id` = $group_class_id");
                            CakeLog::write('info', 'Group has been created');
                            // Send Email
                            $subject = "IdeaClicks : Group details";
                            $message = "Welcome Administrator !"."\n\rYour Group ". $group_name ." has been created successfully at http://IdeaClicks.in".
                            "\n\rYou can now invite users to join your group.".
                            "\n\rHappy innovation !" . "\n\rTeam IdeaClicks.";
                            $this->sendEmail($user_email,$subject,$message);
                            //find group id from db
                            $results = $this->Group->find('first', array(
                            'conditions' => array('Group.txt_group_code' => $group_code)));
                            //session
                            $session_group_id = $results['Group']['nbr_group_id'];
                            CakeSession::write('session_group_id', $session_group_id);

                            //user directly join to it's created group.
                            $this->loadModel('Request');
                            $status = 'Owner';
                            $this->Request->save(array('nbr_user_id' => $session_user_id,
                                                            'nbr_group_id' => $session_group_id,'txt_status' => $status));
                            $this->Session->write('message', $group_name ." group created successfully. Now you can 1.Add Categories 2.Create Campaign.\r\n ");
                            $this->redirect('../Admin/group_profile');
                        }else {
                            $this->Session->write('group_reg_message', 'Group not created.');
                            CakeLog::write('info', 'Group not created');
                            $this->Session->delete($name);
                            $this->redirect('../Admin/create_group');
                        }
                    } else {
                        $this->Session->write('group_reg_message', $displaymessage);
                        $this->create_group();
                        $this->set('data',$result);
                        //$this->redirect('../Admin/create_group');
                    }
                }
            } else {
                $this->Session->setFlash($error);
                $this->create_group();
                $this->set('data',$result);
                // $this->redirect('../Admin/create_group');
            }
        }
    }

    /* Update Group Profile */
    public function updateGroupProfile() {
        $this->layout = '';
        CakeLog::write('info', 'In AdminController,updateGroupProfile()');
        $this->loadModel('Group');
        $this->loadModel('Category');
        $res=$this->request->data;
        $group_id = trim($this->request->data['group_id']);
        $group_name = trim($this->request->data['group_name']);
        $group_code = trim($this->request->data['group_code']);
        $old_group_class_id = trim($this->request->data['old_group_class_id']);
        $group_class_id = trim($this->request->data['group_type_id']);
        $group_description = trim($this->request->data['group_description']);
        $group_type_id = trim($this->request->data['group_type_id']);

        $imgData = $res['acad_qualification']['upload_cert_img']; //['name'];

        //When admin change the group type default categories should be change.
        if($old_group_class_id != $group_class_id){
            //Delete old default categories.First to get the default categories - category id from mst_group_default_category table
            $default_category_id = $this->Category->query("SELECT `nbr_category_id` FROM `mst_group_default_category` WHERE `nbr_group_class_id` = ".$old_group_class_id);
            $inClausStr = '(';
            if ($default_category_id) {
                foreach ($default_category_id AS $val) {
                    $inClausStr.="'" . trim($val['mst_group_default_category']['nbr_category_id']) . "',";
                }
            } else {
                $inClausStr.="''";
            }

            $inClausStr = trim($inClausStr, ",");
            $inClausStr.=')';

            $this->Category->query("DELETE FROM `category_group_trans` WHERE `nbr_category_id` IN". $inClausStr . "and `nbr_group_id` = ".$group_id);

            //Add new default categories
            $this->Category->query("INSERT INTO `category_group_trans`(`nbr_category_id`,`nbr_group_id`)
                                        SELECT `nbr_category_id`, $group_id FROM `mst_group_default_category` where `nbr_group_class_id` = $group_class_id");
        }

        if (!empty($imgData['name'])) {
            $uploadData = $this->request->data['acad_qualification']['upload_cert_img'];
            $filename = basename($uploadData['name']);
            // $filename = basename($uploadData['name']); // gets the base name of the uploaded file
            $uploadFolder = WWW_ROOT . 'groupimages';  // path where the uploaded file has to be saved

            $ext = pathinfo($filename, PATHINFO_EXTENSION);

            $filename = $this->request->data['group_code'] . "." .$ext; // adding time stamp for the uploaded image for uniqueness
            $uploadPath = $uploadFolder . DS . $filename;

            //echo $uploadPath;die;
            if (!file_exists($uploadFolder)) {
                mkdir($uploadFolder); // creates folder if  not found
            }
            if (!move_uploaded_file($uploadData['tmp_name'], $uploadPath)) {
                $this->redirect('../Admin/group_profile');
            }
            if ($this->Group->updateAll(array('txt_group_name' => "'$group_name'",
                    'txt_group_code' => "'$group_code'", 'nbr_group_class_id' => "'$group_class_id'",'nbr_group_type_id' => "'$group_type_id'",
                    'txt_group_desc' => "'$group_description'",'txt_image_path'=>"'$filename'"), array('nbr_group_id' => $group_id))) {
                $this->Session->write('message', 'Group profile updated.');
                CakeLog::write('info', 'Group profile updated.');
                $this->redirect('../Admin/group_profile');
            } else {
                $this->Session->write('message', 'Group profile not updated.');
                CakeLog::write('info', 'Group profile not updated.');
                $this->redirect('../Admin/group_profile');
            }
        }else{
            if ($this->Group->updateAll(array('txt_group_name' => "'$group_name'",
                    'txt_group_code' => "'$group_code'", 'nbr_group_class_id' => "'$group_class_id'",'nbr_group_type_id' => "'$group_type_id'",
                    'txt_group_desc' => "'$group_description'"), array('nbr_group_id' => $group_id))) {
                $this->Session->write('message', 'Profile updated');
                CakeLog::write('info', 'Group profile updated.');
                $this->redirect('../Admin/group_profile');
            } else {
                $this->Session->write('message', 'Profile not updated');
                CakeLog::write('info', 'Group profile not updated.');
                $this->redirect('../Admin/group_profile');
            }
        }
        $this->redirect('../Admin/group_profile');
    }
     /* Delete Group */
    public function deleteGroup() {
        CakeLog::write('info', 'In AdminController,deleteGroup()');
        $this->loadModel('Group');
        $this->loadModel('Category');
        $this->loadModel('Idea');
        $this->loadModel('Request');
        $this->loadModel('Campaign');
        $group_id = trim($this->request->data('group_id'));

        $groupCategories = $this->Category->query("Select * from category_group_trans where nbr_group_id = ".$group_id);
        if(!empty($groupCategories)){
            //Delete categories from category_group_trans
            $this->Category->query("Delete from category_group_trans where nbr_group_id =".$group_id);
        }
        $groupIdeas = $this->Idea->query("SELECT * FROM `mst_idea` where nbr_group_id = ".$group_id);
        //echo '<pre>';print_r($usersIdeas);die();
        if(!empty($groupIdeas)){
            //move ideas from ideas table to arch_ideas table
            $this->IdeaModel->query("INSERT INTO `arch_mst_idea`(`nbr_idea_id`, `nbr_submitter_id`, `nbr_group_id`, `nbr_campaign_id`, `txt_title`,
                                     `txt_description`, `nbr_category_id`,`idea_status`, `dat_submitted`, `dat_modified`, `nbr_like_count`,
                                      `nbr_dislike_count`, `bol_confidential`, `nbr_star_rating`)
                                        SELECT * FROM `mst_idea` where nbr_group_id ='$group_id'");
            $this->IdeaModel->query("DELETE FROM `mst_idea` where nbr_group_id = ".$group_id);
            CakeLog::write('info', 'Group Ideas Deleted.');
        }
        $joinedGroups = $this->Request->query("select * from user_request_dtls where nbr_group_id =".$group_id);
        if(!empty($joinedGroups)){
            //Delete joined group from user_request_dtls table.
            $this->Request->query("delete from user_request_dtls where nbr_group_id =".$group_id);
            CakeLog::write('info', 'Deleted joined groups.');
        }
        //delete campaign
        $this->Campaign->updateAll(array('bol_status'=> "1" ),array('nbr_group_id' => $group_id));
        CakeLog::write('info', 'Deleted group campains.');
        $result = $this->Group->query("Delete from mst_group where nbr_group_id = ".$group_id);
        if ($result) {
            $this->Session->write('message', 'Group not deleted');
            CakeLog::write('info', 'Group not deleted.');
            $this->redirect('../Admin/group_profile');
        } else {
            $this->Session->write('message', 'Group deleted');
            CakeLog::write('info', 'Group successfully deleted.');
            $this->redirect('../User/user_profile');
        }
    }

    /* add category */
    public function addCategory() {
        CakeLog::write('info', 'In AdminController,addCategory()');
        $this->layout = 'ajax';
        $this->loadModel('Category');
        $this->loadModel('Notification');
        date_default_timezone_set('Asia/Kolkata');
        $current_date = date("Y-m-d H:i:s");
        $result = $this->request->data;
        $error = $this->Category->validation($result);
        if ($error === '') {
            $group_id = trim($_POST['group_id']);
            $group_name = trim($_POST['group_name']);
            $category_name = trim($_POST['category_name']);
            CakeLog::write('info', 'Category Name : '.$category_name);
            if (!empty($result) && !empty($category_name)) {
                $flag = true;
                $allcategories = $this->Category->find('all');
                if(!empty($allcategories)){
                    foreach ($allcategories AS $arr => $value) {
                        $db_category_name = trim($value['Category']['txt_category_name']);
                        if (strtolower($db_category_name) == strtolower($category_name)) {
                            $category_id = $value['Category']['nbr_category_id'];
                            $db_result = $this->Category->query("select * from category_group_trans where nbr_category_id = '$category_id' and nbr_group_id = '$group_id'");
                            if(empty($db_result)){
                                $this->Category->query("INSERT INTO `category_group_trans`(`nbr_category_id`, `nbr_group_id`) VALUES('$category_id','$group_id');");
                                $nofication_text = "$group_name group added $category_name category . now you can start submitting ideas under $category_name category.";
                                $this->Notification->query("INSERT INTO `mst_notification`(`nbr_group_id`, `txt_notification`, `dat_created`)  VALUES ($group_id,'$nofication_text','$current_date')");
                                $this->set('category_id',$category_id);
                                $this->set('category_name',$category_name);
                                // $this->Session->write('message', 'Category added');
                                //$this->redirect('../Admin/group_profile');
                            }
                            else {
                                //$this->Session->write('message', 'Same category available');
                                //$this->redirect('../Admin/group_profile');
                            }
                            $flag = false;
                            break;
                        }
                    }
                }
                if ($flag == true) {
                    if ($this->Category->save(array('txt_category_name' => $category_name))) {
                        $categoryInfo = $this->Category->query("select nbr_category_id from mst_category where txt_category_name = '$category_name'");
                        $category_id = $categoryInfo[0]['mst_category']['nbr_category_id'];
                        $this->Category->query("INSERT INTO `category_group_trans`(`nbr_category_id`, `nbr_group_id`) VALUES('$category_id','$group_id');");
                        $this->set('category_id',$category_id);
                        $this->set('category_name',$category_name);
                        CakeLog::write('info', 'New category added.');
                        //$this->Session->write('message', 'Category added');
                        //$this->redirect('../Admin/group_profile');
                    } else {
                        CakeLog::write('info', 'New category not added.');
                        //$this->Session->write('message', 'Category not added');
                        //$this->redirect('../Admin/group_profile');
                    }
                }
            } else {
                $this->Session->setFlash($error);
                CakeLog::write('info', 'In addCategory() Error'.$error);
                //$this->group_profile();
            }
        }
    }

    /* Delete Category */
    public function deleteCategory() {
        CakeLog::write('info', 'In AdminController,deleteCategory()');
        $this->loadModel('Category');
        if($this->request->is('post')){
            $category_id = trim($this->request->data['category_id']);
            $group_id = trim($this->request->data['group_id']);

            $result = $this->Category->query("delete from category_group_trans where nbr_category_id = '$category_id' and nbr_group_id = '$group_id'");

            if (empty($result)) {
                $this->Session->write('message', 'Category deleted.');
                CakeLog::write('info', 'Category deleted.');
                $this->redirect('../Admin/group_profile');
            } else {
                $this->Session->write('message', 'Category not deleted');
                CakeLog::write('info', 'Category not deleted.');
                $this->redirect('../Admin/group_profile');
            }
        }
    }

    /* Create campaign */
    public function createCampaign() {
        CakeLog::write('info', 'In AdminController,createCampaign()');
        $this->layout = 'ajax';
        $this->loadModel('Campaign');
        $this->loadModel('Notification');
        $result = $this->request->data;
        $error = $this->Campaign->validation($result);
        if ($error === '') {
            $group_id = $_POST['group_id'];
            $group_name = $_POST['group_name'];
            $campaign_name = $_POST['campaign_name'];
            $start_date = $_POST['start_date'];
            $end_date = $_POST['end_date'];
            $categories = $_POST['chk_category'];
            date_default_timezone_set('Asia/Kolkata');
            $current_date1 = date("Y-m-d H:i:s");
            $current_date = date("Y-m-d");
            if($start_date == $current_date){
                $status = '1';
            }else{
                $status = '3';
            }
            if (!empty($result)) {
                $flag = true;
                $this->loadModel('Campaign');
                $this->loadModel('CampaignCategory');
                if ($this->Campaign->save(array('nbr_group_id' => $group_id,'txt_campaign_name' => $campaign_name,
                            'dat_start_date' => $start_date, 'dat_end_date' => $end_date , 'nbr_campaign_status_id' => $status ,'dat_created' =>$current_date1))) {
                    //notification
                    $nofication_text = "$group_name group created $campaign_name campaign . now you can start submitting ideas under $campaign_name campaign.";
                    $this->Notification->query("INSERT INTO `mst_notification`(`nbr_group_id`, `txt_notification`, `dat_created`) VALUES ($group_id,'$nofication_text','$current_date1')");
                    $condition = array(
                        'conditions' => array(
                                'and' => array(
                                            'Campaign.nbr_group_id' => $group_id ,
                                            'Campaign.txt_campaign_name' => "$campaign_name",
                                            'Campaign.bol_status' => '0')));
                    $campaign = $this->Campaign->find('first',$condition);
                    $campaign_id = $campaign['Campaign']['nbr_campaign_id'];
                    $tok = strtok($categories, ",");

                    while ($tok !== false) {
                        $this->CampaignCategory->save(array('nbr_campaign_id' => $campaign_id , 'nbr_category_id' => $tok));
                        $tok = strtok(",");
                    }
                    CakeLog::write('info', 'Campaign created.');
                    // $this->Session->write('message', 'Campaign created');
                    //$this->redirect('../Admin/group_profile');
                } else {
                    CakeLog::write('info', 'Campaign not created.');
                    //$this->Session->write('message', 'Campaign not created');
                    //$this->redirect('../Admin/group_profile');
                }
            } else {
                $this->Session->setFlash($error);
                CakeLog::write('info', 'Error '.$error);
                //$this->redirect('../Admin/group_profile');
            }
        }
    }

    /* Delete Campaign */
    public function deleteCampaign() {
        CakeLog::write('info', 'In AdminController,deleteCampaign()');
        $this->loadModel('Campaign');
        $campaign_id = trim($this->request->data['campaign_id']);

        if ($this->Campaign->updateAll(array('bol_status'=> "1" ),array('nbr_campaign_id' => $campaign_id))) {
            $this->Session->write('message', 'Campaign deleted');
            CakeLog::write('info', 'Campaign deleted.');
            $this->redirect('../Admin/group_profile');
        } else {
            $this->Session->write('message', 'Campaign not deleted');
            CakeLog::write('info', 'Campaign not deleted.');
            $this->redirect('../Admin/group_profile');
        }
    }

    /* Edit campaign */
    public function edit_campaign() {
        $this->layout = '';
        CakeLog::write('info', 'In AdminController,edit_campaign()');
        $this->loadModel('Campaign');
        $this->loadModel('Group');
        $session_user_id = CakeSession::read('session_id');
        if (empty($session_user_id)) {
            $this->redirect('../');
        }
        $campaign_id = trim($this->request->data['campaign_id']);
        $campaign = $this->Campaign->find('first', array(
            'conditions' => array('Campaign.nbr_campaign_id' => $campaign_id)));
        $this->set('Campaign', $campaign);
        $campaign_group_id = $campaign['Campaign']['nbr_group_id'];
        // List of group categories
        $group_categories = $this->Group->query("Select C.nbr_category_id , txt_category_name from mst_category C
                                                Join category_group_trans CT ON C.nbr_category_id = CT.nbr_category_id
                                                where CT.nbr_group_id =".$campaign_group_id);
        $this->set('groupCateoriesList',$group_categories);
        //campaign selected categories
        $campaign_categories = $this->Group->query("Select nbr_category_id from campaign_category_trans
                                                where nbr_campaign_id =".$campaign_id);

        $this->set('campaignCateoriesList',$campaign_categories);
        // display group image in header
        $session_group_id = CakeSession::read('session_group_id');
        $this->loadModel('Group');
        $groupInfo = $this->Group->query("Select * from mst_group GD Join mst_group_class GC ON GD.nbr_group_class_id = GC.nbr_group_class_id where GD.nbr_group_id = $session_group_id");
        $this->set('groupInfo', $groupInfo);
    }

    /* Update Campaign */
    public function updateCampaign(){
        $this->layout = '';
        CakeLog::write('info', 'In AdminController,updateCampaign()');
        $this->loadModel('Campaign');
        $this->loadModel('CampaignCategory');
        if($this->request->is('post')){
            $result = $this->request->data;
            $error = $this->Campaign->validation($result);
            if ($error === '') {
                $campaign_id = trim($this->request->data['campaign_id']);
                $group_id = trim($this->request->data['group_id']);
                $campaign_name = trim($this->request->data['campaign_name']);
                $start_date = trim($this->request->data['start_date']);
                $end_date = trim($this->request->data['end_date']);
                $categories = trim($this->request->data['selected_categories']);
                //Set campaign is active or inactive
                date_default_timezone_set('Asia/Kolkata');
                $current_date1 = date("Y-m-d H:i:s");
                $current_date = date("Y-m-d");
                if($end_date>=$current_date){
                    $status = 1;
                }else{
                    $status = 3;
                }

                if (!empty($result)) {
                    $flag = true;

                    if ($this->Campaign->updateAll(array('nbr_campaign_id' => "'$campaign_id'",'nbr_group_id' => "'$group_id'",'txt_campaign_name' => "'$campaign_name'",
                            'dat_start_date' => "'$start_date'", 'dat_end_date' => "'$end_date'" , 'nbr_campaign_status' =>"'$status'" , 'dat_created' => "'$current_date1'"),array('nbr_campaign_id' => $campaign_id))) {
                        //Delete campaign's old categories and update new categories
                        $this->CampaignCategory->query("DELETE FROM `campaign_category_trans` WHERE `nbr_campaign_id` = ".$campaign_id);
                        for($i = 0; $i<=strlen($categories); $i=$i+2){
                            $this->CampaignCategory->save(array('nbr_campaign_id' => $campaign_id , 'nbr_category_id' => $categories[$i]));
                        }
                        $this->Session->write('message', 'Campaign updated');
                        CakeLog::write('info', 'Campaign updated.');
                        $this->redirect('../Admin/group_profile');
                    } else {
                        $this->Session->write('message', 'Campaign not updated');
                        CakeLog::write('info', 'Campaign not updated.');
                        $this->redirect('../Admin/group_profile');
                    }
                } else {
                    $this->Session->setFlash($error);
                    CakeLog::write('info', 'Error '.$error);
                    $this->redirect('../Admin/group_profile');
                }
            }
        }
    }

    // Display group type on create_group and group_profile page
    public function displayGroupClass() {
        CakeLog::write('info', 'In AdminController,displayGroupClass()');
        $this->loadModel('GroupClass');
        $group_class = $this->GroupClass->find('all');
        $this->set('GroupClass', $group_class);
    }

    // set campaign status
    public function campaignStatus() {
        $curtm = date('Y-m-d H:i:s');
        $todaydate = date("d/m/Y", strtotime($curtm));
    }

    public function RequestStatus() {
        CakeLog::write('info', 'In AdminController,RequestStatus()');
        $this->loadModel('Request');
        $requestId = trim($this->request->data['request_id']);
        $buttonValue = trim($this->request->data['button_value']);

        if ($buttonValue == 'Accept') {
            $status = "Accepted";
            $this->Request->updateAll(array('txt_status' => "'$status'"), array('nbr_request_id' => $requestId));
            $this->redirect('../Admin/group_profile');
        } else if ($buttonValue == 'Reject') {
            $status = "Rejected";
            $this->Request->updateAll(array('txt_status' => "'$status'"), array('nbr_request_id' => $requestId));
            $this->redirect('../Admin/group_profile');
        }
    }

    public function displayCategories() {
        CakeLog::write('info', 'In AdminController,displayCategories()');
        $this->loadModel('Category');
        $session_group_id = CakeSession::read('session_id');
        $groupCategoriesList = $this->Category->query("Select DISTINCT C.nbr_category_id,txt_category_name
                                                           from mst_category C
                                                           Join category_group_trans CT ON C.nbr_category_id = CT.nbr_category_id
                                                           where CT.nbr_group_id = '$session_group_id' order by C.txt_category_name Asc");
        $this->set('groupCategoriesList', $groupCategoriesList);
    }

    public function inviteUsers(){
        $this->layout = '';
        CakeLog::write('info', 'In AdminController,inviteUsers()');
        $this->loadModel('User');
        $this->loadModel('Request');
        $this->loadModel('Invitation');
        $result = $this->request->data;
        $email = trim($this->request->data['email']);
        $group_id = trim($this->request->data['group_id']);
        $group_name = trim($this->request->data['group_name']);
        $user_name = CakeSession::read('session_name');
        $RequestInfo = '';

        if (!empty($result) && $this->request->is('post')) {
            //random no generator min and max value
            $min=1;$max=50000;
            $random_no = mt_rand($min, $max);
            //if user already registered find user_id from database.
            $userInfo = $this->User->find('first', array('conditions' => array('txt_email' => $email)));
            if(!empty($userInfo)){
                $user_id = $userInfo['User']['nbr_user_id'];
                //check user already joined this group
                $condition = array(
                             'conditions' => array(
                             'and' => array(
                             'Request.nbr_group_id' => $group_id,
                             'Request.nbr_user_id' => $user_id)));
                $RequestInfo = $this->Request->find('first',$condition);

                if(empty($RequestInfo)){
                    $subject = "IdeaClicks Invitation";
                    $message = "Welcome to IdeaClicks !\n\r" . $user_name. " is inviting you to join ". $group_name ." group. \n\rPlease use below URL to join : \n\r"."http://www.IdeaClicks.in?group_id=". $group_id ."&random_no=". $random_no ."\n\rHappy innovation !"."\n\rTeam IdeaClicks.";
                    //Sent Email
                    $val = $this->sendEmail($email,$subject,$message);

                    //Save group_id and random_no in admin_send_request_to_user table.
                    $this->Invitation->save(array('group_id'=>$group_id,'random_no'=>$random_no));
                    $this->Session->write('msg', 'Invitation email has been sent.');
                    CakeLog::write('info', 'Invitation email has been sent.');
                }else{
                    $this->Session->write('msg', 'User already joined this group .please check in Requests section.');
                    CakeLog::write('info', 'User already joined this group .please check in Requests section.');
                }

            }else{
                $subject = "IdeaClicks Invitation";
                $message = "Welcome to IdeaClicks !\n\r" . $user_name. " is inviting you to join ". $group_name ." group. \n\rPlease use below URL to join : \n\r"."http://www.IdeaClicks.in/User/user_registration?group_id=". $group_id ."&random_no=". $random_no ."\n\rHappy innovation !"."\n\rTeam IdeaClicks.";
                //Sent Email
                $val = $this->sendEmail($email,$subject,$message);
                //Save group_id and random_no in admin_send_request_to_user table.
                $this->Invitation->save(array('nbr_group_id'=>$group_id,'nbr_random_no'=>$random_no));
                CakeLog::write('info', 'Invitation email has been sent.');
                $this->Session->write('msg', 'Invitation email has been sent.');

            }
            $this->redirect('/Admin/group_profile');
        }
        else{
            $this->redirect('../');
        }
    }
    //Email Configuration and send email function
    public function sendEmail($email,$subject,$message){
        CakeLog::write('info', 'In AdminController,sendEmail()');
        $this->Email->smtpOptions = array(
                'port' => '587',
                'timeout' => '30',
                'host' => 'ideaclicks.in',
                'username' => 'innovation@ideaclicks.in',
                'password' => 'C204LaValle#',
                'client' => 'ideaclicks.in',
                'tls' => true
        );
        $this->Email->delivery = 'smtp';
        $this->Email->from = 'innovation@ideaclicks.in';
        $this->Email->to = $email;
        $this->set('name', 'Receipent Name');
        $this->Email->subject = $subject;
        $this->Email->send($message);
        CakeLog::write('info', 'In AdminController,Email has been Sent');
    }
}?>