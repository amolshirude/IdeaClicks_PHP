<?php echo $this->element('../Pages/init'); ?>
<title>Edit Campaign</title>    
</head>
<body>
    <header>
        <h3>Update Campaign</h3>
        <?php echo $this->element('../Pages/header'); ?>
    </header><br>
    <table>
        <tr valign="top">
            <td bgcolor="lightgrey" style='padding:5px 10px 5px 10px'>
                <div align="left">
                    <?php echo '<h3 style="color: #FF0000">'; print_r($this->Session->flash()); echo '</h3>'; ?>
                    <form name="updateCampaignForm" action="updateCampaign" method="post">
                        <input type="hidden" name="campaign_id" id="campaign_id" value="<?php echo $Campaign['Campaign']['nbr_campaign_id']; ?>">
                        <input type="hidden" name="group_id" id="group_id" value="<?php echo $Campaign['Campaign']['nbr_group_id']; ?>">
                        <div class="box" style="margin-left: auto; margin-right: auto;">
                            <label>Campaign Name</label><b style="color: red;">*</b>:<br>
                            <input type="text" class="textbox" name="campaign_name" id="campaign_name" value="<?php echo $Campaign['Campaign']['txt_campaign_name']; ?>" style="height: 25px;width: 40%" required/><br>
                        </div>
                        <div class="box" style="margin-left: auto; margin-right: auto;">
                            <label>Start Date</label><label style="margin-left: 16%">End Date</label><br>
                            <input name="start_date" id="start_date" value="<?php echo $Campaign['Campaign']['dat_start_date']; ?>" onchange="startDate()" class="textbox" type="date" style="height :25px; width: 20%" readonly required/>
                            <input name="end_date" id="end_date" value="<?php echo $Campaign['Campaign']['dat_end_date']; ?>" onchange="endDate()" class="textbox" type="date" style="height :25px; width: 20%" required/><br>
                        </div>
                        <div class="box" style="margin-left: auto; margin-right: auto;">
                            <label>Select Categories</label><br>
                            <div style="max-height:100px;overflow-y:scroll;">
                                <?php if (!empty($groupCateoriesList)) {
                                    foreach ($groupCateoriesList AS $arr):  $flag = 0;?>
                                    <?php if(!empty($campaignCateoriesList)) { foreach ($campaignCateoriesList As $row):?>
                                        <?php if($arr['C']['category_id'] == $row['campaign_category_trans']['nbr_category_id']){  $flag = 1;?>
                                <input type="checkbox" id="chk_category" name="selector[]" value="<?php echo $arr['C']['nbr_category_id']; ?>" checked><?php echo $arr['C']['txt_category_name']; ?>
                                <?php } ?>
                            <?php endforeach;}?>
                        <?php if($flag == 0){?>
                                <input type="checkbox" id="chk_category" name="selector[]" value="<?php echo $arr['C']['nbr_category_id']; ?>"><?php echo $arr['C']['txt_category_name']; ?>
                                <?php } ?>
                            <?php endforeach;}?>
                            </div>
                        </div>
                        <input type="hidden" name="selected_categories" id="selected_categories">
                        <input  class="buttonclass" type="button" onclick="updateCampaign()" value="Update">
                        <input type="button" class="buttonclass" value="Back" onClick="history.go(-1);return true;">
                    </form>
                </div>
            </td>
        </tr>
    </table>
    <br><br><br><br><br><br>
    <footer>
        <?php echo $this->element('../Pages/footer'); ?>
    </footer>
</body>
</html>
<script type="text/javascript">
    var d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth();
    var yyyy = d.getFullYear();
    
    function startDate(){
        var monthValue = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        var dateValue = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
        var start_date = $('#start_date').val();
        var end_date = $('#end_date').val();
        var current_date = yyyy + '-' + monthValue[mm] + '-' + dateValue[dd];
        var max_start_date_year = yyyy +1;
        var max_start_date =   max_start_date_year+ '-' + monthValue[mm] + '-' + dateValue[dd];
        if(start_date >= current_date && start_date <= max_start_date){
        }else{
            alert('Start date should be greater than current date and less than 1 year from current date');
            document.getElementById('start_date').value ='';
        }
        if(end_date){
            if(end_date <= start_date){
                document.getElementById('end_date').value ='';
            }
        }
    }

    function endDate(){
        var monthValue = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        var dateValue = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
        var start_date = $('#start_date').val();
        if(start_date){
            var end_date = $('#end_date').val();
            var sd = new Date(start_date);
            var max_start_date_date = sd.getDate();
            var max_start_date_month = sd.getMonth();
            var max_start_date_year = sd.getFullYear()+1;
            var max_start_date =   max_start_date_year+ '-' + monthValue[max_start_date_month] + '-' + dateValue[max_start_date_date];
            var current_date1 = yyyy + '-' + monthValue[mm] + '-' + dateValue[dd];
            if(end_date > start_date && end_date>=current_date1 && end_date <= max_start_date){
            }else{
                alert('End date should be greater than start date ,current date and less than 1 year from start date');
                document.getElementById('end_date').value = '';
            }
        }else{
            alert('select start date');
            document.getElementById('end_date').value = '';
            document.getElementById('start_date').focus();
        }
    }
    function updateCampaign(){
        var categories_val = [];
        $(':checkbox:checked').each(function(i){
            categories_val[i] = $(this).val();
        });
        updateCampaignForm.selected_categories.value = categories_val;
        updateCampaignForm.submit();
    }

</script>