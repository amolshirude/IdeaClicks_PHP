<?php
class Category extends AppModel{   
    var $name='Category';
    public $useDbConfig ='test';
    var $useTable = 'mst_category';

    function validation($data) {
        $errorString = '';
        if ($this->isEmpty(trim($data['category_name'])) == '') {
            $errorString.='<li>Invalid Category.</li>';
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