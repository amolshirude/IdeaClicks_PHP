<?php echo $this->element('../Pages/init'); ?>
<script type="text/javascript">
    function check() {
        if("<?php echo $Idea['Idea']['bol_confidential']; ?>" == 1){
            document.getElementById("idea_status").checked = true;}
    }
</script>
<title>update Idea</title>
</head>
<body onload="check()">
    <header>
        <?php echo $this->element('../Pages/header1'); ?>
    </header><br>
    <table>
        <tr valign="top">
        <td bgcolor="lightgrey" style='padding:5px 10px 5px 10px'>
            <?php echo '<h3 style="color: #FF0000">'; print_r($this->Session->flash()); echo '</h3>'; ?>
            <div align="left">
                <form name="editIdea" action="editIdea" method="post">
                    <input type="hidden" name="idea_id" value="<?php echo $Idea[0]['I']['idea_id']; ?>"/>
                    <div class="box" style="margin-left: auto; margin-right: auto;">
                        <label>Title</label><b style="color: red;">*</b>:<br><br><input type="text" class="textbox" name="idea_title" placeholder="Idea Title" value="<?php echo $Idea[0]['I']['idea_title']; ?>" style="width: 40%" required/><br>
                    </div><br>
                    <div class="box" style="margin-left: auto; margin-right: auto;">
                        <label>Description</label><b style="color: red;">*</b>:<br><br><textarea placeholder="Idea Description" class="textbox" style="height:150px;width: 40%" name="idea_description" required><?php echo $Idea[0]['I']['idea_description']; ?></textarea><br>
                    </div><br>
                    <div class="box" style="margin-left: auto; margin-right: auto;">
                        <label>Select Group</label><b style="color: red;">*</b>:<br><br>
                        <select id="selected_group" name="group_id" class="textbox" style="height: 25px;width: 40%" required>
                            <option value="<?php echo $Idea[0]['I']['group_id']; ?>"><?php echo $Idea[0]['G']['group_name']; ?></option>
                            <?php foreach ($userJoinedGroupList as $row): ?>
                            <?php if($row['G']['group_name'] != $Idea[0]['G']['group_name']){?>
                            <option value ="<?php echo $row['J']['group_id']; ?>">
                                <?php echo $row['G']['group_name']; ?>
                            </option>
                            <?php } ?>
                        <?php endforeach; ?>
                        </select>
                    </div>
                    <div id="campaignList" class="box" style="margin-left: auto; margin-right: auto;">
                        <?php if(!empty($groupCampaignList)){ ?>
                        <label>Group Campaign</label><b style="color: red;">*</b>:<br><br>
                        <select id="selected_campaign" name="selected_campaign" class="textbox" style="height: 25px;width: 40%" required>
                            <option value="">Select Campaign</option>
                            <?php foreach ($groupCampaignList as $row): ?>
                            <option value ="<?php echo $row['campaign']['campaign_id']; ?>">
                                <?php echo $row['campaign']['campaign_name']; ?>
                            </option>
                            <?php endforeach;?>
                        </select>
                        <?php } else{?>
                        <input type="hidden" name="selected_campaign" value="0">
                        <?php if(!empty($groupCategoryList)){?>
                        <label>Idea Category</label><b style="color: red;">*</b>:<br><br>
                        <select name="category_id" class="textbox" style="height: 25px;width: 40%" required>
                            <option value="">Select Category</option>
                            <?php foreach ($groupCategoryList as $row): ?>
                            <option value ="<?php echo $row['C']['category_id']; ?>">
                                <?php echo $row['C']['category_name']; ?>
                            </option>
                            <?php endforeach;?>
                        </select>
                        <?php } ?>
                    <?php }?>
                        <div id="categoryList" class="box" style="margin-left: auto; margin-right: auto;">
                            <label>Idea Category</label><b style="color: red;">*</b>:<br><br>
                            <select name="category_id" class="textbox" style="height: 25px;width: 40%" required>
                                <option value="<?php echo $Idea[0]['I']['category_id']; ?>"><?php echo $Idea[0]['C']['category_name']; ?></option>
                                <?php foreach ($campaignCategoriesList as $row): ?>
                                <option value ="<?php echo $row['C']['category_id']; ?>">
                                    <?php echo $row['C']['category_name']; ?>
                                </option>
                                <?php endforeach;?>
                            </select>
                        </div>
                    </div>
                    <!--<div style="margin-left: auto; margin-right: auto;">
<input type="checkbox" name="idea_status" id="idea_status" value="private">Confidential
                    </div><br>-->
                    <div style="margin-left: auto; margin-right: auto;">
                        <input type="submit" class="buttonclass" value="Update">
                        <input type="button" class="buttonclass" value="Back" onClick="history.go(-1);return true;">
                    </div><br>
                </form>
    </div></td></table>
    <footer>
        <?php echo $this->element('../Pages/footer'); ?>
    </footer>
</body>
</html>
<script type="text/javascript">
    $(document).ready(function () {
        $("#selected_group").change(function () {
            var selectedGroup = $('#selected_group').val();
            jQuery.post('displayCampaign', {groupId: selectedGroup}, function(data) {
                $('#campaignList').html(data);
            });
        });

        $("#selected_campaign").change(function () {
            var selectedCampaign = $('#selected_campaign').val();
            jQuery.post('displayCategories', {campaign_id: selectedCampaign}, function(data) {
                $('#categoryList').html(data);
            });
        });
    });
</script> 