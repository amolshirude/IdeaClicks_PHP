<?php echo $this->element('../Pages/init'); ?>
<div id="display_comments">
    <?php foreach ($comments as $row): ?>
    <div class="idea-container">
        <?php echo $row['Comment']['submitted_by']; ?>:<?php echo $row['Comment']['txt_comment_desc']; ?>
        <a href="#" id="reply" class="i-comment" onclick="onClickReply(<?php echo $row['Comment']['nbr_comment_id'];?>)">reply</a>
        <div id="reply<?php echo $row['Comment']['comment_id'];?>" style="margin-left: auto; margin-right: auto;display:none">
            <input type="hidden" id="comment_id" name="comment_id" value="<?php echo $row['Comment']['nbr_comment_id'];?>"/>
            <input type="hidden" id="idea_id" name="idea_id" value="<?php echo $row['Comment']['nbr_idea_id']; ?>"/>
            <textarea id="commentsText<?php echo $row['Comment']['nbr_comment_id'];?>" name="commentsText"
                      title="Submit Your comment"
                      style="width: 95%; height: 50px;"></textarea>
            <button type="submit" onClick = "replyComment(<?php echo $row['Comment']['nbr_comment_id'];?>)" style="width:100px" >Submit</button>
        </div>
    </div><br>
    <?php endforeach; ?>
</div>
<script type="text/javascript">
    function onClickReply(comment_id){
        var comment_id = comment_id.toString();
        var reply = "#reply" + comment_id;
        $(reply).show();
    }
    function replyComment(comment_id){
        alert('In Reply Comment');
        var comment_id = comment_id.toString();
        var commentsText = "#commentsText" + comment_id;
        var comment_text = $(commentsText).val();
        var idea_id = $('#idea_id').val();
        alert('comment id:'+comment_id+'comment text:'+comment_text+'Idea id:'+idea_id);
        document.getElementById("commentsText").value = "";

        jQuery.post('comment', {ideaId:idea_id , commentId:comment_id , commentText: comment_text}, function(data) {
            $("#display_comments").html(data);
        });
    }
</script>
<script type="text/javascript">
    $(document).ready(function(){
        $('.i-comment').click(function(){
            var p1 = $(this).parent().get(0);
            $(p1).parent().find('.comment-container').eq(0).show();
            $(this).hide();
        });

        $( ".submitComment" ).click(function(){
            alert('In Submit');
            var comment_id = $('#comment_id').val();
            var comment_text = $('#commentsText').val();
            var idea_id = $('#idea_id').val();
            alert(comment_id+'   '+comment_text+'  '+idea_id);
            document.getElementById("commentsText").value = "";

            jQuery.post('comment', {ideaId:idea_id , commentId:comment_id , commentText: comment_text}, function(data) {
                $("#display_comments").html(data);
            });
        });
    });
</script>