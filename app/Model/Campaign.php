<?php
class Campaign extends AppModel
{   
var $name='Campaign';
var $primaryKey = 'campaign_id'; 
var $foreignKey = 'group_id';
public $useDbConfig ='test';
var $useTable = 'mst_campaign';

function validation($data) {
        $errorString = '';
        if ($this->isEmpty(trim($data['campaign_name'])) == '') {
            $errorString.='<li>Invalid Campaign.</li>';
        }
         if ($this->isEmpty(trim($data['start_date'])) == '') {
            $errorString.='<li>Invalid start date.</li>';
        }
         if ($this->isEmpty(trim($data['end_date'])) == '') {
            $errorString.='<li>Invalid end date.</li>';
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
}
?>
