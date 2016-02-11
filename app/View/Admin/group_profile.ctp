<?php echo $this->element('../Pages/init'); ?>
<style>
    nav {
        line-height:30px;
        background-color:#eeeeee;
        height:420px;
        width:200px;
        float:right;
        padding:5px;
    }
    .tableborder{
        border: 1px solid black;
        margin-left: 10px;
        margin-bottom: 5px;
        display:block;
        overflow: auto;
    }
    .image:hover{
    }
    #abc { width:100%;height:100%;top:0;left:0;display:none;position:fixed;background-color:rgba(0,0,0,0.5);overflow:auto}
</style>
<script type="text/javascript">
    function div_show() {
        document.getElementById('abc').style.display = "block";
    }
    //function to hide Popup
    function div_hide() {
        document.getElementById('abc').style.display = "none";
    }
</script>
<title>Group Profile</title>
</head>
<body onload="check()">
    <header>
        <?php echo $this->element('../Pages/header'); ?>
    </header>
    <?php echo '<h5 style="color: #008000">'.$this->Session->consume('message').'</h5>'?>
    <table>
    <tr valign="top">
        <td width="25%" class="userprofiletd" style='padding:5px 10px 5px 10px'>
            <div align="center">
                <form name="deleteGroup" action="deleteGroup" method="post">
                    <input type="hidden" name="group_id" value="<?php echo $groupInfo[0]['GD']['nbr_group_id']; ?>">
                    <input class="myButton" type="submit" value="Delete Group" onclick="return confirm('Are you sure you want to delete this group?')">
                </form>
            </div>
            <div>
                <table>
                    <tr>
                        <td>
                            Number Of Users :<?php echo $TotalUsers; ?><br>
                        </td>
                    </tr>
                </table>
            </div><br>
            <div>
                <table>
                    <tr>
                        <td>
                            Total Ideas : <?php echo $TotalIdeas; ?><br>
                            <?php if (isset($groupCategoriesIdeaCount)) {
                                foreach ($groupCategoriesIdeaCount AS $row):
                                echo $row['C']['txt_category_name'] . ' : '.$row['0']['Idea_Count'];
                                echo '<br>';
                                endforeach; } ?>
                        </td>
                    </tr>
                </table>
            </div>
            <h3 align="left">Requests</h3>
            <form>
                <input type="text" style="border-radius: 20px;border: 2px;padding: 17px;width: 250px;height: 10px;"/>
                <input type="submit" class="buttonclass" name="Search" value="Search">
            </form>
            <div align="left" style="max-height:300px;overflow-y:scroll;">
                <table class="TFtable">
                    <tr style="background-color: lightslategray;color:white">
                        <th align="left">Email Id</th>
                        <th align="left">Status</th>
                    </tr>
                    <form name="RequestStatus" action="RequestStatus" method="post">
                        <?php foreach ($RequestRequest as $row): ?>
                        <tr>
                            <td><?php echo $row['U']['txt_email']; ?></td>
                            <td>
                                <input type="hidden" name="request_id" value="<?php echo $row['J']['nbr_request_id']; ?>">
                                <?php if ($row['J']['txt_status'] == "Accepted") { ?>
                                <input type="submit" class="buttonclass" name="button_value" value="Reject">
                                <?php } else if ($row['J']['txt_status'] == "Rejected") { ?>
                                <input type="submit" class="buttonclass" name="button_value" value="Accept">
                                <?php } else { ?>
                                <input type="submit" class="buttonclass" name="button_value" value="Accept">
                                <input type="submit" class="buttonclass" name="button_value" value="Reject">
                                <?php } ?>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </form>
                </table>
            </div>
        </td>
        <td align="left" width="40%" class="userprofiletd" style='padding:5px 10px 5px 10px'>
            <form name="updateGroupProfile" enctype="multipart/form-data" action="updateGroupProfile" method="post">
                <input type="hidden" name="group_id" value="<?php echo $groupInfo[0]['GD']['nbr_group_id']; ?>">
                <input type="hidden" name="old_group_class_id" value="<?php echo $groupInfo[0]['GC']['nbr_group_class_id']; ?>">
                <div align="left">
                    <label>Profile image :</label><br><br>
                    <?php if($groupInfo[0]['GD']['txt_image_path']!=''){
                        $file=$groupInfo[0]['GD']['txt_image_path'];
                        $dir = $this->webroot.'groupimages/'.$file;?> <img style="height:150px;width:150px;" name="prof_image" src="<?php echo $dir;?>" />
                        <?php  }
                    echo $this->Form->input('', array('type' => 'file', 'name' => 'data[acad_qualification][upload_cert_img]', 'id' => 'upload_cert_img','buttonText' =>'upload','style'=>'width:100%')); ?>
                </div>
                <label>Group Name:</label><br><br><input type="text" class="textbox" name="group_name" value="<?php echo $groupInfo[0]['GD']['txt_group_name']; ?>" id="group_name" style="width:350px"/><br>
                <label>Group Code :</label><br><br><input type="text" class="textbox" name="group_code" value="<?php echo $groupInfo[0]['GD']['txt_group_code']; ?>" id="group_code" style="width:350px"/><br>
                <label>Group Class:</label><br><br>
                <select name="group_class_id" class="textbox" style="width:350px">
                    <option value="<?php echo $groupInfo[0]['GC']['nbr_group_class_id']; ?>"><?php echo $groupInfo[0]['GC']['txt_group_class']; ?></option>
                    <?php foreach ($GroupClass as $row):
                    if($row['GroupClass']['txt_group_class'] != $groupInfo[0]['GC']['txt_group_class']){?>
                    <option value ="<?php echo $row['GroupClass']['nbr_group_class_id']; ?>">
                        <?php echo $row['GroupClass']['txt_group_class']; ?>
                    </option>
                    <?php } endforeach; ?>
                </select><br>
                <label>Group Description:</label><br><br><textarea name="group_description" id="group_description" class="textbox" placeholder="Group Description" style="width:350px;height:100px;"><?php echo $groupInfo[0]['GD']['txt_group_desc']; ?></textarea><br>
                <label>Group Type:</label><br><br>
                <div><input type="radio" name="group_type_id" id="public" value="1">Public
                <input type="radio" name="group_type_id" id="private" value="2">Private</div><br>
                <input type="submit" class="buttonclass" value="Update">
            </form>
        </td>
        <td align="center" width="35%" class="userprofiletd" style='padding:5px 10px 5px 10px'>
            <div align="center">
                <table class="TFtable">
                    <tr>
                        <td>
                            <h3> Invite users to join this group </h3>
                            <?php echo '<h4 style="color: #008000">'.$this->Session->consume('msg').'</h4>'?>
                            <form name="inviteUsers" action="inviteUsers" method="post">
                                <input type="hidden" name="group_id" value="<?php echo $groupInfo[0]['GD']['nbr_group_id']; ?>">
                                <input type="hidden" name="group_name" value="<?php echo $groupInfo[0]['GD']['txt_group_name']; ?>"/>
                                <label>Email Id :</label><br><br><input type="email" class="textbox" name="email" placeholder="Email Id" required>
                                <input type="submit" class="buttonclass" value="Invite">
                            </form>
                        </td>
                    </tr>
                </table>
            </div><br>
            <div>
                <table class="TFtable">
                    <tr>
                        <td>
                            <?php echo '<h3 style="color: #FF0000">'; print_r($this->Session->flash()); echo '</h3>'; ?>
                            <h3>Add Idea Category</h3>
                            <form name="Category" onsubmit="addCategory()" method="post">
                                <label>Category :</label><br><br>
                                <input type="hidden" name="group_id" id="group_id" value="<?php echo $groupInfo[0]['GD']['nbr_group_id']; ?>">
                                <input type="hidden" name="group_name" id="group_name" value="<?php echo $groupInfo[0]['GD']['txt_group_name']; ?>"/>
                                <input type="text" name="category_name" id="category_name" class="textbox" placeholder="Eg:Mobile" required/>
                                <input type="submit" id="addCategory" class="buttonclass" value="Add">
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="categoryList" style="max-height:300px;overflow-y:scroll;">
                <table class="TFtable">
                    <tr style="background-color: lightslategray;color:white;">
                        <th align="left">Category</th>
                        <th align="left">Delete</th>
                    </tr>
                    <?php
                    if (!empty($groupCateoriesList)) {
                        foreach ($groupCateoriesList AS $arr):
                        ?>
                    <tr>
                        <th>
                            <?php echo $arr['C']['txt_category_name']; ?>
                        </th>
                        <th>
                            <form name="deleteCategory" action="deleteCategory" method="post">
                                <input type="hidden" name="group_id" id="group_id" value="<?php echo $groupInfo[0]['GD']['nbr_group_id']; ?>">
                                <input type="hidden" name="category_id" value="<?php echo $arr['C']['nbr_category_id']; ?>" />
                                <input type="image" src="../app/webroot/img/delete.png" alt="Submit" height="20" width="20" onclick="return confirm('Are you sure you want to delete this category?')">
                            </form>
                        </th>
                    </tr>
                    <?php
                    endforeach;
                }
                ?>
                </table>
            </div><br>
            <div>
                <table class="TFtable">
                    <tr>
                        <td>
                            <h3>Create Campaign</h3>
                            <form name="campaign" onsubmit="createCampaign()" method="post">
                                <input type="hidden" name="group_id" id="group_id" value="<?php echo $groupInfo[0]['GD']['nbr_group_id']; ?>">
                                <input type="hidden" name="group_name" id="group_name" value="<?php echo $groupInfo[0]['GD']['txt_group_name']; ?>"/>
                                <label>Campaign Name :</label>
                                <input type="text" class="textbox" name="campaign_name" id="campaign_name" style="width:99%"  required/>
                                <label>Start Date :</label><label style="margin-left: 32%">End Date :</label><br>
                                <input name="start_date" id="start_date" onchange="startDate()" class="textbox" type="date" placeholder="YYYY-MM-DD" style="height :30%; width: 48%" required/>
                                <input name="end_date" id="end_date" onchange="endDate()" class="textbox" type="date" placeholder="YYYY-MM-DD" style="height :30%; width: 48%" required/><br>
                                <label>Select Categories :</label><br><br>
                                <div style="max-height:100px;overflow-y:scroll;">
                                    <?php if (!empty($groupCateoriesList)) {
                                        foreach ($groupCateoriesList AS $arr):?>
                                    <input type="checkbox" name="selector[]" id="chk_category" name="chk_category" value="<?php echo $arr['C']['nbr_category_id']; ?>"><?php echo $arr['C']['txt_category_name']; ?><br>
                                    <?php endforeach;}?>
                                </div>
                                <input type="submit" class="buttonclass" value="Create">
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="campaignList" style="max-height:300px;overflow-y:scroll;">
                <table  class="TFtable">
                    <tr style="background-color: lightslategray;color:white;">
                        <th>Campaign Name</th><th>Start Date</th><th>End Date</th><th>Is Active</th><th>Edit/Delete</th>
                    </tr>
                    <?php foreach ($groupCampaignsList as $row): ?>
                    <tr>
                        <th><?php echo $row['C']['txt_campaign_name']; ?></th>
                        <th><?php echo $row['C']['dat_start_date']; ?></th>
                        <th><?php echo $row['C']['dat_end_date']; ?></th>
                        <th><?php echo $row['CampSt']['txt_campaign_status']; ?></th>
                        <th>
                            <form name="edit_campaign" action="edit_campaign" method="post">
                                <input type="hidden" name="campaign_id" value="<?php echo $row['C']['nbr_campaign_id']; ?>" />
                                <input type="image" src="../app/webroot/img/edit.png" alt="Submit" height="20" width="20">
                            </form>
                            <form name="deleteCampaign" action="deleteCampaign" method="post">
                                <input type="hidden" name="campaign_id" value="<?php echo $row['C']['nbr_campaign_id']; ?>" />
                                <input type="image" src="../app/webroot/img/delete.png" alt="Submit" height="20" width="20" onclick="return confirm('Are you sure you want to delete this campaign?')">
                            </form>
                        </th>
                    </tr>
                    <?php endforeach; ?>
                </table>
            </div>
        </td>
    </tr>
    <table>
    <footer>
        <?php echo $this->element('../Pages/footer'); ?>
    </footer>
</body>
</html>
<script type="text/Javascript">
    function startDate(){
        var d = new Date();
        var monthValue = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        var dateValue = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
        var dd = d.getDate();
        var mm = d.getMonth();
        var yyyy = d.getFullYear();
        var current_date = yyyy + '-' + monthValue[mm] + '-' + dateValue[dd];
        var start_date = $('#start_date').val();
        var end_date = $('#end_date').val();
        var max_start_date_year = yyyy +1;
        var max_start_date =   max_start_date_year+ '-' + monthValue[mm] + '-' + dateValue[dd];

        if(start_date >= current_date && start_date <= max_start_date){
        }else{
            alert('Start date should be greater than current date and less than 1 year from current date');
            document.getElementById('start_date').value ='';
        }
        if(end_date){
            if(end_date <= start_date){
                document.getElementById('end_date').value ='';
            }
        }
    }
    function endDate(){
        var start_date = $('#start_date').val();
        if(start_date){
            var end_date = $('#end_date').val();
            var monthValue = ["01","02","03","04","05","06","07","08","09","10","11","12"];
            var dateValue = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
            var sd = new Date(start_date);
            var max_start_date_date = sd.getDate();
            var max_start_date_month = sd.getMonth();
            var max_start_date_year = sd.getFullYear()+1;
            var max_start_date =   max_start_date_year+ '-' + monthValue[max_start_date_month] + '-' + dateValue[max_start_date_date];
            if(end_date > start_date && end_date <= max_start_date){
            }else{
                alert('End date should be greater than start date and less than 1 year from start date');
                document.getElementById('end_date').value = '';
            }
        }else{
            alert('select start date');
            document.getElementById('end_date').value = '';
            document.getElementById('start_date').focus();
        }
    }
    function createCampaign(){
        var group_id = $('#group_id').val();
        var group_name = $('#group_name').val();
        var campaign_name = $('#campaign_name').val();
        var start_date = $('#start_date').val();
        var end_date = $('#end_date').val();
        var categories_val = [];
        $(':checkbox:checked').each(function(i){
            categories_val[i] = $(this).val();
        });
        if(categories_val == ''){
            alert('First you need to Add Categories, then you can Create Campaign');
        }else{
            jQuery.post('createCampaign', {group_id: group_id, group_name: group_name, campaign_name: campaign_name,start_date: start_date,end_date: end_date,chk_category :categories_val.toString()}, function(data) {
                $('#campaignList').html(data);
            });
        }
    }


    function check() {
        if("<?php echo $groupInfo[0]['GT']['txt_group_type_desc']; ?>" == "Public"){
            document.getElementById("public").checked = true;
        }else{
            document.getElementById("private").checked = true;
        }
    }

</script>

<script type="text/javascript">
    var datefield=document.createElement("input")
    datefield.setAttribute("type", "date")
    if (datefield.type!="date"){ //if browser doesn't support input type="date", load files for jQuery UI Date Picker
        document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n')
        document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"><\/script>\n')
        document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"><\/script>\n')
    }
</script>
<script>
    $(document).ready(function () {
        $("#addCategory").click(function () {
            var group_id = $('#group_id').val();
            var group_name = $('#group_name').val();
            var category_name = $('#category_name').val();
            jQuery.post('addCategory', {group_id: group_id, group_name: group_name, category_name: category_name}, function(data) {
                $('#categoryList').html(data);
            });
        });
    });
</script>
<script>
    if (datefield.type!="date"){ //if browser doesn't support input type="date", initialize date picker widget:
        jQuery(function($){ //on document.ready
            $('#start_date').datepicker({
                dateFormat: 'yy-mm-dd'
            });
            $('#end_date').datepicker({
                dateFormat: 'yy-mm-dd'
            });
        })
    }
</script>