<?php
App::uses('ConnectionManager', 'Model');
App::uses('AppController', 'Controller');

class IdeasController extends AppController {

    public function submit_idea() {
        $this->layout = '';
        CakeLog::write('info', 'In IdeasController, submit_idea()');
        $this->loadModel('Idea');

        /* display join group */
        $this->loadModel('Request');
        $session_user_id = CakeSession::read('session_id');

        if(empty($session_user_id)){
            $this->redirect('../');
            CakeLog::write('info', 'In IdeasController, submit_idea() ,Session expired');
        }

        /* display Joined group list on submit_mst_idea page */
        $userJoinedGroupList = $this->Request->query("select J.nbr_group_id ,txt_group_name
                                                        from user_request_dtls J
                                                        Join mst_group G ON J.nbr_group_id = G.nbr_group_id
                                                        where J.nbr_user_id = '$session_user_id' and J.txt_status = 'Accepted' or J.nbr_user_id = '$session_user_id' and J.txt_status = 'Owner' or J.nbr_request_id = 0 order by txt_group_name asc");

        $this->set('userJoinedGroupList', $userJoinedGroupList);
        CakeLog::write('info', 'In IdeasController, submit_idea() user joined group list'.print_r($userJoinedGroupList, true));
        //display user profile image in header
        $this->loadModel('User');
        $userInfo = $this->User->find('first', array(
            'conditions' => array('User.nbr_user_id' => $session_user_id)));
        $this->set('userInfo', $userInfo);
    }

    /* view mst_idea */
    public function view_Ideas() {
        $this->layout = '';
        CakeLog::write('info', 'In IdeasController, view_idea()');
        $this->loadModel('Idea');
        //session
        $session_user_id = CakeSession::read('session_id');
        $status = 'Accepted';
        if(empty($session_user_id)){
            $this->redirect('../');
            CakeLog::write('info', 'In IdeasController, view_idea() ,Session expired');
        }

        /* display Joined group list on view_Ideas page */
        $this->loadModel('Request');
        $userJoinedGroupList = $this->Request->query("select J.nbr_group_id ,txt_group_name
                                                        from user_request_dtls J
                                                        Join mst_group G ON J.nbr_group_id = G.nbr_group_id
                                                        where J.nbr_user_id = '$session_user_id' and J.txt_status = 'Accepted' or J.nbr_user_id = '$session_user_id' and J.txt_status = 'Owner' or J.nbr_request_id = 0 order by txt_group_name asc");

        $this->set('userJoinedGroupList', $userJoinedGroupList);
        $inClausStr = '(';
        if ($userJoinedGroupList) {
            foreach ($userJoinedGroupList AS $val) {
                $inClausStr.="'" . trim($val['J']['nbr_group_id']) . "',";
            }
        } else {
            $inClausStr.="''";
        }

        $inClausStr = trim($inClausStr, ",");
        $inClausStr.=')';
        $this->loadModel('Category');

        $groupCategoriesList1 = $this->Category->query("select DISTINCT C.nbr_category_id , txt_category_name from category_group_trans CT
                                                   Join mst_category C ON CT.nbr_category_id = C.nbr_category_id
                                                   where CT.nbr_group_id IN " .$inClausStr. " or CT.nbr_group_id = 0 order by C.txt_category_name asc");

        $this->set('groupCategoriesList1', $groupCategoriesList1);

        $allIdeas = $this->Idea->query("select `nbr_idea_id`,`txt_title`,`txt_description`,`nbr_like_count`,`nbr_dislike_count`,`txt_category_name`,`txt_email`,`txt_group_name`,`txt_campaign_name`
                                             from `mst_idea` I
                                             Join `mst_user` U ON I.`nbr_submitter_id` = U.`nbr_user_id`
                                             Join `mst_campaign` CAMP ON I.`nbr_campaign_id` = CAMP.`nbr_campaign_id`
                                             Join `mst_group` G ON I.`nbr_group_id` = G.`nbr_group_id`
                                             Join `mst_category` C ON I.`nbr_category_id` = C.`nbr_category_id`
                                             where I.`nbr_group_id` IN ".$inClausStr." or I.`nbr_group_id` = 0 ORDER BY I.`nbr_idea_id` DESC");

        $this->set('allIdeas', $allIdeas);

        //display user profile image in header
        $this->loadModel('User');
        $userInfo = $this->User->find('first', array(
            'conditions' => array('User.nbr_user_id' => $session_user_id)));
        $this->set('userInfo', $userInfo);
    }

    /* like dislike and comments on idea */
    public function like_dislike_comment() {
        $this->layout = '';
        CakeLog::write('info', 'In IdeasController, like_dislike_comment()');
        $this->loadModel('Idea');
        $this->loadModel('Comment');
        $this->loadModel('User');
        $session_user_id = CakeSession::read('session_id');
        if(empty($session_user_id)){
            $this->redirect('../');
            CakeLog::write('info', 'In IdeasController, like_dislike_comment() ,Session expired');
        }
        $id = $this->request->data['idea_id_a'];
        if (!empty($id)) {
            $idea = $this->Idea->query("select `nbr_idea_id`,`txt_title`,`txt_description`,`nbr_like_count`,`nbr_dislike_count`,`txt_category_name`,`txt_email`,G.`nbr_owner_id`,`txt_group_name`,`txt_campaign_name`
                                             from `mst_idea` I
                                             Join `mst_user` U ON I.`nbr_submitter_id` = U.`nbr_user_id`
                                             Join `mst_campaign` CAMP ON I.`nbr_campaign_id` = CAMP.`nbr_campaign_id`
                                             Join `mst_group` G ON I.`nbr_group_id` = G.`nbr_group_id`
                                             Join `mst_category` C ON I.`nbr_category_id` = C.`nbr_category_id`
                            where I.`nbr_idea_id` = '$id' ");
                            
            $this->set('Idea', $idea);
        }
        //set session email for edit idea option for user
        $this->set('session_email',CakeSession::read('session_email'));
        $this->set('session_user_id',CakeSession::read('session_id'));
        // display all comments
        $commentList = $this->Comment->find('all', array(
            'conditions' => array('nbr_parent_idea_id' => $id)));
        $this->set('comments', $commentList);
        //display user profile image in header
        $userInfo = $this->User->find('first', array(
            'conditions' => array('User.nbr_user_id' => $session_user_id)));
        $this->set('userInfo', $userInfo);
    }

    /* Like idea */
    public function like_idea() {
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, like_idea()');
        $idea_id = $_POST['ideaId'];
        $like_count = $_POST['likeCount'];
        $dislike_count = $_POST['dislikeCount'];
        $this->loadModel('IdeaOpinion');
        $this->loadModel('Idea');

        $session_userId = CakeSession::read('session_id');
        date_default_timezone_set('Asia/Kolkata');
        $current_date = date("Y-m-d H:i:s");
        $opts = array(
            'conditions' => array(
                'and' => array(
                    'IdeaOpinion.nbr_user_id' => $session_userId,
                    'IdeaOpinion.nbr_idea_id' => $idea_id)));

        $getIdeaOpinionFromDb = $this->IdeaOpinion->find('first', $opts);
        if (!empty($getIdeaOpinionFromDb)) {
            if ($getIdeaOpinionFromDb['IdeaOpinion']['bol_opinion']) {

            } else {

                $this->IdeaOpinion->updateAll(array('bol_opinion' => 1), array('AND' => array('IdeaOpinion.nbr_user_id' => $session_userId,
                        'IdeaOpinion.nbr_idea_id' => $idea_id)));
                $like_count++; $dislike_count--;
                $this->Idea->updateAll(array('nbr_like_count' => $like_count,'nbr_dislike_count' => $dislike_count,'dat_modified'=> "'$current_date'"), array('nbr_idea_id' => $idea_id));
            }
        } else {
            $like_count++;
            $this->IdeaOpinion->save(array('nbr_user_id' => $session_userId, 'nbr_idea_id' => $idea_id,
                'bol_opinion' => 1));
            $this->Idea->updateAll(array('nbr_like_count' => $like_count,'dat_modified'=> "'$current_date'"), array('nbr_idea_id' => $idea_id));
        }
       /* display request accepted group mst_idea */
        $this->displayAllIdeas();
    }

    /* Dislike idea */
    public function dislike_idea() {
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, dislike_idea()');
        $idea_id = $_POST['ideaId'];
        $like_count = $_POST['likeCount'];
        $dislike_count = $_POST['dislikeCount'];

        $this->loadModel('IdeaOpinion');
        $this->loadModel('Idea');

        $session_userId = CakeSession::read('session_id');

        $opts = array(
            'conditions' => array(
                'and' => array(
                    'IdeaOpinion.nbr_user_id' => $session_userId,
                    'IdeaOpinion.nbr_idea_id' => $idea_id)));

        $getIdeaOpinionFromDb = $this->IdeaOpinion->find('first', $opts);
        if (!empty($getIdeaOpinionFromDb)) {
            if ($getIdeaOpinionFromDb['IdeaOpinion']['bol_opinion']) {

                $this->IdeaOpinion->updateAll(array('bol_opinion' => 0), array('AND' => array('IdeaOpinion.nbr_user_id' => $session_userId,
                        'IdeaOpinion.nbr_idea_id' => $idea_id)));
                $like_count--; $dislike_count++;
                $this->Idea->updateAll(array('nbr_dislike_count' => $dislike_count,'nbr_like_count' =>$like_count), array('nbr_idea_id' => $idea_id));
            }
        } else {
            $this->IdeaOpinion->save(array('nbr_user_id' => $session_userId, 'nbr_idea_id' => $idea_id,
                'bol_opinion' => 0));
            $dislike_count++;
            $this->Idea->updateAll(array('nbr_dislike_count' => $dislike_count), array('nbr_idea_id' => $idea_id));
        }
        /* display request accepted group mst_idea */
        $this->displayAllIdeas();
    }

    public function like_single_idea(){
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, like_single_idea()');
        $idea_id = $_POST['ideaId'];
        $like_count = $_POST['likeCount'];
        $dislike_count = $_POST['dislikeCount'];
        $this->loadModel('IdeaOpinion');
        $this->loadModel('Idea');

        $session_userId = CakeSession::read('session_id');

        $opts = array(
            'conditions' => array(
                'and' => array(
                    'IdeaOpinion.nbr_user_id' => $session_userId,
                    'IdeaOpinion.nbr_idea_id' => $idea_id)));

        $getIdeaOpinionFromDb = $this->IdeaOpinion->find('first', $opts);
        if (!empty($getIdeaOpinionFromDb)) {
            if ($getIdeaOpinionFromDb['IdeaOpinion']['bol_opinion']) {

            } else {

                $this->IdeaOpinion->updateAll(array('bol_opinion' => 1), array('AND' => array('IdeaOpinion.nbr_user_id' => $session_userId,
                        'IdeaOpinion.nbr_idea_id' => $idea_id)));
                $like_count++; $dislike_count--;
                $this->Idea->updateAll(array('like_count' => $like_count,'dislike_count' => $dislike_count), array('idea_id' => $idea_id));

            }
        } else {
            $like_count++;
            $this->IdeaOpinion->save(array('user_id' => $session_userId, 'idea_id' => $idea_id,
                'bol_opinion' => 1));
            $this->Idea->updateAll(array('like_count' => $like_count), array('idea_id' => $idea_id));
        }
        $this->set('likes',$like_count);
        $this->set('dislikes',$dislike_count);
    }
    public function dislike_single_idea(){
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, dislike_single_idea()');
        $idea_id = $_POST['ideaId'];
        $like_count = $_POST['likeCount'];
        $dislike_count = $_POST['dislikeCount'];

        $this->loadModel('IdeaOpinion');
        $this->loadModel('Idea');

        $session_userId = CakeSession::read('session_id');

        $opts = array(
            'conditions' => array(
                'and' => array(
                    'IdeaOpinion.nbr_user_id' => $session_userId,
                    'IdeaOpinion.nbr_idea_id' => $idea_id)));

        $getIdeaOpinionFromDb = $this->IdeaOpinion->find('first', $opts);
        if (!empty($getIdeaOpinionFromDb)) {
            if ($getIdeaOpinionFromDb['IdeaOpinion']['bol_opinion']) {

                $this->IdeaOpinion->updateAll(array('bol_opinion' => 0), array('AND' => array('IdeaOpinion.nbr_user_id' => $session_userId,
                        'IdeaOpinion.nbr_idea_id' => $idea_id)));
                $like_count--; $dislike_count++;
                $this->Idea->updateAll(array('nbr_dislike_count' => $dislike_count,'nbr_like_count' =>$like_count), array('nbr_idea_id' => $idea_id));
            }
        } else {
            $this->IdeaOpinion->save(array('nbr_user_id' => $session_userId, 'nbr_idea_id' => $idea_id,
                'bol_opinion' => 0));
            $dislike_count++;
            $this->Idea->updateAll(array('nbr_dislike_count' => $dislike_count), array('nbr_idea_id' => $idea_id));
        }
        $this->set('likes',$like_count);
        $this->set('dislikes',$dislike_count);
    }

    /* Save comment */
    public function comment() {
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, comment()');
        $this->loadModel('Comment');
        $this->loadModel('Idea');
        $commentText = trim($_POST['commentText']);
        $parentCommentId = $_POST['commentId'];
        $ideaId = trim($_POST['ideaId']);
        $sessionUserName = CakeSession::read('session_name');
        $sessionUserId = CakeSession::read('session_id');
        date_default_timezone_set('Asia/Kolkata');
        $current_date = date("Y-m-d H:i:s");

        if(!empty($commentText)&&!empty($ideaId)){
            $this->Comment->save(array('comment_text' => $commentText,
            'nbr_parent_comment_id' => $parentCommentId, 'nbr_idea_id' => $ideaId, 'nbr_submitter_id' => $sessionUserId));
            $this->Idea->updateAll(array('dat_modified'=> "'$current_date'"), array('nbr_idea_id' => $ideaId));
        }
        $commentList = $this->Comment->find('all', array(
            'conditions' => array('nbr_idea_id' => $ideaId)));
        $this->set('comments', $commentList);
    }

    /* edit idea */
    public function edit_idea() {
        $this->layout = '';
        CakeLog::write('info', 'In IdeasController, edit_idea()');
        $this->loadModel('Idea');
        $session_user_id = CakeSession::read('session_id');
        $id = trim($this->request->data['idea_id']);
        $idea = $this->Idea->query("select `nbr_idea_id`,`txt_title`,`txt_description`,I.`nbr_category_id`,`txt_category_name`,I.`nbr_group_id`,`txt_group_name`
                                             from `mst_idea` I
                                             Join `mst_group` G ON I.`nbr_group_id` = G.`nbr_group_id`
                                             Join `mst_category` C ON I.`nbr_category_id` = C.`nbr_category_id`
                                             where I.`nbr_idea_id` = '$id'");

        $this->set('Idea', $idea);

        /* display Joined group list on view_Ideas page */
        $this->loadModel('Request');
        $userJoinedGroupList = $this->Request->query("select J.nbr_group_id ,txt_group_name
                                                        from user_request_dtls J
                                                        Join mst_group G ON J.nbr_group_id = G.nbr_group_id
                                                        where J.nbr_user_id = '$session_user_id' and J.txt_status = 'Accepted' or J.nbr_user_id = '$session_user_id' and J.txt_status = 'Owner' or J.nbr_request_id = 0 order by txt_group_name asc");

        $this->set('userJoinedGroupList', $userJoinedGroupList);
        //display user profile image in header
        $this->loadModel('User');
        $userInfo = $this->User->find('first', array(
            'conditions' => array('User.nbr_user_id' => $session_user_id)));
        $this->set('userInfo', $userInfo);
    }

    /* edit idea */
    public function editIdea() {
        $this->layout = '';
        CakeLog::write('info', 'In IdeasController, editIdea()');
        $this->loadModel('Idea');
        $result = $this->request->data;
        $error = $this->Idea->validation($result);

        if ($error === '') {
            $idea_id = trim($this->request->data['idea_id']);
            $title = trim($this->request->data['idea_title']);
            $description = trim($this->request->data['idea_description']);
            $campaign_id = trim($this->request->data['selected_campaign']);
            $group_id = trim($this->request->data['group_id']);
            $category_id = trim($this->request->data['category_id']);
            date_default_timezone_set('Asia/Kolkata');
            $current_date = date("Y-m-d H:i:s");

            //        $status = trim($this->request->data['idea_status']);
            //        if ($status == '') {
            //            $status = "public";
            //        }

            $Result = $this->Idea->query("UPDATE `mst_idea` SET `nbr_group_id` = '$group_id', `nbr_campaign_id` = '$campaign_id', `txt_title` = '$title', `txt_description` = '$description',
                            `nbr_category_id` = '$category_id', `dat_modified` = '$current_date' WHERE `nbr_idea_id` = '$idea_id' ");
            if ($Result){
                //$this->Session->write('message', 'Your Idea not updated');
                CakeLog::write('info', 'Your Idea not updated');
                $this->redirect('../mst_idea/edit_idea');
            } else {
                //$this->Session->write('message', 'Your Idea updated successfully');
                CakeLog::write('info', 'Your Idea updated successfully');
                $this->redirect('../mst_idea/view_ideas');
            }
        } else {
            $this->Session->setFlash($error);
            $this->edit_idea();
        }
    }

    /* Post submit Idea */
    public function submitIdea() {
        $this->layout = '';
        CakeLog::write('info', 'In IdeasController, submitIdea()');
        $this->loadModel('Idea');
        $result = $this->request->data;
        $error = $this->Idea->validation($result);

        if ($error === '') {
            $session_user_id = CakeSession::read('session_id');
            $group_id = trim($this->request->data['group_id']);
            $title = trim($this->request->data['idea_title']);
            $description = trim($this->request->data['idea_description']);
            $campaign_id = trim($this->request->data['selected_campaign']);
            $category_id = trim($this->request->data['category_id']);
            date_default_timezone_set('Asia/Kolkata');
            $current_date = date("Y-m-d H:i:s");
            $status = 'public';

            if (!empty($result)) {
                if ($this->Idea->save(array('nbr_submitter_id' => $session_user_id,'nbr_group_id' => $group_id,'nbr_campaign_id' => $campaign_id,
                            'txt_title' => $title,'txt_description' => $description, 'nbr_category_id' => $category_id,
                            'txt_status' => $status,'dat_submitted' => $current_date,'dat_modified' => $current_date))) {
                    CakeLog::write('info', 'Idea Submitted');
                    $this->redirect('../mst_idea/view_ideas');
                } else {
                    CakeLog::write('info', 'Idea not submitted');
                    $this->redirect('../mst_idea/submit_mst_idea');
                }
            }
        } else {
            $this->Session->setFlash($error);
            CakeLog::write('info', $error);
            $this->submit_idea();
        }
    }

    /* filter Idea */
    public function filter_ideas() {
        $this->layout = '';
        CakeLog::write('info', 'In IdeasController, filterIdea()');
        $this->loadModel('Idea');
        $category_id = trim($this->request->data['category_name']);
        if(!empty($category_id)){
            $category_id = trim($this->request->data['category_name']);
        }
        $session_user_id = CakeSession::read('session_id');

        /* display request accepted group mst_idea */

        $this->loadModel('Request');
        $status = "Accepted";
        //find group name which is belongs to user id
        $condition1 = array(
            'conditions' => array(
                'and' => array(
                    'Request.nbr_user_id' => $session_user_id,
                    'Request.txt_status' => $status)));

        $userJoinedGroupList = $this->Request->find('all', $condition1);

        $inClausStr = '(';

        if ($userJoinedGroupList) {
            foreach ($userJoinedGroupList AS $val) {
                $inClausStr.="'" . trim($val['Request']['nbr_group_id']) . "',";
            }
        } else {
            $inClausStr.="''";
        }

        $inClausStr = trim($inClausStr, ",");
        $inClausStr.=')';

        $filterIdeas = $this->Idea->query("select * from mst_idea where nbr_group_id IN ".$inClausStr." and nbr_category_id = '$category_id' ORDER BY `dat_modified` DESC" );

        $this->set('allIdeas', $filterIdeas);

        /* display mst_idea categories */
        $this->loadModel('Group');
        $this->loadModel('Request');
        $opts = array(
            'conditions' => array(
                'and' => array(
                    'Request.nbr_user_id' => $session_user_id,
                    'Request.txt_status' => 'Accepted')));

        $userJoinedGroupList = $this->Request->find('all', $opts);

        $this->set('userJoinedGroupList', $userJoinedGroupList);

        $inClausStr = '(';

        if ($userJoinedGroupList) {
            foreach ($userJoinedGroupList AS $val) {
                $inClausStr.="'" . trim($val['Request']['nbr_group_id']) . "',";
            }
        } else {
            $inClausStr.="''";
        }

        $inClausStr = trim($inClausStr, ",");
        $inClausStr.=')';
        $this->loadModel('Category');
        $groupCategoriesList = $this->Category->query("select DISTINCT txt_category_name from mst_category where nbr_group_id IN " . $inClausStr . " order by txt_category_name Asc");
        $this->set('groupCategoriesList', $groupCategoriesList);
    }
    // Display group campaign list or category list on submit_idea page.
    public function displayCampaign(){
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, displayCampaign()');
        $this->loadModel('Campaign');
        if(isset($_POST['groupId'])){
            $group_id = trim($_POST['groupId']);

            $groupCampaignList = $this->Campaign->query("Select * from mst_campaign where `nbr_group_id` =".$group_id." and `nbr_campaign_status_id` = 1 and `bol_status` =0 ");
            if(!empty($groupCampaignList)){
                $this->set('groupCampaignList', $groupCampaignList);
            }else{
                $this->loadModel('Category');
                $groupCategoryList = $this->Category->query("Select C.nbr_category_id ,txt_category_name from mst_category C
                                                             Join category_group_trans CT ON C.nbr_category_id = CT.nbr_category_id
                                                             where CT.nbr_group_id ='$group_id' or CT.nbr_group_id = 0 order by C.txt_category_name Asc");
                $this->set('groupCategoryList', $groupCategoryList);
            }
        }
    }
    // Display campaign categories list on submit_idea page.
    public function displayCategories() {
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, displayCategories()');
        $this->loadModel('CampaignCategory');
        if(isset($_POST['campaign_id'])){
            $campaign_id = trim($_POST['campaign_id']);
            $campaignCategoriesList = $this->CampaignCategory->query("Select C.nbr_category_id , txt_category_name from mst_category C
                                                Join campaign_category_trans CC ON C.nbr_category_id = CC.nbr_category_id
                                                where CC.nbr_campaign_id = '$campaign_id' or C.nbr_category_id = 0 order by C.txt_category_name Asc");
            $this->set('campaignCategoriesList', $campaignCategoriesList);
            CakeLog::write('info', 'In IdeasController, displayCategories()'.print_r($campaignCategoriesList,true));
        }
    }
    // Display categories list on view idea page.
    public function displayCategoriesOnViewIdeas(){
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, displayCategoriesOnViewIdeas()');
        $session_user_id = CakeSession::read('session_id');
        if(isset($_POST['groupId'])){
            $groupId = trim($_POST['groupId']);
            //display mst_idea categories.
            $this->loadModel('Category');
            $groupCategoriesList = $this->Category->query("Select DISTINCT C.nbr_category_id,txt_category_name
                                                           from mst_category C
                                                           Join category_group_trans CT ON C.nbr_category_id = CT.nbr_category_id
                                                           where CT.nbr_group_id = '$groupId' or CT.nbr_group_id = 0 order by C.txt_category_name Asc");

            $this->set('groupCategoriesList', $groupCategoriesList);
            //CakeLog::write('info', 'In IdeasController, displayCategoriesOnViewIdeas()'.print_r($groupCategoriesList,true));
            $this->set('groupId', $groupId);
        }
    }
    // Display filter Ideas by category of all joined groups.
    public function filterIdeasByCategory(){
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, filterIdeasByCategory()');
        $this->loadModel('Idea');
        $this->loadModel('Request');
        if(isset($_POST['category_id'])){
            $category_id = $_POST['category_id'];
            $session_user_id = CakeSession::read('session_id');
            //display request accepted group mst_idea.
            //find group name which is belongs to user id.
            $userJoinedGroupList = $this->Request->query("SELECT * FROM `user_request_dtls` WHERE `nbr_user_id` = $session_user_id and `txt_status` = 'Accepted' or `nbr_user_id` = $session_user_id and `txt_status` = 'Owner'");

            $inClausStr = '(';

            if ($userJoinedGroupList) {
                foreach ($userJoinedGroupList AS $val) {
                    $inClausStr.="'" . trim($val['user_request_dtls']['nbr_group_id']) . "',";
                }
            } else {
                $inClausStr.="''";
            }
            $inClausStr = trim($inClausStr, ",");
            $inClausStr.=')';            
            if($category_id == 0){
                $filterIdeas = $this->Idea->query("select `nbr_submitter_id`,`txt_title`,`txt_description`,`nbr_like_count`,`nbr_dislike_count`,`txt_category_name`,`txt_email`,`txt_group_name`,`txt_campaign_name`
                                             from `mst_idea` I
                                             Join `mst_user` U ON I.`nbr_submitter_id` = U.`nbr_user_id`
                                             Join `mst_campaign` CAMP ON I.`nbr_campaign_id` = CAMP.`nbr_campaign_id`
                                             Join `mst_group` G ON I.`nbr_group_id` = G.`nbr_group_id`
                                             Join `mst_category` C ON I.`nbr_category_id` = C.`nbr_category_id`
                            where I.`nbr_group_id` IN".$inClausStr." and I.`nbr_category_id` = '$category_id' or I.`nbr_category_id` = 0 ORDER BY I.`dat_modified` DESC" );
            }else{
                $filterIdeas = $this->Idea->query("select `nbr_submitter_id`,`txt_title`,`txt_description`,`nbr_like_count`,`nbr_dislike_count`,`txt_category_name`,`txt_email`,`txt_group_name`,`txt_campaign_name`
                                             from `mst_idea` I
                                             Join `mst_user` U ON I.`nbr_submitter_id` = U.`nbr_user_id`
                                             Join `mst_campaign` CAMP ON I.`nbr_campaign_id` = CAMP.`nbr_campaign_id`
                                             Join `mst_group` G ON I.`nbr_group_id` = G.`nbr_group_id`
                                             Join `mst_category` C ON I.`nbr_category_id` = C.`nbr_category_id`
                            where I.`nbr_group_id` IN".$inClausStr." and I.`nbr_category_id` = '$category_id' ORDER BY I.`dat_modified` DESC" );
            }
            $this->set('allIdeas', $filterIdeas);
        }
    }
    public function filterIdeasByGroup(){
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, filterIdeasByGroup()');
        $this->loadModel('Idea');
        if(isset($_POST['groupId'])){
            $groupId = $_POST['groupId'];
        }
        $filterIdeas = $this->Idea->query("select `nbr_idea_id`,`txt_title`,`txt_description`,`nbr_like_count`,`nbr_dislike_count`,`txt_category_name`,`txt_email`,`txt_group_name`,`txt_campaign_name`
                                             from `mst_idea` I
                                             Join `mst_user` U ON I.`nbr_submitter_id` = U.`nbr_user_id`
                                             Join `mst_campaign` CAMP ON I.`nbr_campaign_id` = CAMP.`nbr_campaign_id`
                                             Join `mst_group` G ON I.`nbr_group_id` = G.`nbr_group_id`
                                             Join `mst_category` C ON I.`nbr_category_id` = C.`nbr_category_id`
                                             where I.`nbr_group_id` = '$groupId' ORDER BY I.`dat_modified` DESC" );
        $this->set('allIdeas', $filterIdeas);
    }

    public function filterIdeasByGroupWithCategory(){
        $this->layout = 'ajax';
        CakeLog::write('info', 'In IdeasController, filterIdeasByGroupWithCategory()');
        if(isset($_POST['category_id'])){
            $group_id = $_POST['group_id'];
            $category_id = $_POST['category_id'];
            CakeLog::write('info', 'Group Id : '.$group_id.' Category Id: '.$category_id);
            //display request accepted group mst_idea
            $this->loadModel('Idea');
            $filterIdeas = $this->Idea->query("select `nbr_idea_id`,`txt_title`,`txt_description`,`nbr_like_count`,`nbr_dislike_count`,`txt_category_name`,`txt_email`,`txt_group_name`,`txt_campaign_name`
                                             from `mst_idea` I
                                             Join `mst_user` U ON I.`nbr_submitter_id` = U.`nbr_user_id`
                                             Join `mst_campaign` CAMP ON I.`nbr_campaign_id` = CAMP.`nbr_campaign_id`
                                             Join `mst_group` G ON I.`nbr_group_id` = G.`nbr_group_id`
                                             Join `mst_category` C ON I.`nbr_category_id` = C.`nbr_category_id`
                            where I.`nbr_group_id` = '$group_id' and I.`nbr_category_id` = '$category_id' ORDER BY I.`dat_modified` DESC" );
            $this->set('allIdeas', $filterIdeas);
        }
    }

    /* delete idea */
    public function deleteIdea() {
        CakeLog::write('info', 'In IdeasController, deleteIdea()');
        $this->loadModel('Idea');
        $idea_id = trim($this->request->data['idea_id']);
        // move idea from mst_idea table to arch_mst_idea
        $this->Idea->query("INSERT INTO `arch_mst_idea`(`nbr_idea_id`, `nbr_submitter_id`, `nbr_group_id`, `txt_title`, `txt_description`,
                                `nbr_category_id`, `dat_submitted`, `dat_modified`, `nbr_like_count`, `nbr_dislike_count`, `bol_confidential`)
                                SELECT * FROM `mst_idea` where nbr_idea_id =".$idea_id);
        $result = $this->Idea->query("DELETE FROM `mst_idea` where nbr_idea_id = ".$idea_id);
        if (empty($result)) {
            $this->redirect('../mst_idea/view_ideas');
            CakeLog::write('info', 'Idea Deleted');
        } else {
            $this->redirect('../mst_idea/like_dislike_comment');
            CakeLog::write('info', 'Idea Not Deleted');
        }
    }

    /* display request accepted group mst_idea */
    public function displayAllIdeas(){
        CakeLog::write('info', 'In IdeasController, displayAllIdeas()');
        //session
        $session_user_id = CakeSession::read('session_id');
        $this->loadModel('Request');
        //find group name which is belongs to user id
        $userJoinedGroupList = $this->Request->query("Select * from `user_request_dtls` where `nbr_user_id` = $session_user_id and `txt_status` = 'Accepted' or `nbr_user_id` = $session_user_id and `txt_status` = 'Owner'");
        $inClausStr = '(';

        if ($userJoinedGroupList) {
            foreach ($userJoinedGroupList AS $arr => $val) {
                $inClausStr.="'" . trim($val['user_request_dtls']['nbr_group_id']) . "',";
            }
        } else {
            $inClausStr.="''";
        }

        $inClausStr = trim($inClausStr, ",");
        $inClausStr.=')';

        $allIdeas = $this->Idea->query("select `nbr_idea_id`,`txt_title`,`txt_description`,`nbr_like_count`,`nbr_dislike_count`,`txt_category_name`,`txt_email`,`txt_group_name`,`txt_campaign_name`
                                             from `mst_idea` I
                                             Join `mst_user` U ON I.`nbr_submitter_id` = U.`nbr_user_id`
                                             Join `mst_campaign` CAMP ON I.`nbr_campaign_id` = CAMP.`nbr_campaign_id`
                                             Join `mst_group` G ON I.`nbr_group_id` = G.`nbr_group_id`
                                             Join `mst_category` C ON I.`nbr_category_id` = C.`nbr_category_id`
                            where I.`nbr_group_id` IN".$inClausStr." or I.`nbr_group_id` = 0 ORDER BY I.`nbr_idea_id` DESC");
        $this->set('allIdeas', $allIdeas);
    }
}?>