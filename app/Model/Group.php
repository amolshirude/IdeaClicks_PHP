<?php

class Group extends AppModel
{

    var $name='Group';
    var $primaryKey='group_id';
    public $useDbConfig ='test';
    var $useTable = 'mst_group';


    function validation($data) {
        
        $errorString = '';

        if ($this->isEmpty(trim($data['group_name'])) == '') {
            $errorString.='<li>Invalid Group Name.</li>';
        }
        if ($this->isEmpty(trim($data['group_code'])) == '') {
            $errorString.='<li>Invalid Group Code.</li>';
        }
        if ($this->isEmpty(trim($data['group_class_id'])) == '') {
            $errorString.='<li>Invalid Group Class.</li>';
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