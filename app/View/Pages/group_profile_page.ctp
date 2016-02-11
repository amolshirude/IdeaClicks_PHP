<?php echo $this->element('../Pages/init'); ?>
<style>
    nav {
        line-height:30px;
        background-color:#eeeeee;
        height:420px;
        width:200px;
        float:right;
        padding:5px;
    }
    .tableborder{
        border: 1px solid black;
        margin-left: 10px;
        margin-bottom: 5px;
        display:block;
        overflow: auto;
    }
    .image:hover{

    }

</style>
<title>Group Profile</title>
</head>
<body>
    <header>
        <?php echo $this->element('../Pages/header1'); ?>
    </header><br>

    <table class="TFtable">
        <tr valign="top">
            <td width="25%" style='padding:5px 10px 5px 10px'>
                <div>
                    <table>
                        <tr>
                            <td>
                                <?php if($userStatus == "Accepted"){?>
                                <form action="leaveGroup" method="post">
                                    <input type="hidden" name="group_id" id="group_id" value="<?php echo $groupInfo[0]['GD']['nbr_group_id'];?>">
                                    <input type="submit" class="buttonclass" value="Leave Group" onclick="return confirm('Are you sure you want to leave this group?')"><br>
                                </form>
                                <?php }?>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br><label><b>Number Of Users : </b><?php echo $TotalUsers; ?></label><br><br>
                                <marquee direction="up" height="100" scrolldelay="300">
                                    <?php if(isset($userList)){foreach($userList as $row){echo '<h3>'.$row['UD']['txt_name'].'</h3>';}}?>
                                </marquee>
                            </td>
                        </tr>
                    </table>
                </div><br>
                <div>
                    <table>
                        <tr>
                            <td>
                                <label><b>Total Ideas : </b><?php echo $TotalIdeas; ?></label><br><br>
                                <label><b>Group Categories</b></label><br><br>
                                <?php if(isset($groupCategoriesIdeaCount)){
                                    foreach ($groupCategoriesIdeaCount as $row2){
                                        echo '<label>'.$row2['C']['txt_category_name'] . ' : '.$row2['0']['Idea_Count'].'</label><br><br>';
                                    }
                                }if(isset($groupCategoriesIdeaCount) && isset($groupCategoriesList)){
                                    foreach ($groupCategoriesList as $row1){
                                        $flag = 1;
                                        foreach ($groupCategoriesIdeaCount as $row2){
                                            if($row1['C']['txt_category_name'] == $row2['C']['txt_category_name']){
                                                $flag = 0;
                                            }
                                        }
                                        if($flag){
                                            echo '<label>'.$row1['C']['txt_category_name'] . ' : 0'.'</label><br><br>';
                                        }
                                    }
                                }else if(isset($groupCategoriesList)){
                                    foreach($groupCategoriesList as $row1){
                                        echo '<label>'.$row1['C']['txt_category_name'] . ' : 0'.'</label><br><br>';
                                    }
                                } ?>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
            <td width="40%">
                <div>
                    <table class="TFtable">
                        <tr >
                            <td style='padding:5px 10px 5px 10px'>
                                <label><b>Group Information</b></label><br><br>
                                <input type="hidden" name="group_id" value="<?php echo $groupInfo[0]['GD']['nbr_group_id']; ?>">
                                <label>Group Name : <?php echo $groupInfo[0]['GD']['txt_group_name']; ?></label><br><br>
                                <label>Group Code : <?php echo $groupInfo[0]['GD']['txt_group_code']; ?></label><br><br>
                                <label>Group Type : <?php echo $groupInfo[0]['GC']['txt_group_class']; ?></label><br><br>
                                <label>Group Desc : <?php echo $groupInfo[0]['GD']['txt_group_desc']; ?></label><br><br>
                            </td>
                        </tr>
                    </table>
                </div><br>
                <div>
                    <table class="TFtable">
                        <tr >
                            <td style='padding:5px 10px 5px 10px'>
                                <label><b>Admin Information</b></label><br><br>
                                <label>Name : <?php echo $groupInfo[0]['UD']['txt_name']; ?></label><br><br>
                                <label>Email Id : <?php echo $groupInfo[0]['UD']['txt_email']; ?></label><br><br>
                                <label>Contact No : <?php echo $groupInfo[0]['UD']['txt_mobile']; ?></label><br><br>
                                <br>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
            <td width="40%" style='padding:5px 10px 5px 10px'>
                <label><b>Campaigns</b></label><br><br>
                <table class="TFtable">
                    <tr style="background-color: lightslategray;color:white;">
                        <th align="left">Campaign Name</th>
                        <th align="left">Start Date</th>
                        <th align="left">End Date</th>
                        <th align="left">Is Active</th>

                    </tr>
                    <?php foreach ($groupCampaignsList as $row): ?>
                    <tr>
                        <th>
                            <?php echo $row['Campaign']['campaign_name']; ?>
                        </th>
                        <th>
                            <?php echo $row['Campaign']['start_date']; ?>
                        </th>
                        <th>
                            <?php echo $row['Campaign']['end_date']; ?>
                        </th>
                        <th>
                            <?php echo $row['Campaign']['is_active']; ?>
                        </th>
                        <th>
                        </th>
                    </tr>
                    <?php endforeach; ?>
                </table>
            </td>
        </tr>
    </table>
    <br><br><br><br><br><br><br><br><br><br>
    <footer>
        <?php echo $this->element('../Pages/footer'); ?>
    </footer>
</body>
</html>