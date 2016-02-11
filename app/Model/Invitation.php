<?php
class Invitation extends AppModel{
    var $name='Invitation';
    public $useDbConfig ='test';
    var $useTable = 'mst_user_invitation';

    function validation($data) {
        $errorString = '';
        if ($this->isEmpty(trim($data['email'])) == '') {
            $errorString.='<li>Invalid Email.</li>';
        }
        return $errorString;
    }
function isEmpty($check) {
        if ($check == '') {
            $result = 0;
        } else {
            $result = 1;
        }
        return $result;
    }
}?>