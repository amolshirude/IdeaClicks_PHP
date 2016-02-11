<?php echo $this->element('../Pages/init'); ?>
<title>View Ideas</title>
</head>
<body>
    <header>
        <?php echo $this->element('../Pages/header1'); ?>
    </header><br>
    <table>
        <tr style="width:100%;height:20%"><td width="100%" style='padding:5px 10px 5px 10px'>
                <div class="box" style="margin-left: auto; margin-right: auto;">
                    <label>Select Group   :</label>
                    <select id="selected_group" name="group_id" class="textbox" style="height: 25px;width: 30%" required>
                        <option value="">Select Group</option>
                        <?php foreach ($userJoinedGroupList as $row): ?>
                        <option value ="<?php echo $row['J']['nbr_group_id']; ?>">
                            <?php echo $row['G']['txt_group_name']; ?>
                        </option>
                        <?php endforeach; ?>
                    </select>
                </div><br>
                <div id="categoryList" class="box" style="margin-left: auto; margin-right: auto;">
                    <label>Select Category:</label>
                    <select id="selected_category" name="idea_category" class="textbox" style="height: 25px;width: 30%" required>              
                        <option value="">All Ideas</option>
                        <?php foreach ($groupCategoriesList as $row): ?>
                        <option value ="<?php echo $row['C']['nbr_category_id']; ?>">
                            <?php echo $row['C']['txt_category_name']; ?>
                        </option>
                        <?php endforeach; ?>
                    </select>
                </div><br>
        </td></tr><tr><td width="100%" style='padding:5px 10px 5px 10px'>
                <div class="box" style="margin-left: auto; margin-right: auto;">
                    <table><tr><td width="80%" valign="top" align="left">
                    <table><tr><td>
                                <div id="view_ideas" class="view-idea-container">
                                    <form id="on_tile_click_form" action="../Ideas/like_dislike_comment" method="post">
                                        <input type="hidden" id="idea_id_a" name="idea_id_a">
                                        <?php if(!empty($allIdeas)){ foreach ($allIdeas as $row): ?>
                                        <div class="idea-container">
                                            <label >Title:</label>
                                            <input type="hidden" name="idea_id" id="idea_id" value="<?php echo $row['I']['nbr_idea_id']?>">
                                            <a class="idea-title" href="#" onclick="onClcikOnIdeaTitle('<?php echo $row['I']['nbr_idea_id']?>')"><?php echo $row['I']['txt_title']; ?></a>
                                            <br><br>
                                            <label>Description:</label><br>
                                            <pre><div class="idea-description" style="max-height:100px;"><?php echo $row['I']['txt_description']; ?></div></pre>
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
                                        <?php endforeach;}else{echo 'No ideas to display. You need to join a group from View Profile page.';} ?>
                                    </form>
                            </div></td></tr></table>

                            <td width="20%" valign="top" align="left">
                                <div class="right-container">
                                    <div class="search-container">
                                        <input type="search" name="searchIdeas"/>
                                        <input class="buttonclass" type="button" value="Search">
                                    </div>
                                    <div class="box">
                                        <b>Categories</b>
                                    </div>
                                    <div class="categories-container">
                                        <a href="../Ideas/view_ideas">View all Ideas</a><br><br>
                                        <?php if (!empty($groupCategoriesList1)) {
                                            foreach ($groupCategoriesList1 as $arr):
                                            ?>
                                        <a href="#" onclick="onClcikOnIdeaCategory('<?php echo $arr['C']['nbr_category_id']; ?>')"><?php echo $arr['C']['txt_category_name']; ?></a><br><br>
                                        <?php endforeach;}?>
                                    </div>
                                </div>
                    </td></tr></table>
                </div>
    </td></tr></table>
</body>
</html>
<script>
    function onClcikOnIdeaCategory(category_id){
        jQuery.post('filterIdeasByCategory', {category_id: category_id}, function(data) {
            $('#view_ideas').html(data);
        });   
    }

    function onClcikOnIdeaTitle(idea_id){
        on_tile_click_form.idea_id_a.value = idea_id;
        on_tile_click_form.submit();
    }

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
<script type="text/javascript">
    $(document).ready(function () {
        $("#selected_group").change(function () {
            var selectedGroup = $('#selected_group').val();
            jQuery.post('displayCategoriesOnViewIdeas', {groupId: selectedGroup}, function(data) {
                $('#categoryList').html(data);
            });
            jQuery.post('filterIdeasByGroup', {groupId: selectedGroup}, function(data) {
                $('#view_ideas').html(data);
            });
        });
    });
</script>