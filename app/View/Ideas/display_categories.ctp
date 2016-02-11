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