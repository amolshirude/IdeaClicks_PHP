<div id="campaignList" style="max-height:300px;overflow-y:scroll;">
    <table  class="TFtable">
        <tr style="background-color: lightslategray;color:white;">
            <th>Campaign Name</th><th>Start Date</th><th>End Date</th><th>Status</th>
        </tr>
        <?php foreach ($groupCampaignsList as $row): ?>
        <tr>
            <th><?php echo $row['Campaign']['txt_campaign_name']; ?></th>
            <th><?php echo $row['Campaign']['dat_start_date']; ?></th>
            <th><?php echo $row['Campaign']['dat_end_date']; ?></th>
            <th><?php echo $row['Campaign']['status']; ?></th>
            <th>
                <form name="edit_campaign" action="edit_campaign" method="post">
                    <input type="hidden" name="campaign_id" value="<?php echo $row['Campaign']['nbr_campaign_id']; ?>" />
                    <input type="image" src="../app/webroot/img/edit.png" alt="Submit" height="20" width="20">
                </form>
                <form name="deleteCampaign" action="deleteCampaign" method="post">
                    <input type="hidden" name="campaign_id" value="<?php echo $row['Campaign']['nbr_campaign_id']; ?>" />
                    <input type="image" src="../app/webroot/img/delete.png" alt="Submit" height="20" width="20" onclick="return confirm('Are you sure you want to delete this campaign?')">
                </form>
            </th>
        </tr>
        <?php endforeach; ?>
    </table>
</div>
<script type="text/Javascript">
    function startDate(){
        var d = new Date();
        var monthValue = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        var dateValue = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
        var dd = d.getDate();
        var mm = d.getMonth();
        var yyyy = d.getFullYear();
        var current_date = yyyy + '-' + monthValue[mm] + '-' + dateValue[dd];
        var start_date = $('#start_date').val();
        var max_start_date_year = yyyy +1;
        var max_start_date =   max_start_date_year+ '-' + monthValue[mm] + '-' + dateValue[dd];

        if(start_date >= current_date && start_date <= max_start_date){
        }else{
            alert('Start date should be greater than current date and less than 1 year from current date');
            document.getElementById('start_date').value ='';
        }
    }
    function endDate(){
        var start_date = $('#start_date').val();
        if(start_date){
            var end_date = $('#end_date').val();
            var monthValue = ["01","02","03","04","05","06","07","08","09","10","11","12"];
            var dateValue = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

            var sd = new Date(start_date);
            var max_start_date_date = sd.getDate();
            var max_start_date_month = sd.getMonth();
            var max_start_date_year = sd.getFullYear()+1;
            var max_start_date =   max_start_date_year+ '-' + monthValue[max_start_date_month] + '-' + dateValue[max_start_date_date];
            if(end_date > start_date && end_date <= max_start_date){
            }else{
                alert('End date should be greater than start date and less than 1 year from start date');
                document.getElementById('end_date').value = '';
            }
        }else{
            alert('select start date');
            document.getElementById('end_date').value = '';
            document.getElementById('start_date').focus();
        }
    }
    function createCampaign(){
        var group_id = $('#group_id').val();
        var group_name = $('#group_name').val();
        var campaign_name = $('#campaign_name').val();
        var start_date = $('#start_date').val();
        var end_date = $('#end_date').val();
        var categories_val = [];
        $(':checkbox:checked').each(function(i){
            categories_val[i] = $(this).val();
        });
        if(categories_val == ''){
            alert('First you need add categories then you can create campaign');
        }
        else{
            jQuery.post('createCampaign', {group_id: group_id, group_name: group_name, campaign_name: campaign_name,start_date: start_date,end_date: end_date,chk_category :categories_val.toString()}, function(data) {
                $('#campaignList').html(data);
            });
        }
    }
</script>