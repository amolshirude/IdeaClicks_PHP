<?php
App::uses('AppController', 'Controller');
App::uses('CakeEmail', 'Network/Email');

class PasswordController extends AppController {
    var $components = array('Email');

    public function forgot_password() {
        $this->layout = '';
        CakeLog::write('info', 'In PasswordController,forgot_password()');
        $this->loadModel('Login');
    }

    public function forgotPassword() {
        $this->layout = '';
        CakeLog::write('info', 'In PasswordController,forgotPassword()');
        $email = trim($this->request->data['email']);
        $password = '';
        if (!empty($email)) {
            $this->loadModel('User');
            $userInfo = $this->User->find('first', array('conditions' => array('txt_email' => $email)));
            if ($userInfo) {
                $password = base64_decode($userInfo['User']['txt_pswd']);
            } else {
                $this->Session->write('forgot_pswd_msg', 'Invalid Email Id');
                $this->redirect('/Password/forgot_password');
            }

            $this->Email->smtpOptions = array(
                'port' => '587',
                'timeout' => '30',
                'host' => 'ideaclicks.in',
                'username' => 'innovation@ideaclicks.in',
                'password' => 'C204LaValle#',
                'client' => 'ideaclicks.in',
                'tls' => true
            );

            $message = "Welcome to IdeaClicks !\n\r" . "Your Password is :" . $password . "\n\rYou can login using this URL : " . "www.ideaclicks.in" . "\n\rHappy innovation !" . "\n\rTeam IdeaClicks.";
            $this->Email->delivery = 'smtp';
            $this->Email->from = 'innovation@ideaclicks.in';
            $this->Email->to = $email;
            $this->Email->subject = 'IdeaClicks : Your Password';
            $this->Email->send($message);
            $this->Session->write('forgot_pswd_msg', 'Email has been Send');
            CakeLog::write('info', 'In PasswordController,Email has been Send');
        }
    }
}?>