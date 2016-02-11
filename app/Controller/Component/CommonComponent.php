<?php

App::uses('Component', 'Controller');

class CommonComponent extends Component {

    public function test() {
        return "HELLO WORLD!!!";
    }

    //Component from Udise DB
    public function SelectNatureAppointment() {  //Nature Of Oppointment Regulat contract part-time
        $this->SelectNatureAppointment = ClassRegistry::init('SelectNatureAppointment');
        $SelectedNatureAppointment = $this->SelectNatureAppointment->find('list', array('fields' => array('tchappstatus_id', 'tchappstatus_desc')));
        return $SelectedNatureAppointment;
    }

    //Component from Teacher DB
    public function SelectNatureAppointmentTech() {  //Nature Of Oppointment Regulat contract part-time
        $this->SelectNatureAppointmentTech = ClassRegistry::init('SelectNatureAppointmentTech');
        $SelectNatureAppointmentTech = $this->SelectNatureAppointmentTech->find('list', array('fields' => array('tchappstatus_id', 'tchappstatus_desc')));

        return $SelectNatureAppointmentTech;
    }

    //Component from Udise DB
    public function SelectCategory() { // Social Category SC ST OBC etc
        $this->SelectCategory = ClassRegistry::init('SelectCategory');
        $SelectedCategory = $this->SelectCategory->find('list', array('fields' => array('tchcat_id', 'tchcat_desc')));
        return $SelectedCategory;
    }

    //Component from Teacher DB
//    public function SelectCategoryTech() { // Social Category SC ST OBC etc
//        $this->SelectCategoryTech = ClassRegistry::init('SelectCategoryTech');
//        $SelectCategoryTech = $this->SelectCategoryTech->find('list', array('fields' => array('tchcat_id', 'tchcat_desc')));
//        return $SelectCategoryTech;
//    }
//    Component from Teacher DB
    public function SelectTchrPost() { // //Type of Teacher from Teacher DB hm,ass hm,etc
        $this->SelectTchrPost = ClassRegistry::init('SelectTchrPost');
        $SelectTchrPost = $this->SelectTchrPost->find('list', array('conditions' => array('post_type' => '1'), 'fields' => array('post_id', 'post_desc'), 'order' => array('post_desc', 'post_desc DESC')));
        return $SelectTchrPost;
    }

    public function SelectNonTchrPost() { // //Type of Teacher from Teacher DB hm,ass hm,etc
        $this->SelectTchrPost = ClassRegistry::init('SelectTchrPost');
        $SelectNonTchrPost = $this->SelectTchrPost->find('list', array('conditions' => array('post_type' => '2'), 'fields' => array('post_id', 'post_desc'), 'order' => array('post_desc', 'post_desc DESC')));
        return $SelectNonTchrPost;
    }

    //Component From Udise 
    public function SelectReligion() {  //Religion
        $this->SelectReligion = ClassRegistry::init('SelectReligion');
        $SelectedReligion = $this->SelectReligion->find('list', array('fields' => array('tchreligion_id', 'tchreligion_desc'), 'order' => array('tchreligion_desc', 'tchreligion_desc DESC')));
        return $SelectedReligion;
    }

    //Component From Teacher
    public function SelectReligionTech() {  //Religion
        $this->SelectReligionTech = ClassRegistry::init('SelectReligionTech');
        $SelectReligionTech = $this->SelectReligionTech->find('list', array('fields' => array('tchreligion_id', 'tchreligion_desc'), 'order' => array('tchreligion_desc', 'tchreligion_desc DESC')));
        return $SelectReligionTech;
    }

    //Component From Udise
    public function SelectCaste() { //Caste
        $this->SelectCaste = ClassRegistry::init('SelectCaste');
        $SelectedCaste = $this->SelectCaste->find('list', array('fields' => array('tchcaste_id', 'tchcaste_desc')));
        return $SelectedCaste;
    }

    //Component From Teacher
    public function SelectCasteTech() { //Caste
        $this->SelectCasteTech = ClassRegistry::init('SelectCasteTech');
        $SelectCasteTech = $this->SelectCasteTech->find('list', array('fields' => array('tchcaste_id', 'tchcaste_desc')));
        return $SelectCasteTech;
    }

    //Component From Udise
    public function SelectClassTaught() {  //Class Taught  Primary,upp pri etc
        $this->SelectClassTaught = ClassRegistry::init('SelectClassTaught');
        $SelectedClassTaught = $this->SelectClassTaught->find('list', array('fields' => array('tchclstaught_id', 'tchclstaught_desc')));
        return $SelectedClassTaught;
    }

    //Component From Teacher
//    public function SelectClassTaughtTech() {  //Class Taught  Primary,upp pri etc
//        $this->SelectClassTaughtTech = ClassRegistry::init('SelectClassTaughtTech');
//        $SelectClassTaughtTech = $this->SelectClassTaughtTech->find('list', array('fields' => array('tchclstaught_id', 'tchclstaught_desc')));
//        return $SelectClassTaughtTech;
//    }

    //Component From Udise
    public function SelectSubjectTaught() {  //Class Taught
        $this->SelectSubjectTaught = ClassRegistry::init('SelectSubjectTaught');
        $SelectedSubjectTaught = $this->SelectSubjectTaught->find('list', array('fields' => array('tchsubtaught_id', 'tchsubtaught_desc'), 'order' => array('tchsubtaught_desc', 'tchsubtaught_desc DESC')));
        return $SelectedSubjectTaught;
    }

    //Component From Teacher
//    public function SelectSubjectTaughtTech() {  //Class Taught
//        $this->SelectSubjectTaughtTech = ClassRegistry::init('SelectSubjectTaughtTech');
//        $SelectSubjectTaughtTech = $this->SelectSubjectTaughtTech->find('list', array('fields' => array('tchsubtaught_id', 'tchsubtaught_desc'), 'order' => array('tchsubtaught_desc', 'tchsubtaught_desc DESC')));
//        return $SelectSubjectTaughtTech;
//    }

    //Component From Udise
    public function SelectDisabilityType() {
        $this->SelectDisabilityType = ClassRegistry::init('SelectDisabilityType');
        $SelectedDisabilityType = $this->SelectDisabilityType->find('list', array('fields' => array('tchdisabilitytype_id', 'tchdisabilitytype_desc')));
        return $SelectedDisabilityType;
    }

    //Component From Teacher
//    public function SelectDisabilityTypeTech() {
//        $this->SelectDisabilityTypeTech = ClassRegistry::init('SelectDisabilityTypeTech');
//        $SelectDisabilityTypeTech = $this->SelectDisabilityTypeTech->find('list', array('fields' => array('tchdisabilitytype_id', 'tchdisabilitytype_desc')));
//        return $SelectDisabilityTypeTech;
//    }
    //Component From Udise
    public function SelectAcadQual() { //Acad Qualification  below sec sec etc
        $this->SelectAcadQual = ClassRegistry::init('SelectAcadQual');
        $SelectedAcadQual = $this->SelectAcadQual->find('list', array('fields' => array('tchaqual_id', 'tchaqual_desc')));
        return $SelectedAcadQual;
    }

    //Component From Teacher
    public function SelectAcadQualTech() { //Acad Qualification  below sec sec etc
        $this->SelectAcadQualTech = ClassRegistry::init('SelectAcadQualTech');
        $SelectAcadQualTech = $this->SelectAcadQualTech->find('list', array('conditions' => array('tchaqual_type' => 'A'), 'fields' => array('tchaqual_id', 'tchaqual_desc')));
        return $SelectAcadQualTech;
    }

    //Component From Teacher
    public function SelectProfnalQualTech() { //Acad Qualification  below sec sec etc
        $this->SelectAcadQualTech = ClassRegistry::init('SelectAcadQualTech');
        $SelectProfnalQualTech = $this->SelectAcadQualTech->find('list', array('conditions' => array('tchaqual_type' => 'P'), 'fields' => array('tchaqual_id', 'tchaqual_desc')));
        return $SelectProfnalQualTech;
    }

    //Component From Udise
    public function SelectProfQual() { //Prof Qualification ded bed etc
        $this->SelectProfQual = ClassRegistry::init('SelectProfQual');
        $SelectedProfQual = $this->SelectProfQual->find('list', array('fields' => array('tchpqual_id', 'tchpqual_desc')));
        return $SelectedProfQual;
    }

    //Component From Teacher
    public function SelectProfQualTech() { //Prof Qualification ded bed etc
        $this->SelectProfQualTech = ClassRegistry::init('SelectProfQualTech');
        $SelectProfQualTech = $this->SelectProfQualTech->find('list', array('fields' => array('tchpqual_id', 'tchpqual_desc')));
        return $SelectProfQualTech;
    }

    //Component for Udise Form
    public function SelectTalukaComp($district_code) {
        $this->TalukaCensus = ClassRegistry::init('TalukaCensus');
        $taluka_census = $this->TalukaCensus->find('list', array('conditions' => array('TalukaCensus.district_code' => array($district_code)), 'fields' => array('taluka_code', 'taluka_name')));
        return $taluka_census;
    }

    //Component for Udise Form
    public function FindSchoolName($schcd) {
        $this->FindSchoolName = ClassRegistry::init('FindSchoolName');
        //$FindedSchoolName = $this->FindSchoolName->find('list', array('conditions' => array('schcode' => array($schcode)), 'fields' => array('schname')));
        $FindedSchoolName = $this->FindSchoolName->find('all', array('conditions' => array('schcd' => $schcd, 'ac_year' => '2014-15')));
        return $FindedSchoolName;
    }

    public function FindSchoolNameCluster($schcd) {
        $this->FindSchoolName = ClassRegistry::init('FindSchoolName');
        $FindedSchoolNameCluster = $this->FindSchoolName->find('list', array('conditions' => array('clucd' => array($schcd)), 'fields' => array('schcd', 'schname'), 'order' => array('schname', 'schname DESC')));
        return $FindedSchoolNameCluster;
    }

    public function Cddir() {
        $this->Cddir = ClassRegistry::init('Cddir');
        $Cddir = $this->Cddir->find('list', array('conditions' => array('code_type' => 'RG'), 'fields' => array('code_value', 'code_text')));
        return $Cddir;
    }

}
