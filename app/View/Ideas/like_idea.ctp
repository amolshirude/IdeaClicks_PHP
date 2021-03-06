<div id="view_ideas" class="view-idea-container">
    <form id="on_tile_click_form" action="../Ideas/like_dislike_comment" method="post">
        <input type="hidden" id="idea_id_a" name="idea_id_a">
        <?php foreach ($allIdeas as $row): ?>
        <div class="idea-container">
            <label >Title:</label>
            <input type="hidden" name="idea_id" id="idea_id" value="<?php echo $row['I']['nbr_idea_id']?>">
            <a class="idea-title" href="#" onclick="onClcikOnIdeaTitle('<?php echo $row['I']['nbr_idea_id']?>')"><?php echo $row['I']['txt_title']; ?></a>
            <br><br>
            <label>Description:</label><br>
            <div class="idea-description" style="max-height:100px; overflow-y:scroll;"><?php echo $row['I']['txt_description']; ?></div>
            <br>
            <div class="idea-details-container">
            <label>| Submitted by  |</label><label>  Group Name </label><label> | Campaign Name |</label><label> Category  |</label><br><br>
                <span class="submit-by"><?php echo '<b>|</b>'; echo $row['U']['txt_email']; echo '<b>|</b>';?>
                    <?php echo $row['G']['txt_group_name']; echo '<b>|</b>';?>
                    <?php echo $row['CAMP']['txt_campaign_name']; echo '<b>|</b>';?>
                    <?php echo $row['C']['txt_category_name']; echo '<b>|</b>'; ?> </span>
            </div>
            <div id="like_dislike">
                <img id="like" src="../app/webroot/img/thumbs-up.png" onclick="onClickonLikeIdea('<?php echo $row['I']['nbr_idea_id']; ?>','<?php echo $row['I']['nbr_like_count']; ?>','<?php echo $row['I']['nbr_dislike_count']; ?>')"/>
                <?php echo $row['I']['nbr_like_count']; ?>
                <img id="dislike" src="../app/webroot/img/thumbs-down.png" onclick="onClickonDislikeIdea('<?php echo $row['I']['nbr_idea_id']; ?>','<?php echo $row['I']['nbr_like_count']; ?>','<?php echo $row['I']['nbr_dislike_count']; ?>')"/>
                <?php echo $row['I']['nbr_dislike_count']; ?>
            </div>
        </div>
        <br>
        <?php endforeach; ?>
    </form>
</div>
<script>
    function onClickonLikeIdea(idea_id,like_count,dislike_count){
        jQuery.post('like_idea', {ideaId: idea_id, likeCount: like_count,dislikeCount: dislike_count}, function(data) {
            $('#view_ideas').html(data);
        });
    }
    function onClickonDislikeIdea(idea_id,like_count,dislike_count){
        jQuery.post('dislike_idea', {ideaId: idea_id, likeCount: like_count, dislikeCount: dislike_count}, function(data) {
            $('#view_ideas').html(data);
        });
    }
</script> 