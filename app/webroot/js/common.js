window.role = '';

$(document).ready(function () {

//Pravin's Code Start
    window.role = $('input[name="rd"]:checked').attr('id');
//    alert("ROLE1==> " + window.role);

    $('input[type=radio][name=rd]').on('change', function () {
        window.role = $(this).attr('id');
//        alert("ROLE2==> " + window.role);


        if (window.role == 'login_roles1') {
            alert("Under Development.");
            jQuery('input[type=radio][name=rd][id=login_roles6]').prop('checked', true);
//            alert("State/Director ");
        }
        else if (window.role == 'login_roles2') {
            alert("Under Development.");
            jQuery('input[type=radio][name=rd][id=login_roles6]').prop('checked', true);
//            alert("Regional Deputy Director");
//            PHASE 2 DO NOT DELETE
//            $('#my_div_dist').html('');
//            $('#my_div_dist').hide();
//            jQuery.post('/Education/Users/SelectRegion', function(data) {
//                $('#my_div').html(data);
//                $("#region_id").change(function() {
//                    $('input[name="rd"]').click(function() {
//                        return false;
//                    });
//                    $("#bottomDiv").show();
//                });
//            });
        }
        else if (window.role == 'login_roles3') {
            alert("Under Development.");
            jQuery('input[type=radio][name=rd][id=login_roles6]').prop('checked', true);
//            alert("EO/AO");
        }
        else if (window.role == 'login_roles4') {
//            alert("BEO/CRC");
        }
        else if (window.role == 'login_roles5') {
//            alert("Cluster Head");
        }
        else if (window.role == 'login_roles6') {
//            alert("HM/Acting Head");
        }
    });
    $("#gendertxt").hide();
    $("#view_cluster").hide();
    $("#shalaqual").hide();
    $("#other_sch_info").hide();
    $("#other_sch_info_nontchr").hide();
    $("#right_ajax_td_update_udise").hide();
    $("#innerdiv1234").hide();
    $("#bottomDiv").hide();
    $("#gender_print_cluster").hide();
//    $("#row_shalaarth_second").hide();
//    $("#row_udise_second").hide();

    //for map_shalarth.ctp 
    $('#map_shalarth_tch').prop('disabled', true);
    $('#map_shalarth_tch').css("background", "rgba(191, 191, 188, 0.6)");
    $('#map_udise_tch').prop('disabled', true);
    $('#map_udise_tch').css("background", "rgba(191, 191, 188, 0.6)");
    $('#map_tch').prop('disabled', true);
    $('#map_tch').css("background", "rgba(191, 191, 188, 0.6)");
    $('#unmap_tch').prop('disabled', true);
    $('#unmap_tch').css("background", "rgba(191, 191, 188, 0.6)");
    $('#cancel_map_tch').prop('disabled', true);
    $('#cancel_map_tch').css("background", "rgba(191, 191, 188, 0.6)");
    $('#map_udise_tch_only').prop('disabled', true);
    $('#map_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
    $('#map_nontchr_shalarth').prop('disabled', true);
    $('#map_nontchr_shalarth').css("background", "rgba(191, 191, 188, 0.6)");
//    $('#map_shalarth_tch').prop('disabled', true);
    $('#unmap_udise_tch_only').prop('disabled', true);
    $('#unmap_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
    $('#unmap_nontchr_shalarth').prop('disabled', true);
    $('#unmap_nontchr_shalarth').css("background", "rgba(191, 191, 188, 0.6)");
    $('#cancel_tch').prop('disabled', true);
    $('#cancel_tch').css("background", "rgba(191, 191, 188, 0.6)");
    $('#cancel_map_udise_tch_only').prop('disabled', true);
    $('#cancel_map_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
    $('#cancel_nontchr_shalarth').prop('disabled', true);
    $('#cancel_nontchr_shalarth').css("background", "rgba(191, 191, 188, 0.6)");
    $('#unmap_nontchr').prop('disabled', true); //Only for Non teaching Staff
    $('#unmap_nontchr').css("background", "rgba(191, 191, 188, 0.6)");
    $('#map_shalarth_nontch').prop('disabled', true);
    $('#map_shalarth_nontch').css("background", "rgba(191, 191, 188, 0.6)");
    $mapFlag1 = 0;
    $mapFlag2 = 0;
//$("input[type=radio]").attr('disabled', true);
    $('input[name=tch_gender]').attr('disabled', true);
    JQUERY4U = {
        map_tch_btn: function () {
            if ($mapFlag1 === 1 && $mapFlag2 === 1) {
//                alert("11");
                $('#map_shalarth_tch').prop('disabled', true);
                $('#map_shalarth_tch').css("background", "rgba(191, 191, 188, 0.6)");
                $('#map_udise_tch').prop('disabled', true);
                $('#map_udise_tch').css("background", "rgba(191, 191, 188, 0.6)");
                $('#map_tch').prop('disabled', false);
                $('#map_tch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D) )");
                $('#unmap_tch').prop('disabled', false);
                $('#unmap_tch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D) )");
                $('#map_shalarth_tch').prop('disabled', true);
                $('#map_shalarth_tch').css("background", "rgba(191, 191, 188, 0.6)");
                $('#cancel_map_tch').prop('disabled', false);
                $('#cancel_map_tch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            }
            else if ($mapFlag1 === 1 && $mapFlag2 === 0) {
//                alert("10");
                $('#map_shalarth_tch').prop('disabled', false);
                $('#map_shalarth_tch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
                $('#map_udise_tch').prop('disabled', true);
                $('#map_udise_tch').css("background", "rgba(191, 191, 188, 0.6)");
                $('#map_tch').prop('disabled', true);
                $('#map_tch').css("background", "rgba(191, 191, 188, 0.6))");
//                $('#unmap_tch').prop('disabled', true);
//                $('#unmap_tch').css("background", "rgba(39, 120, 137, 0.6)");

                $('#cancel_map_tch').prop('disabled', false);
                $('#cancel_map_tch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            }
            else if ($mapFlag1 === 0 && $mapFlag2 === 1) {
//                alert("01");
                $('#map_shalarth_tch').prop('disabled', true);
                $('#map_shalarth_tch').css("background", "rgba(191, 191, 188, 0.6)");
                $('#map_udise_tch').prop('disabled', false);
                $('#map_udise_tch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
                $('#map_tch').prop('disabled', true);
                $('#map_tch').css("background", "rgba(191, 191, 188, 0.6)");
//                $('#unmap_tch').prop('disabled', true);
//                $('#unmap_tch').css("background", "rgba(39, 120, 137, 0.6)");

                $('#cancel_map_tch').prop('disabled', false);
                $('#cancel_map_tch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            }
            else {
//                alert("00");
//                $('#map_shalarth_tch').prop('disabled', true);
//                $('#map_udise_tch').prop('disabled', true);
//                $('#map_tch').prop('disabled', true);
//                $('#unmap_tch').prop('disabled', true);
//                $('.myfoo_udise').prop('checked', false);
//                $('.myfoo_shalaarth').prop('checked', false);
//                $("input[type=text]").val("");
//                $('#cancel_map_tch').prop('disabled', true);
            }
        }
    }

//    $("#child_infoState").change(function() {
//            $state_id = $('#child_infoState :selected').val();
//            jQuery.post('/Education/Users/SelectDist', {$state_id: $state_id}, function(data) {
//                $('#mydist_div_school').html(data);



    $("#helpbtn_hm_mapping").click(function () {
        alert("123")
        window.open('../english_pdf/clst/clst_cst_help.pdf');
    });

    $("#dist_id").change(function () {
//        alert(window.role);
//    $('#dist_id').bind('click change', function() {
        if (window.role != '') {
            $('input[name="rd"]').click(function () {
                return false;
            });
//            var dist_id = $('#dist_id :selected').val();
//            if (window.role == 'login_roles3') {
//                if (dist_id != '') {
////                    alert(dist_id);
//                    jQuery.post('/Education/Users/SelectEoDrop', {dist_id: dist_id}, function(data) {
//                        
//                        $('#my_div').html(data);
//                        $("#eo_drop_id").change(function() {
//                            $("#bottomDiv").show();
//                        });
//                    });
//                }
//            }
//            if (window.role == 'login_roles4' || window.role == 'login_roles5' || window.role == 'login_roles6') {
//                alert(window.role);
//                jQuery.post('/Education/Users/SelectBlock', {dist_id: dist_id}, function(data) {
//                    $('#my_div').html(data);

//                $("#block_id").change(function() {
//                    var block_id = $('#block_id :selected').val();
//                    var dist_id = $('#dist_id :selected').val();

//                        if (window.role == 'login_roles4') {
//                            $("#bottomDiv").show();
//                        }
            if (window.role == 'login_roles4') {
                var dist_id = $('#dist_id :selected').val();
                $("#bottomDiv").show();
            }
            else if (window.role == 'login_roles5') {
                var dist_id = $('#dist_id :selected').val();
                var block_id = $('#block_id :selected').val();
                jQuery.post('SelectBlock', {dist_id: dist_id}, function (data) {
//                    $("#innerdiv1234").hide();
//                    $("#my_div_one").hide();
//                    $("#my_div").hide();
//                    $("#bottomDiv").hide();

                    $('#my_div').html(data);
                    $("#block_id").change(function () {
                        $("#bottomDiv").show();
                    });
                });
            }

            else if (window.role == 'login_roles6') {
                var dist_id = $('#dist_id :selected').val();
//                var block_id = $('#block_id :selected').val();
//                alert(dist_id);

                jQuery.post('SelectBlock', {dist_id: dist_id}, function (data) {

                    $('#my_div').html(data);
                    $("#block_id").change(function () {
                        var dist_id = $('#dist_id :selected').val();
                        var block_id = $('#block_id :selected').val();
                        jQuery.post('SelectCluster', {dist_id: dist_id, block_id: block_id}, function (data) {
                            $('#my_div_one').html(data);
                            $("#cluster_id").change(function () {
                                $("#bottomDiv").show();
                            });
                        });
                    });
                });
            }
        }
        else if (window.role == '') {
            alert("Please Select Role.");
        }
    });
    $('#dist_id_map_other_school').bind(' change', function () {

        var dist_id = $('#dist_id_map_other_school :selected').val();
        // alert(dist_id);
        jQuery.post('SelectBlock', {dist_id: dist_id}, function (data) {
            $('#my_div').html(data);
            // alert("123456789");
//                    $("#block_id").change(function() {
//                        var block_id = $('#block_id :selected').val();
//                        var dist_id = $('#dist_id :selected').val();
//
//                        if (window.role == 'login_roles4') {
//                            $("#bottomDiv").show();
//                        }
//
//                        if (window.role == 'login_roles5' || window.role == 'login_roles6') {
//                            jQuery.post('/Education/Users/SelectCluster', {dist_id: dist_id, block_id: block_id}, function(data) {
//                                $('#my_div_one').html(data);
//
//                                $("#cluster_id").change(function() {
//                                    if (window.role == 'login_roles5' || window.role == 'login_roles6') {
//                                        $("#bottomDiv").show();
//                                    }
//                                });
//                            });
//                        }
//
//                    });
//               

        });
    });
    $("#hideDrop").click(function () {
//        alert("124" + window.role);
        $('#LoginValidationsPassword').val('');
        var id = $('#cluster_id').val();
        $(".selectbox").prop("disabled", true);
        $("#innerdiv_dist_list").hide();
        $("#innerdiv1234").show();
        $block_id = $('#block_id :selected').val();
        $dist_id = $('#dist_id :selected').val();
        $cluster_id = $('#cluster_id :selected').val();
        if (window.role == 'login_roles2') {//Regional Director 
            var region_id = $('#region_id :selected').val();
            var regional_director_id = region_id + 'DD';
//            $('#LoginValidationsUserId').val(regional_director_id);
        }
        else if (window.role == 'login_roles3') {//EO/CRC
            var dist_id = $('#dist_id :selected').val();
            var eo_drop_id = $('#eo_drop_id :selected').val();
//            alert(eo_drop_id);
            if (eo_drop_id == '0')//'EO Primary'
            {
                var eo_id = dist_id + 'EO' + '01';
//                $('#LoginValidationsUserId').val(eo_id);
            }
            else if (eo_drop_id == '1')// 'EO Secondary'
            {
                var eo_id = dist_id + 'EO' + '02';
//                $('#LoginValidationsUserId').val(eo_id);
            }
            else if (eo_drop_id == '2')//'EO Higher Secondary'
            {
                var eo_id = dist_id + 'EO' + '00';
//                $('#LoginValidationsUserId').val(eo_id);
            }
        }
        else if (window.role == 'login_roles4') {//BEO/CRC
            var block_id = $('#block_id').val();
            jQuery.post('SelectSchool', {dist_id: $dist_id, user_role: window.role}, function (data) {
                $("#school_list").text("List of Block / Taluka under selected District");
                $('#my_div_school').html(data);
            });
        }
        else if (window.role == 'login_roles5')//clu
        {
            var cluster_id = $('#cluster_id').val();
            jQuery.post('SelectSchool', {dist_id: $dist_id, block_id: $block_id, user_role: window.role}, function (data) {
                $("#school_list").text("List of Clusters under selected Block / Taluka");
                $('#my_div_school').html(data);
            });
        }
        else if (window.role == 'login_roles6') { //hm
            jQuery.post('SelectSchool', {dist_id: $dist_id, block_id: $block_id, cluster_id: $cluster_id, user_role: window.role}, function (data) {
                $('#my_div_school').html(data);
            });
        }
    });
    $(".schoolinfo").change(function () {
        $block_id = $('#block_id :selected').val();
        $dist_id = $('#dist_id :selected').val();
        $cluster_id = $('#cluster_id :selected').val();
        jQuery.post('SelectSchool', {dist_id: $dist_id, block_id: $block_id, cluster_id: $cluster_id}, function (data) {
            $('#my_div_school').html(data);
        });
    });
    $("#cancel_map_tch").click(function () {
        $mapFlag1 = 0;
        $mapFlag2 = 0;
        $('#map_shalarth_tch').prop('disabled', true);
        $('#map_shalarth_tch').css("background", "rgba(39, 120, 137, 0.6)");
        $('#map_udise_tch').prop('disabled', true);
        $('#map_udise_tch').css("background", "rgba(39, 120, 137, 0.6)");
        $('#map_tch').prop('disabled', true);
        $('#map_tch').css("background", "rgba(39, 120, 137, 0.6)");
        $('#unmap_tch').prop('disabled', true);
        $('#unmap_tch').css("background", "rgba(39, 120, 137, 0.6)");
        $('.myfoo_udise').prop('checked', false);
        $('.myfoo_shalaarth').prop('checked', false);
        $("input[type=text]").val("");
        $('#cancel_map_tch').prop('disabled', true);
        $('#cancel_map_tch').css("background", "rgba(39, 120, 137, 0.6)");
    });
    $("#udise_code_search").click(function () {

        $('#unmap_udise_tch_only').prop('disabled', true);
        $('#unmap_udise_tch_only').css("background", "rgba(39, 120, 137, 0.6)");
        $('#cancel_map_udise_tch_only').prop('disabled', false);
        $('#cancel_map_udise_tch_only').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
        $('.myfoo_tchr_master_other').prop('checked', false);
        var UdiseCode = $('#TeacherUdiseCode').val();
//        alert(UdiseCode);
        var user_id = $('#user_id').val();
        $('input[type=text]').each(function () {
            if (this.id == "user_id") {

            }
            else {
                $("input[type=text]").val("");
            }
        });
        jQuery('#TeacherUdiseCode').val(UdiseCode);
        jQuery('#user_id').val(user_id);
//        var UdiseCode = $('#TeacherUdiseCode').val();
//        var user_id = $('#user_id').val();

        var udiseCd = /^\d{11}$/;
        //client side validation
        if (UdiseCode.match(udiseCd))
        {
//            alert("Valid  Udise Code");return true;
        }
        else
        {
            alert("Invalid Udise Code");
            return false;
        }
        if (UdiseCode == user_id)
        {
            alert("Enter the Udise Code of other School");
            return false;
        }
        else
        {
        }

        jQuery.post('SelectTchrUdise', {UdiseCode: UdiseCode}, function (data) {
            $("#other_sch_info").show();
            $("#other_sch_info").html(data);
            $('#loader_img1').hide();
            NewTeacher();
        });
    });
    $("#shalarth_nontchr_search").click(function () {
        $('#unmap_nontchr_shalarth').prop('disabled', true);
        $('#unmap_nontchr_shalarth').css("background", "rgba(39, 120, 137, 0.6)");
        $('#map_nontchr_shalarth').prop('disabled', false);
        $('#map_nontchr_shalarth').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
        $('#cancel_nontchr_shalarth').prop('disabled', false);
        $('#cancel_nontchr_shalarth').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
        $('.myfoo_tchr_master_other_shala').prop('checked', false);
        var ShalarthNontchrCode = $('#TeacherShalarthNontchrCode').val();
//        alert(ShalarthNontchrCode);
        jQuery.post('SelectNonTchrShalarth', {ShalarthNontchrCode: ShalarthNontchrCode}, function (data) {
            if (data['ErrorMessage'] != '1')
                alert(data['ErrorMessage']);
            else if (data['ErrorMessage'] == '1') {
                $("#other_sch_info_nontchr").show();
                $("#tchr_type").val(2);
                $("#school_name").text(data['schname']);
                $("#school_addr").text(data['distname']);
                $("#school_std").text(data['lowclass'] + 'to' + data['highclass']);
                $.each(data['nonTchrInfoShalarth'], function (key, val) {
                    $.each(val, function (key, val) {

                        if (key === 'sevarth_id') {
                            jQuery('#dcps_emp_id').val(val);
                        }
                        else if (key === 'emp_name') {
                            jQuery('#tchr_lname_shala').val(val);
                        }
                        else if (key === 'dob') {
                            var arr = val.split('-');
                            jQuery('#tchr_dob_shala').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else if (key === 'gender') {
                            if (val === 'M')
                            {
                                jQuery('#tchr_sex_shala').val('Male');
                            }
                            else if (val === 'F')
                            {
                                jQuery('#tchr_sex_shala').val('Female');
                            }
                        }
                        else if (key === 'desig_desc') {
                            jQuery('#tchr_post_shala_desc').val(val);
                        }
                        else if (key === 'ddo_code') {
                            jQuery('#ddo_code').val(val);
                        }
                        else if (key === 'dice_code') {
                            jQuery('#dice_code').val(val);
                        }

                    });
                });
            }
        }, 'json');
    });
//    $(document.body).on('click', '#map_shalarth_tch', function() { //Map only shalarth
    $("#map_shalarth_tch").click(function () {
        $('#tchr_map_type').val("map_only_shalarth");
        $("#TeacherMapShalarthForm").submit(); //mapTeacher()
    });
    $("#map_udise_tch_only").click(function () {
//        $("#TeacherMapOtherSchoolForm").submit(); //NewTchrUdiseAdd()
        $('#tchr_map_type').val("map");
//        alert( $('#tchr_map_type').val());
        $flag = 1;
//        $str = 'Err... Mapping is not possible as ';
        $shalarth_tchcd = $('#TeacherTchrCodeShala').val();
        $udise_tchcd = $('#TeacherTchrCodeUdise').val();
        $shalarth_tchname = $('#TeacherTchrLnameShala').val();
        $udise_tchname = $('#TeacherTechLnameUdise').val();
        $shalarth_tchdob = $('#tchr_dob_shala').val();
        $udise_tchdob = $('#tchr_dob_udise').val();
        $shalarth_gender = $('#tchr_sex_shala').val();
        $udise_gender = $('#tchr_sex_udise').val();
//        if ($shalarth_tchdob != "" || $shalarth_gender != "") {
//            if ($shalarth_tchdob.trim() !== $udise_tchdob.trim())
//            {
//                $flag = 0;
//                $str += '\n Mismatch in The Teacher Birth Date.';
//            }
//            if ($flag) {
//                alert("\n Mapping of Teachers data from UDISE is done successfully...");
//                $("#TeacherMapOtherSchoolForm").submit(); //NewTchrUdiseAdd() 
//            }
//            else
//            {
//                alert($str);
//            }
//        }
//        else {
//            alert("\n Mapping of Teachers data from UDISE Only is done successfully...");
//            $("#TeacherMapOtherSchoolForm").submit(); //NewTchrUdiseAdd() 
//        }

        if ($shalarth_tchdob.trim() == '' || $udise_tchdob.trim() == '') {
            alert("Err... Mappping is not Posssible.");
        }
        else {
            if ($shalarth_tchdob.trim() !== $udise_tchdob.trim()) {
                alert("Err... Mappping is not Posssible.");
//                $('#tchr_map_type').val("misMatchGen");
//                alert("\n Mismatch in The Teacher Birth Date.");
//                alert("\n Mapping of Teachers data in SHALARTH with the data in UDISE is done Successfully...");
//                $("#TeacherMapOtherSchoolForm").submit(); //NewTchrUdiseAdd()
            }
            else {
                $('#tchr_map_type').val("map");
                alert("\n Mapping of Teachers data in SHALARTH with the data in UDISE is done Successfully...");
                $("#TeacherMapOtherSchoolForm").submit(); //NewTchrUdiseAdd()
            }
        }



    });
    $("#map_nontchr_shalarth").click(function () {
        $('#tchr_map_type').val("map");
        alert("\n Mapping of Teachers data from Shalarth is done successfully...");
        $("#TeacherMapOtherSchoolNonForm").submit(); //NewNonTchrShalarthAdd() 
    });
    $("#cancel_map_udise_tch_only").click(function () {
        $("#other_sch_info").hide();
        $('#map_udise_tch_only').prop('disabled', true);
        $('#map_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
        $('#map_udise_tch_only').prop('disabled', true);
        $('#unmap_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
        $('#cancel_map_udise_tch_only').prop('disabled', true);
        $('#cancel_map_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
        $('.myfoo_tchr_master_other_udise').prop('checked', false);
        $('#udise_code_search').prop('disabled', false);
        $("input[type=text]").val("");
    });
    $("#cancel_nontchr_shalarth").click(function () {
        $("#other_sch_info_nontchr").hide();
        $('#map_nontchr_shalarth').prop('disabled', true);
        $('#map_nontchr_shalarth').css("background", "rgba(191, 191, 188, 0.6)");
        $('#unmap_nontchr_shalarth').prop('disabled', true);
        $('#unmap_nontchr_shalarth').css("background", "rgba(191, 191, 188, 0.6)");
        $('#cancel_nontchr_shalarth').prop('disabled', true);
        $('#cancel_nontchr_shalarth').css("background", "rgba(191, 191, 188, 0.6)");
        $('.myfoo_tchr_master_other_shala').prop('checked', false);
        $('#shalarth_nontchr_search').prop('disabled', false);
        $("input[type=text]").val("");
    });
    $('.myfoo_tchr_master_other').each(function () {
        $(this).click(function () {
            $('#map_udise_tch_only').prop('disabled', true);
            $('#map_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
            $('#cancel_map_udise_tch_only').prop('disabled', false);
            $('#cancel_map_udise_tch_only').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            $("#other_sch_info").hide();
            jQuery('#TeacherUdiseCode').val("");
            $('#udise_code_search').prop('disabled', true);
            var id = $(this).attr('id');
            jQuery.post('map_other_sch_disp', {id: id}, function (data) {
                $.each(data, function (key, val) {
                    $.each(val, function (key, val) {
                        if (key === 'dcps_emp_id') {
                            jQuery('#dcps_emp_id').val(val);
                        }
                        if (key === 'emp_name')
                        {
                            jQuery('#tchr_lname_shala').val(val);
                        }
                        if (key === 'dob')
                        {
                            var arr = val.split('-');
                            jQuery('#tchr_dob_shala').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        if (key === 'desig_desc')
                        {
                            jQuery('#TeacherTchrTypeShala').val(val);
                        }

                        if (key === 'gender')
                        {
                            if (val === 'M')
                            {
                                jQuery('#tchr_sex_shala').val('Male');
                            }
                            else if (val === 'F')
                            {
                                jQuery('#tchr_sex_shala').val('Female');
                            }
                        }
                        if (key === 'desig_desc')
                        {
                            jQuery('#tchr_post_shala_desc').val(val);
                        }

                        if (key === 'tchcd') {
                            jQuery('#tchr_code_udise').val(val);
                        }
                        if (key === 'tchname')
                        {
                            jQuery('#tech_lname_udise').val(val);
                        }
                        if (key === 'dob')
                        {
                            var arr = val.split('-');
                            jQuery('#tchr_dob_udise').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        if (key === 'sex')
                        {
                            if (val === 1)
                            {
                                jQuery('#tchr_sex_udise').val('Male');
                            }
                            else if (val === 2)
                            {
                                jQuery('#tchr_sex_udise').val('Female');
                            }
                        }
                        if (key === 'aadhaar')
                        {
                            jQuery('#tchr_aadhar_udise').val(val);
                        }
                        if (key === 'tchr_category_udise') {
                            jQuery('#TeacherTchrCategoryUdise').val(val);
                        }
                        if (key === 'tchcat_desc') {
                            jQuery('#tchr_type_udise').val(val);
                        }
                        if (key === 'tchappstatus_desc') {
                            jQuery('#tchr_appointment_udise').val(val);
                        }
                        if (key === 'slno') {
                            jQuery('#tchr_udise_slno_hidden').val(val);
                        }

                    });
                });
            }, 'json');
            var parentClass = $(this).parent("div").attr("class");
            if (parentClass.indexOf('rRed') >= 0) {
                $('#unmap_udise_tch_only').prop('disabled', true);
                $('#unmap_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
                alert("Data is verified so data can not be mapped / unmapped");
            }
            else {
                $('#unmap_udise_tch_only').prop('disabled', false);
                $('#unmap_udise_tch_only').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            }

        });
    });
    $('.myfoo_tchr_master_other_udise').each(function () {
        $(this).click(function () {
            $('#map_udise_tch_only').prop('disabled', true);
            $('#map_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
            $('#cancel_map_udise_tch_only').prop('disabled', false);
            $('#cancel_map_udise_tch_only').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            $("#other_sch_info").hide();
            jQuery('#TeacherUdiseCode').val("");
            $('#udise_code_search').prop('disabled', true);
            var id = $(this).attr('id');
            jQuery.post('map_other_sch_disp_udise', {id: id}, function (data) {
                $.each(data, function (key, val) {
                    $.each(val, function (key, val) {
                        if (key === 'tchcd') {
                            jQuery('#tchr_code_udise').val(val);
                        }
                        if (key === 'tchname')
                        {
                            jQuery('#tech_lname_udise').val(val);
                        }
                        if (key === 'dob')
                        {
                            var arr = val.split('-');
                            jQuery('#tchr_dob_udise').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        if (key === 'sex')
                        {
                            if (val === 1)
                            {
                                jQuery('#tchr_sex_udise').val('Male');
                            }
                            else if (val === 2)
                            {
                                jQuery('#tchr_sex_udise').val('Female');
                            }
                        }
                        if (key === 'aadhaar')
                        {
                            jQuery('#tchr_aadhar_udise').val(val);
                        }
                        if (key === 'tchr_category_udise') {
                            jQuery('#TeacherTchrCategoryUdise').val(val);
                        }
                        if (key === 'tchcat_desc') {
                            jQuery('#tchr_type_udise').val(val);
                        }
                        if (key === 'tchappstatus_desc') {
                            jQuery('#tchr_appointment_udise').val(val);
                        }
                        if (key === 'slno') {
                            jQuery('#tchr_udise_slno_hidden').val(val);
                        }


                        if (key === 'sevarth_id') {
                            jQuery('#dcps_emp_id').val(val);
                        }
                        if (key === 'emp_name')
                        {
                            jQuery('#tchr_lname_shala').val(val);
                        }
                        if (key === 'dob')
                        {
                            var arr = val.split('-');
                            jQuery('#tchr_dob_shala').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        if (key === 'desig_desc')
                        {
                            jQuery('#TeacherTchrTypeShala').val(val);
                        }

                        if (key === 'gender')
                        {
                            if (val === 'M')
                            {
                                jQuery('#tchr_sex_shala').val('Male');
                            }
                            else if (val === 'F')
                            {
                                jQuery('#tchr_sex_shala').val('Female');
                            }
                        }
                        if (key === 'desig_desc')
                        {
                            jQuery('#tchr_post_shala_desc').val(val);
                        }


                    });
                });
            }, 'json');
            var parentClass = $(this).parent("div").attr("class");
            if (parentClass.indexOf('rRed') >= 0) {
                $('#unmap_udise_tch_only').prop('disabled', true);
                $('#unmap_udise_tch_only').css("background", "rgba(191, 191, 188, 0.6)");
                alert("Data is verified so data can not be mapped / unmapped");
            }
            else {
                $('#unmap_udise_tch_only').prop('disabled', false);
                $('#unmap_udise_tch_only').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            }
        });
    });
    $('.myfoo_tchr_master_other_shala').each(function () {
        $(this).click(function () {
            $('#map_nontchr_shalarth').prop('disabled', true);
            $('#map_nontchr_shalarth').css("background", "rgba(191, 191, 188, 0.6)");
            $('#cancel_nontchr_shalarth').prop('disabled', false);
            $('#cancel_nontchr_shalarth').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            jQuery('#TeacherShalarthNontchrCode').val("");
            $('#shalarth_nontchr_search ').prop('disabled', true);
            $("#unmap_udise_tch_only").hide();
            var id = $(this).attr('id');
            jQuery.post('map_other_sch_disp_shala', {id: id}, function (data) {
                $.each(data, function (key, val) {
                    $.each(val, function (key, val) {
//                    alert(key + "   " + val);

                        if (key === 'sevarth_id') {
                            jQuery('#dcps_emp_id').val(val);
                        }
                        if (key === 'emp_name')
                        {
                            jQuery('#tchr_lname_shala').val(val);
                        }
                        if (key === 'dob')
                        {
                            var arr = val.split('-');
                            jQuery('#tchr_dob_shala').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        if (key === 'desig_desc')
                        {
                            jQuery('#TeacherTchrTypeShala').val(val);
                        }

                        if (key === 'gender')
                        {
                            if (val === 'M')
                            {
                                jQuery('#tchr_sex_shala').val('Male');
                            }
                            else if (val === 'F')
                            {
                                jQuery('#tchr_sex_shala').val('Female');
                            }
                        }
                        if (key === 'desig_desc')
                        {
                            jQuery('#tchr_post_shala_desc').val(val);
                        }
                    });
                });
            }, 'json');
            var parentClass = $(this).parent("div").attr("class");
            if (parentClass.indexOf('rRed') >= 0) {
                $('#unmap_nontchr_shalarth').prop('disabled', true);
                $('#unmap_nontchr_shalarth').css("background", "rgba(39, 120, 137, 0.6)");
                alert("Data is verified so data can not be mapped / unmapped");
            }
            else {
                $('#unmap_nontchr_shalarth').prop('disabled', false);
                $('#unmap_nontchr_shalarth').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
            }
        });
    });
    $('#unmap_nontchr_shalarth').click(function () {
        $('#tchr_map_type').val("unmap");
//        $flag = 1;
//        $str = 'Err... Mapping is not possible as ';
//        $shalarth_tch_id = $('#dcps_emp_id').val();
        alert("\n Un Mapping of Teachers data is done successfully...");
        $("#TeacherMapOtherSchoolNonForm").submit(); //NewNonTchrShalarthAdd() 
    });
    $('#unmap_udise_tch_only').click(function () {
        $('#tchr_map_type').val("unmap");
//        $flag = 1;
//        $str = 'Err... Mapping is not possible as ';
//        $shalarth_tchdob = $('#tchr_dob_shala').val();
//        $udise_tchdob = $('#tchr_dob_udise').val();
//        $shalarth_gender = $('#tchr_sex_shala').val();
//        $udise_gender = $('#tchr_sex_udise').val();
//        if ($shalarth_tchdob.trim() !== $udise_tchdob.trim())
//        {
//            $flag = 0;
//            $str += '\n Mismatch in The Teacher Birth Date.';
//        }
//        if ($shalarth_gender.trim() !== $udise_gender.trim())
//        {
//            $flag = 0;
//            $str += '\n Mismatch in The Teacher Gender.';
//        }
////alert($flag);
//        if ($flag == 0)
//        {
//            alert($str);
//        }
//        else
//        {
        alert("\n Un Mapping of Teachers data is done successfully...");
        $("#TeacherMapOtherSchoolForm").submit(); //NewTchrUdiseAdd() 

//        }
    });
    $('.myfoo_shalaarth').each(function () {
        $(this).click(function () {
            $mapFlag1 = 0;
            if ($('.myfoo_shalaarth').is(':checked')) {
//                $('#unmap_nontchr').prop('disabled', false); //Only for Non teaching Staff
                $mapFlag1 = 1;
                JQUERY4U.map_tch_btn();
            }
            $('#cancel_tch').prop('disabled', false);
            $('#cancel_tch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            $('#map_shalarth_nontch').prop('disabled', false);
            $('#map_shalarth_nontch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
            $shalaarthTchrDdoId = $(this).attr("id");
            $arr = $shalaarthTchrDdoId.split(':');
            $shalaarthId = $arr[0];
            $shalaarthDdoCode = $arr[1];
            $('#TeacherTchrDdoCodeShala').val($shalaarthDdoCode);

            jQuery.post('UdiseRecord', {$shalaarthId: $shalaarthId}, function (data) {
                $.each(data, function (key, val) {
                    $.each(val, function (key, val) {
                        $.each(val, function (key, val) {
                            if (key === 'sevarth_id') {
                                jQuery('#TeacherTchrCodeShala').val(val);
                            }
                            else if (key === 'emp_name')
                            {
                                jQuery('#TeacherTchrLnameShala').val(val);
                            }
                            else if (key === 'dob')
                            {
                                var arr = val.split('-');
                                jQuery('#TeacherTchrDobShala').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                            }
                            else if (key === 'desig_desc')
                            {
                                jQuery('#TeacherTchrTypeShala').val(val);
                            }
                            else if (key === 'gender')
                            {
                                if (val === 'M')
                                {
                                    jQuery('#TeacherTchrSexShala').val('Male');
                                }
                                else if (val === 'F')
                                {
                                    jQuery('#TeacherTchrSexShala').val('Female');
                                }
                            }
                            else if (key === 'ddo_code')//For non Teachees Only
                            {
                                jQuery('#tchr_ddo_code_shala').val(val);
                            }

                            else if (key === 'desig_desc')
                            {
                                jQuery('#TeacherTchrCategoryShala').val(val);
                            }
                            else if (key === '')
                            {
                                jQuery('#TeacherTchrAadharShala').val(val);
                            }
                            else if (key === '')
                            {
                                jQuery('#TeacherTchrTypeShala').val(val);
                            }


                        });
                    });
                });
            }, 'json');
            var parentClass = $(this).parent("div").attr("class");
            if ((parentClass.indexOf('rGreen') >= 0) || (parentClass.indexOf('rYellow') >= 0) || (parentClass.indexOf('rRed') >= 0)) {
                $('#unmap_nontchr').prop('disabled', false);
                $('#unmap_nontchr').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
                if (parentClass.indexOf('rRed') >= 0) {
                    $('#unmap_nontchr').prop('disabled', true);
                    $('#unmap_nontchr').css("background", "rgba(191, 191, 188, 0.6)");
                    $('#map_shalarth_nontch').prop('disabled', true);
                    $('#map_shalarth_nontch').css("background", "rgba(191, 191, 188, 0.6)");
                    alert("Data is verified so data can not be mapped / unmappedddd");
                    $(".myfoo_shalaarth  input").each(function (i) {
                        if ($(this).is(":checked")) {
                            $(this).removeAttr("checked");
                        }
                    });
//                    $('.myfoo_shalaarth').each(function() {
//                        jQuery('.myfoo_shalaarth').removeAttr('checked');
//                    });

                }
                else {
                    $('#unmap_nontchr').prop('disabled', false);
                    $('#unmap_nontchr').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
                    $('#map_shalarth_nontch').prop('disabled', false);
                    $('#map_shalarth_nontch').css("background", "gradient( linear, left top, left bottom, color-stop(5%, #FFFACB), color-stop(100%, #FDE28D))");
                }
            }
            else
            {
                $('#unmap_nontchr').prop('disabled', true);
                $('#unmap_nontchr').css("background", "rgba(191, 191, 188, 0.6)");
            }
        });
    });
    $('.myfoo_udise').click(function () {

        $mapFlag2 = 0;
        if ($('.myfoo_udise').is(':checked')) {
            $mapFlag2 = 1;
            JQUERY4U.map_tch_btn();
        }
        $udiseId = $(this).attr("id");
//        alert($udiseId);

        jQuery.post(window.webroot + 'Teachers/UdiseRecord', {$udiseId: $udiseId}, function (data) {
            $.each(data, function (key, val) {
                $.each(val, function (key, val) {
                    $.each(val, function (key, val) {
                        if (key === 'tchcd') {
                            jQuery('#TeacherTchrCodeUdise').val(val);
                        }
                        else if (key === 'tchname')
                        {
                            jQuery('#TeacherTechLnameUdise').val(val);
                        }
                        else if (key === 'dob')
                        {
                            var arr = val.split('-');
                            jQuery('#TeacherTchrDobUdise').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else if (key === 'sex')
                        {
                            if (val === 1)
                            {
                                jQuery('#TeacherTchrSexUdise').val('Male');
                            }
                            else if (val === 2)
                            {
                                jQuery('#TeacherTchrSexUdise').val('Female');
                            }
//                        else {
//                            jQuery('#TeacherTchrSexShala').val('Transgender');
//                        }
                        }
//                    else if (key === 'sex')
//                    {
//                        jQuery('#TeacherTchrSexUdise').val(val);
//                    }
                        else if (key === 'aadhaar')
                        {
                            jQuery('#TeacherTchrAadharUdise').val(val);
                        }
                        else if (key === 'tchcaste_desc') {
                            jQuery('#TeacherTchrCategoryUdise').val(val);
                        }
                        else if (key === 'tchcat_desc') {
                            jQuery('#TeacherTchrTypeUdise').val(val);
                        }
//                    else if (key === 'sanch_tch_id') {
//                        jQuery('#udise_sanch_post_id').val(val);
//                    }
                        else if (key === 'slno') {
                            jQuery('#tchr_udise_slno_hidden').val(val);
                        }
                        else if (key === 'tchappstatus_desc') {
                            jQuery('#TeacherTchrAppointmentUdise').val(val);
                        }
//                    else if (key === 'yoj') {
//                        jQuery('#TeacherTchrDtServiceUdise').val(val);
//                    }
                        else if (key === 'tchname') {
                            jQuery('#TeacherTchrCodeUdise').val(val);
                        }
                    });
                });
            });
            //$('#personal_dtl_div').html(data);
        }, 'json');
    });
    $('#map_tch').click(function () {
        $('#tchr_map_type').val("map");
        $flag = 1;
        $str = 'Err... Mapping is not possible as ';
        $shalarth_tchcd = $('#TeacherTchrCodeShala').val();
        $udise_tchcd = $('#TeacherTchrCodeUdise').val();
        $shalarth_tchname = $('#TeacherTchrLnameShala').val();
        $udise_tchname = $('#TeacherTechLnameUdise').val();
        $shalarth_tchdob = $('#TeacherTchrDobShala').val();
        $udise_tchdob = $('#TeacherTchrDobUdise').val();
        $shalarth_gender = $('#TeacherTchrSexShala').val();
        $udise_gender = $('#TeacherTchrSexUdise').val();
        if ($shalarth_tchdob.trim() == '' || $udise_tchdob.trim() == '') {
            alert("Err... Mappping is not Posssible.");
        }
        else {
            if ($shalarth_tchdob.trim() !== $udise_tchdob.trim()) {
                $('#tchr_map_type').val("misMatchGen");
                alert("\n Mismatch in The Teacher Birth Date.");
                alert("\n Your data has been forwarded to BEO for Correction of Data of Birth.");
                alert("\n Mapping of Teachers data in SHALARTH with the data in UDISE is done Successfully...");
                $("#TeacherMapShalarthForm").submit(); //mapTeacher()
            }
            else {
                $('#tchr_map_type').val("map");
                alert("\n Mapping of Teachers data in SHALARTH with the data in UDISE is done Successfully...");
                $("#TeacherMapShalarthForm").submit(); //mapTeacher()
            }
        }
//        $shalarth_tchname = $('#TeacherTchrLnameShala').val();
//        $udise_tchname = $('#TeacherTechLnameUdise').val();
//        $shalarth_tchname_small = $shalarth_tchname.toLowerCase();
//        $udise_tchname_small = $udise_tchname.toLowerCase();
//        var arr = $shalarth_tchname_small.split(' ');
//            alert(arr[2]);
//        alert($flag);
//        var s = $udise_tchname_small;
//            if (s.indexOf(arr[0]) >= 0 || s.indexOf(arr[1]) >= 0 || s.indexOf(arr[2]) >= 0)
//            {
//            if ($shalarth_tchdob.trim() !== $udise_tchdob.trim())

//            if ($shalarth_gender.trim() !== $udise_gender.trim())
//            {
//                $('#tchr_map_type').val("misMatchGen");
//                alert("Name are Matching But Gender Mismatch.");
//                $("#TeacherMapShalarthForm").submit(); //mapTeacher()
//            }
//            }

    });
    $('#exit_tch').click(function () {
        $url = "hm";
        $(location).attr('href', $url);
    });
    $('#exit_tch_beo').click(function () {
        $url = "beo";
        $(location).attr('href', $url);
    });
    $('#exit_tch_cluster').click(function () {
        $url = "clusterhead";
        $(location).attr('href', $url);
    });
    $('#exit_forward_personal_data').click(function () {
        $url = "clusterhead";
        $(location).attr('href', $url);
    });
    $('#exit_forward_all_data').click(function () {
        $url = "clusterhead";
        $(location).attr('href', $url);
    })
    $('#exit_tch_beo').click(function () {
        $url = "beo";
        $(location).attr('href', $url);
    });
    /*forward Details by Pravin*/
    $("#save_forwarded_personal_detail").click(function () {
        $("#TeacherForwardpersonalForm").submit(); //forwardPersonalDtlCluster()
    });
    $("#save_forwarded_all_detail").click(function () {
        $("#TeacherForwardalldataForm").submit(); //forwardAllDtlCluster()
    });
    /*Verify and Reject by ClusterHead by Pravin*/
    $("#personal_cluster").change(function () {
        var cluster_id = $('option:selected', this).val();
        jQuery.post('SelectpersonalCluster', {cluster_id: cluster_id}, function (data) {
            $('#school_info_cluster').html(data);
            $("#tchr_cluster_personal_fwd").change(function () {
                var tchr_id = $('option:selected', this).val();
                jQuery.post('personalClusterFwdForm', {tchr_id: tchr_id}, function (data) {
                    $('#cluster_fwd_form').html(data);
                });
            });
        });
    });
    $("#save_forward_personal_data").click(function () {
        $("#TeacherPersonalclusterheadForm").submit(); // save_forward_personal_data()
    });
    $("#all_cluster").change(function () {
        var schl_id = $('option:selected', this).val();
        if (schl_id == '') {
            $('#school_info_cluster_all').html('');
            $('#cluster_fwd_form_all').html('');
        }
        else {
            jQuery.post('SelectAllCluster', {schl_id: schl_id}, function (data) {
                $('#school_info_cluster_all').html(data);
                $("#tchr_cluster_all_fwd").change(function () {
                    var tchr_id = $('option:selected', this).val();
//                 alert(tchr_id);
                    if (tchr_id == '') {
                        $('#cluster_fwd_form_all').html('');
                    }
                    else {
                        jQuery.post('allClusterFwdForm', {tchr_id: tchr_id}, function (data) {
                            $('#cluster_fwd_form_all').html(data);
                        });
                    }

                });
            });
        }


    });
//    $("#save_forward_all_personal_data").click(function() {
//        $("#save_forward_all_personal_data_form").submit(); // save_forward_all_personal_data()
//    });
//    $("#save_forward_all_caste_cert_data").click(function() {
//        $("#save_forward_all_caste_cert_data_form").submit(); // save_forward_all_caste_cert_data()
//    });
//    $("#save_forward_all_caste_valid_cert_data").click(function() {
//        $("#save_forward_all_caste_valid_cert_data_form").submit(); // save_forward_all_caste_valid_cert_data()
//    });
    $("#save_forward_all_init_apt_dtl_data").click(function () {
        $("#save_forward_all_init_apt_dtl_data_form").submit(); // save_forward_all_init_apt_dtl_data()
    });
//    $("#save_forward_all_acad_qual_data").click(function() {
//        $("#save_forward_all_acad_qual_data_form").submit(); // save_forward_all_acad_qual_data()
//    });
//    $("#save_forward_all_prof_qual_data").click(function() {
//        $("#save_forward_all_prof_qual_data_form").submit(); // save_forward_all_prof_qual_data()
//    });
    $("#save_forward_all_serv_hist_data").click(function () {
        $("#save_forward_all_serv_hist_data_form").submit(); // save_forward_all_serv_hist_data()
    });

//    $("#save_forward_all_ph_data").click(function() {
//        $("#save_forward_all_ph_data_form").submit(); // save_forward_all_ph_data()
//    });


    $("#save_forward_all_family_dtl_data").click(function () {
        $("#save_forward_all_family_dtl_data_form").submit(); // save_forward_all_family_dtl_data()
    });
    $("#save_forward_all_nomi_original_data").click(function () {
        $("#save_forward_all_nomi_original_data_form").submit(); // save_forward_all_nomi_original_data()
    });
    $("#save_forward_all_nomi_alter_data").click(function () {
        $("#save_forward_all_nomi_alter_data_form").submit(); // save_forward_all_nomi_alter_data()
    });
    function myfunction(a) {
        var filed = 'nameEng' + a;
//   alert(filed);
        var strEngName = document.getElementById(filed).value;
//   alert(strEngName);
        var strEngArray = new Array();
        strEngArray = strEngName.split(" ");
        var str = '';
        for (i = 0; i < strEngArray.length; i++)
        {
            var temp = strEngArray[i];
            google.language.transliterate([strEngArray[i]], "en", "mr", function (result) {
                if (!result.error) {
                    var trans_id = 'nameMar' + a;
                    var container = document.getElementById(trans_id);
                    if (result.transliterations && result.transliterations.length > 0 && result.transliterations[0].transliteratedWords.length > 0) {


                        container.value = result.transliterations[0].transliteratedWords[0];
                        str = str + ' ' + container.value;
                    }
                    document.getElementById(trans_id).value = str;
                }

            }
            );
        }

        str = '';
        if (document.getElementById(filed).value.length < 0) {

            document.getElementById(trans_id).value = '';
        }
        document.getElementById(filed).value = document.getElementById(filed).value.replace(/^\s+|\s+$/g, '');
    }

//Pravin's Code End
    var subcaste = document.getElementById('subcst');
    var cdplace = document.getElementById('place');
    var cdremarks = document.getElementById('remarks');
    var cvdplace = document.getElementById('cplace');
    var cvdremarks = document.getElementById('cremarks');
    $('#subcst').change(function () {
        fun_blank(subcaste, 'Sub Caste');
        isAlpha(this.value, ' in Sub Caste');
        isAlphaNumeric(this.value, ' in Sub Caste');
        $("#subcst").focus();
    });
    $('#place').change(function () {

        fun_blank(cdplace, 'Place');
        isAlpha(this.value, ' in Place');
        isAlphaNumeric(this.value, ' in Place');
    });
    $('#remarks').change(function () {

        fun_blank(cdremarks, 'Remarks');
        isAlpha(this.value, ' in Remarks');
        isAlphaNumeric(this.value, ' in Remarks');
    });
    $('#cplace').change(function () {

        fun_blank(cvdplace, 'Place');
        isAlpha(this.value, ' in Place');
        isAlphaNumeric(this.value, ' in Place');
    });
    $('#cremarks').change(function () {
        fun_blank(cvdremarks, 'Remarks');
        isAlpha(this.value, ' in Remarks');
        isAlphaNumeric(this.value, ' in Remarks');
    });
    $("#cancel_tch").click(function () {
//    $(document.body).on('click', '#cancel_tch', function() {
        $("#row_shalaarth_second").hide();
        $("#row_shalaarth_first").show();
        $('#tch_udise_record').hide();
//    $('.myfoo_udise').prop('checked', false);
//    $('.myfoo_shalaarth').prop('checked', false);
        $("input[type=text]").val("");
        $('#unmap_nontchr').prop('disabled', true); //For non-teaching staff
        $('#unmap_nontchr').css("background", "rgba(191, 191, 188, 0.6)");
        $('#map_shalarth_nontch').prop('disabled', true); //For non-teaching staff
        $('#map_shalarth_nontch').css("background", "rgba(191, 191, 188, 0.6)");
        $('#cancel_tch').prop('disabled', true);
        $('#cancel_tch').css("background", "rgba(191, 191, 188, 0.6)");
    });
    $("#map_udise_tch").click(function () {
//$(document.body).on('click', '#map_udise_tch', function() { //Map only shalarth
        $('#tchr_map_type').val("map_only_udise");
        $("#TeacherMapShalarthForm").submit(); //mapTeacher()
    });
    $("#map_shalarth_nontch").click(function () {
//$(document.body).on('click', '#map_shalarth_nontch', function() { //Map only shalarth
        $('#tchr_map_type').val("map_only_shalarth_nontchr");
        $("#TeacherMapShalarthNonForm").submit(); //mapnonTeacher()

    });
//for map_shalarth.ctp end
    $("#forward_cluster_tch").click(function () {
//    $(document.body).on('click', '#forward_cluster_tch', function() {
        $("#TeacherForwardchForm").submit(); //mapTeacher()
    });
//UNMAPPPING
    $("#unmap_tch").click(function () {
//    $(document.body).on('click', '#unmap_tch', function() {
        $('#tchr_map_type').val("unmap");
        $flag = 1;
        $str = 'Err... Un-Mapping is not possible as ';
        $shalarth_tchcd = $('#TeacherTchrCodeShala').val();
        $udise_tchcd = $('#TeacherTchrCodeUdise').val();
        $shalarth_tchname = $('#TeacherTchrLnameShala').val();
        $udise_tchname = $('#TeacherTechLnameUdise').val();
        $shalarth_tchdob = $('#TeacherTchrDobShala').val();
        $udise_tchdob = $('#TeacherTchrDobUdise').val();
        $shalarth_gender = $('#TeacherTchrSexShala').val();
        $udise_gender = $('#TeacherTchrSexUdise').val();
        if ($shalarth_tchdob.trim() !== $udise_tchdob.trim())
        {
            $flag = 0;
            $str += '\n Mismatch in The Teacher Birth Date.';
        }
        if ($flag == 0)
        {
            $shalarth_tchname = $('#TeacherTchrLnameShala').val();
            $udise_tchname = $('#TeacherTechLnameUdise').val();
            $shalarth_tchname_small = $shalarth_tchname.toLowerCase();
            $udise_tchname_small = $udise_tchname.toLowerCase();
            var arr = $shalarth_tchname_small.split(' ');
            var s = $udise_tchname_small;
            if ($shalarth_tchdob.trim() !== $udise_tchdob.trim())
            {
//            $('#tchr_map_type').val("misMatchGen");
                alert("Name are Matching But Birth Date Mismatch.");
                $("#TeacherMapShalarthForm").submit(); //mapTeacher()
            }
            else {
                alert($str);
            }
        }
        else
        {
            alert("\n Un Mapping of Teachers data is done successfully...");
            $("#TeacherMapShalarthForm").submit(); //mapTeacher()
        }


    });
//for ummap_shalarth.ctp end
//    $(document.body).on('click', '#unmap_nontchr', function() {
    $("#unmap_nontchr").click(function () {
        $('#tchr_map_type').val("unmap_nontchr");
        alert("\n Un Mapping of Teachers data is done successfully...");
        $("#TeacherMapShalarthNonForm").submit(); //mapnonTeacher()
    });
    $("#update_tch_mast").click(function () {
//    $(document.body).on('click', '#update_tch_mast', function() {
        $("#TeacherUdiseformForm").submit(); //update_tchr_mast()
    });
//    $(document.body).on('change', '#tch_cls_taught', function() {
    $("#update_tch_mast").change(function () {
        $tch_cls_taught = $('#tch_cls_taught :selected').val();
        if ($tch_cls_taught >= 5) {
            $('#tch_trnBrc').val('0');
            $('#tch_trnCrc').val('0');
            $('#tch_rrn_diet').val('0');
            $('#tch_trn_Other').val('0');
            $("#tch_trnBrc").prop("disabled", true);
            $("#tch_trnCrc").prop("disabled", true);
            $("#tch_rrn_diet").prop("disabled", true);
            $("#tch_trn_Other").prop("disabled", true);
        }
        else
        {
            $('#tch_trnBrc').val('');
            $('#tch_trnCrc').val('');
            $('#tch_rrn_diet').val('');
            $('#tch_trn_Other').val('');
            $("#tch_trnBrc").prop("disabled", false);
            $("#tch_trnCrc").prop("disabled", false);
            $("#tch_rrn_diet").prop("disabled", false);
            $("#tch_trn_Other").prop("disabled", false);
        }
    });
// virochan module strt
    $("#maped_nontch_id").change(function () {
//$(document.body).on('change', '#maped_nontch_id', function() {

        $("#shalaudisesc").hide();
        $("#shalaudisetchtype").hide();
        $("#shalaudisenapp").hide();
        $("#textfield11").hide();
        $("#textfield10").show();
        $("#textfield8").show();
        $("#textfield9").show();
        $tchcdw = $('#maped_nontch_id :selected').val();
        $("input[type=text]").val("");
        $('#shalaudisesccombo').val('');
        $('#shalaudisetchtypecombo').val('');
        $('#shalaudisenappcombo').val('');
        $('#tchrqualification').val('');
        $('#posts').val('');
        $('input:checkbox').removeAttr('checked');
        if ($tchcdw !== '')
        {
            $.ajax({
                url: 'nonteachingcombo',
                type: 'POST',
                dataType: 'json',
                data: {'tchcdw': $tchcdw},
                success: function (data) {

                    $.each(data, function (key, val) {
                        $.each(val, function (key, val) {
                            $.each(val, function (key, val) {
                                $.each(val, function (key, val) {


                                    if (key === 'dcps_emp_id') {

                                        jQuery('#tch_code_shala').val(val);
                                    }
                                    if (key === 'emp_name') {

                                        jQuery('#tch_lname_shala').val(val);
                                    }
                                    if (key === 'dob') {

                                        $shaladob = val;
                                        var arr = $shaladob.split('-');
                                        jQuery('#shala_dob').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                        jQuery('#textfield5').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                    }

                                    if (key === 'gender') {

                                        jQuery('#shala_gen_hidden').val('');
                                        if (val === 'M')
                                        {
                                            jQuery('#shala_gen').val('Male');
                                            jQuery('#textfield6').val('Male');
                                        }
                                        else if (val === 'F')
                                        {
                                            jQuery('#shala_gen').val('Female');
                                            jQuery('#textfield6').val('Female');
                                        }

                                    }
                                    if (key === 'uid_no')
                                    {

                                        jQuery('#shala_aadhar').val(val);
                                    }
                                    if (key === 'qualification') {


                                        jQuery('#shala_tch_qual').val(val);
                                    }
                                    if (key === 'cell_no') {
                                        if (val) {
                                            val = val.substring(1, 10)
                                            jQuery('#shala_tch_cellno').val(val);
                                        }
                                    }
                                    if (key === 'email_id') {


                                        jQuery('#shala_tch_emailid').val(val);
                                    }


                                    if (key == 'tchr_id') {

                                        jQuery('#textfield1').val(val);
                                    }

                                    if (key === 'tchr_fname') {

                                        jQuery('#textfield2').val(val);
                                    }
                                    if (key === 'tchr_mname') {

                                        jQuery('#textfield3').val(val);
                                    }
                                    if (key === 'tchr_lname') {

                                        jQuery('#textfield4').val(val);
                                    }
                                    if (key === 'tchr_aadhar') {

                                        if (val) {

                                            var str1 = val.substr(0, 4);
                                            var str2 = val.substr(4, 4);
                                            var str3 = val.substr(8, 4);
                                            jQuery('#textfield7_1').val(str1);
                                            jQuery('#textfield7_21').val(str2);
                                            jQuery('#textfield7_31').val(str3);
                                        }

                                    }
                                    if (key === 'tchr_curr_post_mode') {

                                        if (val) {
                                            jQuery('#hiddencombonap').val(val.trim());
                                        } else {
                                            jQuery('#hiddencombonap').val('');
                                        }
                                    }
                                    if (key === 'tchr_sc') {

                                        if (val) {
                                            jQuery('#hiddencombotchsc').val(val.trim());
                                        }
                                        else {
                                            jQuery('#hiddencombotchsc').val('');
                                        }

                                    }
                                    if (key === 'tchr_curr_desg_cd') {

                                        if (val) {
                                            jQuery('#hiddencombotchtype').val(val.trim());
                                        } else {
                                            jQuery('#hiddencombotchtype').val('');
                                        }
                                    }
                                    if (key === 'tchr_mgmt_type') {

                                        if (val) {
                                            jQuery('#management_type_hidden').val(val);
                                        } else {
                                            jQuery('#management_type_hidden').val('');
                                        }
                                    }
                                    if (key === 'tchr_wrk_stat') {

                                        if (val) {
                                            jQuery('#tchr_wrk_staff_hidden').val(val);
                                        } else {
                                            jQuery('#tchr_wrk_staff_hidden').val('');
                                        }
                                    }

//                                    if (key === 'tq_qual_lvl') {
//
//                                        if (val) {
//                                            jQuery('#hiddentchqual').val(val);
//                                        } else {
//                                            jQuery('#hiddentchqual').val('');
//                                        }
//                                    }

                                    if (key === 'tc_mobile') {

                                        if (val) {
                                            jQuery('#textfield12').val(val.trim());
                                        } else {
                                            jQuery('#textfield12').val('');
                                        }
                                    }

                                });
                            });
                        });
                    });
                    var shalatchtype = document.getElementById('shala_type_tch').value;
                    //var udisetchtype = document.getElementById('udise_type_tch').value;
                    //alert(shalatchtype);
                    if (shalatchtype === '')
                    {
                        //alert("if");
                        $("#shalaudisetchtype").show();
                        $("#textfield9").hide();
                        //document.getElementById('shalaudisesc').style.display = ""; 
                    }
                    else {
                        //alert("else");
                        $("#shalaudisetchtype").hide();
                        $("#textfield9").show();
                    }
                    var shalasc = document.getElementById('shala_sc').value;
                    //var udisesc = document.getElementById('udise_sc').value;
                    if (shalasc == '')
                    {
                        //alert("hi123");
                        $("#shalaudisesc").show();
                        $("#textfield8").hide();
                        //document.getElementById('shalaudisesc').style.display = ""; 
                    }
                    var shalanapp = document.getElementById('shala_napp_tch').value;
                    //var udisenapp = document.getElementById('udise_napp_tch').value;
                    if (shalanapp == '')
                    {

                        $("#shalaudisenapp").show();
                        $("#textfield10").hide();
                    }
//                    var qual = document.getElementById('textfield11').value;
//                    if (qual == '')
//                    {
//
//                        $("#shalaqual").show();
//                        $("#textfield11").hide();
//                    }
                    var tchrcombo = document.getElementById('hiddencombonap').value;
                    if (tchrcombo !== '')
                    {

                        document.getElementById('shalaudisenappcombo').value = tchrcombo;
                    }
                    var tchrtypecombo = document.getElementById('hiddencombotchtype').value;
                    if (tchrtypecombo !== '')
                    {

                        document.getElementById('shalaudisetchtypecombo').value = tchrtypecombo;
                    }
                    var tchrsccombo = document.getElementById('hiddencombotchsc').value;
                    if (tchrsccombo !== '')
                    {

                        document.getElementById('shalaudisesccombo').value = tchrsccombo;
                    }

//                    var tchrqualcombo = document.getElementById('hiddentchqual').value;
//                    if (tchrqualcombo !== '')
//                    {
//                        var qual = jQuery.trim(tchrqualcombo);
//                        document.getElementById('shalaqualcombo').value = qual;
//                    }
                    var tchrmgtypecombo = document.getElementById('management_type_hidden').value;
                    if (tchrmgtypecombo !== '')
                    {


                        document.getElementById('posts').value = tchrmgtypecombo;
                    }
                    var tchrwrktypecombo = document.getElementById('tchr_wrk_staff_hidden').value;
                    if (tchrwrktypecombo !== '')
                    {


                        document.getElementById('tchr_wrk_staff_id').value = tchrwrktypecombo;
                    }

                    if (data !== null) {

                    }
                }

            });
        }


    });
    $("#view").click(function () {
//$(document.body).on('click', '#view', function() {
//$url = "sanctionedpost";
        window.open("sanctionedpost");
    });
    $("#view_cluster").click(function () {
//$(document.body).on('click', '#view_cluster', function() {
        $abc = document.getElementById('hiddenelig').value;
        jQuery.post('clusterpdfschid', {abc: $abc}, function (data) {

        });
        window.open("clusterpdf");
    });
    $("#school_cluster").change(function () {
//$(document.body).on('change', '#school_cluster', function() {
        $cluster_id = $('#school_cluster :selected').val();
        $("#view_cluster").show();
        $("#hiddenelig").val($cluster_id);
        jQuery.post('SelectSchoolCluster', {$cluster_id: $cluster_id}, function (data) {
            $('#school_info_cluster').html(data);
        });
    });
//BEO
    $("#beogender").click(function () {
//$(document.body).on('click', '#beogender', function() {
        $('#beogender').click(function () {
            var abc = $('#beogender:checked').val();
            alert(abc);
            jQuery.post('reportsbeogender', {abc: abc}, function (data) {
                $('#gen_details').html(data);
            });
        });
    });
    $("#forward_beo_tch").click(function () {
//$(document.body).on('click', '#forward_beo_tch', function() {
        $("#TeacherClusterheadVerifyRejectForm").submit(); //mapTeacher()
    });
    $("#verfy_tch_beo").click(function () {
//$(document.body).on('click', '#verfy_tch_beo', function() {
        $("#TeacherBeoForm").submit(function () {
            event.preventDefault();
        });
        //frd BEO Verify
    });
    $("#verfy_tch_beo_gen").click(function () {
//    $(document.body).on('click', '#verfy_tch_beo_gen', function() {

        $("#TeacherUpdatetchgendobForm").submit(); //frd BEO Verify
    });
    $("#clusflag").change(function () {
        $clusflag = $('#clusflag :selected').val();
        jQuery.post('tchrtable', {clusflag: $clusflag}, function (data) {
            $('#tchrtable').html(data);
            $("#school_codew").change(function () {
                $schcdw = $('#school_codew :selected').val();
                jQuery.post('selecttchrsw', {schcdw: $schcdw}, function (data) {
                    $('#schcodew').html(data);
                    $("#teacher_codew").change(function () {
                        $("#teacher_codew").attr("disabled", true);
                        $("#gender").show();
                        $tchcdw = $('#teacher_codew :selected').val();
                        if ($tchcdw !== '')
                        {
                            $.ajax({
                                url: 'teacherswdata',
                                type: 'POST',
                                dataType: 'json',
                                data: {'tchcdw': $tchcdw},
                                success: function (data) {

                                    $.each(data, function (key, val) {
                                        $.each(val, function (key, val) {
                                            $.each(val, function (key, val) {
                                                $.each(val, function (key, val) {
                                                    if (key === 'dcps_emp_id') {

                                                        jQuery('#tch_code_shala').val(val);
                                                    }
                                                    if (key === 'emp_name') {

                                                        jQuery('#tch_lname_shala').val(val);
                                                    }
                                                    if (key === 'dob') {

                                                        var arr = val.split('-');
                                                        jQuery('#shala_dob').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                                    }
                                                    if (key === 'gender') {

                                                        jQuery('#shala_gen_hidden').val('');
                                                        if (val === 'M')
                                                        {
                                                            jQuery('#shala_gen').val('Male');
                                                            jQuery('#shala_gen').attr('data', val);
                                                        }
                                                        else if (val === 'F')
                                                        {
                                                            jQuery('#shala_gen').val('Female');
                                                            jQuery('#shala_gen').attr('data', val);
                                                        }

                                                    }
                                                    if (key === 'doj') {

                                                        $shaladt = val;
                                                        var array = val.split('-');
                                                        jQuery('#shala_yoj_tch').val(array[2] + "/" + array[1] + "/" + array[0]);
                                                    }
                                                    if (key === 'tchcd') {

                                                        jQuery('#tch_code_udise').val(val);
                                                    }
                                                    if (key === 'tchname') {

                                                        jQuery('#tch_lname_udise').val(val);
                                                    }
                                                    if (key === 'date_of_br') {

                                                        $udisedt = val;
                                                        var arry = val.split('-');
                                                        jQuery('#udise_dob').val(arry[2] + "/" + arry[1] + "/" + arry[0]);
                                                        //jQuery('#textfield5').val(arry[2] + "/" + arry[1] + "/" + arry[0]);
                                                    }
                                                   if (key === 'sex') {

                                                        jQuery('#udise_gen_hidden').val('');
                                                        jQuery('#udise_gen').attr('data', val);
                                                        if (val === 1)
                                                        {

                                                            jQuery('#udise_gen').val('Male');
                                                            //jQuery('#textfield6').val('Male');
                                                            //jQuery('#udise_gen').attr('data', val);

                                                        }
                                                        else if (val === 2)
                                                        {
                                                            jQuery('#udise_gen').val('Female');
                                                            //jQuery('#textfield6').val('Female');
                                                            //jQuery('#udise_gen').attr('data', val);

                                                        }

                                                    }
                                                    if (key == 'tchr_id') {

                                                        jQuery('#textfield1').val(val);
                                                    }

                                                    if (key === 'tchr_fname') {

                                                        jQuery('#textfield2').val(val);
                                                    }
                                                    if (key === 'tchr_mname') {

                                                        jQuery('#textfield3').val(val);
                                                    }
                                                    if (key === 'tchr_lname') {

                                                        jQuery('#textfield4').val(val);
                                                    }



                                                });
                                            });
                                        });
                                    });
                                    var shaladob = document.getElementById('shala_dob').value;
                                    var udisedob = document.getElementById('udise_dob').value;
                                    if (shaladob === udisedob)
                                    {
                                        document.getElementById('textfield5').value = shaladob;
                                    }
                                    else
                                    {
                                        document.getElementById('textfield5').value = '';
                                    }

                                    var shalagen = document.getElementById('shala_gen').value;
                                    var udisegen = document.getElementById('udise_gen').value;
                                    if (shalagen !== udisegen) {

                                        $("#gender").hide();
                                        $("#genselect").show();
                                    }
                                    else {

                                        document.getElementById('gendertxt').value = shalagen;
                                        $("#genselect").hide();
                                        $("#gendertxt").show();
                                    }
                                    if (data !== null) {

                                    }
                                }
                            });
                        }
                    });
                });
            });
        });
    });


    $("#cluster_code").change(function () {

//    $(document.body).on('change', '#cluster_code', function() {
        $cluster_id = $('#cluster_code :selected').val();
        jQuery.post('schoolcombo', {cluster_id: $cluster_id}, function (data) {
            $('#schdata').html(data);
        });
    });

    $("#school_code").change(function () {

//    $(document.body).on('change', '#school_code', function() {
        $cluster_id = $('#school_code :selected').val();
        alert($cluster_id);
        jQuery.post('SelectedSchooldata', {cluster_id: $cluster_id}, function (data) {
            $('#school_cluster_combo').html(data);
        });
    });



    $("#teacher_codew").change(function () {
//    $(document.body).on('change', '#teacher_codew', function() {

//$("#gendertxt").hide();
        $("#teacher_codew").attr("disabled", true);
        $("#gender").show();
        $tchcdw = $('#teacher_codew :selected').val();
        if ($tchcdw !== '')
        {

            $.ajax({
                url: 'teacherswdata',
                type: 'POST',
                dataType: 'json',
                data: {'tchcdw': $tchcdw},
                success: function (data) {

                    $.each(data, function (key, val) {
                        $.each(val, function (key, val) {
                            $.each(val, function (key, val) {
                                $.each(val, function (key, val) {


                                    if (key === 'dcps_emp_id') {

                                        jQuery('#tch_code_shala').val(val);
                                    }
                                    if (key === 'emp_name') {

                                        jQuery('#tch_lname_shala').val(val);
                                    }
                                    if (key === 'dob') {

                                        var arr = val.split('-');
                                        jQuery('#shala_dob').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                    }

                                    if (key === 'gender') {

                                        jQuery('#shala_gen_hidden').val('');
                                        if (val === 'M')
                                        {
                                            jQuery('#shala_gen').val('Male');
                                            jQuery('#shala_gen').attr('data', val);
                                        }
                                        else if (val === 'F')
                                        {
                                            jQuery('#shala_gen').val('Female');
                                            jQuery('#shala_gen').attr('data', val);
                                        }

                                    }
//                                    if (key === 'first_designation') {
//                                        
//                                        jQuery('#shala_type_tch').val(val);
//                                    }

                                    if (key === 'doj') {

                                        $shaladt = val;
                                        var array = val.split('-');
                                        jQuery('#shala_yoj_tch').val(array[2] + "/" + array[1] + "/" + array[0]);
                                    }




                                    if (key === 'tchcd') {

                                        jQuery('#tch_code_udise').val(val);
                                    }
                                    if (key === 'tchname') {

                                        jQuery('#tch_lname_udise').val(val);
                                    }
                                    if (key === 'date_of_br') {

                                        $udisedt = val;
                                        var arry = val.split('-');
                                        jQuery('#udise_dob').val(arry[2] + "/" + arry[1] + "/" + arry[0]);
                                        //jQuery('#textfield5').val(arry[2] + "/" + arry[1] + "/" + arry[0]);
                                    }

                                    if (key === 'sex') {

                                        jQuery('#udise_gen_hidden').val('');
                                        jQuery('#udise_gen').attr('data', val);
                                        if (val === 1)
                                        {

                                            jQuery('#udise_gen').val('Male');
                                            //jQuery('#textfield6').val('Male');
                                            //jQuery('#udise_gen').attr('data', val);

                                        }
                                        else if (val === 2)
                                        {
                                            jQuery('#udise_gen').val('Female');
                                            //jQuery('#textfield6').val('Female');
                                            //jQuery('#udise_gen').attr('data', val);

                                        }

                                    }
                                    if (key == 'tchr_id') {

                                        jQuery('#textfield1').val(val);
                                    }

                                    if (key === 'tchr_fname') {

                                        jQuery('#textfield2').val(val);
                                    }
                                    if (key === 'tchr_mname') {

                                        jQuery('#textfield3').val(val);
                                    }
                                    if (key === 'tchr_lname') {

                                        jQuery('#textfield4').val(val);
                                    }



                                });
                            });
                        });
                    });
                    var shaladob = document.getElementById('shala_dob').value;
                    var udisedob = document.getElementById('udise_dob').value;
                    if (shaladob === udisedob)
                    {
                        document.getElementById('textfield5').value = shaladob;
                    }
                    else
                    {
                        document.getElementById('textfield5').value = '';
                    }

                    var shalagen = document.getElementById('shala_gen').value;
                    var udisegen = document.getElementById('udise_gen').value;
                    if (shalagen !== udisegen) {

                        $("#gender").hide();
                        $("#genselect").show();
                    }
                    else {

                        document.getElementById('gendertxt').value = shalagen;
                        $("#genselect").hide();
                        $("#gendertxt").show();
                    }
                    if (data !== null) {

                    }
                }

            });
        }


    });

    $("#forward_cluster_tch").change(function () {
//    $(document.body).on('click', '#forward_cluster_tch', function() {
//alert("hi");
        $flag = 1;
        $str = ' ';
        $tchr_fname = $('#textfield2').val();
        $tchr_mname = $('#textfield3').val();
        $tchr_lname = $('#textfield4').val();
        $tchr_gen = $('#textfield6').val();
        $tchr_aadhar = $('#textfield7').val();
        $tchr_mobile = $('#textfield12').val();
        //alert($tchr_name);

//    if ($shalarth_tchcd.trim() !== $udise_tchcd.trim())
//    {
//        $flag = 0;
//        $str += '\n Mismatch in The Teacher Code.';
//    }
//    if ($tchr_fname =='')
//    {
//        $flag=0;
//        alert("First name should not be blank");
//        $("#textfield2").focus();
//        $('#textfield2').css('border-color', 'red');
//        return false;
//    }
//      if ($tchr_mname =='')
//    {
//        $flag=0;
//        alert("Middle name should not be blank");
//        $("#textfield3").focus();
//        $('#textfield3').css('border-color', 'red');
//        return false;
//    }
        if ($tchr_lname == '')
        {
            $flag = 0;
            alert("Last name should not be blank");
            $("#textfield4").focus();
            $('#textfield4').css('border-color', 'red');
            return false;
        }
//   
//    //alert($flag);
        if ($tchr_gen == '')
        {
            $flag = 0;
            alert("Gender should not be blank");
            $("#textfield6").focus();
            $('#textfield6').css('border-color', 'red');
            return false;
        }
        if ($tchr_aadhar == '')
        {
            $flag = 0;
            alert("Aadhar card no. should not be blank");
            $("#textfield7").focus();
            $('#textfield7').css('border-color', 'red');
            return false;
        }
//    if ($tchr_joy == '')
//    {
//        $flag = 0;
//        alert("Joining date in Service should not be blank");
//        $("#textfield32").focus();
//        $('#textfield32').css('border-color', 'red');
//        return false;
//    }
        if ($tchr_mobile.length < 10)
        {
            $flag = 0;
            alert("Mobile Number should not be less than 10-digits.");
            $("#textfield12").focus();
            $('#textfield12').css('border-color', 'red');
            return false;
        }

        if ($tchr_mobile.length > 10)
        {
            $flag = 0;
            alert("Mobile Number should not be greater than 10-digits.");
            $("#textfield12").focus();
            $('#textfield12').css('border-color', 'red');
            return false;
        }

        else
        {
//alert("\n Un Mapping of Teachers data is done successfully...");
            $("#TeacherForwardchForm").submit(); //mapTeacher()

        }

    });

    $("#update_tch_mast").click(function () {

//    $(document.body).on('click', '#update_tch_mast', function() {
        $("#TeacherUdiseformForm").submit(); //update_tchr_mast()
    });

    $("#Go").click(function () {
        var tchr_type = $('#tchr_type:checked').val();
        jQuery.post('go', {tchr_type: tchr_type}, function (data) {
            $('#all_gender_report').html(data);
            $("#all_gender tbody").delegate("tr", "click", function () {
                var schl_id = $(this).attr('id');
                $("#all_gender td:nth-child(2)").live("click", function () {
                    jQuery.post('gender_list_report', {schl_id: schl_id, tchr_type: tchr_type}, function (data) {
                        $('#gender_list_report_div').html(data);
                    });
                });
                $("#all_gender td:nth-child(5)").live("click", function () {
                    jQuery.post('mapped_list_report', {schl_id: schl_id, asst_flag: 'U', tchr_type: tchr_type}, function (data) {
                        $('#mapped_list_report_div').html(data);
                    });
                });
            });
        });
    });
    $("#Go_pdf").click(function () {
        jQuery('#Go_pdf').val(new_tch_slno);
        jQuery.post('Go_pdf', {tchr_type: tchr_type}, function (data) {
        });
    });
// virochan module strt


    $("#Gobeo_pdf").click(function () {
        jQuery('#Go_pdf').val(new_tch_slno);
        jQuery.post('Go_pdf', {tchr_type: tchr_type}, function (data) {
        });
    });

    $("#Gocluster").click(function () {

        var tchr_type = $('#tchr_type:checked').val();
        var teaching_nonteaching = $('#tchr_type:checked').val();
        $('#tchr_gender_report_wrapper').hide();
        jQuery.post('gocluster', {tchr_type: tchr_type}, function (data) {
//             $('#gender_list_clusterreport_div').show();
            $('#all_gender_report').html(data);
            $("#all_gender tbody").delegate("tr", "click", function () {
                var schl_id = $(this).attr('id');
                $("#all_gender td:nth-child(2)").live("click", function () {
                    jQuery.post('gender_clusterlist_report', {schl_id: schl_id, tchr_type: tchr_type}, function (data) {
                        $('#tchin_nontchin').val(teaching_nonteaching);
                        $('#tchr_type_gender').val(tchr_type);
                        $('#gender_list_clusterreport_div').html(data);
                    });
                    $('#gender_print_cluster').show();
                });
                $("#all_gender td:nth-child(5)").live("click", function () {
                    jQuery.post('mapped_list_report', {schl_id: schl_id, asst_flag: 'U', tchr_type: tchr_type}, function (data) {
                        $('#mapped_list_report_div').html(data);
                    });
                });
            });
        });
    });
    $("#Gobeo_pdf").click(function () {
        jQuery('#Go_pdf').val(new_tch_slno);
        jQuery.post('Go_pdf', {tchr_type: tchr_type}, function (data) {
        });
    });
//    $("#Gobeo").click(function() {
//
//        var tchr_type = $('#tchr_type:checked').val();
//        jQuery.post('gobeo', {tchr_type: tchr_type}, function(data) {
//            $('#all_gender_report').html(data);
//            $("#all_gender tbody").delegate("tr", "click", function() {
//                var schl_id = $(this).attr('id');
//                $("#all_gender td:nth-child(2)").live("click", function() {
//                    jQuery.post('gender_beolist_report', {schl_id: schl_id, tchr_type: tchr_type}, function(data) {
//                        $('#gender_list_report_div').html(data);
//                    });
//                });
//                $("#all_gender td:nth-child(5)").live("click", function() {
//                    jQuery.post('mapped_list_report', {schl_id: schl_id, asst_flag: 'U', tchr_type: tchr_type}, function(data) {
//                        $('#mapped_list_report_div').html(data);
//                    });
//                });
//            });
//        });
//    });
//    $("#Gobeo_pdf").click(function() {
//        jQuery('#Go_pdf').val(new_tch_slno);
//        jQuery.post('Go_pdf', {tchr_type: tchr_type}, function(data) {
//        });
//    });
    $("#Gogenhm").click(function () {

        var tchr_type = jQuery.trim($('#tchr_type_hm:checked').val());
        var tchr_gender_type = jQuery.trim($('#gentype').val());
        jQuery.post('gogenhm', {tchr_type: tchr_type, tchr_gender_type: tchr_gender_type}, function (data) {
            $('#all_genhm_report').html(data);
        });
    });
    $("#Gogenhm_pdf").click(function () {
        jQuery('#Go_pdf').val(new_tch_slno);
        jQuery.post('Go_pdf', {tchr_type: tchr_type}, function (data) {
        });
    });

    //forwardall start
    $('#overlay_srch').hide();
    $(".search_btn").each(function () {
        $(this).click(function () {
            var popupid = $(this).attr('id');
            jQuery.post('popupformhm', {popupid: popupid}, function (data) {

                $('#popupform').html(data);
                $('#overlay_srch').show();
                $('#exit_search').click(function () {
                    $("#overlay_srch").hide();
                });
            });
        });
    });
    //forwardall end
    $("#service_delete").click(function () {

        var sid = $('#servicehistoryTchrid').val();
        alert(sid);
        if (sid != '') {
            if (window.confirm("Are you sure want to delete Record ?")) {
                jQuery.post('deleteserviceid', {srid: sid}, function (data) {
                    $('#serviceHistory').trigger('click');
//                        if (data == 'error') {
//                            alert("Record present in Nomination. \n Record can not be deleted ..");
//                        } else {
//                            $('#family').trigger('click');
                    alert("Record deleted Succesfully.");
//                        }

                });
            }
        }
    });

    $("#Gobeo").click(function () {

        var tchr_type = $('#tchr_type:checked').val();
        jQuery.post('gobeo', {tchr_type: tchr_type}, function (data) {
            alert("gobeo");
            $('#all_gender_report').html(data);
            $("#all_gender tbody").delegate("tr", "click", function () {
                alert("all gender 1");
                var schl_id = $(this).attr('id');
//                $("#all_gender td:nth-child(2)").live("click", function() {
//                    alert("all gender 2");
                jQuery.post('gender_beolist_report', {schl_id: schl_id, tchr_type: tchr_type}, function (data) {
                    $('#gender_list_report_div').html(data);
                });
//                });
//                $("#all_gender td:nth-child(5)").live("click", function() {
//                    jQuery.post('mapped_list_report', {schl_id: schl_id, asst_flag: 'U', tchr_type: tchr_type}, function(data) {
//                        $('#mapped_list_report_div').html(data);
//                    });
//                });
            });
        });
    });


//  //forwardall start
//    $('#overlay_srch_school_help').hide();
//    $(".search_btn_school_help").each(function() {
//        $(this).click(function() {
//            var popupid = $(this).attr('id');
//            jQuery.post('popupformshoolhelp', {popupid: popupid}, function(data) {
//                $('#popupformschoolhelp').html(data);
//                $('#overlay_srch').show();
//                $('#exit_search').click(function() {
//                    $("#overlay_srch").hide();
//                });
//            });
//        });
//    });
//    //forwardall end

}); //on body close

$(document).ready(function () {
    $("#shalaudisesc").hide();
    $("#shalaudisetchtype").hide();
    $("#shalaudisenapp").hide();
    $("#tchrqualcombo").hide();
    $("#textfield10").show();
    $("#textfield8").show();
    $("#textfield9").show();
    $('#maped_tch_id').change(function () {
        var fno = jQuery.trim($('#maped_tch_id').val());
        $("input[type=text]").val("");
        $('#shalaudisesccombo').val('');
        $('#shalaudisetchtypecombo').val('');
        $('#shalaudisenappcombo').val('');
        $('#tchrqualification').val('');
        $('#posts').val('');
        $('input:checkbox').removeAttr('checked');
        var tchr_id = fno.substr(0, 7);
        if (tchr_id !== '') {

            jQuery('#textfield1').val(tchr_id);
        }

        if (fno !== '')
        {
            $.ajax({
                url: 'TeachrsCombo',
                type: 'POST',
                dataType: 'json',
                data: {'teacher_id': fno},
                success: function (data) {

                    caste = '';
                    category = '';
                    sex = '';
                    noa = '';
                    $.each(data, function (key, val) {
                        $.each(val, function (key, val) {
                            $.each(val, function (key, val) {
                                $.each(val, function (key, val) {



                                    if (key === 'dcps_emp_id') {

                                        jQuery('#tch_code_shala').val(val);
                                    }
                                    if (key === 'emp_name') {

                                        jQuery('#tch_lname_shala').val(val);
                                    }
                                    if (key === 'dob') {

                                        var arr = val.split('-');
                                        jQuery('#shala_dob').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                        jQuery('#textfield5').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                    }

                                    if (key === 'gender') {

                                        jQuery('#shala_gen_hidden').val('');
                                        if (val === 'M')
                                        {
                                            jQuery('#shala_gen').val('Male');
                                            jQuery('#shala_gen').attr('data', val);
                                            jQuery('#textfield6').val('Male');
                                        }
                                        else if (val === 'F')
                                        {
                                            jQuery('#shala_gen').val('Female');
                                            jQuery('#shala_gen').attr('data', val);
                                            jQuery('#textfield6').val('Female');
                                        }

                                    }
                                    if (key === 'eid_no') {

                                        jQuery('#shala_eid_aadhar').val(val);
                                    }
                                    if (key === 'uid_no') {

                                        jQuery('#shala_aadhar').val(val);
                                    }
                                    if (key === 'doj') {

                                        var arr = val.split('-');
                                        jQuery('#shala_yoj_tch').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                    }

                                    if (key === 'qualification') {


                                        jQuery('#shala_tch_qual').val(val);
                                    }
                                    if (key === 'cell_no') {

                                        if (val) {
                                            val = val.substring(0, 10)
                                            jQuery('#shala_tch_cellno').val(val);
                                        }
                                    }
                                    if (key === 'email_id') {


                                        jQuery('#shala_tch_emailid').val(val);
                                    }


                                    if (key === 'tchcd') {

                                        jQuery('#tch_code_udise').val(val);
                                    }
                                    if (key === 'tchname') {

                                        jQuery('#tch_lname_udise').val(val);
                                    }
                                    if (key === 'date_of_br') {

                                        var arr = val.split('-');
                                        jQuery('#udise_dob').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                        jQuery('#textfield5').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                    }

                                    if (key === 'sex') {

                                        jQuery('#udise_gen_hidden').val('');
                                        jQuery('#udise_gen').attr('data', val);
                                        if (val === 1)
                                        {

                                            jQuery('#udise_gen').val('Male');
                                            jQuery('#textfield6').val('Male');
                                            //jQuery('#udise_gen').attr('data', val);

                                        }
                                        else if (val === 2)
                                        {
                                            jQuery('#udise_gen').val('Female');
                                            jQuery('#textfield6').val('Female');
                                            //jQuery('#udise_gen').attr('data', val);

                                        }

                                    }
                                    else if (key === 'aadhaar')
                                    {

                                        jQuery('#udise_aadhar').val(val);
                                    }
                                    else if (key === 'tchcaste_desc') {
                                        jQuery('#udise_sc').val(val);
                                        jQuery('#udise_sc').attr('data', caste);
                                    }
                                    else if (key === 'tchcat_desc') {
                                        jQuery('#udise_type_tch').val(val);
                                        jQuery('#udise_type_tch').attr('data', category);
                                    }
                                    else if (key === 'tchappstatus_desc') {
                                        jQuery('#udise_napp_tch').val(val);
                                        jQuery('#udise_napp_tch').attr('data', noa);
                                    }
                                    if (key === 'yoj') {

                                        jQuery('#udise_yoj_tch').val(val);
                                    }
                                    if (key === 'caste') {

                                        caste = val;
                                        jQuery('#udise_sc_hidden').val('');
                                    }
                                    if (key === 'category') {

                                        category = val;
                                        jQuery('#udise_type_tch_hidden').val('');
                                    }

                                    if (key === 'post_status') {

                                        noa = val;
                                        jQuery('#udise_napp_tch_hidden').val('');
                                    }
                                    if (key === 'tchaqual_desc') {


                                        jQuery('#udise_tch_qual').val(val);
                                    }
                                    if (key === 'tchaqual_desc') {

                                        nap = val;
                                        jQuery('#shalaudisenapp').val(val);
                                    }

                                    if (key === 'tchr_fname') {

                                        // alert(key);
                                        //alert(val);
                                        jQuery('#textfield2').val(val);
                                    }
                                    if (key === 'tchr_mname') {

                                        jQuery('#textfield3').val(val);
                                    }
                                    if (key === 'tchr_lname') {


                                        jQuery('#textfield4').val(val);
                                    }


                                    if (key === 'tchr_gender') {

                                        if (val) {
                                            jQuery('#gen_select').val(val);
//                                        if (val === '1') {
//                                            jQuery('#textfield6').val('Male');
//                                        } else
//                                        {
//                                            jQuery('#textfield6').val('Female');
                                        }
                                    }
                                    if (key === 'tchr_aadhar') {

                                        if (val) {
                                            var str1 = val.substr(0, 4);
                                            var str2 = val.substr(4, 4);
                                            var str3 = val.substr(8, 4);
                                            jQuery('#textfield7_1').val(str1);
                                            jQuery('#textfield7_21').val(str2);
                                            jQuery('#textfield7_31').val(str3);
                                            jQuery('#textfield17').prop('disabled', true);
                                        }
                                    }
                                    if (key === 'tchr_eid') {

                                        if (val) {
                                            jQuery('#textfield17').val(val);
                                            jQuery('#textfield7_1').prop('disabled', true);
                                            jQuery('#textfield7_21').prop('disabled', true);
                                            jQuery('#textfield7_31').prop('disabled', true);
                                        } else {
                                            jQuery('#textfield17').val('');
                                        }
                                    }
                                    if (key === 'tchr_curr_post_mode') {

                                        if (val) {
                                            jQuery('#hiddencombonap').val(val.trim());
                                        } else {
                                            jQuery('#hiddencombonap').val('');
                                        }
                                    }
                                    if (key === 'tchr_sc') {

                                        if (val) {
                                            jQuery('#hiddencombotchsc').val(val.trim());
                                        }
                                        else {
                                            jQuery('#hiddencombotchsc').val('');
                                        }

                                    }
                                    if (key === 'tchr_curr_desg_cd') {

                                        if (val) {
                                            jQuery('#hiddencombotchtype').val(val.trim());
                                        } else {
                                            jQuery('#hiddencombotchtype').val('');
                                        }
                                    }
                                    if (key === 'tchr_mgmt_type') {

                                        if (val) {
                                            jQuery('#management_type_hidden').val(val);
                                        } else {
                                            jQuery('#management_type_hidden').val('');
                                        }
                                    }
                                    if (key === 'tchr_wrk_stat') {

                                        if (val) {
                                            jQuery('#tchr_wrk_staff_hidden').val(val);
                                        } else {
                                            jQuery('#tchr_wrk_staff_hidden').val('');
                                        }
                                    }
                                    if (key === 'tchr_eligibility') {

                                        if (val) {
                                            jQuery('#tchr_elig_type_hidden').val(val);
                                        } else {
                                            jQuery('#tchr_elig_type_hidden').val('');
                                        }
                                    }


                                    if (key === 'tq_qual_lvl') {

                                        if (val) {
                                            jQuery('#hiddentchqual').val(val.trim());
                                        } else {
                                            jQuery('#hiddentchqual').val('');
                                        }
                                    }
                                    if (key === 'tc_mobile') {

                                        if (val) {
                                            jQuery('#textfield12').val(val.trim());
                                        } else {
                                            jQuery('#textfield12').val('');
                                        }
                                    }
                                    if (key === 'tc_email_part1') {

                                        if (val) {

                                            jQuery('#textfield13').val(val.trim());
                                        } else {
                                            jQuery('#textfield13').val('');
                                        }
                                    }
                                    if (key === 'tc_email_part2') {

                                        if (val) {

                                            jQuery('#textfield14').val(val.trim());
                                        } else {
                                            jQuery('#textfield14').val('');
                                        }
                                    }

                                });
                            });
                        });
                    });
                    var shalatchtype = document.getElementById('shala_type_tch').value;
                    var udisetchtype = document.getElementById('udise_type_tch').value;
                    //alert(shalatchtype);
                    if (shalatchtype === '' || udisetchtype === '')
                    {
                        //alert("if");
                        $("#shalaudisetchtype").show();
                        $("#textfield9").hide();
                        //document.getElementById('shalaudisesc').style.display = ""; 
                    }
                    else {
                        //alert("else");
                        $("#shalaudisetchtype").hide();
                        $("#textfield9").show();
                    }
                    var shalasc = document.getElementById('shala_sc').value;
                    var udisesc = document.getElementById('udise_sc').value;
                    if (shalasc == '' || udisesc == '')
                    {
                        // alert("hi123");
                        $("#shalaudisesc").show();
                        $("#textfield8").hide();
                        //document.getElementById('shalaudisesc').style.display = ""; 
                    }
                    var shalanapp = document.getElementById('shala_napp_tch').value;
                    var udisenapp = document.getElementById('udise_napp_tch').value;
                    if (shalanapp == '' || udisenapp == '')
                    {

                        $("#shalaudisenapp").show();
                        $("#textfield10").hide();
                    }
//                        var qual = document.getElementById('textfield11').value;
//                        if (qual == '')
//                        {
//
//                            $("#tchrqualcombo").show();
//                            $("#textfield11").hide();
//                        }
                    var tchrcombo = document.getElementById('hiddencombonap').value;
                    if (tchrcombo !== '')
                    {

                        document.getElementById('shalaudisenappcombo').value = tchrcombo;
                    }
                    var tchrtypecombo = document.getElementById('hiddencombotchtype').value;
                    if (tchrtypecombo !== '')
                    {

                        document.getElementById('shalaudisetchtypecombo').value = tchrtypecombo;
                    }
                    var tchrsccombo = document.getElementById('hiddencombotchsc').value;
                    if (tchrsccombo !== '')
                    {

                        document.getElementById('shalaudisesccombo').value = tchrsccombo;
                    }

//                        var tchrqualcombo = document.getElementById('hiddentchqual').value;
//                        if (tchrqualcombo !== '')
//                        {
//
//                            var tchrqualcombo = jQuery.trim(tchrqualcombo);
//                            document.getElementById('tchrqualification').value = tchrqualcombo;
//                        }
                    var tchrmgtypecombo = document.getElementById('management_type_hidden').value;
                    if (tchrmgtypecombo !== '')
                    {

                        document.getElementById('posts').value = tchrmgtypecombo;
                    }
                    var tchrwrktypecombo = document.getElementById('tchr_wrk_staff_hidden').value;
                    if (tchrwrktypecombo !== '')
                    {

                        document.getElementById('tchr_wrk_staff_id').value = tchrwrktypecombo;
                    }
                    var tchreligypecombo = document.getElementById('tchr_elig_type_hidden').value;
                    if (tchreligypecombo !== '')
                    {

                        document.getElementById('tchr_elig_staff_id').value = tchreligypecombo;
                    }

                    if (data != null) {

                    }

                }


            });
        }

    });
});

//Pravin's Code Start
function convertDate(str) {
    var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
}
function NewTeacher() {
    $("#new_tch_slno").change(function () {
        var new_tch_slno = $('#new_tch_slno :selected').val();
        var udise_code = $('#TeacherUdiseCode').val();
        $('#map_udise_tch_only').prop('disabled', false);
        $('#map_udise_tch_only').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
        $('#udise_code_search').prop('disabled', true);
//        alert(udise_code);
//        alert(new_tch_slno);

        jQuery('#tchr_udise_slno_hidden').val(new_tch_slno);
        jQuery.post('NewTeacherInfo', {new_tch_slno: new_tch_slno, udise_code: udise_code}, function (data) {
//            alert(data[0][0][0]['tchcd']);
//            $.each(data[0], function (keyy, vall) {
//                $.each(vall, function (key1, val1) {
//                    $.each(vall, function (key2, val2) {
//                        $.each(val2, function (key3, val3) {
            if (data[0][0][0][0] != '')
                $.each(data[0][0][0][0], function (key, val) {
//                            alert(val);
                    if (key === 'tchcd') {
                        jQuery('#tchr_code_udise').val(val);
                    }
                    else if (key === 'tchname')
                    {
                        jQuery('#tech_lname_udise').val(val);
                    }
                    else if (key === 'dob')
                    {
                        var arr = val.split('-');
                        jQuery('#tchr_dob_udise').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                    }
                    else if (key === 'sex')
                    {
                        if (val === 1)
                        {
                            jQuery('#tchr_sex_udise').val('Male');
                        }
                        else if (val === 2)
                        {
                            jQuery('#tchr_sex_udise').val('Female');
                        }
                    }
                    else if (key === 'aadhaar')
                    {
                        jQuery('#tchr_aadhar_udise').val(val);
                    }
                    else if (key === 'tchcaste_desc') {
                        jQuery('#tchr_category_udise').val(val);
                    }
//                            else if (key === 'sanch_tch_id') {
//                                jQuery('#tchr_udise_sanch_post_id_hidden').val(val);
//                            }
                    else if (key === 'category') {
                        jQuery('#tchr_post_cd_udise').val(val);
                    }

                    else if (key === 'tchcat_desc') {
                        jQuery('#tchr_type_udise').val(val);
                    }
                    else if (key === 'tchappstatus_desc') {
                        jQuery('#tchr_appointment_udise').val(val);
                    }
//                            else if (key === 'tchname') {
//                                jQuery('#tchr_map_type').val(val);
//                            }
                });
            if (data[1][0]['err'] != '' && data[1][0]['err'] != undefined) {
                if (confirm("NO shalarth data available for the selected staff you can map any udise data.")) {

                }
            }
        }, 'json');
    });

    $("#new_tch_shalarth_id").change(function () {
        var udise_code = $('#TeacherUdiseCode').val();
        $('#map_udise_tch_only').prop('disabled', false);
        $('#udise_code_search').prop('disabled', true);
        var new_tch_shalarth_id = $('#new_tch_shalarth_id :selected').val();
        jQuery('#searchShalarthTchrId').val('');
//         alert(new_tch_shalarth_id);
        jQuery.post('NewTeacherShalarthInfo', {udise_code: udise_code, new_tch_shalarth_id: new_tch_shalarth_id}, function (data) {
//            alert(486);
            $.each(data, function (key, val) {
                $.each(val, function (key, val) {
                    $.each(val, function (key, val) {
                        $.each(val, function (key, val) {


                            if (key === 'sevarth_id') {
                                jQuery('#dcps_emp_id').val(val);
                            }
                            else if (key === 'emp_name') {
                                jQuery('#tchr_lname_shala').val(val);
                            }
                            else if (key === 'dob') {
                                var arr = val.split('-');
                                jQuery('#tchr_dob_shala').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                            }
                            else if (key === 'gender') {
                                if (val === 'M')
                                {
                                    jQuery('#tchr_sex_shala').val('Male');
                                }
                                else if (val === 'F')
                                {
                                    jQuery('#tchr_sex_shala').val('Female');
                                }
                            }
                            else if (key === 'desig_desc') {
                                jQuery('#tchr_post_shala_desc').val(val);
                            }
                            else if (key === 'designation') {
                                jQuery('#tchr_post_shala_cd').val(val);
                            }
                            else if (key === 'sanch_tch_id') {
                                jQuery('#tchr_post_sanch_cd').val(val);
                            }
                            else if (key === 'ddo_code') {
                                jQuery('#tchr_ddo_code_shala').val(val);
                            }
//                            else if (key === 'dice_code') {
//                                jQuery('#dice_code').val(val);
//                            }

                        });
                    });
                });
            });
        }, 'json');
    });

    $("#shalarth_tchr_by_id_search").click(function () {
        var ShalarthTchrCode = $('#searchShalarthTchrId').val();
        jQuery('#new_tch_shalarth_id').val('');
//        alert(ShalarthTchrCode); 
        jQuery.post('ShalarthTchrSearch', {ShalarthTchrCode: ShalarthTchrCode}, function (data) {
            $.each(data, function (key, val) {
                $.each(val, function (key, val) {
                    $.each(val, function (key, val) {
                        $.each(val, function (key, val) {
                            if (key === 'sevarth_id') {
                                jQuery('#dcps_emp_id').val(val);
                            }
                            else if (key === 'emp_name') {
                                jQuery('#tchr_lname_shala').val(val);
                            }
                            else if (key === 'dob') {
                                var arr = val.split('-');
                                jQuery('#tchr_dob_shala').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                            }
                            else if (key === 'gender') {
                                if (val === 'M')
                                {
                                    jQuery('#tchr_sex_shala').val('Male');
                                }
                                else if (val === 'F')
                                {
                                    jQuery('#tchr_sex_shala').val('Female');
                                }
                            }
                            else if (key === 'desig_desc') {
                                jQuery('#tchr_post_shala_desc').val(val);
                            }
                            else if (key === 'designation') {
                                jQuery('#tchr_post_shala_cd').val(val);
                            }
                            else if (key === 'sanch_tch_id') {
                                jQuery('#tchr_post_sanch_cd').val(val);
                            }
                            else if (key === 'ddo_code') {
                                jQuery('#tchr_ddo_code_shala').val(val);
                            }
//                            else if (key === 'dice_code') {
//                                jQuery('#dice_code').val(val);
//                            }

                        });
                    });
                });
            });
        }, 'json');
    });


//    $("#shalarth_tchr_by_id_search").click(function() {
//        $('#seleted_shalarth_teacher').hide();
//        $('#dcps_emp_id').val('');
//        $('#tchr_lname_shala').val('');
//        $('#tchr_dob_shala').val('');
//        $('#tchr_sex_shala').val('');
//        $('#tchr_aadhar_shala').val('');
//        $('#tchr_category_shala').val('');
//        $('#tchr_post_shala_desc').val('');
//        $('#tchr_appointment_shala').val('');
//        $('#tchr_ddo_code_shala').val('');
//    });


}
function fun_blank(field, ferr) {
    field.value = field.value.replace(/\r/g, " ");
    field.value = field.value.replace(/'/g, "");
    field.value = field.value.replace(/ +/g, " ");
    field.value = field.value.replace(/^\s/g, "");
    field.value = field.value.replace(/\s$/g, "");
    if ((field.value == "")) {
        alert(ferr + ' should not be Blank');
        field.focus();
        return false;
    }
    else
    {
        return true;
    }

}
function isAlpha(txt, errormsg) {
    return ValidString(txt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', errormsg);
}
function isNumeric(txt) {
    return ValidString(txt, '0123456789');
}
function isAlphaNumeric(txt) {
    return ValidString(txt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
}
function ValidString(ChkString, ValidString, errormsg) {
    for (i = 0; i < ChkString.length; i++)
    {
        if (ValidString.indexOf(ChkString.substring(i, i + 1)) == -1)
        {
            alert("Enter only Characters" + errormsg);
            return false;
        }
    }
    return true;
}

$(document).ajaxComplete(function () {
//   alert("TESTING");
    commonDatepicker();
    validationCommen();
//    qualification();
//    profqualification();
});
// virochan module end
