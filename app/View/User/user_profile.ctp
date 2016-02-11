<?php echo $this->element('../Pages/init'); ?>
<style>
    #panel, #flip {
        padding: 5px;
        text-align: center;
        background-color: #e5eecc;
        border: solid 1px #c3c3c3;
    }
    #panel {
        padding: 50px;
        display: none;
    }
    nav {
        line-height:30px;
        height:420px;
        width:200px;
        float:left;
        padding:5px;
    }
    section {
        width:350px;
        float:left;
        padding:10px;
    }
    #abc { width:100%;height:100%;top:0;left:0;display:none;position:fixed;background-color:rgba(0,0,0,0.5);overflow:auto}
</style>

<script>
    function check(){
        var group_id = $( "#join_group option:selected" ).val();
        jQuery.post('displaySelectedJoinGroupInfo', {groupId: group_id}, function(data) {
            $('#display_selected_group_info').html(data);
        });
    }
    function onSubmit(group_id,group_name,user_status){
        group_request_form.group_id.value = group_id;
        group_request_form.group_name.value = group_name;
        group_request_form.user_status.value = user_status;
        group_request_form.submit();
    }
    function div_show() {
        document.getElementById('abc').style.display = "block";
    }
    //function to hide Popup
    function div_hide() {
        document.getElementById('abc').style.display = "none";
    }
    function onClickOnCreatedGroup(group_id){
<?php CakeSession::delete('session_group_id');?>
        created_groups.group_id.value = group_id;
        created_groups.submit();
    }
</script>

<title>User profile</title>
</head>
<body>
<header>
    <?php echo $this->element('../Pages/header1'); ?>
</header><br>
<?php echo '<h5 style="color: #008000">'.$this->Session->consume('message').'</h5>'?>
<table>
    <tr valign="top">
        <td height="200" width="30%" class="userprofiletd" style='padding:5px 10px 5px 10px'>
            <div align="center">
                <a class="myButton" role="button" href="../Admin/create_group"><b>Create Group</b></a>
            </div><h2 style="text-align:center"> OR </h2>
            <div align="left">
                <table class="TFtable">
                    <tr>
                        <td>
                            <h3> Join Group </h3>
                            <form name="joinGroup" action="joinGroup" method="post">
                                <label>Group Name:</label><br><br>
                                <select id="join_group" name="group_id" class="textbox" style="height: 30px;width: 270px" onChange="check()" required>
                                    <option value="">Select Group</option>
                                    <?php foreach ($groupInfo as $row): ?>
                                    <option value ="<?php echo $row['mst_group']['nbr_group_id']; ?>">
                                        <?php echo $row['mst_group']['txt_group_name']; ?><?php echo ' ( '.$row['mst_group']['txt_group_code'].' )'; ?>
                                    </option>
                                    <?php endforeach; ?>
                                </select>
                                <input type="submit" class="buttonclass" value="Join" style="height: 30px;width: 70px;">
                            </form>
                            <div id="display_selected_group_info">
                                <?php if(isset($displaySelectedgroupInfo)) { ?>
                                <label><b>Group Information</b></label><br><br>
                                <label>Total Ideas: <?php if(isset($TotalIdeas)){echo $TotalIdeas; }?></label><br><br>
                                <label>Group Type : <?php echo $displaySelectedgroupInfo[0]['GC']['txt_group_class']; ?></label><br><br>
                                <label>Group Desc : <?php echo $displaySelectedgroupInfo[0]['GD']['txt_group_desc']; ?></label><br><br>
                                <?php }?>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <h3>Joined Groups </h3>
            <div align="left" style="max-height:300px;overflow-y:scroll;">
                <table class="TFtable">
                    <tr style="background-color: lightslategray;color:white;">
                        <th align="left">Group Name</th>
                        <th align="left">Status</th>
                    </tr>
                    <form id="group_request_form" action="../Pages/group_profile_page" method="post">
                        <input type="hidden" id="group_id" name="group_id">
                        <input type="hidden" id="group_name" name="group_name">
                        <input type="hidden" id="user_status" name="user_status">
                        <?php foreach ($RequestRequest as $row): ?>
                        <tr>
                            <td><a href="#" id="group_name_link" onclick="onSubmit('<?php echo $row['G']['nbr_group_id']; ?>','<?php echo $row['G']['txt_group_name']; ?>','<?php echo $row['J']['txt_status']; ?>')"><?php echo $row['G']['txt_group_name']; ?><?php echo ' ( '.$row['G']['txt_group_code'].' )'; ?></a></td>
                            <td><?php echo $row['J']['txt_status']; ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </form>
                </table>
            </div>
            <h3>Created Groups </h3>
            <div align="left" style="max-height:300px;overflow-y:scroll;">
                <table class="TFtable">
                    <tr style="background-color: lightslategray;color:white;">
                        <th align="left">Group Name</th>
                    </tr>
                    <form id="created_groups" action="../Admin/group_profile" method="post">
                        <input type="hidden" id="group_id" name="group_id">
                        <?php foreach ($createdGroups as $row): ?>
                        <tr>
                            <td><a href="#" id="group_name_link" onclick="onClickOnCreatedGroup('<?php echo $row['Group']['nbr_group_id']; ?>')"><?php echo $row['Group']['txt_group_name']; ?><?php echo ' ( '.$row['Group']['txt_group_code'].' )'; ?></a></td>
                        </tr>
                        <?php endforeach; ?>
                    </form>
                </table>
            </div>
        </td>
        <td align="left" width="38%" class="userprofiletd" style='padding:5px 10px 5px 10px'>
            <form name="updateProfile" enctype="multipart/form-data" action='updateProfile' method="post">
                <input type="hidden" name="user_id" value="<?php echo $userInfo['User']['nbr_user_id']; ?>"/>
                <div align="left">
                    <label>Profile image :</label><br><br>
                    <?php if($userInfo['User']['txt_image_path']!=''){
                        $file=$userInfo['User']['txt_image_path'];
                        $dir = $this->webroot.'userimages/'.$file;?> <img style="height:150px;width:150px;" name="prof_image" src="<?php echo $dir;?>" />
                        <?php  }
                    echo $this->Form->input('', array('type' => 'file', 'name' => 'data[acad_qualification][upload_cert_img]', 'id' => 'upload_cert_img','buttonText' =>'upload','style'=>'width:100%')); ?>
                </div>
                <label>Full Name :</label><br><br><input type="text" class="textbox" name="user_name" id="user_name" placeholder="Full Name" value="<?php echo $userInfo['User']['txt_name']; ?>" style="width:350px" /><br>
                <label>Gender :</label><br><br><select class="textbox" name="gender" style="width:350px">
                    <?php
                    if (!empty($userInfo['User']['txt_gender'])) {
                        echo "<option>";
                        echo $userInfo['User']['txt_gender'];
                        echo '</option>';
                        if($userInfo['User']['txt_gender'] == "Male"){?>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <?php }else{?>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <?php } }else{?>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <?php } ?>
                </select><br>
                <label>Email Id :</label><br><br><input type="email"  class="textbox" name="user_email" id="email_id" placeholder="Email Id" value="<?php echo $userInfo['User']['txt_email']; ?>" style="width:350px" readonly="true"/><br>
                <label>Mobile :</label><br><br><input type="tel" class="textbox" name="user_mobile" id="user_mobile" value="<?php echo $userInfo['User']['txt_mobile']; ?>" placeholder="Mobile No" style="width:350px"><br>
                <label>Address :</label><br><br><textarea class="textbox" name="user_address" id="user_address" placeholder="Address" style="height:100px ;width:350px"><?php echo $userInfo['User']['txt_address']; ?></textarea><br>
                <label>Country :</label><br><br><input type="text" class="textbox" name="country" value="<?php if (!empty($userInfo['User']['txt_country'])) {echo $userInfo['User']['txt_country'];}?>" placeholder="Country" style="width:350px"><br>
                <label>State :</label><br><br><input type="text" class="textbox" name="state" value="<?php if (!empty($userInfo['User']['txt_state'])) {echo $userInfo['User']['txt_state'];}?>" placeholder="State" style="width:350px"><br>
                <label>City :</label><br><br><input type="text" class="textbox" name="city" value="<?php if (!empty($userInfo['User']['txt_city'])) { echo $userInfo['User']['txt_city'];}?>" placeholder="City" style="width:350px"><br>
                <label>Pin Code :</label><br><br><input type="text" class="textbox" name="pincode" id="pincode" value="<?php echo $userInfo['User']['nbr_pincode']; ?>" placeholder="pin code" style="width:350px"><br><br>
                <input type="submit" class="buttonclass" id="submit" value="Update" onclick="checkpassword()"/>
            </form>
        </td>
        <td align="center" height="220" width="32%"  class="userprofiletd" style='padding:5px 10px 5px 10px'>
            <div align="center">
                <form name="deleteProfile" action="deleteProfile" method="post">
                    <input class="myButton" type="submit" value="Delete Profile" onclick="return confirm('Are you sure you want to delete your profile , Created groups and leave joined groups?')">
                </form>
            </div>
            <div align="left">
                <table class="TFtable">
                    <tr>
                        <td>
                            <h3> Invite Your Friends </h3>
                            <?php echo '<h4 style="color: #008000">'.$this->Session->consume('msg').'</h4>'?>
                            <form name="inviteUsers" action="inviteUsers" method="post">
                                <label>Email Id :</label><br><br><input type="email" class="textbox" name="email" placeholder="Email Id" required>
                                <input type="submit" class="buttonclass" value="Invite">
                            </form>
                        </td>
                    </tr>
                </table><br><br>
                <table class="TFtable">
                    <tr>
                        <td>
                            <h3>Notifications</h3>
                            <div style="max-height:200px;overflow-y:scroll">
                                <marquee direction="up"scrolldelay="300">
                                    <?php foreach ($Notifications as $row): ?>
                                    <h3><?php echo $row['mst_notification']['txt_notification']; ?></h3>
                                    <?php endforeach; ?>
                                </marquee>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </td>
    </tr>
</table>
<footer>
    <?php echo $this->element('../Pages/footer'); ?>
</footer>
</html>