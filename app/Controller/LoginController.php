<?php
App::uses('AppController', 'Controller');
App::uses('Security', 'Utility');

class loginController extends AppController {

    public function home() {
        $this->layout = '';
        CakeSession::delete('session_id');
        CakeSession::delete('session_name');
        CakeSession::delete('session_email');
        CakeSession::delete('session_code');

        CakeLog::write('info', 'In LoginController,home()');

        $this->loadModel('SiteVisits');
        $visit_counter_info = $this->SiteVisits->find('first');
        $visit_counter = $visit_counter_info['SiteVisits']['nbr_counter'];
        $visit_counter++;
        $this->SiteVisits->updateAll(array('nbr_counter' => "'$visit_counter'"));
        $this->set('visit_counter',$visit_counter);
        CakeLog::write('info', 'Visit Counter : '. $visit_counter);
        //Set campaign is active or inactive
        date_default_timezone_set('Asia/Kolkata');
        $current_date = date("Y-m-d");
        $this->loadModel('Campaign');
        $campains = $this->Campaign->find('all');
        foreach($campains As $row){
            if($row['Campaign']['dat_end_date']<$current_date){
                $this->Campaign->updateAll(array('nbr_campaign_status' => "'2'"),array('nbr_campaign_id'=>$row['Campaign']['nbr_campaign_id']));
            }
        }
        foreach($campains As $row){
            if($row['Campaign']['dat_start_date'] >=$current_date){
                $this->Campaign->updateAll(array('nbr_campaign_status_id' => "'1'"),array('nbr_campaign_id'=>$row['Campaign']['nbr_campaign_id']));
            }
        }

        //No of Active Groups
        $this->loadModel('Group');
        $active_groups = $this->Group->find('all');
        $count = sizeof($active_groups);
        $this->set('activeGroups', $count);
        //No of Active Users
        $this->loadModel('User');
        $active_users = $this->User->find('all');
        $count = sizeof($active_users);
        $this->set('activeUsers', $count);
    }

    public function postLogin() {
        $this->loadModel('User');
        //admin send request to user with its url parameter group_id and random_no
        $group_id = trim($this->request->data['group_id']);
        $random_no = trim($this->request->data['random_no']);

        $email = trim($this->request->data['email']);
        $password = base64_encode(trim($this->request->data['password']));
        $opts = array(
                'conditions' => array(
                        'and' => array(
                            'User.txt_email' => $email,
                            'User.txt_pswd' => $password)));
        $userInfo = $this->User->find('first', $opts);
        if ($userInfo) {
            CakeLog::write('info', '.....Login successfully...');
            //session
            CakeSession::write('session_id', $userInfo['User']['nbr_user_id']);
            CakeSession::write('session_name', $userInfo['User']['txt_name']);
            CakeSession::write('session_email', $userInfo['User']['txt_email']);
            CakeLog::write('info', ' Session values are Session User Id : '.$userInfo['User']['nbr_user_id'].
                                    ' Session User Name : '.$userInfo['User']['txt_name'].
                                    ' Session User Email : '.$userInfo['User']['txt_email']);
            //When admin send request to user if user not registered then user register to self and
            //directly join to the admin requested group by using URL parameter group Id and random number.
            if(!empty($group_id)&&!empty($random_no)){
                $this->Request($group_id,$random_no,$email);
                //delete session values
                CakeSession::delete('group_id');
                CakeSession::delete('random_no');
            }
            $this->redirect('../Ideas/view_ideas');
        }else {
            CakeLog::write('info', '.....Invalid username or password...');
            $this->Session->write('login_message', 'Invalid username or password');
            $this->redirect('../');
        }
    }

    public function Request($group_id,$random_no,$email){
        //session
        $user_id = CakeSession::read('session_id');
        $user_name = CakeSession::read('session_name');
        $user_email = CakeSession::read('session_email');

        $this->loadModel('Invitation');
        $condition = array(
                'conditions' => array(
                'and' => array(
                'Invitation.nbr_group_id' => $group_id,
                'Invitation.nbr_random_no' => $random_no)));
        $result3 = $this->Invitation->find('first', $condition);
        if(!empty($result3)){
            $this->loadModel('Request');
            $this->Request->save(array('nbr_user_id' => $user_id,'nbr_group_id' => $group_id,'txt_status' => 'Accepted'));
            $this->Invitation->query("DELETE FROM `mst_user_invitation` WHERE nbr_group_id = '$group_id' and nbr_random_no = '$random_no' ");
            //delete session values
            CakeLog::write('info', 'I have joined the group and its group id is : '.$group_id);
            CakeSession::delete('group_id');
            CakeSession::delete('random_no');
        }
    }
}?>