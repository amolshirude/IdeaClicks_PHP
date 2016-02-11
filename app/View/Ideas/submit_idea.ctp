<?php echo $this->element('../Pages/init'); ?>
<script src="jquery.js"></script> 
<script> 
    $(function(){
        $("#includedContent").load("footer.ctp");
    });
</script> 
<title>Submit Idea</title>
</head>
<body>
    <header>
        <?php echo $this->element('../Pages/header1'); ?>
    </header><br>

    <table>
        <tr valign="top">
        <td bgcolor="lightgrey" style='padding:5px 10px 5px 10px'>
            <div align="left">
                <?php echo '<h3 style="color: #FF0000">'; print_r($this->Session->flash()); echo '</h3>'; ?>
                <form name="sibmitIdea" action="submitIdea" method="post">
                    <div class="box" style="margin-left: auto; margin-right: auto;">
                        <label>Idea Title</label><b style="color: red;">*</b>:<br><br>
                        <input type="text" class="textbox" name="idea_title" placeholder="Idea Title" style="height: 25px;width: 40%"required/><br>
                    </div><br>
                    <div class="box" style="margin-left: auto; margin-right: auto;">
                        <label>Idea Description</label><b style="color: red;">*</b>:<br><br>
                        <textarea name="idea_description" class="textbox" placeholder="Problem Statement : &#13;&#10;&#13;&#10;&#13;&#10;Proposed Solution :" style="height: 150px;width: 40%" required></textarea><br>
                    </div><br>
                    <div class="box" style="margin-left: auto; margin-right: auto;">
                        <label>Select Group</label><b style="color: red;">*</b>:<br><br>
                        <select id="selected_group" name="group_id" class="textbox" style="height: 25px;width: 40%" required>
                            <option value="">Select Group</option>
                            <?php foreach ($userJoinedGroupList as $row): ?>
                            <option value ="<?php echo $row['J']['nbr_group_id']; ?>">
                                <?php echo $row['G']['txt_group_name']; ?>
                            </option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div id="campaignList" class="box" style="margin-left: auto; margin-right: auto;">
                        <?php if(!empty($groupCampaignList)){ ?>
                        <label>Group Campaign</label><b style="color: red;">*</b>:<br><br>
                        <select id="selected_campaign" name="selected_campaign" class="textbox" style="height: 25px;width: 40%" required>
                            <option value="">Select Campaign</option>
                            <?php foreach ($groupCampaignList as $row): ?>
                            <option value ="<?php echo $row['mst_campaign']['nbr_campaign_id']; ?>">
                                <?php echo $row['mst_campaign']['txt_campaign_name']; ?>
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
                            <option value ="<?php echo $row['C']['nbr_category_id']; ?>">
                                <?php echo $row['C']['txt_category_name']; ?>
                            </option>
                            <?php endforeach;?>
                        </select>
                        <?php } ?>
                    <?php }?>
                    </div>
                    <div id="categoryList" class="box" style="margin-left: auto; margin-right: auto;">
                        <?php if(!empty($campaignCategoriesList)){ ?>
                        <label>Idea Category</label><b style="color: red;">*</b>:<br><br>
                        <select name="category_id" class="textbox" style="height: 25px;width: 40%" required>
                            <option value="">Select Category</option>
                            <?php foreach ($campaignCategoriesList as $row): ?>
                            <option value ="<?php echo $row['C']['nbr_category_id']; ?>">
                                <?php echo $row['C']['txt_category_name']; ?>
                            </option>
                            <?php endforeach;?>
                        </select>
                        <?php } ?>
                    </div><br>
                    <div style="margin-left: auto; margin-right: auto;">
                        <input class="buttonclass" type="submit" value="Submit">
                    </div>
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