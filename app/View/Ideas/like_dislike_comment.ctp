<?php echo $this->element('../Pages/init'); ?>
<title>Like, Dislike, comment on Idea</title>    
</head>
<body>
    <header>
        <?php echo $this->element('../Pages/header1'); ?>
    </header><br>
    <div class="box" style="margin-left: auto; margin-right: auto; padding:5px 10px 5px 10px">
        <div class="view-idea-container">
            <div class="idea-container">
                <input type="hidden" name="idea_id" id="idea_id" value="<?php echo $Idea[0]['I']['nbr_idea_id']; ?>">
                <label>Title:</label><br>
                <span class="idea-description"> <?php echo $Idea[0]['I']['txt_title']; ?></span>
                <label>Description:</label><br>
                <div style="max-height:200px;overflow-y:scroll;" class="idea-description"><?php echo $Idea[0]['I']['txt_description']; ?></div>
                <div class="idea-details-container">
                    <label>| Submitted by  |</label><label>  Group Name </label><label> | Campaign Name |</label><label> Category  |</label><br><br>
                    <span class="submit-by"><?php echo '<b>|</b>'; echo $Idea[0]['U']['txt_email']; echo '<b>|</b>';?>
                        <?php echo $Idea[0]['G']['txt_group_name']; echo '<b>|</b>';?>
                        <?php echo $Idea[0]['CAMP']['txt_campaign_name']; echo '<b>|</b>';?>
                        <?php echo $Idea[0]['C']['txt_category_name']; echo '<b>|</b>'; ?> </span>
                </div>
                <?php if ($session_email == $Idea[0]['U']['txt_email']) { ?>
                <div>
                    <form name="edit_idea" action="edit_idea" method="post">
                        <input type="hidden" name="idea_id" value="<?php echo $Idea[0]['I']['nbr_idea_id']; ?>" />
                        <input type="submit" class="buttonclass" value="Edit">
                        <input type="button" class="buttonclass" value="Back" onClick="history.go(-1);return true;">
                    </form>
                </div>
                <?php
            } else {
                echo '<input type="button" class="buttonclass" value="Back" onClick="history.go(-1);return true;"><br><br>';
            }
            ?>
            <?php if($session_user_id == $Idea[0]['G']['nbr_owner_id']) { ?>
                <div>
                    <form name="deleteIdea" action="deleteIdea" method="post">
                        <input type="hidden" name="idea_id" value="<?php echo $Idea[0]['I']['nbr_idea_id']; ?>" />
                        <input class="buttonclass" type="submit" value="Delete" onclick="return confirm('Are you sure you want to delete this idea?')">
                    </form>
                </div>
                <?php } ?>
                <div id="like_dislike">
                    <img id="like" src="../app/webroot/img/thumbs-up.png"/>
                    <input type="hidden" name="like_count" id="like_count" value="<?php echo $Idea[0]['I']['nbr_like_count']; ?>">
                    <?php echo $Idea[0]['I']['nbr_like_count']; ?>
                    <img id="dislike" src="../app/webroot/img/thumbs-down.png"/>
                    <input type="hidden" name="dislike_count" id="dislike_count" value="<?php echo $Idea[0]['I']['nbr_dislike_count']; ?>">
                    <?php echo $Idea[0]['I']['nbr_dislike_count']; ?>
                </div>

                <button type="button" class="i-comment">Comment</button>
                <div id="comment" class="box comment-container" style="margin-left: auto; margin-right: auto;display:none">
                    <input type="hidden" id="comment_id" class="comment-id" value="0"/>
                    <input type="hidden" name="idea_id" value="<?php echo $Idea[0]['I']['nbr_idea_id']; ?>" />
                    <textarea class="comment-box" id="commentsText" name="commentsText"
                              title="Submit Your comment"
                              style="width: 95%; height: 50px;"></textarea>
                    <button class="submitComment" id="commentsubmit"name="submit" style="width:100px" >Submit</button>
                </div>
            </div><br>
            <div id="display_comments">
                <?php foreach ($comments as $row): ?>
                <div class="idea-container">
                    <?php if($row['CommentModel']['parent_comment_id'] == 0) {
                        echo $row['CommentModel']['submitted_by']; echo ':'; echo $row['CommentModel']['comment_text']; ?>
                    <a href="#" id="reply" class="i-comment" onclick="onClickReply(<?php echo $row['Comment']['nbr_comment_id']; ?>)">reply</a><br> <?php }?>
                    <?php nestedComments($row['Comment']['nbr_comment_id']); ?>
                    <div id="reply<?php echo $row['Comment']['nbr_comment_id'];?>" style="margin-left: auto; margin-right: auto;display:none">
                        <input type="hidden" id="comment_id" name="comment_id" value="<?php echo $row['Comment']['nbr_comment_id']; ?>"/>
                        <input type="hidden" id="idea_id" name="idea_id" value="<?php echo $row['Comment']['nbr_idea_id']; ?>"/>
                        <textarea id="commentsText<?php echo $row['Comment']['nbr_comment_id'];?>" name="commentsText"
                                  title="Submit Your comment"
                                  style="width: 95%; height: 50px;"></textarea>
                        <button type="submit" onClick = "replyComment(<?php echo $row['Comment']['nbr_comment_id'];?>)" style="width:100px" >Submit</button>
                    </div>
                    <?php function nestedComments($comment_id){ ?>
                    <div class="idea-container1">
                        <?php foreach ($comments as $row1):
                        if($comment_id == $row1['CommentModel']['parent_comment_id']) {
                            echo $row1['CommentModel']['submitted_by']; echo ':'; echo $row1['Comment']['txt_comment_desc']; ?>
                        <a href="#" id="reply" class="i-comment" onclick="onClickReply(<?php echo $row['Comment']['nbr_comment_id']; ?>)">reply</a><br>
                        <?php nestedComments($row1['Comment']['nbr_comment_id']); } endforeach; ?>
                    </div><br>
                    <?php } ?>
                </div><br>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</body>
</html>


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
            alert('comment id:'+comment_id+'comment text:'+comment_text+'Idea id:'+idea_id);
            document.getElementById("commentsText").value = "";

            jQuery.post('comment', {ideaId:idea_id , commentId:comment_id , commentText: comment_text}, function(data) {
                $("#display_comments").html(data);
            });
        });
    });
</script>
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
<script type="text/javascript">
    $(document).ready(function () {
        $("#selected_group").change(function () {
            var selectedGroup = $('#selected_group').val();
            jQuery.post('displayCategories', {groupId: selectedGroup}, function(data) {
                $('#categoryList').html(data);
            });
        });
    });
</script>