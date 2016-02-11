<div id="like_dislike">
    <img id="like" src="../app/webroot/img/thumbs-up.png"/>
    <input type="hidden" name="like_count" id="like_count" value="<?php
if (isset($likes)) {
    echo $likes;
};
?>">
           <?php
           if (isset($likes)) {
               echo $likes;
           };
           ?>
    <img id="dislike" src="../app/webroot/img/thumbs-down.png"/>
    <input type="hidden" name="dislike_count" id="dislike_count" value="<?php
           if (isset($dislikes)) {
               echo $dislikes;
           };
           ?>">

    <?php
    if (isset($dislikes)) {
        echo $dislikes;
    };
    ?>
</div>
<script>
    $(document).ready(function () {

        $("#like").click(function () {
            var idea_id = $('#idea_id').val();
            var like_count = $('#like_count').val();
            var dislike_count = $('#dislike_count').val();
            jQuery.post('like_single_idea', {ideaId: idea_id, likeCount: like_count,dislikeCount: dislike_count}, function(data) {
                $('#like_dislike').html(data);
            });
        });

        $("#dislike").click(function () {
            var idea_id = $('#idea_id').val();
            var like_count = $('#like_count').val();
            var dislike_count = $('#dislike_count').val();
            jQuery.post('dislike_single_idea', {ideaId: idea_id, likeCount: like_count, dislikeCount: dislike_count}, function(data) {
                $('#like_dislike').html(data);

            });
        });
    });
</script>