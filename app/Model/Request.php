<?php
class Request extends AppModel{
    var $name='Request';
    public $useDbConfig ='test';
    var $useTable = 'user_request_dtls';

    function validation($data) {
        $errorString = '';
        if ($this->isEmpty(trim($data['group_id'])) == '') {
            $errorString.='<li>Invalid group name.</li>';
        }
        return $errorString;
    }
    function isEmpty($check) {
        //        echo "check==".$check;exit();
        if ($check == '') {
            $result = 0;
        } else {
            $result = 1;
        }
        return $result;
    }
}?>