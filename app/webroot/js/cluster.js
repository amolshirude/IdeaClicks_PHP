$(document).ready(function() {
    $("#corr_2").hide();
    $("#corr_3").hide();
    $("#corr_4").hide();
    $("#corr_5").hide();
    $("#corr_6").hide();
    $("#corr_7").hide();
});

$(document.body).on('change', '#clusterht_schcd', function() {
    // alert(23);
    $clusterht_schcd = $('#clusterht_schcd :selected').val();
    jQuery.post('/Edu_common/Teachers/getSchoolData', {clusterht_schcd: $clusterht_schcd}, function(data) {
        //alert(data);
        $("#corr_2").show();
        $("#corr_3").show();
        $('#corr_3').html(data);
    });
});


$(document.body).on('click', '#select_teacter_radio', function() {
    $("#corr_4").show();
});


$(document.body).on('change', '#cluster_teacher_select1', function() {
    $clusterht_schcd = $('#clusterht_schcd :selected').val();
    jQuery.post('/Edu_common/Teachers/getClusterTeacherData', {clusterht_schcd: $clusterht_schcd}, function(data) {
        $("#corr_5").show();
        $('#corr_5').html(data);
    });
});


$(document.body).on('change', '#Teacher_List', function() {
    $clusterht_tchcd = $('#Teacher_List :selected').val();
    $clusterht_schcd = $('#cluster_schcd').val();
    alert($clusterht_schcd);
    jQuery.post('/Edu_common/Teachers/getClusterTeacherDataUpdate', {clusterht_tchcd: $clusterht_tchcd, clusterht_schcd: $clusterht_schcd}, function(data) {
        $("#corr_6").show();
        $("#corr_7").show();
        $('#corr_7').html(data);
    });
});


$(document.body).on('change', '#cluster_teacher_select2', function() {
    alert("byee");
    $clusterht_schcd = $('#clusterht_schcd :selected').val();
    alert($clusterht_schcd);
});