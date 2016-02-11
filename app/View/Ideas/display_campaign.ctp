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
    <?php if(!empty($groupCategoryList)){ ?>
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
        <?php foreach ($campaignCategoriesList as $row): ?>
        <option value ="<?php echo $row['C']['nbr_category_id']; ?>">
            <?php echo $row['C']['txt_category_name']; ?>
        </option>
        <?php endforeach;?>
    </select>
    <?php } ?>
</div>
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