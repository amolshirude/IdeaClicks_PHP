<?php
App::uses('ConnectionManager', 'Model');
App::uses('AppController', 'Controller');
App::uses('Security', 'Utility');
App::uses('CakeEmail', 'Network/Email');

class UserController extends AppController {
    var $components = array('Email');

    public function displayGroupProfileToUser() {
        $this->layout = '';
        CakeLog::write('info', 'In UserController,displayGroupProfileToUser()');
        $group_id = trim($this->request->data['group_id']);
        $group_name = trim($this->request->data['group_name']);

        //session
        CakeSession::write('group_id', $group_id);
        CakeSession::write('group_name', $group_name);
        $this->redirect('../Pages/group_page');
    }

    /* Display user registration page */
    public function user_registration() {
        $this->layout = '';
        CakeLog::write('info', 'In UserController,user_registration()');
        $this->loadModel('User');
    }

    /* Display user profile page */
    public function user_profile() {
        $this->layout = '';
        CakeLog::write('info', 'In UserController,user_profile()');
        $this->loadModel('User');

        //session
        $session_user_id = CakeSession::read('session_id');
        $sessionEmail = CakeSession::read('session_email');

        if (empty($session_user_id)) {
            $this->redirect('../');
        }
        // display user profile
        $userInfo = $this->User->find('first', array(
            'conditions' => array('User.nbr_user_id' => $session_user_id)));
        $this->set('userInfo', $userInfo);

        //display joined groups
        $this->loadModel('Request');
        $RequestRequest = $this->Request->query("select G.`nbr_group_id`,`txt_group_name`,`txt_group_code`,`txt_status`
                                                     from `user_request_dtls` J
                                                     Join `mst_group` G ON J.`nbr_group_id` = G.`nbr_group_id`
                                                     where J.`nbr_user_id` = '$session_user_id' and J.`txt_status` != 'Owner'");
        $this->set('RequestRequest', $RequestRequest);

        //display dropdown list of groupname
        $this->loadModel('Group');
        $findUserJoinedGroup = $this->Request->find('all', array('fields' => array('nbr_group_id'),
            'conditions' => array('nbr_user_id' => $session_user_id)));

        $inClausStr = '(';

        if ($findUserJoinedGroup) {
            foreach ($findUserJoinedGroup AS $val) {
                $inClausStr.="'" . trim($val['Request']['nbr_group_id']) . "',";
            }
        } else {
            $inClausStr.="''";
        }

        $inClausStr = trim($inClausStr, ",");
        $inClausStr.=')';

        $group_info = $this->Group->query("select * from mst_group where nbr_group_id NOT IN " . $inClausStr . " and nbr_group_id NOT IN (0)");
        $this->set('groupInfo', $group_info);

        //Display - created groups of logged in user.
        $this->loadModel('Group');
        $created_groups = $this->Group->find('all',array('conditions'=> array('nbr_owner_id' => $session_user_id)));
        $this->set('createdGroups', $created_groups);

        //Display notifications
        $this->loadModel('Notification');
        $Notifications = $this->Notification->query("Select * from mst_notification where nbr_group_id IN".$inClausStr);
        $this->set('Notifications',$Notifications);
    }

    /* post user registration */
    public function userRegistration() {
        $this->layout = '';
        CakeLog::write('info', 'In UserController,userRegistration()');
        $this->loadModel('User');
        $displaymessage = '';
        if($this->request->is('post')){
            $result = $this->request->data;
            $error = $this->User->validation($result);

            if ($error === '') {
                //admin send request to user with its url parameter group_id and random_no
                $group_id = trim($this->request->data['group_id']);
                $random_no = trim($this->request->data['random_no']);
                $username = trim($this->request->data['user_name']);
                $useremail = trim($this->request->data['user_email']);
                $password = trim($this->request->data['password']);
                $encrypted_password = base64_encode(trim($this->request->data['password']));
                $cpassword = trim($this->request->data['c_password']);
                date_default_timezone_set('Asia/Kolkata');
                $current_date = date("Y-m-d H:i:s");

                if (!empty($result)) {
                    $flag = true;
                    $this->loadModel('User');
                    $userInfo = $this->User->find('all');

                    foreach ($userInfo AS $value) {

                        $user_email = trim($value['User']['txt_email']);

                        if ($user_email == $useremail) {
                            $flag = false;
                            $displaymessage = "User already registered with this email Id:";
                            CakeLog::write('info', 'User already registered with this email Id');
                            break;
                        }
                    }

                    if ($flag == true) {
                        if ($this->User->save(array('txt_name' => $username, 'txt_email' => $useremail, 'txt_pswd' => $encrypted_password, 'dat_created'=>$current_date))) {
                            $this->Session->write('message', 'Registration successful');
                            CakeLog::write('info', 'User has been registered');
                            // Send Email
                            $subject = "IdeaClicks : User Registration details";
                            $message = "Welcome to IdeaClicks !\n\rDear ".$username.",\n\rYour UserName is : ".$useremail."\n\rYour Password is : ".$password
                            ."\n\rYou can login using this URL : " . "www.ideaclicks.in" . "\n\rHappy innovation !" . "\n\rTeam IdeaClicks.";
                            $this->sendEmail($useremail,$subject,$message);
                            //find user id from db
                            $result1 = $this->User->find('first', array(
                            'conditions' => array('User.txt_email' => $useremail)));
                            //session
                            CakeSession::write('session_id', $result1['User']['nbr_user_id']);
                            CakeSession::write('session_name', $username);
                            CakeSession::write('session_email', $useremail);

                            //When admin send request to user if user not registered then user can register and
                            //directly join to the admin requested group by using URL parameter group Id and random number.
                            if(!empty($group_id)&&!empty($random_no)){
                                $this->loadModel('Invitation');
                                $condition = array(
                                            'conditions' => array(
                                            'and' => array(
                                            'Invitation.nbr_group_id' => $group_id,
                                            'Invitation.nbr_random_no' => $random_no)));
                                $result3 = $this->Invitation->find('first', $condition);

                                if(!empty($result3)){
                                    $this->loadModel('Request');
                                    $this->Request->save(array('nbr_user_id' => $result1['User']['nbr_user_id'],'nbr_group_id' => $group_id,'txt_status' => 'Accepted'));
                                    $this->Invitation->query("DELETE FROM `mst_user_invitation` WHERE nbr_group_id = '$group_id' and nbr_random_no = '$random_no' ");
                                    //delete session values
                                    CakeSession::delete('group_id');
                                    CakeSession::delete('random_no');
                                }
                            }
                            $this->Session->write('message', 'User Registered Successfully ! Now Create OR Join Group and invite friends to Submit ideas.');
                            $this->redirect('../User/user_profile');
                        } else {
                            $this->Session->write('user_reg_message', 'Registration failed');
                            CakeLog::write('info', 'User registration failed');
                            $this->redirect('../User/user_registration');
                        }
                    } else {
                        $this->Session->write('user_reg_message', $displaymessage);
                        $this->set('data', $result);
                        //$this->redirect('../User/user_registration');
                    }
                }
            } else {
                $this->Session->setFlash($error);
                $this->set('data', $result);
                CakeLog::write('info', 'User registration failed'.$result);
                //$this->redirect('../User/user_registration');
            }
        }
    }

    /* Update profile */
    public function updateProfile() {
        CakeLog::write('info', 'In UserController,updateProfile()');
        $this->loadModel('User');
        $userId = trim($this->request->data['user_id']);
        $res = $this->request->data;
        $userName = trim($this->request->data['user_name']);
        $gender = trim($this->request->data['gender']);
        $userMobile = trim($this->request->data['user_mobile']);
        $userAddress = trim($this->request->data['user_address']);
        $country = trim($this->request->data['country']);
        $state = trim($this->request->data['state']);
        $city = trim($this->request->data['city']);
        $pincode = trim($this->request->data['pincode']);
        $imgData = $res['acad_qualification']['upload_cert_img']; //['name'];
        if (!empty($imgData['name'])) {
            $uploadData = $this->request->data['acad_qualification']['upload_cert_img'];
            $filename = basename($uploadData['name']);
            // $filename = basename($uploadData['name']); // gets the base name of the uploaded file
            $uploadFolder = WWW_ROOT . 'userimages';  // path where the uploaded file has to be saved

            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            $filename = $this->request->data['user_email'] . "." .$ext; // adding time stamp for the uploaded image for uniqueness
            $uploadPath = $uploadFolder . DS . $filename;
            //                    echo $uploadPath;die;
            if (!file_exists($uploadFolder)) {
                mkdir($uploadFolder); // creates folder if  not found
            }
            if (!move_uploaded_file($uploadData['tmp_name'], $uploadPath)) {
                $this->redirect('../User/user_profile');
            }
            if ($this->User->updateAll(array('txt_name' => "'$userName'", 'txt_gender' => "'$gender'", 'txt_mobile' => "'$userMobile'" ,'txt_address' => "'$userAddress'",
                                'txt_country' => "'$country'", 'txt_state' => "'$state'", 'txt_city' => "'$city'", 'nbr_pincode' => "'$pincode'",'txt_image_path'=>"'$filename'"), array('nbr_user_id' => $userId))) {

                $this->Session->write('message', 'Your profile successfully updated.');
                CakeLog::write('info', 'User profile successfully updated.');
                $this->redirect('../User/user_profile');
            } else {
                $this->Session->write('message', 'Your profile not updated.');
                CakeLog::write('info', 'User profile not updated.');
                $this->redirect('../User/user_profile');
            }
        }else{
            if ($this->User->updateAll(array('txt_name' => "'$userName'", 'txt_gender' => "'$gender'", 'txt_mobile' => "'$userMobile'" ,'txt_address' => "'$userAddress'",
                    'txt_country' => "'$country'", 'txt_state' => "'$state'", 'txt_city' => "'$city'", 'nbr_pincode' => "'$pincode'"), array('nbr_user_id' => $userId))) {
                $this->Session->write('message', 'Your profile updated successful');
                CakeLog::write('info', 'User profile successfully updated.');
                $this->redirect('../User/user_profile');
            } else {
                $this->Session->write('message', 'Your profile not updated');
                CakeLog::write('info', 'User profile not updated.');
                $this->redirect('../User/user_profile');
            }
        } $this->redirect('../User/user_profile');
    }

    /* Display change password page */
    public function change_password() {
        $this->layout = '';
        CakeLog::write('info', 'In UserController,change_password()');
        $this->loadModel('User');
        $sessionEmail = CakeSession::read('session_email');
        $userInfo = $this->User->find('first', array(
            'conditions' => array('User.txt_email' => $sessionEmail)));
        $this->set('userInfo', $userInfo);
    }

    /* post change password */
    public function changePassword() {
        CakeLog::write('info', 'In UserController,changePassword()');
        $this->loadModel('User');        
        $userId = trim($this->request->data['user_id']);
        $password = trim($this->request->data['password']);
        $cpassword = trim($this->request->data['c_password']);
        $encrypted_password = base64_encode($password);
        if ($password == $cpassword) {
            if ($this->User->updateAll(array('txt_pswd' => "'$encrypted_password'"), array('nbr_user_id' => $userId))) {
                $this->Session->write('pcmessage', 'Password successfully changed.');
                CakeLog::write('info', 'Password successfully changed.');
                $this->redirect('../User/change_password');
            } else {
                $this->Session->write('pcmessage', 'Password not changed.');
                CakeLog::write('info', 'Password not changed.');
                $this->redirect('../User/change_password');
            }
        } else {
            $this->Session->write('pcmessage', 'Password and Confirm pasword is different');
            CakeLog::write('info', 'Password and Confirm pasword is different.');
            $this->redirect('../User/change_password');
        }
    }

    /* Join Group */
    public function joinGroup() {
        CakeLog::write('info', 'In UserController,joinGroup()');
        $this->loadModel('Request');
        $this->loadModel('Group');
        $result = $this->request->data;
        $error = $this->Request->validation($result);

        if ($error === '') {
            $session_user_id = CakeSession::read('session_id');
            $group_id = trim($this->request->data['group_id']);

            $groupInfo = $this->Group->find('first', array(
                'conditions' => array('Group.nbr_group_id' => $group_id)));

            $group_status = $groupInfo['Group']['nbr_group_type_id'];
            if($group_status == 1){
                $status = 'Accepted';
            }else{
                $status = 'Pending';
            }
            if (!empty($result)) {
                if ($this->Request->save(array('nbr_user_id' => $session_user_id,
                            'nbr_group_id' => $group_id,'txt_status' => $status))) {
                    $this->Session->write('message', 'Request has been sent.');
                    CakeLog::write('info', 'Request has been sent');
                    $this->redirect('../User/user_profile');
                } else {
                    $this->Session->write('message', 'Please resend request.');
                    $this->Session->write('message', 'Please resend sent.');
                    $this->redirect('../User/user_profile');
                }
            }
        } else {
            $this->Session->setFlash($error);
        }
    }
    public function inviteUsers(){
        $this->layout = '';
        CakeLog::write('info', 'In UserController,inviteUsers()');
        $email = trim($this->request->data['email']);
        if (!empty($email)) {

            $subject = 'IdeaClicks Invitation Email';
            $message =  "Welcome to IdeaClicks !\n\r" .
                        "You are being invited by a friend to join http://IdeaClicks.in/User/user_registration\n\r".
                        "Happy innovation !"."\n\rTeam IdeaClicks.";

            $this->sendEmail($email,$subject,$message);
            $this->Session->write('msg', 'Invitation email has been sent.');
            CakeLog::write('info', 'Invitation email has been sent.');
            $this->redirect('/User/user_profile');
        }
    }

    //Email Configuration and send email function
    public function sendEmail($email,$subject,$message){
        CakeLog::write('info', 'In UserController,sendEmail()');
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
        CakeLog::write('info', 'In UserController,Email has been Send');
    }

    //Delete user profile
    public function deleteProfile(){
        CakeLog::write('info', 'In UserController,deleteProfile()');
        $this->loadModel('User');
        $this->loadModel('Group');
        $this->loadModel('Category');
        $this->loadModel('Request');
        $this->loadModel('IdeaModel');
        //session
        $session_user_id = CakeSession::read('session_id');
        $usersIdeas = $this->IdeaModel->query("SELECT * FROM `idea` where nbr_submitter_id = ".$session_user_id);
        //echo '<pre>';print_r($usersIdeas);die();
        if(!empty($usersIdeas))
        {
            //move ideas from ideas table to arch_mst_idea table
            $this->IdeaModel->query("INSERT INTO `nbr_idea_id`, `nbr_submitter_id`, `nbr_group_id`, `nbr_campaign_id`, `txt_title`, `txt_description`, `nbr_category_id`,
            `idea_status`, `dat_submitted`, `dat_modified`, `nbr_like_count`, `nbr_dislike_count`, `bol_confidential`, `nbr_star_rating`)
                                SELECT * FROM `mst_idea` where nbr_submitter_id = ".$session_user_id);
            $this->IdeaModel->query("DELETE FROM `mst_idea` where nbr_submitter_id =".$session_user_id);
        }
        $usersJoinedGroups = $this->Request->query("select * from user_request_dtls where nbr_user_id =".$session_user_id);
        if(!empty($usersJoinedGroups)){
            //Delete joined group from user_request_dtls table.
            $this->Request->query("delete from user_request_dtls where nbr_user_id =".$session_user_id);
        }
        $createdGroupsByUser = $this->Group->query("Select nbr_group_id from mst_group where nbr_owner_id =".$session_user_id);
        if(!empty($createdGroupsByUser)){
            //Delete group catgories .first to findout group_id where user_id is logged in user id
            $result = $this->Group->query("Select nbr_group_id from mst_group where nbr_owner_id =".$session_user_id);
            if(!empty($result)){
                $inClausStr = '(';
                if ($result) {
                    foreach ($result AS $val) {
                        $inClausStr.="'" . trim($val['mst_group']['nbr_group_id']) . "',";
                    }
                } else {
                    $inClausStr.="''";
                }
                $inClausStr = trim($inClausStr, ",");
                $inClausStr.=')';

                //Delete group_categories
                $this->Category->query("Delete from category_group_trans where nbr_group_id IN".$inClausStr);
            }
            //Delete created groups
            $this->Group->query("Delete from mst_group where nbr_owner_id =".$session_user_id);
        }


        //delete user profile from mst_user table
        $this->Request->query("delete from mst_user where nbr_user_id =".$session_user_id);

        $this->redirect('../');
    }
    // Display selected join group information.
    public function displaySelectedJoinGroupInfo(){
        CakeLog::write('info', 'In UserController,displaySelectedJoinGroupInfo()');
        $this->layout = 'ajax';
        $this->loadModel('Group');
        $groupId = $_POST['groupId'];
        $displaySelectedgroupInfo = $this->Group->query("Select * from mst_group GD
                                                Join mst_user UD ON GD.nbr_owner_id = UD.nbr_user_id
                                                Join mst_group_class GC ON GD.nbr_group_class_id = GC.nbr_group_class_id
                                                Join mst_group_type GT ON GD.nbr_group_type_id = GT.nbr_group_type_id
                                                where GD.nbr_group_id = $groupId");

        $this->set('displaySelectedgroupInfo', $displaySelectedgroupInfo);

        //count no of ideas
        $this->loadModel('Idea');
        $Total_Ideas = $this->Idea->find('all', array(
            'conditions' => array('nbr_group_id' => $groupId)));
        $count = sizeof($Total_Ideas);
        $this->set('TotalIdeas', $count);
    }
}?>