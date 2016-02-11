<div id="display_selected_group_info">
    <?php if(isset ($displaySelectedgroupInfo)) { ?>
    <label><b>Group Information</b></label><br><br>
    <label>Total Ideas: <?php if(isset($TotalIdeas)){echo $TotalIdeas; }?></label><br><br>
    <label>Group Type : <?php echo $displaySelectedgroupInfo[0]['GC']['txt_group_class']; ?></label><br><br>
    <label>Group Desc : <?php echo $displaySelectedgroupInfo[0]['GD']['txt_group_desc']; ?></label><br><br>
    <?php }?>
</div>
