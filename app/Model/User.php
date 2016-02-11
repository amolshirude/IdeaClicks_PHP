<?php
class User extends AppModel{
    var $name='User';
    var $primaryKey = 'user_id';
    public $useDbConfig ='test';
    var $useTable = 'mst_user';

    function validation($data) {
        $errorString = '';

        if(isset($data)){
            if ($this->isEmpty(trim($data['user_name']))) {
                $errorString.='<li>Invalid name.</li>';
            }
            if ($this->isEmpty(trim($data['user_email']))) {
                $errorString.='<li>Invalid email.</li>';
            }
            if ($this->isEmpty(trim($data['password']))) {
                $errorString.='<li>Invalid password.</li>';
            }
            if ($this->isEmpty(trim($data['c_password']))) {
                $errorString.='<li>Invalid confirm password.</li>';
            }
        }
        //die();
        return $errorString;
    }

    function isEmpty($check) {
        if ($check == '') {
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }
}?>