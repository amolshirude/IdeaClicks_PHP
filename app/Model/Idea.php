<?php
class Idea extends AppModel{
    var $name='Idea';
    public $useDbConfig ='test';
    var $useTable = 'mst_idea';

    function validation($data) {
        $errorString = '';
        if ($this->isEmpty(trim($data['idea_title'])) == '') {
            $errorString.='<li>Invalid idea title.</li>';
        }
        if ($this->isEmpty(trim($data['idea_description'])) == '') {
            $errorString.='<li>Invalid idea description.</li>';
        }
        if ($this->isEmpty(trim($data['category_id'])) == '') {
            $errorString.='<li>Invalid idea category.</li>';
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

    public function blackListingCharactersNotAllowed($check) {
        echo 'In blackListingCharactersNotAllowed';
        $pattern = "/^[%/']+$/";
        $result = preg_match($pattern, $check);
        return $result;
    }
}?>
