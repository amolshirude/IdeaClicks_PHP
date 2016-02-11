<?php
App::uses('ConnectionManager', 'Model');
App::uses('AppController', 'Controller');

class PagesController extends AppController {
    public function group_profile_page() {
        $this->layout = '';
        CakeLog::write('info', 'In PagesController,group_profile_page()');
        //session
        $session_user_id = CakeSession::read('session_id');
        if (empty($session_user_id)) {
            $this->redirect('../');
        }
        $group_id = trim($this->request->data['group_id']);
        $group_name = trim($this->request->data['group_name']);
        $user_status = trim($this->request->data['user_status']);
        $this->set('userStatus', $user_status);
        // display group admin profile
        $this->loadModel('Group');
        $groupInfo = $this->Group->query("Select * from mst_group GD
                                                Join mst_user UD ON GD.nbr_owner_id = UD.nbr_user_id
                                                Join mst_group_type GT ON GD.nbr_group_type_id = GT.nbr_group_type_id
                                                Join mst_group_class GC ON GD.nbr_group_class_id = GC.nbr_group_class_id
                                                where GD.nbr_group_id = $group_id");

        $this->set('groupInfo', $groupInfo);
        // display group categories
        $this->loadModel('Category');
        $groupcategories = $this->Category->query("select C.nbr_category_id , txt_category_name from category_group_trans CT
                                                   Join mst_category C ON CT.nbr_category_id = C.nbr_category_id
                                                   where CT.nbr_group_id = '$group_id' order by C.txt_category_name ASC");

        foreach ($groupcategories AS $value) {

            $db_category_id = trim($value['C']['nbr_category_id']);
            $db_category_name = trim($value['C']['txt_category_name']);
            $groupCateoriesList[$db_category_id] = $db_category_name;
        }
        if (!empty($groupCateoriesList)) {
            $this->set('groupCateoriesList', $groupCateoriesList);
        }
        // display group campaign
        $this->loadModel('Campaign');
        $groupcampaigns = $this->Campaign->find('all', array(
            'conditions' => array('Campaign.nbr_group_id' => $group_id)));
        $this->set('groupCampaignsList', $groupcampaigns);

        //count no of ideas
        $this->loadModel('Idea');
        $Total_Ideas = $this->Idea->find('all', array(
            'conditions' => array('nbr_group_id' => $group_id)));
        $count = sizeof($Total_Ideas);
        $this->set('TotalIdeas', $count);

        //count no of users
        $this->loadModel('Request');
        $condition = array(
            'conditions' => array(
                'and' => array(
                    'Request.nbr_group_id' => $group_id,
                    'Request.txt_status' => 'Accepted')));
        $totalUsers = $this->Request->find('all',$condition);
        $count = sizeof($totalUsers);
        $this->set('TotalUsers', $count);

        //Display user list who joined this group
        $userList = $this->Request->query("SELECT UD.txt_name from mst_user UD
                                                    join user_request_dtls JG ON JG.nbr_user_id = UD.nbr_user_id
                                                    where JG.nbr_group_id = $group_id and JG.txt_status = 'Accepted' order by UD.txt_name ASC");
        $this->set('userList',$userList);

        // display group categories
        $this->loadModel('Category');
        $groupCategoriesList = $this->Category->query("select C.nbr_category_id , txt_category_name from category_group_trans CT
                                                   Join mst_category C ON CT.nbr_category_id = C.nbr_category_id
                                                   where CT.nbr_group_id = '$group_id' order by C.txt_category_name asc");
        $this->set('groupCategoriesList', $groupCategoriesList);        

        /* display group categories idea count*/
        $this->loadModel('Category');
        $groupCategoriesIdeaCount = $this->Category->query("SELECT I.nbr_group_id, I.nbr_category_id, C.txt_category_name,count(I.nbr_category_id) As Idea_Count FROM mst_idea I
                                                        Join mst_category C ON C.nbr_category_id = I.nbr_category_id
                                                        group by I.nbr_category_id
                                                        having I.nbr_group_id = '$group_id' or I.nbr_group_id = '$group_id' and I.nbr_category_id = '0' order by C.txt_category_name asc");
        $this->set('groupCategoriesIdeaCount', $groupCategoriesIdeaCount);
        
        //display user profile image in header
        $this->loadModel('User');
        $userInfo = $this->User->find('first', array(
            'conditions' => array('User.nbr_user_id' => $session_user_id)));
        $this->set('userInfo', $userInfo);
    }
    public function leaveGroup(){
        $this->layout = '';
        CakeLog::write('info', 'In PagesController,leaveGroup()');
        $session_user_id = CakeSession::read('session_id');
        $group_id = trim($this->request->data['group_id']);
        //leave group
        $this->loadModel('Request');
        $this->Request->query("DELETE FROM `user_request_dtls` WHERE user_id = '$session_user_id' and group_id = '$group_id'");
        $this->redirect('../User/user_profile');
    }

    public function about_us() {
        $this->layout = '';
        CakeLog::write('info', 'In PagesController,about_us()');
    }

    public function contact_us() {
        $this->layout = '';
        CakeLog::write('info', 'In PagesController,contact_us()');
    }

    public function header1() {
        $this->layout = '';
        CakeLog::write('info', 'In PagesController,header1()');
    }

    public function footer() {
        $this->layout = '';
        CakeLog::write('info', 'In PagesController,footer()');
    }
    public function footer2() {
        $this->layout = '';
        CakeLog::write('info', 'In PagesController,footer2()');
    }

    /* display terms and condition page */
    public function termsandcondition() {
        $this->layout = '';
        CakeLog::write('info', 'In PagesController,termsandcondition()');
    }
}?>