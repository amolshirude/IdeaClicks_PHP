<?php echo $this->element('../Pages/init'); ?>
<div id="categoryList" class="box" style="margin-left: auto; margin-right: auto;">
    <input type="hidden" name="group_id1" id="group_id1" value="<?php echo $groupId;?>">
    <label>Idea Category:</label>
    <select id="selected_category" name="idea_category" class="textbox" style="height: 25px;width: 30%" required>
        <option value="">All Ideas</option>
        <?php foreach ($groupCategoriesList as $row): ?>
        <option value ="<?php echo $row['C']['nbr_category_id']; ?>">
            <?php echo $row['C']['txt_category_name']; ?>
        </option>
        <?php endforeach; ?>
    </select>  
</div><br>

<script type="text/javascript">
    $(document).ready(function () {
        $("#selected_category").change(function () {
            var selectedCategory = $('#selected_category').val();
            var groupId = $('#group_id1').val();
            jQuery.post('filterIdeasByGroupWithCategory', {group_id :groupId,category_id: selectedCategory}, function(data) {
                $('#view_ideas').html(data);
            });
        });
    });
</script>