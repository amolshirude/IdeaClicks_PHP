window.tchr_id = '';
window.asst_flag_personal = '';
window.clus_remarks_personal = '';
window.asst_flag_pay_pf = '';
window.TchrSevakFlag = '';
window.GisGroupOptions = '';
window.PayScaleOptions = '';
window.AccountMaintainedByOptions = '';
window.CurrentGISGroupOptions = '';
window.tchr_serv_entry_dt_post = '';
window.above_12_sen_dt = 0;
window.below_12_sen_dt = 0;
window.above_24_sel_dt = 0;
window.below_24_sel_dt = 0;
window.TchrDesigPayFlag = '';
window.TchrPCValue = '';
$(document).ready(function() {
//    $('#tchr_staff').prop('disabled', true);
//      $('#cancel_tchr_staff').prop('disabled', true);

    $("#leftmenu").hide();
    $("#maincontent").hide();
    $('#search_b').hide();
    /*Pravin */
    $("#sixthPay").hide();
    $("#new_recruitment_tch").click(function() {
//        var tchrCode = $('#tchr_id :selected').val();
        $("#leftmenu").show();
//        var arr = tchrCode.split(':');
//        var tchrId = arr[0];
//        var tchrType = arr[1];
        var tchr_recruitment_type = "newRecuritment";
//        jQuery('#tchr_id_hidden').val(tchrId);
//        jQuery('#tchr_type_hidden').val(tchrType);
        jQuery('#tchr_recruitment_type_hidden').val(tchr_recruitment_type);
        $('#tchr_id').prop('disabled', true);
        $('#tchr_staff').prop('disabled', true);
        $('#cancel_tchr_staff').prop('disabled', false);
    });
    $("#tchr_staff").click(function() {
        var tchrCode = $('#tchr_id :selected').val();
        if (tchrCode == '')
            alert("Select Teacher.");
        else {
//            alert("inside1");
            $("#leftmenu").show();
            var arr = tchrCode.split(':');
//            alert(arr);
            var tchrId = arr[0];
            var tchrType = arr[1];
            var tchr_udise_apt_type = arr[2].trim();
//            alert(tchrId +"    "+tchrType +"   "+tchr_udise_apt_type);

            var tchr_recruitment_type = "regular";
            jQuery('#tchr_id_hidden').val(tchrId);
            jQuery('#tchr_type_hidden').val(tchrType);
            jQuery('#tchr_recruitment_type_hidden').val(tchr_recruitment_type);
            jQuery('#tchr_udise_apt_type').val(tchr_udise_apt_type);
            $('#tchr_id').prop('disabled', true);
            $('#tchr_staff').prop('disabled', true);
            $('#cancel_tchr_staff').prop('disabled', false);
            $('#search_b').show();
//            $('#cancel_tchr_staff').css("background","linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
        }
    });
    $("#cancel_tchr_staff").click(function() {
        $("#leftmenu").hide();
        $("#maincontent").hide();
        var tchr_type_hidden = $("#tchr_type_hidden").val();
        if (tchr_type_hidden == '1')
        {
            var url = "teaching";
        }
        else if (tchr_type_hidden == '2')
        {
            var url = "nonteaching_staff";
        }
        jQuery('#tchr_id').val('');
        jQuery('#tchr_id_hidden').val('');
        $('#subcontent').hide(1000);
        $('#tchr_id').prop('disabled', false);
        $('#tchr_staff').prop('disabled', false);
        $('#cancel_tchr_staff').prop('disabled', true);
        $('#cancel_tchr_staff').css("background", "rgba(39, 120, 137, 0.6)");
        $(location).attr('href', url);
    });
    /*-----------------------------------------------Pravin Start-------------------------------------------------------------------*/
    $("#personalDtl1").click(function() {
        $("#maincontent").show();
        var tchr_id = $("#tchr_id_hidden").val();
        $('#overlay_personal').show();
//        alert(window.webroot);
        jQuery.post(window.webroot + 'Teachers/personal', function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
            $('#overlay_personal').hide();
            $('#clus_remarks_tr').hide();
//            $('#subcontent').show(1000);
            NewPersonalDetails();
        });
    });
    $("#payDtl").click(function() {
        $("#maincontent").show();
        var tchr_id = $("#tchr_id_hidden").val();
        var tchr_type_hidden = $("#tchr_type_hidden").val();
        $('#overlay_personal').show();
        jQuery.post(window.webroot + 'Teachers/checkPersonalFilled', {tchr_id: tchr_id, tchr_type_hidden: tchr_type_hidden}, function(data) {
            if (data == 0)
            {
                jQuery.post(window.webroot + 'Teachers/posting', function(data) {
                    $('#subcontent').html("");
                    $('#subcontent').html(data);
                    $('#overlay_personal').hide();
                    //  All change effects after form(validaion + code)


                    $('#tp_pay_com_cd').change(function() {
                        var tchr_serv_entry_dt_post = $("#tchr_serv_entry_dt_post").val();
                        //alert(tchr_serv_entry_dt_post);
                        var tchr_serv_entry_dt_post_arr = tchr_serv_entry_dt_post.split('/');
                        var tchr_serv_entry_dt_post_arr_comp = tchr_serv_entry_dt_post_arr['2'] + "-" + tchr_serv_entry_dt_post_arr['1'] + "-" + tchr_serv_entry_dt_post_arr['0'];
                        //   alert(tchr_serv_entry_dt_post_arr_comp);             

                        var tp_pay_com_cd = $('#tp_pay_com_cd :selected').val();
                        if (tp_pay_com_cd == '12' || tp_pay_com_cd == '14') {
                            $("#sixthPay").show();
                            if (tchr_serv_entry_dt_post_arr_comp < '2005-11-01') {
//                                alert("PFFFFFFFFFF");
                                var tp_acct_type = 'G'
                            }
                            if (tchr_serv_entry_dt_post_arr_comp >= '2005-11-01') {
//                                alert("DCPS");
                                var tp_acct_type = 'D';
                            }

                            if (tp_acct_type == 'G') {//GPF
                                $("#series_td").text("PF Series");
                                $("#account_num_td").text("PF Account No.");
                                $("#ppan_pran_td").text("");
                                $('#tp_acct_type option[value=' + tp_acct_type + ']').attr("selected", "selected");
                                $("#tp_acct_type").click();
                                $('#tp_acct_type option[value="D"]').prop('disabled', true);
                                $('#tp_acct_type option[value="N"]').prop('disabled', true);
                            }
                            if (tp_acct_type == 'D') {//GPF
                                $("#series_td").text("DCPS Series");
                                $("#account_num_td").text("PPAN /PRAN");
                                $("#ppan_pran_td").text("(Permanent Pension Account No. / Permanent Retainment Account No.)");
                                $('#tp_acct_type option[value=' + tp_acct_type + ']').attr("selected", "selected");
                                $("#tp_acct_type").click();
                                $('#tp_acct_type option[value="G"]').prop('disabled', true);
                                $('#tp_acct_type option[value="N"]').prop('disabled', true);
                            }

                            $("#next_incr_dt_lbl_td").show();
                            $("#next_incr_dt_cal_td").show();
                            $('#tp_acct_type', this).removeAttr('selected'); //ssssssssss
                            $("#tp_acct_type").attr('disabled', false);
                            $("#tp_pf_nps_series").attr('readonly', false);
                            $("#tp_pf_no").attr('readonly', false);
                            $("#tp_gis_appl").attr('disabled', false);

//                            $('#tp_sen_grade_scale_dt').val("");
//                            $("input[name='tp_sen_grade_scale']").attr('disabled', false);
//                            $("#tp_sen_grade_scale_tr .ui-datepicker-trigger").removeAttr("style");


                            jQuery('#tp_sen_grade_scaleN').prop('checked', true);
                            $('#tp_sen_grade_scale_dt').val("");
                            $("input[name='tp_sen_grade_scale']").attr('disabled', false);
                            $("#tp_sen_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');

//                            $('#tp_sel_grade_scale_dt').val("");
//                            $("input[name='tp_sel_grade_scale']").attr('disabled', false);
//                            $("#tp_sel_grade_scale_tr .ui-datepicker-trigger").removeAttr("style");

                            jQuery('#tp_sel_grade_scaleN').prop('checked', true);
                            $('#tp_sel_grade_scale_dt').val("");
                            $("input[name='tp_sel_grade_scale']").attr('disabled', false);
                            $("#tp_sel_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');

                        }

                        else if (tp_pay_com_cd == '10') {
//                            alert("Consalted PAy");
                            $("#next_incr_dt_lbl_td").hide();
                            $("#next_incr_dt_cal_td").hide();
                            $('#tp_pf_nps_series').val('');
                            $('#tp_pf_no').val('');
                            $('#tp_gis_group').val('');
                            $('#tp_gis_memb_dt').val('');

                            jQuery('#tp_sen_grade_scaleN').prop('checked', true);
                            $("input[name='tp_sen_grade_scale']").attr('disabled', true);
                            jQuery('#tp_sel_grade_scaleN').prop('checked', true);
                            $("input[name='tp_sel_grade_scale']").attr('disabled', true);
                            $('#tp_sen_grade_scale_dt').val("");
                            $("#tp_sen_grade_scale_dt").attr("readonly", true);
                            $("#tp_sen_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');
                            $('#tp_sel_grade_scale_dt').val("");
                            $("#tp_sel_grade_scale_dt").attr("readonly", true);
                            $("#tp_sel_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');
//                            $("#tp_pay_com_cd").click();

                            $('#tp_acct_type option[value="N"]').attr("selected", "selected");
                            $('#tp_acct_type option[value="N"]').prop('disabled', false);
                            $('#tp_acct_type option[value="D"]').prop('disabled', true);
                            $('#tp_acct_type option[value="G"]').prop('disabled', true);
                            $("#tp_acct_type").click();
//                            $('input[name="tp_acct_type"]').click(function() {
//                                return false;
//                            });
                            $("#tp_pf_nps_series").attr('readonly', true);
                            $("#tp_pf_no").attr('readonly', true);
                            $('#tp_gis_appl option[value="0"]').attr("selected", "selected");
                            $("#tp_gis_appl").click();
                            $("#tp_gis_appl").attr('disabled', true);
                            $("#sixthPay").hide();
                            $("#tp_pay_in_band").val("");
                            $("#tp_grade_pay").val("");
                            $("#tp_basic_pay").val("");
                        }
                        else {
                            $("#sixthPay").hide();
                            $("#tp_pay_in_band").val("");
                            $("#tp_grade_pay").val("");
                            $("#tp_basic_pay").val("");
                        }

                        jQuery.post(window.webroot + 'Teachers/SelectPayScale', {tp_pay_com_cd: tp_pay_com_cd}, function(data) {
                            $('#tp_pay_scale_cd_td').html(data);
//                          $("#tp_pay_scale_cd").on('blur', function() { //For  Validation
                            $("#tp_pay_scale_cd").focusout(function() {
                                var flag = 1;
                                var str = "";
                                var tp_pay_com_cd = $('#tp_pay_com_cd').val();
                                var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
                                if (isEmpty(tp_pay_com_cd)) {
                                    flag = 0;
                                    str = "\n Please Select Pay Commission.";
                                }
                                else if (isEmpty(tp_pay_scale_cd)) {
                                    flag = 0;
                                    str = "\n Please Select Pay Scale.";
                                }
                                if (!flag) {
                                    alert(str);
                                }
                            });
                        });
                    });
//                    $('#tp_pay_scale_cd_td').change(function() {
                    $('#tp_pay_scale_cd_td').bind('click change', function() {
//                        alert("109");
                        var tp_pay_com_cd = $('#tp_pay_com_cd :selected').val();
                        var tp_pay_scale_cd = $('#tp_pay_scale_cd :selected').val();
                        if (tp_pay_com_cd == '12' || tp_pay_com_cd == '14') {
                            jQuery.post(window.webroot + 'Teachers/SelectGradePay', {tp_pay_scale_cd: tp_pay_scale_cd}, function(data) {
                                $('#tp_grade_pay_td').html(data);
                            });
                        }

                        else {
//                            alert("else");
                        }
                    });
                    $("#tp_pay_in_band").focusout(function() {
                        var flag = 1;
                        var str = "";
                        var tp_pay_com_cd = parseInt($('#tp_pay_com_cd').val());
                        var tp_pay_in_band = parseInt($('#tp_pay_in_band').val());
                        var tp_grade_pay = parseInt($('#tp_grade_pay').val());
                        var psc_lo_limit = parseInt($('#psc_lo_limit').val());
                        var psc_up_limit = parseInt($('#psc_up_limit').val());
//                        alert(tp_pay_in_band);
//                         alert(psc_lo_limit);
//                          alert(psc_up_limit);

                        var lastChar = ($('#tp_pay_in_band').val()).substring(($('#tp_pay_in_band').val()).length - 1);
                        if (lastChar != 0) {
                            flag = 0;
                            str = "\n Err...  Pay In Band not in terms of Tens.";
                        }
                        if (tp_pay_com_cd == '12' || tp_pay_com_cd == '14') {
                            if (tp_pay_in_band < psc_lo_limit) {
                                flag = 0;
                                str = "\n Err... Please Enter Valid Pay In Band.";
                            }
                            else if (tp_pay_in_band > psc_up_limit) {
                                flag = 0;
                                str = "\n Err... Please Enter Valid Pay In Band.";
                            }
                        }

                        if (flag == 0) {
                            alert(str);
                        }
                        else {
                            if (tp_pay_com_cd == '12' || tp_pay_com_cd == '14') {
                                var tp_basic_pay = parseInt(tp_pay_in_band) + parseInt(tp_grade_pay);
                                $("#tp_basic_pay").val(tp_basic_pay);
                            }
                        }
                    });
                    $("#tp_basic_pay").focusout(function() { //if part validation and else part actual coding
                        var flag = 1;
                        var str = "";
                        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
                        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
                        var tp_basic_pay = $('#tp_basic_pay').val();
                        if (tp_pay_com_cd == '') {
                            flag = 0;
                            str = "Please Select Pay Commission.";
                        }
                        else if (isEmpty(tp_pay_scale_cd)) {
                            flag = 0;
                            str = "\n Please Select Pay Scale.";
                        }
                        else if (tp_pay_com_cd == '12' || tp_pay_com_cd == '14') {

                            var tp_pay_in_band = parseInt($('#tp_pay_in_band').val());
                            var tp_grade_pay = parseInt($('#tp_grade_pay').val());
                            var psc_lo_limit = parseInt($('#psc_lo_limit').val());
                            var psc_up_limit = parseInt($('#psc_up_limit').val());
                            if (tp_pay_in_band === "") {
                                flag = 0;
                                str = "\n Please Enter Pay In Band.";
                            }
                            if (tp_pay_in_band < psc_lo_limit) {
                                flag = 0;
                                str = "\n Err... Please Enter Valid Pay In Band.";
                            }
                            if (tp_grade_pay === "") {
                                flag = 0;
                                str = "\n Please Enter Grade Pay.";
                            }
                        }

                        else if (isEmpty(tp_basic_pay) || (tp_basic_pay == '')) {
//                            alert("3"+tp_basic_pay);
                            flag = 0;
                            str = "\n Please Enter Basic Pay.";
                        }
                        if (!flag) {
                            alert(str);
                        }
                        else {
                            if (tp_pay_com_cd == '12' || tp_pay_com_cd == '14') {
                                var tp_pay_in_band = $('#tp_pay_in_band').val();
                                var tp_grade_pay = $('#tp_grade_pay').val();
                                var tp_basic_pay = parseInt(tp_pay_in_band) + parseInt(tp_grade_pay);
                                $("#tp_basic_pay").val(tp_basic_pay);
                            }

                        }
                    });
                    $("#tp_incr_dt").focusout(function() {
                        var flag = 1;
                        var str = "";
                        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
                        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
                        var tp_basic_pay = $('#tp_basic_pay').val();
                        var tp_incr_dt = $('#tp_incr_dt').val();
                        var tchr_sch_flag = $('#tchr_sch_flag').val();
                        var CurrentDate = new Date();
                        if (tchr_sch_flag != '1') {
                            if (tp_incr_dt.length != 10 || tp_incr_dt.length < 10) {
                                var arr = tp_incr_dt.split('/'); //31/12/2011
                                if (arr[0].length == 1)
                                {
                                    date = '0' + arr[0];
                                }
                                if (arr[1].length == 1)
                                {
                                    month = '0' + arr[1];
                                }
                                year = arr[2];
                                var dateToCompare_incr_dt = date + "/" + month + "/" + year; //Birth Date Converted  
                                $("#tp_incr_dt").val(dateToCompare_incr_dt);
                            }
                            else {
                                var date = tp_incr_dt.substring(0, 2);
                                var month = tp_incr_dt.substring(3, 5);
                                var year = tp_incr_dt.substring(6, 10);
                                var dateToCompare_incr_dt = $('#tp_incr_dt').val();
                                //Birth Date Converted//$('#tp_incr_dt').val();  
                            }
                        }
                        var tchr_serv_entry_dt_post = $('#tchr_serv_entry_dt_post').val();
                        var date1 = tchr_serv_entry_dt_post.substring(0, 2);
                        var month1 = tchr_serv_entry_dt_post.substring(3, 5);
                        var year1 = tchr_serv_entry_dt_post.substring(6, 10);
                        var dateToCompare_serv_entry_dt_post = new Date(year1, month1 - 1, date1); //Birth Date Converted

                        var Datepattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
                        var tp_incr_dt = $('#tp_incr_dt').val();
                        var date = tp_incr_dt.substring(0, 2);
                        var month = tp_incr_dt.substring(3, 5);
                        var year = tp_incr_dt.substring(6, 10);
                        var dateToCompare_incr_dt = new Date();
                        dateToCompare_incr_dt.setFullYear(year, month - 1, date);
                        var nxt_dt = new Date(dateToCompare_incr_dt);
                        var next_date = new Date(nxt_dt.getFullYear() + 1, 06, 01); //Birth Date Converted
                        var newD = convertDate(next_date);
                        if (tp_pay_com_cd === '') {
                            flag = 0;
                            str = "\n Please Select Pay Commission.";
                        }
                        if (tp_pay_scale_cd === '') {
                            flag = 0;
                            str = "\n Please Select Pay Scale.";
                        }
                        if (tp_pay_com_cd == '12' || tp_pay_com_cd == '14') {

                            var tp_pay_in_band = $('#tp_pay_in_band').val();
                            var tp_grade_pay = $('#tp_grade_pay').val();
                            if (tp_pay_in_band === "") {
                                flag = 0;
                                str = "\n Please Enter Pay In Band.";
                            }
                            if (tp_grade_pay === "") {
                                flag = 0;
                                str = "\n Please Enter Grade Pay.";
                            }
                        }
                        if (tp_basic_pay == '') {
//                            alert("2"+tp_basic_pay);
                            flag = 0;
                            str = "\n Please Enter Basic Pay.";
                        }

                        if (tp_incr_dt === '') {
                            flag = 0;
                            str = "\n Please Enter Pay w.e.f. Date.";
                        }
                        if (Datepattern.test(tp_incr_dt) == false) {
                            flag = 0;
                            str = "\n Err... Please Enter Pay w.e.f. Date.";
                        }
                        if (dateToCompare_incr_dt > CurrentDate) {
                            flag = 0;
                            str = "\n Err... Please Enter Pay w.e.f. Date.";
                        }
                        if (tchr_sch_flag != '1') {
//                            if ((new Date(dateToCompare_incr_dt.toString()).getTime() < new Date(tchr_serv_entry_dt_post.toString()).getTime()))
                            if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
                                document.getElementById("tp_next_incr_dt").value = "";
//                            $("#tp_next_incr_dt").text("");
                                flag = 0;
                                str = "\n Err... Please Enter Valid Pay w.e.f. Date.";
                            }
                        }

                        if (!flag) {
                            alert(str);
                        }
                        else {

                            var tp_incr_dt = $('#tp_incr_dt').val();
                            var date = tp_incr_dt.substring(0, 2);
                            var month = tp_incr_dt.substring(3, 5);
                            var year = tp_incr_dt.substring(6, 10);
                            if (date == '01' && month == '01')
                            {
//                                alert("IFFF");
                                dateToCompare_incr_dt.setFullYear(year, month - 1, date);
                                var nxt_dt = new Date(dateToCompare_incr_dt);
                                var next_date = new Date(nxt_dt.getFullYear(), 06, date); //Birth Date Converted
                                var newD = convertDate(next_date);
                            }
                            $("#tp_next_incr_dt").val(newD);
                        }



                    });
//                    $('#tp_acct_type').change(function() {
                    $('#tp_acct_type').bind('click change', function() {
                        var tp_acct_type = $('#tp_acct_type :selected').val();
                        if (tp_acct_type == 'G') {//GPF
                            $("#series_td").text("PF Series");
                            $("#account_num_td").text("PF Account No.");
                            $("#ppan_pran_td").text("");
                        }
                        else if (tp_acct_type == 'D') {//GPF
                            $("#series_td").text("DCPS Series");
                            $("#account_num_td").text("PPAN /PRAN");
                            $("#ppan_pran_td").text("(Permanent Pension Account No. / Permanent Retainment Account No.)");
                        }
                        else if (tp_acct_type == 'N') {
                            $("#series_td").text("PF/ DCPS Series");
                            $("#account_num_td").text("PF Account No./ PPAN /PRAN");
                            $("#ppan_pran_td").text("(Permanent Pension Account No. / Permanent Retainment Account No.)");
                        }
                        jQuery.post(window.webroot + 'Teachers/SelectAccountMaintainedBy', {tp_acct_type: tp_acct_type}, function(data) {
                            $('#tp_acct_maint_td').html(data);
                        });
                    });
                    $('#tp_gis_appl').change(function() {
                        var tp_gis_appl = $('#tp_gis_appl :selected').val().trim();
                        if (tp_gis_appl == '0')
                        {

                            $('#tp_gis_group option').each(function() {
                                $("#tp_gis_group").val("");
                                $(this).prop('disabled', true);
                            });
                            $("#tp_gis_group").prop("disabled", true);
                            $('#tp_gis_memb_dt').val("");
                            $("#tp_gis_memb_dt").attr("readonly", true);
                            $("#tp_gis_memb_dt_td .ui-datepicker-trigger").attr('style', 'display:none !important;');
                        }
                        else {
                            $('#tp_gis_group option').each(function() {
                                $("#tp_gis_group").val("");
                                $(this).prop('disabled', false);
                            });
                            $("#tp_gis_group").prop("disabled", false);
                            $("#tp_gis_memb_dt").attr("readonly", false);
                            $("#tp_gis_memb_dt_td .ui-datepicker-trigger").removeAttr("style");
//              $("p").removeAttr("style");
                        }
                    });
                    NewPayDetails();
                });
            }
            else if (data == 1)
            {
                alert("Personal Details are incomplete");
            }

        });
    });








//DO NOT DELETE USE IN SECOND PHASE

//    $("#paperSetter").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/paperSetter', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
//    $("#moderator").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/moderator', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
//    $("#bankDtl").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/bankDtl', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
//    $("#ltcDetails").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/ltcDetails', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
//    $("#presentAddr").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/presentAddr', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
//    $("#previous_goverment_service").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/previous_goverment_service', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
//    $("#homeTown").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/homeTown', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
//    $("#nativeAddr").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/nativeAddr', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
//    $("#serviceHistory").click(function() {
//        $("#maincontent").show();
//        jQuery.post('/Education/Teachers/serviceHistory', function(data) {
//            $('#subcontent').html("");
//            $('#subcontent').html(data);
//        });
//    });
    /*-----------------------------------------------Pravin End-------------------------------------------------------------------*/

    /*-----------------------------------------------mayuri-------------------------------------------------------------------*/
    $("#religion").click(function() {
        $("#maincontent").show();
        window.tchr_id = $('#tchr_id :selected').val();
        var tchr = window.tchr_id;
        var arr = tchr.split(':');
        jQuery.post(window.webroot + 'Teachers/addperdtl', {tchr_id: arr[0]}, function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
            ReligionValidation();
            NewReligionDetails();
//            if (addperdtlAsstCstFlag == "") {
//                $("#cer_val_frm").children().attr("disabled", "disabled");
//            }
        });
    });
    $("#othrprsnldtl").click(function() {
        $("#maincontent").show();
        window.tchr_id = $('#tchr_id :selected').val();
        var tchr = window.tchr_id;
        var arr = tchr.split(':');
        jQuery.post(window.webroot + 'Teachers/otherperdtl', {tchr_id: arr[0]}, function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
            OtherValidation();
            NewOtherDetails();
        });
    });
    $("#training").click(function() {
        $("#maincontent").show();
        window.tchr_id = $('#tchr_id :selected').val();
        var tchr = window.tchr_id;
        var arr = tchr.split(':');
        jQuery.post(window.webroot + 'Teachers/training', {tchr_id: arr[0]}, function(data) {
            $('#subcontent').html(data);
            TrainingValidation();
            TrainingJson();
        });
    });
    $("#family").click(function() {
        $("#maincontent").show();
        window.tchr_id = $('#tchr_id :selected').val();
        var tchr = window.tchr_id;
        var arr = tchr.split(':');
        var tchr_udise_apt_type = $("#tchr_udise_apt_type").val();

        jQuery.post(window.webroot + 'Teachers/family', {tchr_id: arr[0], tchr_udise_apt_type: tchr_udise_apt_type}, function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
            FamilyValidation();
            FamilyJson();
        });
    });
    $("#subtaught").click(function() {
        $("#maincontent").show();
        window.tchr_id = $('#tchr_id :selected').val();
        var tchr = window.tchr_id;
        var arr = tchr.split(':');
        var tchr_type_hidden = $("#tchr_type_hidden").val();
        jQuery.post(window.webroot + 'Teachers/subtaught', {tchr_id: arr[0], tchr_type_hidden: tchr_type_hidden}, function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
            SubjectTaughtValidation();
            SubjectTaughtJson();
        });
    });
    $("#serviceHistory").click(function() {
        $("#maincontent").show();
        window.tchr_id = $('#tchr_id :selected').val();
        var tchr = window.tchr_id;
        var arr = tchr.split(':');
        jQuery.post(window.webroot + 'Teachers/serviceHistory', {tchr_id: arr[0]}, function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
            //   SubjectTaughtJson();
        });
    });
    $("#udqulsndtl").click(function() {
        $("#maincontent").show();
        window.tchr_id = $('#tchr_id :selected').val();
        var tchr = window.tchr_id;
        var arr = tchr.split(':');
        var tchr_type_hidden = $("#tchr_type_hidden").val();
        jQuery.post(window.webroot + 'Teachers/udisequlidtls', {tchr_id: arr[0], tchr_type_hidden: tchr_type_hidden}, function(data) {
            $('#subcontent').html(data);
            UdiseQualificationJson();
        });
    });
    $("#udise_training").click(function() {
        $("#maincontent").show();
        window.tchr_id = $('#tchr_id :selected').val();
        var tchr = window.tchr_id;
        var arr = tchr.split(':');
        var tchr_type_hidden = $("#tchr_type_hidden").val();
        jQuery.post(window.webroot + 'Teachers/udise_training', {tchr_id: arr[0], tchr_type_hidden: tchr_type_hidden}, function(data) {
            $('#subcontent').html(data);
            UdiseTrainingValidation();
            UdiseTrainingVJson();
        });
    });
    /*-----------------------------------------------mayuri end-------------------------------------------------------------------*/

    //////// Code for  Left section ( by  hemant kadam) //////////
    // Code for Geting PH Data By Tid
    $("#phdtls").click(function() {
        $("#maincontent").show();
        $("#subcontent").show();
        var tid = $("#tchr_id_hidden").val();
        jQuery.post(window.webroot + 'Teachers/ph', {tchr_id: tid}, function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
        });
    });
    // Code for Geting Academic Qualification Data By Tid
     $("#acdmicdtls").click(function() {
        $("#maincontent").show();
        $("#subcontent").show();
        var tid = $("#tchr_id_hidden").val();
            $('#overlay_personal').show();
        jQuery.post(window.webroot + 'Teachers/acad_qualification', {tchr_id: tid}, function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
            $('#overlay_personal').hide();
        });
    });

//    $("#udqulsndtl").click(function() {
//        $("#maincontent").show();
//        $("#subcontent").show();
//        var tid = $("#tchr_id_hidden").val();
//        var tchrtyp = $("#tchr_type_hidden").val();
//        // alert(tchrtyp);
//        if (tchrtyp != 2) {
//            jQuery.post(window.webroot + 'Teachers/udisequlidtls', {tchr_id: tid}, function(data) {
//                $('#subcontent').html("");
//                $('#subcontent').html(data);
//            });
//        } else {
//            jQuery.post(window.webroot + 'Teachers/udisequlidtls', {tchr_id: tid}, function(data) {
//                $('#subcontent').html("");
//            });
//        }
//
//    });
    // Code for Geting Prof Qualification Data By Tid
     $("#profnaldtls").click(function() {
        $("#maincontent").show();
        $("#subcontent").show();
        var tid = $("#tchr_id_hidden").val();
        $('#overlay_personal').show();
        jQuery.post(window.webroot + 'Teachers/prof_qualification', {tchr_id: tid}, function(data) {
            // alert(data);  
            $('#subcontent').html("");
            $('#subcontent').html(data);
             $('#overlay_personal').hide();
        });
    });
    $("#initApptDtl").click(function() {
        $("#maincontent").show();
        $("#subcontent").show();
        var tid = $("#tchr_id_hidden").val();
        var tchr_type_hidden = $("#tchr_type_hidden").val();
        // alert(tid);
        jQuery.post(window.webroot + 'Teachers/initApptDtl', {tchr_id: tid, tchr_type_hidden: tchr_type_hidden}, function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
            InitialAppValidation();
        });
    });
    $("#nominationdtl").click(function() {
        $("#maincontent").show();
        $("#subcontent").show();
        var tid = $("#tchr_id_hidden").val();
        var tchr_udise_apt_type = $("#tchr_udise_apt_type").val();
        jQuery.post(window.webroot + 'Teachers/nomination_details', {tchr_id: tid, tchr_udise_apt_type: tchr_udise_apt_type},function(data) {
            $('#subcontent').html("");
            $('#subcontent').html(data);
        });
    });
    //////// Code for  Left section ( by  hemant kadam) end//////////


});
/*Pravin*/
function NewPersonalDetails() {
    var tchr_id = $("#tchr_id_hidden").val();
    var tchr_type = $("#tchr_type_hidden").val();
    var tchr_recruitment_type_hidden = $("#tchr_recruitment_type_hidden").val();
    if (tchr_id != "") {
//        alert("NOT BLANK");
        jQuery.post(window.webroot + 'Teachers/PersonalDetails', {tchr_id: tchr_id, tchr_type: tchr_type}, function(data) {
            $.each(data, function(key1, val1) {
                $.each(val1, function(key, val) {
//                alert(key+ "   "+val);
                    if (key === 'tchr_id') {
                        jQuery('#tchr_id_personal').val(val);
                        var tid = "(" + val + ")";
                        jQuery('#tchr_code').text(tid);
                    }
                    else if (key === 'tchr_fname') {

                        jQuery('#txtEng4').val(val);
                    }
                    else if (key === 'tchr_mname') {
//                    jQuery('#tchr_mname').val(val);
                        jQuery('#txtEng5').val(val);
                    }
                    else if (key === 'tchr_lname') {
//                    jQuery('#tchr_lname').val(val);
                        jQuery('#txtEng6').val(val);
                        var name = jQuery('#txtEng4').val() + " " + jQuery('#txtEng5').val() + " " + jQuery('#txtEng6').val();
                        jQuery('#tchr_name').text(name);
                    }
                    else if (key === 'post_desc') {
//                    alert(val);
                        jQuery('#tchr_designation').text(val);
                        jQuery('#tchr_curr_desg_cd').val(val);
                    }

                    else if (key === 'tchr_name_d') {
                        jQuery('#tchr_fname_d').val("");
                        jQuery('#tchr_mname_d').val("");
                        jQuery('#tchr_lname_d').val("");
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split(" ");
                            jQuery('#txtHindi4').val(arr[0]);
                            jQuery('#txtHindi5').val(arr[1]);
                            jQuery('#txtHindi6').val(arr[2]);
                        }
                    }
                    else if (key === 'tchr_birth_dt') {
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split('-');
                            jQuery('#tchr_birth_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else
                        {
                            jQuery('#tchr_birth_dt').val(val);
                        }
                    }
                    else if (key === 'tchr_gender') {
                        if (val == 1)
                        {
                            jQuery('#TeacherRadioGroup1').prop('checked', true);
                        } else if (val == 2) {

                            jQuery('#TeacherRadioGroup2').prop('checked', true);
                        }
                        jQuery('#tchr_gender').val(val);
                    }
                    else if (key === 'tchr_serv_entry_dt') {
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split('-');
                            jQuery('#tchr_serv_entry_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                            var setDateOld = new Date();
                            var setDateOld1 = new Date();
                            var setDateOld2 = new Date();
                            var tchr_serv_entry_dt = (arr[2] + "/" + arr[1] + "/" + arr[0]);
                            var date1 = tchr_serv_entry_dt.substring(0, 2);
                            var month1 = tchr_serv_entry_dt.substring(3, 5);
                            var year1 = tchr_serv_entry_dt.substring(6, 10);
                            var age = 3;
                            var dateToCompare_serv_entry_dt = new Date();
                            dateToCompare_serv_entry_dt.setFullYear(year1, month1 - 1, date1);
                            var setDate123 = setDateOld2;
                            setDate123.setFullYear(dateToCompare_serv_entry_dt.getFullYear() + age, month1 - 1, date1);
                            var setDate1 = setDateOld;
                            var age1 = 24;
                            setDate1.setFullYear(dateToCompare_serv_entry_dt.getFullYear() + age1, month1 - 1, date1);
                            var today = setDateOld1;
                            var dd = today.getDate();
                            var mm = today.getMonth() + 1; //January is 0!
                            var yyyy = today.getFullYear();
                            if (dd < 10) {
                                dd = '0' + dd
                            }

                            if (mm < 10) {
                                mm = '0' + mm
                            }
                            today = dd + '/' + mm + '/' + yyyy;
                            var tchr_appt_end_dt = today; //Date of Entry in Service 
                            var date2 = tchr_appt_end_dt.substring(0, 2);
                            var month2 = tchr_appt_end_dt.substring(3, 5);
                            var year2 = tchr_appt_end_dt.substring(6, 10);
                            var dateToCompare_appt_end_dt = setDateOld1;
                            var setDate111 = setDateOld1;
                            setDate111 = setDate1;
                            dateToCompare_appt_end_dt.setFullYear(year2, month2 - 1, date2);
                            if ((dateToCompare_appt_end_dt - setDate123) < 0) {
//                                alert("above 5");
                                $("input[name='tchr_type']").attr('disabled', false);
                                $("#shikshan_sevak_dt_lable_td").show();
                                $("#shikshan_sevak_dt_td").show();
                                $("#tchr_appt_end_dt").val("");
                            }
                            else {
//                                alert("below 5");
                                jQuery('#TeacherShikshanSevak2').prop('checked', true);
                                $("input[name='tchr_type']").attr('disabled', true);
                                $("#shikshan_sevak_dt_lable_td").hide();
                                $("#shikshan_sevak_dt_td").hide();
                                $("#tchr_appt_end_dt").val("");
                            }


                        }
                        else
                        {
                            jQuery('#tchr_serv_entry_dt').val(val);
                        }
                    }

                    else if (key === 'tchr_edu_entry_dt') {
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split('-');
                            jQuery('#tchr_edu_entry_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else
                        {
                            jQuery('#tchr_edu_entry_dt').val(val);
                        }
                    }
                    else if (key === 'tchr_curr_desig_dt') {
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split('-');
                            jQuery('#tchr_curr_desig_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else
                        {
                            jQuery('#tchr_curr_desig_dt').val(val);
                        }
                    }
                    else if (key === 'tchr_curr_post_mode') {
                        $('#tchr_curr_post_mode option[value=' + $.trim(val) + ']').attr("selected", "selected");
                    }
                    else if (key === 'tchr_sch_flag') {
                        if (val == 1)
                        {
                            jQuery('#TeacherShikshanSevak1').prop('checked', true);
                            $("#shikshan_sevak_dt_lable_td").show();
                            $("#shikshan_sevak_dt_td").show();
                        } else if (val == 2) {

                            jQuery('#TeacherShikshanSevak2').prop('checked', true);
                            $("#shikshan_sevak_dt_lable_td").hide();
                            $("#shikshan_sevak_dt_td").hide();
                        }
                    }
                    else if (key === 'tchr_appt_end_dt') {
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split('-');
                            jQuery('#tchr_appt_end_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else
                        {
                            jQuery('#tchr_appt_end_dt').val(val);
                        }
                    }
                    else if (key === 'tchr_dist_entry_dt') {
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split('-');
                            jQuery('#tchr_dist_entry_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else
                        {
                            jQuery('#tchr_dist_entry_dt').val(val);
                        }
                    }
                    else if (key === 'tchr_block_entry_dt') {
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split('-');
                            jQuery('#tchr_block_entry_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else
                        {
                            jQuery('#tchr_block_entry_dt').val(val);
                        }
                    }
                    else if (key === 'tchr_curr_sch_dt') {
                        var arr = val;
                        if (arr != '')
                        {
                            arr = val.split('-');
                            jQuery('#tchr_curr_sch_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                        else
                        {
                            jQuery('#tchr_curr_sch_dt').val(val);
                        }
                    }
                    else if (key === 'tchr_appt_ord_no') {
//                    alert(val);
                        jQuery('#tchr_appoinment_order_name').val(val);
                        var imgpath = window.webroot + "appoinment_order/";
                        $('#delete').show();
                        $('#close').show();
                        var newImage = $('<img align="center" height="50" width="483"  id="popimg"/>');
                        newImage.attr('src', (imgpath + val));
                        $('#abc').append(newImage);
                        var newImage = $('<img align="center" height="50" width="50" style="cursor:pointer;pointer;height: 30px;width:30px;padding-bottom:5px;padding-left:4px;" id="popup" onClick="div_show()" />');
                        newImage.attr('src', (imgpath + val));
                        $('#imgrow').html(newImage);
                    }
                    else if (key === 'tchr_apprv_ord_no') {
//                    alert(val);
                        $('#valabc').hide();
                        jQuery('#tchr_approval_order_name').val(val);
                        var imgpath1 = window.webroot + "approval_order/";
//                    alert(imgpath);
                        $('#delete').show();
                        $('#close').show();
                        var newImage1 = $('<img align="center" height="50" width="483"  id="popimg"/>');
//                    alert((imgpath1 + val));
                        newImage1.attr('src', (imgpath1 + val));
                        $('#valabc').append(newImage1);
                        var newImage1 = $('<img align="center" height="50" width="50" style="cursor:pointer;pointer;height:30px;width:30px;padding-bottom:5px;padding-left:4px;" id="popup" onClick="valabc_show()" />');
                        newImage1.attr('src', (imgpath1 + val));
                        $('#imgrow1').html(newImage1);
                    }
                    else if (key === 'asst_flag') {
                        window.asst_flag_personal = val;
                    }
                    else if (key === 'clus_remarks') {
                        window.clus_remarks_personal = val;
                    }

                });
            });
            if (window.asst_flag_personal == 'V') {
                alert("Teachers Personal Information Verified by Cluster Head.");
                $("#TeacherPersonalForm :input").attr("disabled", true);
//            $("input").prop('disabled', true);
                $('#exit_tch_personal').prop('disabled', false);
                $('#exit_tch_personal').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
            }
            if (window.asst_flag_personal == 'R') {
                alert("Teachers Personal Information Rejected by Cluster Head.\n\nPlease see Remarks.");
                $("#TeacherPersonalForm :input").attr("disabled", false);
                $('#clus_remarks_tr').show();
                jQuery('#clus_remarks').val(window.clus_remarks_personal);
//            $("input").prop('disabled', true);
                $('#exit_tch_personal').prop('disabled', false);

                $('#exit_tch_personal').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
//                alert(window.clus_remarks_personal);
            }
            $('input[name="tchr_gender"]').click(function() {
                return false;
            });
            $("#exit_tch").click(function() {
                $('#subcontent').html('');
//        $url = "hm";
//        $(location).attr('href', $url);
            });
            $('#save_personal_detail').on('click', function(e) {
                flag = personalValidationForm();
                if (flag == 1) {
                    $("#TeacherPersonalForm").submit(); //addPersonalDtl
//                $.ajax({
//                    url: 'addPersonalDtl',
//                    data: $("#TeacherPersonalForm").serialize(), //addPayDcps()
//                    type: 'POST',
////                  async: false,
//                    success: function(data) {
//                        console.log(data);
//                        $("#success").show().fadeOut(5000);
////                $("#personalDiv").hide();
//                    },
//                    error: function(data) {
//                        $("#error").show().fadeOut(5000);
//                    }
//                });
                }
                e.preventDefault();
            });
            $('#txtEng4').trigger('click');
            $('#txtEng5').trigger('click');
            $('#txtEng6').trigger('click');
        }, 'json');
    }
    else
    {
//        alert("t nt form .js 929");
        $("#txtEng4").attr("readonly", false);
        $("#txtEng5").attr("readonly", false);
        $("#txtEng6").attr("readonly", false);
        $("#tchr_birth_dt").attr("readonly", false);
    }
    if (tchr_recruitment_type_hidden == 'newRecuritment') {

        $("#exit_tch").click(function() {
            $('#subcontent').html('');
        });
        $('#save_personal_detail').on('click', function(e) {
            flag = personalValidationForm();

            if (flag == 1) {
                $("#TeacherPersonalForm").submit(); //addPersonalDtl
            }
            e.preventDefault();
        });
    }

}

function personalValidationForm() {
    var flag = 1;
    var str = "";
    var tchr_recruitment_type_hidden = $('#tchr_recruitment_type_hidden').val();
    var tchr_fname = $('#txtEng4').val();
    var tchr_mname = $('#txtEng5').val();
    var tchr_lname = $('#txtEng6').val();
    var Alphapattern = /^[a-zA-Z]+$/;
    var tchr_fname_d = $('#txtHindi4').val();
    var tchr_mname_d = $('#txtHindi5').val();
    var tchr_lname_d = $('#txtHindi6').val();
    var tchr_birth_dt = $('#tchr_birth_dt').val();
    var date1 = tchr_birth_dt.substring(0, 2);
    var month1 = tchr_birth_dt.substring(3, 5);
    var year1 = tchr_birth_dt.substring(6, 10);
    var age = 16;
    var dateToCompare_birth_dt = new Date();
    dateToCompare_birth_dt.setFullYear(year1, month1 - 1, date1);
    var setDate = new Date();
    setDate.setFullYear(dateToCompare_birth_dt.getFullYear() + age, month1 - 1, date1);
//            var dateToCompare_birth_dt = new Date(year, month - 1, date);//Birth Date Converted

    var Datepattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var tchr_gender = $("input:radio[name=tchr_gender]:checked").val(); //1,2,3
    var tchr_serv_entry_dt = $('#tchr_serv_entry_dt').val(); //Date of Entry in Service 
    var date = tchr_serv_entry_dt.substring(0, 2);
    var month = tchr_serv_entry_dt.substring(3, 5);
    var year = tchr_serv_entry_dt.substring(6, 10);
    var dateToCompare_serv_entry_dt = new Date();
    dateToCompare_serv_entry_dt.setFullYear(year, month - 1, date);
    var now = new Date(dateToCompare_birth_dt);
    var past = new Date(dateToCompare_serv_entry_dt);
    var nowYear = now.getFullYear();
    var pastYear = past.getFullYear();
    var YearDiff = pastYear - nowYear; //Year Difference of 2 dates
    var CurrentDate = new Date();
    var tchr_edu_entry_dt = $('#tchr_edu_entry_dt').val(); //Date of Joining in Education Department
    var date = tchr_edu_entry_dt.substring(0, 2);
    var month = tchr_edu_entry_dt.substring(3, 5);
    var year = tchr_edu_entry_dt.substring(6, 10);
    var dateToCompare_edu_entry_dt = new Date(year, month - 1, date);
    var tchr_curr_desig_dt = $('#tchr_curr_desig_dt').val(); //Date of Joining of Current Post
    var date = tchr_curr_desig_dt.substring(0, 2);
    var month = tchr_curr_desig_dt.substring(3, 5);
    var year = tchr_curr_desig_dt.substring(6, 10);
    var dateToCompare_curr_desig_dt = new Date(year, month - 1, date); //Date of Joining of Current Post Converted

    var tchr_curr_post_mode = $('#tchr_curr_post_mode').val(); //Current Post/Designation 
    var tchr_appt_end_dt = $('#tchr_appt_end_dt').val(); //Date of Joining of Current Post
    var date = tchr_appt_end_dt.substring(0, 2);
    var month = tchr_appt_end_dt.substring(3, 5);
    var year = tchr_appt_end_dt.substring(6, 10);
    var dateToCompare_appt_end_dt1 = new Date(year, month - 1, date); //End of Term of Appoinment Converted

    var tchr_dist_entry_dt = $('#tchr_dist_entry_dt').val(); //Date of Joining of Current Post
    var date = tchr_dist_entry_dt.substring(0, 2);
    var month = tchr_dist_entry_dt.substring(3, 5);
    var year = tchr_dist_entry_dt.substring(6, 10);
    var dateToCompare_district_entry_dt = new Date(year, month - 1, date); //Date of Joining of Current District Converted

    var tchr_block_entry_dt = $('#tchr_block_entry_dt').val(); //Date of Joining of Current Post
    var date = tchr_block_entry_dt.substring(0, 2);
    var month = tchr_block_entry_dt.substring(3, 5);
    var year = tchr_block_entry_dt.substring(6, 10);
    var dateToCompare_block_entry_dt = new Date(year, month - 1, date); //Date of Joining of Current District Converted

    var tchr_curr_sch_dt = $('#tchr_curr_sch_dt').val(); //Date of Joining of Current Post
    var date = tchr_curr_sch_dt.substring(0, 2);
    var month = tchr_curr_sch_dt.substring(3, 5);
    var year = tchr_curr_sch_dt.substring(6, 10);
    var dateToCompare_curr_sch_dt = new Date(year, month - 1, date); //Date of Joining of Current District Converted

    if (tchr_recruitment_type_hidden == 'newRecuritment') {
        if (tchr_fname === "") {
            flag = 0;
//            $("#txtEng4").focus();
            str = "\n Please Enter Teacher First Name.";
        }
        else if (Alphapattern.test(tchr_fname) == false) {
            flag = 0;
//            $("#txtEng4").focus();
            str = "\n Err... Please Enter Valid Teacher First Name.";
        }
        else if (tchr_mname === "") {
            flag = 0;
//            $("#txtEng5").focus();
            str = "\n Please Enter Teacher Middle Name.";
        }
        else if (Alphapattern.test(tchr_mname) == false) {
            flag = 0;
//            $("#txtEng5").focus();
            str = "\n Err... Please Enter Valid Teacher Middle Name.";
        }
        else if (tchr_lname === "") {
            flag = 0;
//            $("#txtEng6").focus();
            str = "\n Please Enter Teacher Last Name.";
        }
        else if (Alphapattern.test(tchr_lname) == false) {
            flag = 0;
//            $("#txtEng6").focus();
            str = "\n Err... Please Enter Valid Teacher Last Name.";
        }
        else if (tchr_fname_d === "") {
            flag = 0;
//            $("#txtHindi4").focus();
            str = "\n Please Enter Teacher First Name in Devanagari.";
        }
        else if (tchr_mname_d === "") {
            flag = 0;
            $("#tCxtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
    }

    if (tchr_birth_dt === "") {
        flag = 0;
//        $("#tchr_birth_dt").focus();
        str = "\n Please Enter Teacher Date of Birth.";
    }
    else if (Datepattern.test(tchr_birth_dt) == false) {
        flag = 0;
//        $("#tchr_birth_dt").focus();
        str = "\n Err... Please Enter Valid Date of Birth.";
    }
    else if (dateToCompare_birth_dt > CurrentDate) {
        flag = 0;
//        $("#tchr_birth_dt").focus();
        str = "\n Err... Invalid Date of Birth.";
    }
    else if (tchr_gender == undefined) {
        flag = 0;
        str = "\n Please Select Teacher Gender.";
    }
    else if (tchr_serv_entry_dt == "") {
        flag = 0;
//        $("#tchr_serv_entry_dt").focus();
        str = "\n Please Date of Entry in Service.";
    }
    else if (Datepattern.test(tchr_serv_entry_dt) == false) {
        flag = 0;
//        $("#tchr_serv_entry_dt").focus();
        str = "\n Err... Please Enter Valid Date of Entry in Service.";
    }
    else if ((daydiff(parseDate($('#tchr_serv_entry_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
        flag = 0;
//        $("#tchr_serv_entry_dt").focus();
        str = "\n Please Enter Date of Entry in Service Greater than Date of Birth .";
    }
    else if (dateToCompare_serv_entry_dt > CurrentDate) {
        flag = 0;
//        $("#tchr_serv_entry_dt").focus();
        str = "\n Err... Invalid Date of Entry in Service";
    }
    else if ((dateToCompare_serv_entry_dt - setDate) < 0) {
        flag = 0;
//        $("#tchr_serv_entry_dt").focus();
        str = "\n Err... Invalid Date of Entry in Service as Date is less than 18 Years from Date of Birth.";
    }
    else if (tchr_edu_entry_dt == "") {
        flag = 0;
//        $("#tchr_edu_entry_dt").focus();
        str = "\n Please Enter Date of Joining Current Mgmt.";
    }
    else if (Datepattern.test(tchr_edu_entry_dt) == false) {
        flag = 0;
//        $("#tchr_edu_entry_dt").focus();
        str = "\n Err... Please Enter Valid Date of Joining Current Mgmt.";
    }
    else if (dateToCompare_edu_entry_dt > CurrentDate) {
        flag = 0;
//        $("#tchr_edu_entry_dt").focus();
        str = "\n Err... Invalid Date of Joining Current Mgmt.";
    }
    else if ((daydiff(parseDate($('#tchr_edu_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
        flag = 0;
//        $("#tchr_edu_entry_dt").focus();
        str = "\n Err... Invalid Date of Joining in Joining Current Mgmt.";
    }
    else if (tchr_recruitment_type_hidden == 'newRecuritment') {
        var tchr_curr_desg_cd = $('#tchr_curr_desg_cd').val();
        if (tchr_curr_desg_cd == "") {
            flag = 0;
            str = "\n Err... Select Current Post/Designation.";
        }
    }
    else if (tchr_curr_desig_dt == "") {
        flag = 0;
//        $("#tchr_curr_desig_dt").focus();
        str = "\n Please Enter Date of Joining in Current Designation.";
    }
    else if (Datepattern.test(tchr_curr_desig_dt) == false) {
        flag = 0;
//        $("#tchr_curr_desig_dt").focus();
        str = "\n Err... Please Enter Valid Date of Joining in Current Designation.";
    }
    else if (dateToCompare_curr_desig_dt > CurrentDate) {
        flag = 0;
//        $("#tchr_curr_desig_dt").focus();
        str = "\n Err... Invalid Date of Joining in Current Designation.";
    }
    else if ((daydiff(parseDate($('#tchr_curr_desig_dt').val()), parseDate($('#tchr_edu_entry_dt').val()))) > 0) {
        flag = 0;
//        $("#tchr_curr_desig_dt").focus();
        str = "\n Err... Invalid Date of Joining in Current Designation.";
    }
    else if (tchr_curr_post_mode == "") {
        flag = 0;
        str = "\n Please Select Current Posting Mode.";
    }
    else if ($('input[name=tchr_type]:checked').length <= 0) {
        flag = 0;
        str = "\n Please Select Teacher Type.";
    }
    else if ($("input[name='tchr_type']:checked").val() == '1') {
        var tchr_serv_entry_dt = $('#tchr_serv_entry_dt').val();
        var date1 = tchr_serv_entry_dt.substring(0, 2);
        var month1 = tchr_serv_entry_dt.substring(3, 5);
        var year1 = tchr_serv_entry_dt.substring(6, 10);
        var age = 3;
        var dateToCompare_serv_entry_dt = new Date();
        dateToCompare_serv_entry_dt.setFullYear(year1, month1 - 1, date1);
        var setDate = new Date();
        setDate.setFullYear(dateToCompare_serv_entry_dt.getFullYear() + age, month1 - 1, date1);
        var tchr_appt_end_dt = $('#tchr_appt_end_dt').val(); //Date of Entry in Service 
        var date = tchr_appt_end_dt.substring(0, 2);
        var month = tchr_appt_end_dt.substring(3, 5);
        var year = tchr_appt_end_dt.substring(6, 10);
        var dateToCompare_appt_end_dt = new Date();
        dateToCompare_appt_end_dt.setFullYear(year, month - 1, date);
        if (tchr_appt_end_dt == "") {
            flag = 0;
            str = "\n Please Enter End of Term of Appoinment.";
        }
        else if (Datepattern.test(tchr_appt_end_dt) == false) {
            flag = 0;
            str = "\n Err... Please Enter Valid End of Term of Appoinment.";
        }
//        else if (dateToCompare_appt_end_dt > CurrentDate) {
//            flag = 0;
//            str = "\n Err... Invalid End of Term of Appoinment.";
//        }
//        alert(dateToCompare_appt_end_dt + "\n" + setDate);
        if ((dateToCompare_appt_end_dt - setDate) < 0) {
            flag = 0;
            str = "\n Err... Invalid End of Term of Appoinment as Date is less than 3 Years from Service Date.";
        }
    }
    else if (tchr_dist_entry_dt == "") {
        flag = 0;
//        $("#tchr_dist_entry_dt").focus();
        str = "\n Please Enter Date of Joining of Current District.";
    }
    else if (Datepattern.test(tchr_dist_entry_dt) == false) {
        flag = 0;
//        $("#tchr_dist_entry_dt").focus();
        str = "\n Err... Please Enter Valid Date of Joining of Current District.";
    }
    else if ((daydiff(parseDate($('#tchr_dist_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
        flag = 0;
//        $("#tchr_dist_entry_dt").focus();
        str = "\n Err... Invalid Date of Joining of Current District.";
    }
    else if (dateToCompare_district_entry_dt > CurrentDate) {
        flag = 0;
//        $("#tchr_dist_entry_dt").focus();
        str = "\nErr... Invalid Date of Joining of Current District.";
    }
    else if (tchr_block_entry_dt == "") {
        flag = 0;
        $("#tchr_blCock_entry_dt").focus();
        str = "\n Please Enter Date of Joining in Current Block.";
    }
    else if (Datepattern.test(tchr_block_entry_dt) == false) {
        flag = 0;
//        $("#tchr_block_entry_dt").focus();
        str = "\n Err... Please Enter Valid Date of Joining in Current Block.";
    }
    else if ((daydiff(parseDate($('#tchr_block_entry_dt').val()), parseDate($('#tchr_dist_entry_dt').val()))) > 0) {
        flag = 0;
//        $("#tchr_block_entry_dt").focus();
        str = "\n Err... Invalid Date of Joining in Current Block.";
    }
    else if (dateToCompare_block_entry_dt > CurrentDate) {
        flag = 0;
//        $("#tchr_block_entry_dt").focus();
        str = "\nErr... Invalid Date of Joining in Current Block.";
    }
    else if (tchr_curr_sch_dt == "") {
        flag = 0;
//        $("#tchr_curr_sch_dt").focus();
        str = "\n Please Enter Date of Joining in Current School.";
    }
    else if (Datepattern.test(tchr_curr_sch_dt) == false) {
        flag = 0;
//        $("#tchr_curr_sch_dt").focus();
        str = "\n Err... Please Enter Valid Date of Joining in Current School.";
    }
    else if ((daydiff(parseDate($('#tchr_curr_sch_dt').val()), parseDate($('#tchr_block_entry_dt').val()))) > 0) {
        flag = 0;
//        $("#tchr_curr_sch_dt").focus();
        str = "\n Err... Invalid Date of Joining in Current School.";
    }
    else if (dateToCompare_curr_sch_dt > CurrentDate) {
        flag = 0;
//        $("#tchr_curr_sch_dt").focus();
        str = "\n Err... Invalid Date of Joining in Current School.";
    }
    if (flag) {
        return flag;
    } else {
        alert(str);
    }
}

function NewPayDetails() {
    var tchr_id = $("#tchr_id_hidden").val();
    var tchr_type = $("#tchr_type_hidden").val();
    jQuery.post(window.webroot + 'Teachers/PayDetails', {tchr_id: tchr_id, tchr_type: tchr_type}, function(data) {
        $.each(data, function(key1, val1) {
            $.each(val1, function(key, val) {
                val = $.trim(val);
//                alert(key + "    " + val);
                window.TchrSevakFlag = val1['tchr_sch_flag'];
                window.TchrDesigPayFlag = val1['tchr_curr_desg_cd'];
//                window.tchr_serv_entry_dt_post = val1['']

                if (key === 'tchr_serv_entry_dt') {
//                    alert(window.TchrSevakFlag + "\n" + window.TchrDesigPayFlag);
                    var serv_entry_dt = val;
                    var arr = serv_entry_dt.split('-');
                    window.tchr_serv_entry_dt_post = (arr[2] + "/" + arr[1] + "/" + arr[0]);
                }

                if (key === 'tchr_id') {
                    var tid = "(" + val + ")";
                    jQuery('#tchr_code').text(tid);
                    jQuery('#tchr_id1').val(val);
                }

                if (key === 'tchr_fname') {
                    jQuery('#tchr_fname').val(val);
                }
                else if (key === 'tchr_mname') {
                    jQuery('#tchr_mname').val(val);
                }
                else if (key === 'tchr_lname') {
                    var name = val1['tchr_fname'].trim() + " " + val1['tchr_mname'] + " " + val1['tchr_lname'];
                    jQuery('#tchr_name').text(name);
                }
                else if (key === 'post_desc') {
                    jQuery('#tchr_designation').text(val);
                }
                else if (key === 'tchr_sch_flag') {
                    window.TchrSevakFlag = val;
                    $("#tchr_sch_flag").val(window.TchrSevakFlag);
                    var tchr_type = jQuery('#tchr_type').val();
                    if (val == '1') {
//                        alert("Consalted PAyyyyyyyyyyyyyyyyy");
                        val1 = 10;
                        $('#tp_pay_com_cd').val(10);
                        $("#tp_pay_com_cd").click();
                        $('#tp_pay_com_cd option').each(function() {
                            $(this).prop('disabled', true);
                        });
                        $('#tp_pay_com_cd option[value=' + val1 + ']').removeAttr('disabled');
                        $("#tp_pay_com_cd").click();


                        $("#next_incr_dt_lbl_td").hide();
                        $("#next_incr_dt_cal_td").hide();

                        $("#series_td").text("Series");
                        $("#account_num_td").text("Account No.");
                        $("#ppan_pran_td").text("");
                        jQuery('#tp_sen_grade_scaleN').prop('checked', true);
                        $("input[name='tp_sen_grade_scale']").attr('disabled', true);
                        jQuery('#tp_sel_grade_scaleN').prop('checked', true);

                        $("input[name='tp_sel_grade_scale']").attr('disabled', true);
                        $('#tp_sen_grade_scale_dt').val("");
                        $("#tp_sen_grade_scale_dt").attr("readonly", true);
                        $("#tp_sen_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');
                        $('#tp_sel_grade_scale_dt').val("");
                        $("#tp_sel_grade_scale_dt").attr("readonly", true);
                        $("#tp_sel_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');


                        $('#tp_acct_type option[value="N"]').attr("selected", "selected");
                        $("#tp_acct_type").click();
                        $('#tp_acct_type option[value="G"]').prop('disabled', true);
                        $('#tp_acct_type option[value="D"]').prop('disabled', true);
                        $('#tp_acct_type option[value="N"]').prop('disabled', false);

                        $('input[name="tp_acct_type"]').click(function() {
                            return false;
                        });
//                        $("#tp_acct_type").attr('disabled', true);
                        $("#tp_pf_nps_series").attr('readonly', true);
                        $("#tp_pf_no").attr('readonly', true);
                        $('#tp_gis_appl option[value="0"]').attr("selected", "selected");
                        $("#tp_gis_appl").click();
                        $("#tp_gis_appl").attr('disabled', true);
                    }
                    else {

                        $('#tp_pay_com_cd option').each(function() {
                            $(this).prop('disabled', false);
                        });
                        $("#next_incr_dt_lbl_td").show();
                        $("#next_incr_dt_cal_td").show();
                        $("#tp_acct_type").attr('disabled', false);
                        $("#tp_pf_nps_series").attr('readonly', false);
                        $("#tp_pf_no").attr('readonly', false);
                        $("#tp_gis_appl").attr('disabled', false);
//                        $("#tp_gis_group").attr('disabled', false);
//                        $("#tp_gis_memb_dt").attr('disabled', false);
                    }
                }

                else if (key === 'tp_pay_com_cd') {
//                    alert("sad"+val1);
                    if (typeof val1['tp_pay_com_cd'] === 'undefined') {
                        var tp_pay_com_cd = "";
                    }
                    else {
                        var tp_pay_com_cd = val1['tp_pay_com_cd'].trim();
                    }
//                    var tp_pay_com_cd = val;
                    if (tp_pay_com_cd == '12' || tp_pay_com_cd == '14') {
//                        alert("1150");
                        $("#sixthPay").show();
                    }
                    else {
                        $("#sixthPay").hide();
                        $("#tp_pay_in_band").val("");
                        $("#tp_grade_pay").val("");
                        $("#tp_basic_pay").val("");
                    }
//                    alert(TchrDesigPayFlag + "\n" + val1['tchr_curr_desg_cd'] + "\n" + jQuery('#tchr_type').val());
                    $('#tp_pay_com_cd option[value=' + val + ']').attr("selected", "selected");
                    $('#tp_pay_com_cd').click();
                }

                else if (key === 'tp_pay_scale_cd') {
                    window.PayScaleOptions = val;
                }
                else if (key === 'tp_pay_in_band') {
                    $("#tp_pay_in_band").val(val);
                }
                else if (key === 'tp_grade_pay') {
                    $("#tp_grade_pay").val(val);
                }
                else if (key === 'tp_basic_pay') {
                    $("#tp_basic_pay").val(val);
                }
                else if (key === 'tp_incr_dt') {
                    if (val == "")
                    {
                        jQuery('#tp_incr_dt').val("");
                    }
                    else {
                        var arr = val.split('-');
                        jQuery('#tp_incr_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                    }
                }
                else if (key === 'tp_next_incr_dt') {
                    if (val == "")
                    {
                        jQuery('#tp_next_incr_dt').val("");
                    }
                    else {
                        var arr = val.split('-');
                        jQuery('#tp_next_incr_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                    }
                }

                else if (key === 'tp_sen_grade_scale') {
//                    window.TchrSevakFlag = $('#tchr_sch_flag').val();
//                    if (window.TchrSevakFlag == '2') {
//                        alert(val);
//                        alert("below" + window.below_12_sen_dt);
//                         alert("above" + window.above_12_sen_dt);
                    if (val == 'Y') {// && window.below_12_sen_dt == 1) {
////                            alert("if");
////                            alert(val + "\n" + window.above_12_sen_dt);
                        jQuery('#tp_sen_grade_scaleY').prop('checked', true);
//                            $('#tp_sen_grade_scale_dt').val("");
//                            $("input[name='tp_sen_grade_scale']").attr('disabled', false);
//                            $("#tp_sen_grade_scale_tr .ui-datepicker-trigger").removeAttr("style");
                    }
                    else if (val == 'N') {// && window.above_12_sen_dt == 1) {
//                            alert("else");
                        jQuery('#tp_sen_grade_scaleN').prop('checked', true);
                        $('#tp_sen_grade_scale_dt').val("");
                        $("input[name='tp_sen_grade_scale']").attr('disabled', true);
                        $("#tp_sen_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');
                    }
                    jQuery('#tp_sen_grade_scale').val(val);
//                    }
                }

                else if (key === 'tp_sel_grade_scale') {
//                    window.TchrSevakFlag = $('#tchr_sch_flag').val();

//                    if (window.TchrSevakFlag == '2') {
                    if (val == 'Y') {// && window.below_24_sel_dt == 1) {
                        jQuery('#tp_sel_grade_scaleY').prop('checked', true);
//                            $('#tp_sel_grade_scale_dt').val("");
//                            $("input[name='tp_sel_grade_scale']").attr('disabled', false);
//                            $("#tp_sel_grade_scale_tr .ui-datepicker-trigger").removeAttr("style");
                    }
                    else if (val == 'N') {// && window.above_24_sel_dt == 1) {
                        jQuery('#tp_sel_grade_scaleN').prop('checked', true);
                        $('#tp_sel_grade_scale_dt').val("");
                        $("input[name='tp_sel_grade_scale']").attr('disabled', true);
                        $("#tp_sel_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');
                    }
                    jQuery('#tp_sel_grade_scale').val(val);
//                    }
                }

                else if (key === 'tp_sen_grade_scale_dt') {
                    window.TchrSevakFlag = $('#tchr_sch_flag').val();
//                    alert(window.TchrSevakFlag);
                    if (window.TchrSevakFlag == '2') {// && window.below_12_sen_dt == 1) {
                        if (val == "") {
                            jQuery('#tp_sen_grade_scale_dt').val("");
                        }
                        else {
                            var arr = val.split('-');
                            jQuery('#tp_sen_grade_scale_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                    }
                }

                else if (key === 'tp_sel_grade_scale_dt') {
                    window.TchrSevakFlag = $('#tchr_sch_flag').val();
//                    alert(window.TchrSevakFlag);
                    if (window.TchrSevakFlag == '2') {// && window.below_24_sel_dt == 1) {
                        if (val == "") {
                            jQuery('#tp_sel_grade_scale_dt').val("");
                        }
                        else {
                            var arr = val.split('-');
                            jQuery('#tp_sel_grade_scale_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                        }
                    }
                }

                else if (key === 'tp_pan_no') {
                    $("#tp_pan_no").val(val);
                }

                else if (key === 'tp_acct_type') {
                    if (typeof val === 'undefined') {
                        var tp_acct_type = "";
                    }
                    else {
                        var tp_acct_type = val.trim();
                    }
                    if ((val) == 'G') {//GPF

                        $('#tp_acct_type option[value="G"]').attr("selected", "selected");
                        $("#series_td").text("PF Series");
                        $("#account_num_td").text("PF Account No.");
                        $("#ppan_pran_td").text("");
                    }
                    else if ((val) == 'D') {//DCPS

                        $('#tp_acct_type option[value="D"]').attr("selected", "selected");
                        $("#series_td").text("DCPS Series");
                        $("#account_num_td").text("PPAN /PRAN");
                        $("#ppan_pran_td").text("(Permanent Pension Account No. / Permanent Retainment Account No.)");
                    }
                    else if ((val) == 'N') {//DCPS
                        $('#tp_acct_type option[value="N"]').attr("selected", "selected");
                    }
                }

                else if (key === 'tp_acct_maint') {
                    window.AccountMaintainedByOptions = val;
//                        jQuery.post('/Education/Teachers/SelectPfSeries', {tp_acct_maint: AccountMaintainedByOptions}, function(data) {
//                            $('#tp_pf_nps_series_td').html(data);
//                            $('#tp_pf_nps_series option[value=' + $.trim(PfSeriesOptions) + ']').attr("selected", "selected");
//                        });
                }

                else if (key === 'tp_pf_nps_series') {
                    $("#tp_pf_nps_series").val(val);
//                        window.PfSeriesOptions = val1['tp_pf_nps_series'];
//                        alert(PfSeriesOptions);
                }
                else if (key === 'tp_pf_no') {
                    $("#tp_pf_no").val(val);
                }
                else if (key === 'tp_gis_appl') {
                    $('#tp_gis_appl option[value=' + $.trim(val) + ']').attr("selected", "selected");
                    if (val == '0' || val == '')
                    {
                        $('#tp_gis_group option').each(function() {
                            $("#tp_gis_group").val("");
                            $(this).prop('disabled', true);
                        });
                        $("#tp_gis_group").prop("disabled", true);
                        $("#tp_gis_memb_dt_td .ui-datepicker-trigger").attr('style', 'display:none !important;');
                        $('#tp_gis_memb_dt').val("");
                        $("#tp_gis_memb_dt").attr("readonly", true);
                    }
                    else {
                        $('#tp_gis_group option').each(function() {
                            $("#tp_gis_group").val("");
                            $(this).prop('disabled', false);
                        });
                        $("#tp_gis_group").prop("disabled", false);
                        $("#tp_gis_memb_dt").attr("readonly", false);
                        $("#tp_gis_memb_dt_td .ui-datepicker-trigger").removeAttr("style");
                    }

                }
                else if (key === 'tp_gis_group') {
//                        CurrentGISGroupOptions = val1['tp_gis_group'];
//                        if (CurrentGISGroupOptions == '') {
//                            $('#tp_gis_group').html("");
//                            $('#tp_gis_memb_dt').val("");
//                        }
//                        else {
//                            $('#tp_gis_group option[value=' + $.trim(CurrentGISGroupOptions) + ']').attr("selected", "selected");
//
//                        }
                    $('#tp_gis_group option[value=' + $.trim(val) + ']').attr("selected", "selected");
                }
                else if (key === 'tp_gis_memb_dt') {
                    if (val != '')
                    {
                        var arr = val.split('-');
                        jQuery('#tp_gis_memb_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                    }
                }
                else if (key === 'asst_flag') {
                    window.asst_flag_pay_pf = val;
                }



                else if (key === 'tchr_udise_apt_type') {
//                    alert("APT TYPE == " + val);
                    if (val == 'P' || val == 'C') {
//                        alert("Consalted PAyyy");
                        val1 = 10;
                        $('#tp_pay_com_cd').val(10);
                        $("#tp_pay_com_cd").click();
                        $('#tp_pay_com_cd option').each(function() {
                            $(this).prop('disabled', true);
                        });
                        $('#tp_pay_com_cd option[value=' + val1 + ']').removeAttr('disabled');
                        $("#tp_pay_com_cd").click();


                        $("#next_incr_dt_lbl_td").hide();
                        $("#next_incr_dt_cal_td").hide();

                        $("#series_td").text("Series");
                        $("#account_num_td").text("Account No.");
                        $("#ppan_pran_td").text("");

                        jQuery('#tp_sen_grade_scaleN').prop('checked', true);
                        $("input[name='tp_sen_grade_scale']").attr('disabled', true);
                        jQuery('#tp_sel_grade_scaleN').prop('checked', true);
                        $("input[name='tp_sel_grade_scale']").attr('disabled', true);

                        $('#tp_sen_grade_scale_dt').val("");
                        $("#tp_sen_grade_scale_dt").attr("readonly", true);
                        $("#tp_sen_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');
                        $('#tp_sel_grade_scale_dt').val("");
                        $("#tp_sel_grade_scale_dt").attr("readonly", true);
                        $("#tp_sel_grade_scale_tr .ui-datepicker-trigger").attr('style', 'display:none !important;');

                        $('#tp_acct_type option[value="N"]').attr("selected", "selected");
                        $("#tp_acct_type").click();
                        $('#tp_acct_type option[value="G"]').prop('disabled', true);
                        $('#tp_acct_type option[value="D"]').prop('disabled', true);
                        $('#tp_acct_type option[value="N"]').prop('disabled', false);

                        $('input[name="tp_acct_type"]').click(function() {
                            return false;
                        });
                        $("#tp_pf_nps_series").attr('readonly', true);
                        $("#tp_pf_no").attr('readonly', true);
                        $('#tp_gis_appl option[value="0"]').attr("selected", "selected");
                        $("#tp_gis_appl").click();
                        $("#tp_gis_appl").attr('disabled', true);
                    }
                    else {
                        $('#tp_pay_com_cd option').each(function() {
                            $(this).prop('disabled', false);
                        });
                        $("#next_incr_dt_lbl_td").show();
                        $("#next_incr_dt_cal_td").show();
                        $("#tp_acct_type").attr('disabled', false);
                        $("#tp_pf_nps_series").attr('readonly', false);
                        $("#tp_pf_no").attr('readonly', false);
                        $("#tp_gis_appl").attr('disabled', false);
                    }
                }




            });
        });
//end for each
        $("#tp_pay_com_cd").click();

        if (window.tchr_serv_entry_dt_post != '') {
            jQuery('#tchr_serv_entry_dt_post').val(window.tchr_serv_entry_dt_post);
        }
        if (window.asst_flag_pay_pf == 'V') {
            alert("Data Verfied by Cluster Head");
            $("#TeacherPostingForm :input").attr("disabled", true);
            $('#exit_tch_pay_pf').prop('disabled', false);
        }

        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        jQuery.post(window.webroot + 'Teachers/SelectPayScale', {tp_pay_com_cd: tp_pay_com_cd}, function(data) {
            $('#tp_pay_scale_cd_td').html(data);
            if (window.asst_flag_pay_pf == 'V') {
                $("#tp_pay_scale_cd").prop('disabled', true);
            }
            $('#tp_pay_scale_cd option[value=' + $.trim(PayScaleOptions) + ']').attr("selected", "selected");
            $('#tp_pay_scale_cd').trigger('click');
        });
        var tp_acct_type = $('#tp_acct_type').val();
        jQuery.post(window.webroot + 'Teachers/SelectAccountMaintainedBy', {tp_acct_type: tp_acct_type}, function(data) {
            $('#tp_acct_maint_td').html(data);
            window.TchrSevakFlag = $('#tchr_sch_flag').val();
            if (window.asst_flag_pay_pf == 'V') {
                $("#tp_acct_maint").prop('disabled', true);
            }
            $('#tp_acct_maint option[value=' + $.trim(AccountMaintainedByOptions) + ']').attr("selected", "selected");
            if (window.TchrSevakFlag == '1') {
//                $('#tp_acct_maint option[value="0"]').attr("selected", "selected");
//                $("#tp_acct_maint").attr('disabled', true);
            }
            else if (window.TchrSevakFlag == '2') {
                $("#tp_acct_maint").attr('disabled', false);
            }
        });

        $('#save_pay_detail').on('click', function(e) {
            var flag = payPfValidationForm();
//            alert("flag==" + flag);
//            flag = 1;
            if (flag == 1) {
                $.ajax({
                    url: 'addPayDcps',
                    data: $("#TeacherPostingForm").serialize(), //addPayDcps()
                    type: 'POST',
                    success: function(data) {
                        console.log(data);
                        alert("Data Saved Successfully.");
                        //$("#success").show().fadeOut(5000);
                        $("#payDtl").click(); //To referesh Form
//                $("#personalDiv").hide();
                    },
                    error: function(data) {
                        //  $("#error").show().fadeOut(5000);
                        alert("Err...Data Not Saved Successfully.");
                    }
                });
            }
            e.preventDefault();
        });
    }, 'json');
}

function payPfValidationForm() {
    var flag = 1;
    var str = "";
    var tp_pay_com_cd = parseInt($('#tp_pay_com_cd').val());
    var tp_pay_scale_cd = parseInt($('#tp_pay_scale_cd').val());
    var tp_pay_in_band = parseInt($('#tp_pay_in_band').val());
    var psc_lo_limit = parseInt($('#psc_lo_limit').val());
    var psc_up_limit = parseInt($('#psc_up_limit').val());
    var tp_grade_pay = parseInt($('#tp_grade_pay').val());
    var tp_basic_pay = parseInt($('#tp_basic_pay').val());
    var tp_incr_dt = $('#tp_incr_dt').val();
    var date = tp_incr_dt.substring(0, 2);
    var month = tp_incr_dt.substring(3, 5);
    var year = tp_incr_dt.substring(6, 10);
    var dateToCompare_incr_dt = new Date(year, month - 1, date); //Birth Date Converted

    var tchr_serv_entry_dt_post = $('#tchr_serv_entry_dt_post').val();
    var date1 = tchr_serv_entry_dt_post.substring(0, 2);
    var month1 = tchr_serv_entry_dt_post.substring(3, 5);
    var year1 = tchr_serv_entry_dt_post.substring(6, 10);
    var dateToCompare_serv_entry_dt_post = new Date(year1, month1 - 1, date1); //Birth Date Converted

    var Datepattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var tp_next_incr_dt = $('#tp_next_incr_dt').val();
    var date = tp_next_incr_dt.substring(0, 2);
    var month = tp_next_incr_dt.substring(3, 5);
    var year = tp_next_incr_dt.substring(6, 10);
    var dateToCompare_next_incr_dt = new Date(year, month - 1, date); //Birth Date Converted

    var tp_sen_grade_scale = $("input[name='tp_sen_grade_scale']:checked").val();
    var tp_sel_grade_scale = $("input[name='tp_sel_grade_scale']:checked").val();
    var tp_pan_no = $('#tp_pan_no').val();
    var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    var tp_acct_type = $('#tp_acct_type').val();
    var tp_acct_maint = $('#tp_acct_maint').val();
    var tp_pf_nps_series = $('#tp_pf_nps_series').val();
    var tp_pf_no = $('#tp_pf_no').val();
    var PfAccountNopattern = /^([0-9]{6})$/;
    var tp_gis_appl = $('#tp_gis_appl').val();
    var tp_gis_group = $('#tp_gis_group').val();
    var tp_gis_memb_dt = $('#tp_gis_memb_dt').val();
    var date1 = tp_gis_memb_dt.substring(0, 2);
    var month1 = tp_gis_memb_dt.substring(3, 5);
    var year1 = tp_gis_memb_dt.substring(6, 10);
    var dateToCompare_gis_memb_dt = new Date(year1, month1 - 1, date1); //Birth Date Converted
    var tchr_sch_flag = $('#tchr_sch_flag').val();
    var CurrentDate = new Date();

    if ((isEmpty(tp_pay_com_cd)) || (isNaN(tp_pay_com_cd))) {
        flag = 0;
        str = "\n Please Select Pay Commission.";
    }
    else if ((isEmpty(tp_pay_scale_cd)) || (isNaN(tp_pay_scale_cd))) {
        flag = 0;
        str = "\n Please Select Pay Scale.";
    }
    if (tp_pay_com_cd == 12 || tp_pay_com_cd == 14) {
        var lastChar = ($('#tp_pay_in_band').val()).substring(($('#tp_pay_in_band').val()).length - 1);
        if (lastChar != 0) {
            flag = 0;
//            $("#tp_pay_in_band").focus();
            str = "\n Err... Invalid Pay In Band.";
        }
        if (tp_pay_in_band == "" || (isNaN(tp_pay_in_band))) {
            flag = 0;
            str = "\n Please Enter Pay In Band.";
        }
        if (tp_pay_in_band < psc_lo_limit) {
            flag = 0;
//            $("#tp_pay_in_band").focus();
            str = "\n Err... Please Enter Valid Pay In Band.";
        }
        if (tp_pay_in_band > psc_up_limit) {
            flag = 0;
//            $("#tp_pay_in_band").focus();
            str = "\n Err... Please Enter Valid Pay In Band.";
        }
        if (tp_grade_pay == "" || (isNaN(tp_grade_pay))) {
            flag = 0;
//            $("#tp_grade_pay").focus();
            str = "\n Please Enter Grade Pay.";
        }
    }

    if (isEmpty(tp_basic_pay)) {
//        alert("1"+tp_basic_pay);
        flag = 0;
//        $("#tp_basic_pay").focus();
        str = "\n Please Enter Basic Pay.";
    }
    else if (isEmpty(tp_incr_dt)) {
        flag = 0;
//        $("#tp_incr_dt").focus();
        str = "\n Please Enter Pay w.e.f. Date.";
    }
    else if (Datepattern.test(tp_incr_dt) == false) {
        flag = 0;
//        $("#tp_incr_dt").focus();
        str = "\n Err... Please Enter Pay w.e.f. Date.";
    }
    else if (dateToCompare_incr_dt > CurrentDate) {
        flag = 0;
        str = "\n Err... Please Enter Pay w.e.f. Date.";
    }

    else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
        flag = 0;
//        $("#tp_incr_dt").focus();
        str = "\n Err... Please Enter Pay w.e.f. Date.";
    }
    else if (isEmpty(tp_pan_no) || isPanNumber(tp_pan_no)) {
        flag = 0;
//        $("#tp_pan_no").focus();
        str = "\n Please Enter Valid Pan No.";
    }
    else if (isEmpty(tp_acct_type)) {
        flag = 0;
        str = "\n Please Select Account Type.";
    }
    else if (isEmpty(tp_acct_maint)) {
        flag = 0;
        str = "\n Please Select Account Maintained by.";
    }

    else if (tchr_sch_flag == '2' && (tp_pay_com_cd == '12' || tp_pay_com_cd == '14')) {
//          alert("NOt Shikkkkkkkkk");
        if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
//            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
//            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
//            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_nextC_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }

    }

    if (tp_sen_grade_scale == '') {
        flag = 0;
        str = "\n Err... Please Select Received Senior Grade Scale?";
    }
    if ($.trim(tp_sen_grade_scale) == 'Y') {
        var tp_sen_grade_scale_dt = $('#tp_sen_grade_scale_dt').val();
        var date = tp_sen_grade_scale_dt.substring(0, 2);
        var month = tp_sen_grade_scale_dt.substring(3, 5);
        var year = tp_sen_grade_scale_dt.substring(6, 10);
        var dateToCompare_sen_grade_scale_dt = new Date(year, month - 1, date); //Birth Date Converted

        if (isEmpty(tp_sen_grade_scale_dt)) {
            flag = 0;
            str = "\n Please Enter Received Senior Grade Scale Date.";
        }
        else if (Datepattern.test(tp_sen_grade_scale_dt) == false) {
            flag = 0;
//                $("#tp_sen_grade_scale_dt").focus();
            str = "\n Err... Please Enter Valid Received Senior Grade Scale Date.";
        }

        else if (dateToCompare_sen_grade_scale_dt > CurrentDate) {
            flag = 0;
            str = "\n Please Enter Received Senior Grade Scale Date.";
        }
        else if ((daydiff(parseDate($('#tp_sen_grade_scale_dt').val()), parseDate($('#tchr_serv_entry_dt_post').val()))) > 0) {
            flag = 0;
            str = "\n Err... Please Enter Valid Received Senior Grade Scale Datee.";
        }
    }

    if (tp_sel_grade_scale == '') {
        flag = 0;
        str = "\n Err... Please Select Received Selection Grade Scale?";
    }
    if ($.trim(tp_sel_grade_scale) == 'Y') {
        var tp_sel_grade_scale_dt = $('#tp_sel_grade_scale_dt').val();
        var date = tp_sel_grade_scale_dt.substring(0, 2);
        var month = tp_sel_grade_scale_dt.substring(3, 5);
        var year = tp_sel_grade_scale_dt.substring(6, 10);
        var dateToCompare_sel_grade_scale_dt = new Date(year, month - 1, date); //Birth Date Converted

        var tp_sen_grade_scale_dt1 = $('#tp_sen_grade_scale_dt').val();
        var date1 = tp_sen_grade_scale_dt1.substring(0, 2);
        var month1 = tp_sen_grade_scale_dt1.substring(3, 5);
        var year1 = tp_sen_grade_scale_dt1.substring(6, 10);
        var age = 12;
        var dateToCompare_sen_grade_scale_dt1 = new Date();
        dateToCompare_sen_grade_scale_dt1.setFullYear(year1, month1 - 1, date1);
        var setDate = new Date();
        setDate.setFullYear(dateToCompare_sen_grade_scale_dt1.getFullYear() + age, month1 - 1, date1);

        var tp_sel_grade_scale_dt1 = $('#tp_sel_grade_scale_dt').val(); //Date of Entry in Service 
        var date = tp_sel_grade_scale_dt1.substring(0, 2);
        var month = tp_sel_grade_scale_dt1.substring(3, 5);
        var year = tp_sel_grade_scale_dt1.substring(6, 10);
        var dateToCompare_sel_grade_scale_dt1 = new Date();
        dateToCompare_sel_grade_scale_dt1.setFullYear(year, month - 1, date);

        if (isEmpty(tp_sel_grade_scale_dt)) {
            flag = 0;
//                $("#tp_sel_grade_scale_dt").focus();
            str = "\n Please Enter Received Selection Grade Scale Date";
        }
        else if (Datepattern.test(tp_sel_grade_scale_dt) == false) {
            flag = 0;
//                $("#tp_sel_grade_scale_dt").focus();
            str = "\n Err... Please Enter Valid Received Selection Grade Scale Date";
        }

        else if ((daydiff(parseDate($('#tp_sel_grade_scale_dt').val()), parseDate($('#tchr_serv_entry_dt_post').val()))) > 0) {
            flag = 0;
            str = "\n Err... Please Enter Valid Received Selection Grade Scale Datee.";
        }

        else if (dateToCompare_sel_grade_scale_dt1 > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Valid Received Selection Grade Scale Date.";
        }

        else if ((dateToCompare_sel_grade_scale_dt1 - setDate) < 0) {
//            alert("INVALIDDDD");
            flag = 0;
//                $("#tp_sen_grade_scale_dt").focus();
            str = "\n Err... Please Enter Valid Received Selection Grade Scale Date.";
        }
    }


    if (tchr_sch_flag == '2' && (tp_pay_com_cd == '12' || tp_pay_com_cd == '14')) {
//        alert("asdasdas" + tp_pay_com_cd);
        if (isEmpty(tp_pf_nps_series)) {
            flag = 0;
            $("#tp_pf_nps_series").focus();
            str = "\n Please Enter Series.";
        }
        else if (isEmpty(tp_pf_no)) { //|| isAccountNumber(tp_pf_no)
            flag = 0;
            $("#tp_pf_no").focus();
            str = "\n Please Enter Valid Account No.";
        }
        else if (isEmpty(tp_gis_appl)) {
            flag = 0;
            str = "\n Please Select GIS Applicable ?";
        }
        else if (tp_gis_appl != 0) {
            if (tp_gis_group === "") {
                flag = 0;
                str = "\n Please Select Current GIS Group";
            }
            else if (tp_gis_memb_dt === "") {
                flag = 0;
                str = "\n Please Enter Membership Date";
            }
            else if (Datepattern.test(tp_gis_memb_dt) == false) {
                flag = 0;
//                $("#tp_gis_memb_dt").focus();
                str = "\n Err... Enter Membership Date";
            }
            else if (dateToCompare_gis_memb_dt < dateToCompare_serv_entry_dt_post) {
                flag = 0;
//                $("#tp_gis_memb_dt").focus();
                str = "\n Err... Enter Membership Date";
            }

            var tp_gis_memb_dt = $('#tp_gis_memb_dt').val();
            var date1 = parseInt(tp_gis_memb_dt.substring(0, 2));
            var month1 = parseInt(tp_gis_memb_dt.substring(3, 5));
            var year1 = parseInt(tp_gis_memb_dt.substring(6, 10));
//            alert(date1 + "   " + month1);

            if (date1 == 1) {
                if (month1 != 5) {
                    if (month1 != 1) {
                        flag = 0;
                        str = "\n Err... Enter Valid Membership Date";
                    }
                }
            } else {
                flag = 0;
                str = "\n Err... Enter Valid Membership Date";
            }


        }

    }

    if (flag) {
        return flag;
    } else {
        alert(str);
    }
}

/*-------------------*Mayuri Start -------------------------- */

function  NewReligionDetails() {

    $('#delete').hide();
    $('#deleteval').hide();
    $('#close').hide();
    $('#valclose').hide();
    //$('input[type="submit"]').attr('disabled', 'disabled'); 

    window.tchr_id = $('#tchr_id :selected').val();
    var tchr = window.tchr_id;
    var arr = tchr.split(':');
    jQuery.post(window.webroot + 'Teachers/caste_display', {$id: arr[0]}, function(data) {
        var tc_religion = '';
        var tc_categ = '';
        var tc_caste = '';
        var tc_sub_castse = '';
        var tc_cert_no = '';
        var tc_cert_dt = '';
        var tc_cert_auth = '';
        var tc_cert_place = '';
        var tc_remarks = '';
        var tc_cert_vld_no = '';
        var tc_cert_vld_dt = '';
        var tc_cert_vld_auth = '';
        var tc_cert_vld_place = '';
        var tc_vld_remarks = '';
        var tchr_fname = '';
        var tchr_mname = '';
        var tchr_lname = '';
        var tchr_id = '';
        var tchr_birth_dt = '';
        var tc_cert_fname = '';
        var tc_cert_vld_fname = '';
        var post_desc = '';
        var asst_cst_flag = '';
        var asst_cert_flag = '';
        $.each(data, function(key, val) {
            $.each(val, function(key, val) {
                $.each(val, function(key, val) {
                    $.each(val, function(key, val) {

                        if (key === 'asst_cst_flag') {
                            asst_cst_flag = val;
                            $('#addperdtlAsstCstFlag').val(asst_cst_flag);
                        }
                        if (key === 'asst_cert_flag') {
                            asst_cert_flag = val;
                            $('#addperdtlAsstCertFlag').val(asst_cert_flag);
                        }

                        if (key === 'tchr_id') {
                            tchr_id = '(' + val + ')';
                            $("#addperdtlTchrid").val(val);
                            $("#addperdtlTchrcode").text(tchr_id);
                        }
                        if (key === 'tchr_birth_dt') {
                            tchr_birth_dt = val;
                            var arr = val.split('-');
                            jQuery('#addperdtlTchrbdate').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                            //$("#addperdtlTchrbdate").val(val);
                        }
                        if (key === 'tc_religion') {
                            tc_religion = val;
                        }
                        if (key === 'tc_categ') {
                            tc_categ = val;
                            var category_id = val;
                            if (category_id != 1) {
                                $('#cer_frm').children().removeAttr('disabled');
                            } else if (category_id == 1) {
                                $("#view").hide();
                                $("#mycontainer1").hide();
                                $("#cer_frm").children().attr("disabled", "disabled");
                            }
                            cluster = val;
                            tchr_id = $("#addperdtlTchrid").val();
                        }
                        if (key === 'tc_caste') {
                            tc_caste = val;
                        }
                        if (key === 'tc_sub_castse') {
                            tc_sub_castse = val;
                            // $('#addperdtlTaSubCastse option[value=' + $.trim(val) + ']').attr("selected", "selected");
                        }

                        if (key === 'tc_cert_no') {
                            tc_cert_no = val;
                            if (tc_cert_no) {
                                $('#cer_val_frm').children().removeAttr('disabled');
                            }
                        }
                        if (key === 'tc_cert_dt') {
                            tc_cert_dt = val;
                            var crdt = val;
                        }
                        if (key === 'tc_cert_auth') {
                            tc_cert_auth = val;
                        }
                        if (key === 'tc_cert_place') {
                            tc_cert_place = val;
                        }
                        if (key === 'tc_remarks') {
                            tc_remarks = val;
                        }
                        if (key === 'tc_cert_fname') {
                            tc_cert_fname = val;
                        } else {
                            $("#view").hide();
                            $("#mycontainer1").hide();
                        }
                        if (key === 'tc_cert_vld_no') {
                            tc_cert_vld_no = val;
                        }
                        if (key === 'tc_cert_vld_dt') {
                            tc_cert_vld_dt = val;
                        }
                        if (key === 'tc_cert_vld_auth') {
                            tc_cert_vld_auth = val;
                        }
                        if (key === 'tc_cert_vld_place') {
                            tc_cert_vld_place = val;
                        }
                        if (key === 'tc_vld_remarks') {
                            tc_vld_remarks = val;
                        }
                        if (key === 'tc_cert_vld_fname') {
                            tc_cert_vld_fname = val;
                        }

                        if (key === 'tchr_fname') {
                            if (val) {
                                tchr_fname = val;
                            } else {
                                tchr_fname = '';
                            }
                        }
                        if (key === 'tchr_mname') {
                            if (val) {
                                tchr_mname = val;
                            } else {
                                tchr_mname = '';
                            }
                        }
                        if (key === 'tchr_lname') {
                            if (val) {
                                tchr_lname = val;
                            } else {
                                tchr_lname = '';
                            }
                        }
                        if (key === 'post_desc') {
                            if (val) {
                                post_desc = val;
                            } else {
                                post_desc = '';
                            }
                        }
                    });
                });
            });
        });
        var castflag = $("#addperdtlAsstCstFlag").val();
//        if (castflag == "" || castflag == 'E') {
//            $("#cer_val_frm").children().attr("disabled", "disabled");
//        }
        var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
        $("#addperdtlTchrdesgn").text(post_desc);
        $("#addperdtlTchrname").text(tchrname);
        $('#tech_religion option[value=' + $.trim(tc_religion) + ']').attr("selected", "selected");
        $('#addperdtlTcCateg option[value=' + $.trim(tc_categ) + ']').attr("selected", "selected");
        jQuery.post(window.webroot + 'Teachers/selectcast', {category_id: tc_categ}, function(data) {
            //   alert(ta_categ);
            $('#addperdtlTaCaste').html(data);
            $('#addperdtlTaCaste option[value=' + $.trim(tc_caste) + ']').attr("selected", "selected");
        });
        $("#addperdtlCernumber").val(tc_cert_no);
        if (tc_cert_dt) {
            if (/^\d{4}\-\d{2}\-\d{2}$/i.test(tc_cert_dt)) {
                var parts = tc_cert_dt.split('-');
                var year = parts[0] && parseInt(parts[0], 10);
                var month = parts[1] && parseInt(parts[1], 10);
                var day = parts[2] && parseInt(parts[2], 10);
                //  var show = $('#datepicker').val( day + "/" + month + "/" + year );

                if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {

                    var nday = ('0' + day).slice(-2);
                    var nmonth = ('0' + (month)).slice(-2);
                    var nyear = year;
                    $('#datepicker').val(nday + "/" + nmonth + "/" + nyear);
                }
            }
        } else {
            $('#datepicker').val('');
        }
        if (tc_cert_vld_dt) {
            if (/^\d{4}\-\d{2}\-\d{2}$/i.test(tc_cert_vld_dt)) {
                var parts = tc_cert_vld_dt.split('-');
                var year = parts[0] && parseInt(parts[0], 10);
                var month = parts[1] && parseInt(parts[1], 10);
                var day = parts[2] && parseInt(parts[2], 10);
                //  var show = $('#datepicker').val( day + "/" + month + "/" + year );

                if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {

                    var nday = ('0' + day).slice(-2);
                    var nmonth = ('0' + (month)).slice(-2);
                    var nyear = year;
                    $('#datepicker2').val(nday + "/" + nmonth + "/" + nyear);
                }
            }
        } else {
            $('#datepicker2').val('');
        }

        $('#addperdtlIssuAuth option[value=' + $.trim(tc_cert_auth) + ']').attr("selected", "selected");
        $("#cerplace").val(tc_cert_place);
        $("#remarks").val(tc_remarks);
        $("#addperdtlCerValNo").val(tc_cert_vld_no);
        if (tc_cert_vld_no) {
            $('#cer_val_frm').children().removeAttr('disabled');
        }

        // image 1
        if (tc_cert_fname != "") {
            $('#mycontainer1').show();
            $('#view').show();
            $('#delete').show();
            $("#addperdtlUplodimg").val(tc_cert_fname);
            $('#close').show();
            var newImage = $('<img align="center" height="150" width="483" id="popimg"/>');
            newImage.attr('src', window.webroot + 'uploads/' + tc_cert_fname);
            $('#abc').append(newImage);
        } else {
            $("#mycontainer1").hide();
            $("#view").hide();
            $('#delete').hide();
            $('#close').hide();
            $("#addperdtlUplodimg").val('');
        }

        if (tc_cert_fname) {
            var newImage = $('<img align="left" height="30" width="30" id="popup" onClick="div_show()" />');
            newImage.attr('src', window.webroot + 'uploads/' + tc_cert_fname);
            $('#mycontainer1').html('');
            $('#mycontainer1').append(newImage);
        } else {
            $('#mycontainer1').hide();
            $('#view').hide();
        }

        if (tc_categ == '1')
        {
            $("#view").hide();
            $("#mycontainer1").hide();
        }
        //img2 
        if (tc_cert_vld_fname != "") {
            $('#view_val_cer').show();
            $('#cerfval').show();
            $('#deleteval').show();
            $("#addperdtlUplodvalimg").val(tc_cert_vld_fname);
            $('#valclose').show();
            var newImage = $('<img align="center" height="150" width="483" id="valpopimg"/>');
            newImage.attr('src', window.webroot + 'upload_cer_val/' + tc_cert_vld_fname);
            $('#valabc').append(newImage);
        } else {
            $('#view_val_cer').hide();
            $('#cerfval').hide();
            $('#deleteval').hide();
            $('#valclose').hide();
            $("#addperdtlUplodvalimg").val('');
        }
        if (tc_cert_vld_fname) {
            var newImage = $('<img  align="left" height="30" width="30" id="valpopup" onClick="valabc_show()"/>');
            newImage.attr('src', window.webroot + 'upload_cer_val/' + tc_cert_vld_fname);
            $('#cerfval').html('');
            $('#cerfval').append(newImage);
        } else {
            $('#view_val_cer').hide();
            $('#cerfval').hide();
        }

        $('#addperdtlValIssAuth option[value=' + $.trim(tc_cert_vld_auth) + ']').attr("selected", "selected");
        $("#addperdtlTechPlace").val(tc_cert_vld_place);
        $("#addperdtlTechRemarks").val(tc_vld_remarks);
//        if (asst_cst_flag == 'E') {
//            $("#cer_val_frm").children().attr("disabled", "disabled");
//        }
        if (asst_cst_flag == 'R') {
            alert('Cast Data Rejected by Cluster Head,See the remarks for data updation.');
            $('#cast_dtls').children().removeAttr('disabled');
            $('#cer_frm').children().removeAttr('disabled');
//            $("#cer_val_frm").children().attr("disabled", "disabled");
            $('#remarks').css('color', 'red');
            $('#addperdtlAsstCstFlag').val(asst_cst_flag);
        }
        if (asst_cst_flag == 'F') {
            alert('"Cast Data has been already Forwarded .');
            $("#cast_dtls").children().attr("disabled", "disabled");
            $("#cer_frm").children().attr("disabled", "disabled");
//            $("#cer_val_frm").children().attr("disabled", "disabled");

            $('#addperdtlAsstCstFlag').val(asst_cst_flag);
        }
        if (asst_cst_flag == 'V') {
            alert("Cast and Certificate Data has been Verified from cluster.");
//            $('#cer_val_frm').children().removeAttr('disabled');
            $("#cast_dtls").children().attr("disabled", "disabled");
            $("#cer_frm").children().attr("disabled", "disabled");
            $('#addperdtlAsstCstFlag').val(asst_cst_flag);
        }
        if (asst_cert_flag == 'F' && asst_cst_flag == 'V') {
            alert('Certificate Validation Data has been already Forwarded..');
            $("#cast_dtls").children().attr("disabled", "disabled");
            $("#cer_frm").children().attr("disabled", "disabled");
//            $("#cer_val_frm").children().attr("disabled", "disabled");
        }
        if (asst_cert_flag == 'R' && asst_cst_flag == 'V') {

            alert('Certificate Validation Data Rejected by Cluster Head,See the remarks for data updation.');
            $('#cer_val_frm').children().removeAttr('disabled');
            $("#cast_dtls").children().attr("disabled", "disabled");
            $("#cer_frm").children().attr("disabled", "disabled");
            $('#addperdtlTechRemarks').css('color', 'red');
            $('#addperdtlAsstCertFlag').val(asst_cert_flag);
        }
        if (asst_cert_flag == 'V' && asst_cst_flag == 'V') {
            alert('Certificate Validation Data has been Verified from Cluster');
            $("#cer_val_frm").children().attr("disabled", "disabled");
            $("#cast_dtls").children().attr("disabled", "disabled");
            $("#cer_frm").children().attr("disabled", "disabled");
            $('#addperdtlAsstCertFlag').val(asst_cert_flag);
        }

        $("#save_addperdtl123").click(function()
        {
            var str = "";
            var flag = 0;
            var numpattern = /^[0-9]*$/;
            var exrydate = /(((0|1)[1-9]|2[1-9]|3[0-1])\/(0[1-9]|1[1-2])\/((19|20)\d\d))$/;
            var TeacherPhCertNo = $('#addperdtlCernumber').val();
            if (document.getElementById('tech_religion').value === "")
            {
                flag = 1;
                str += "ERR...Select the  Religion.\n";
            }
            else if (document.getElementById('addperdtlTcCateg').value == "")
            {
                flag = 1;
                str += "ERR...Select the Category.\n";
            } else
            if ((document.getElementById('addperdtlTcCateg').value != '1') && (document.getElementById('addperdtlTaCaste').value == ""))
            {
                flag = 1;
                str += "ERR...Select the Caste.\n";
            } else
            if ((document.getElementById('addperdtlTcCateg').value != '1') && (document.getElementById('addperdtlCernumber').value == ""))
            {
                flag = 1;
                str += "ERR...Select the Certificate No.\n";
            } else
            if ((document.getElementById('addperdtlTcCateg').value != '1') && (document.getElementById('datepicker').value == ""))
            {
                flag = 1;
                str += "ERR...Select the Certificate Date.\n";
            }
            else
            if ((document.getElementById('addperdtlTcCateg').value != '1') && (document.getElementById('addperdtlIssuAuth').value == ""))
            {
                flag = 1;
                str += "ERR...Select the Issuing Authority .\n";
            }
            else
            if ((document.getElementById('addperdtlTcCateg').value != '1') && (document.getElementById('cerplace').value == ""))
            {
                flag = 1;
                str += "ERR...Select the Place.\n";
            }
            else if ((document.getElementById('addperdtlAsstCstFlag').value == 'V') && (document.getElementById('addperdtlCerValNo').value == ""))
            {
                flag = 1;
                str += "Fill The Certificate Validation No.\n";
            }
            else if ((document.getElementById('addperdtlAsstCstFlag').value == 'V') && (document.getElementById('datepicker2').value == ""))
            {
                flag = 1;
                str += "Fill The Certificate Validation date.\n";
            }
            else if ((document.getElementById('addperdtlAsstCstFlag').value == 'V') && (document.getElementById('addperdtlValIssAuth').value == ""))
            {
                flag = 1;
                str += "Fill The Certificate Validation isuuing authority.\n";
            }
            else if ((document.getElementById('addperdtlAsstCstFlag').value == 'V') && (document.getElementById('addperdtlTechPlace').value == ""))
            {
                flag = 1;
                str += "Fill The Certificate Validation Place.\n";
            }
            if (flag == 1)
            {
                alert(str);
                return false;
            }
            else
            {
                return true;
            }
        });
    }, 'json');
}

function ReligionValidation() {
    var numpattern = /^[0-9]*$/;
    var charval = /^[a-zA-Z ]*$/;
    var placepattern = /^[a-zA-Z1-9 ]*$/;
    var numcharval = /^[a-zA-Z0-9()-./]*$/;
    // var subcast = document.getElementById('subcst');

    $('#datepicker2').change(function() {
        if (document.getElementById('datepicker2').value != "")
        {
            var dateEntered = document.getElementById('datepicker2').value;
            var date = dateEntered.substring(0, 2);
            var month = dateEntered.substring(3, 5);
            var year = dateEntered.substring(6, 10);
            var dateToCompare_to_dt = new Date(year, month - 1, date);
            var certfcate = document.getElementById('datepicker').value;
            var date = certfcate.substring(0, 2);
            var month = certfcate.substring(3, 5);
            var year = certfcate.substring(6, 10);
            var dateToCompare_from_dt = new Date(year, month - 1, date); //Birth Date Converted

            var CurrentDate = new Date();
            if (exrydate.test(dateEntered) == false) {
                alert("Err..Please Enter Valid Certificate Date in Format of  dd/mm/yyyy.");
                $("#dateEntered").focus();
                return false;
            }
            if (dateToCompare_to_dt > CurrentDate) {
                alert("ERR...Date is greater than Current Date ");
                $("#datepicker2").val("");
                $("#datepicker2").focus();
            }
            if (dateToCompare_to_dt <= dateToCompare_from_dt) {
                alert("ERR...Validation Date Must be Greater than Certificate Date ");
                $("#datepicker2").val('');
            }
        }
        else if (document.getElementById('datepicker2').value == "") {
            alert("Enter Certificate Validation Date");
            $("#datepicker2").focus();
        }
    });
    $('#tech_religion').change(function() {
        if ($('#tech_religion').val() === "") {
            alert("ERR...Select the religion.");
            $("#tech_religion").focus();
        }
    });
//    $('#addperdtlTcCateg').change(function() {
//        if ($('#addperdtlTcCateg').val() === "") {
//            alert("ERR...Select the Category.");
//            $("#addperdtlTcCateg").focus();
//        }
//    });

    $('#addperdtlTaCaste').change(function() {
        if ($('#addperdtlTaCaste').val() === "") {
            alert("ERR...Select the Cast.");
            $("#addperdtlTaCaste").focus();
        }
    });
    $('#addperdtlCernumber').change(function() {
        if (numcharval.test($('#addperdtlCernumber').val()) == false) {
            alert("ERR...Invalid Certificate No...");
            $("#addperdtlCernumber").focus();
        }
    });
    $('#cerplace').change(function() {
        if (placepattern.test($('#cerplace').val()) == false) {
            alert("ERR...Invalid Certificate Place...");
            $("#cerplace").focus();
        }
    });
    $('#remarks').change(function() {
        if (charval.test($('#remarks').val()) == false) {
            alert("ERR...Invalid Remarks..");
        }
    });
    $('#remarks').keyup(function(evt) {
        var cp_value = $(this).val();
        $(this).val(cp_value);
    });
    $('#addperdtlTechPlace').change(function() {
        if (placepattern.test($('#addperdtlTechPlace').val()) == false) {
            alert("ERR...Invalid Certificate Validation Place...");
            $("#addperdtlTechPlace").focus();
        }
    });
    $('#addperdtlTechRemarks').change(function() {
        if (charval.test($('#addperdtlTechRemarks').val()) == false) {
            alert("ERR...Invalid Validation Remarks..");
        }
    });
    $('#addperdtlCerValNo').change(function() {
        if (numcharval.test($('#addperdtlCerValNo').val()) == false) {
            alert("ERR...Invalid Certificate Validation No..");
            $("#addperdtlCerValNo").focus();
        }
    });
    var exrydate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    $('#datepicker').change(function() {
        if (document.getElementById('datepicker').value != "")
        {
            var dateEntered = document.getElementById('datepicker').value;
            var date = dateEntered.substring(0, 2);
            var month = dateEntered.substring(3, 5);
            var year = dateEntered.substring(6, 10);
            var dateToCompare = new Date(year, month - 1, date);
            var CurrentDate = new Date();
            var techrbdate = document.getElementById('addperdtlTchrbdate').value;
            var bdate = techrbdate.substring(0, 2);
            var bmonth = techrbdate.substring(3, 5);
            var byear = techrbdate.substring(6, 10);
            var tchr_brth_date = new Date(byear, bmonth - 1, bdate);
            if (exrydate.test(dateEntered) == false) {
                alert("ERR...Enter Certificate Date in Format of dd/mm/yyyy.");
                $("#datepicker").val('');
                return false;
            }

            if (dateToCompare < tchr_brth_date) {
                alert("ERR...Date of Certificate Should not be less than Date of Birth");
                $("#datepicker").val('');
            }
            if (dateToCompare >= CurrentDate) {
                alert("ERR...Date is greater than Current Date ");
                $("#datepicker").val('');
            }

        } else if (document.getElementById('datepicker').value == "") {
            alert("ERR...Enter Certificate Date");
        }
    });
    $('#addperdtlIssuAuth').change(function() {
        if ($('#addperdtlIssuAuth').val() === "") {
            alert("ERR...Select Issuing Authority.");
        }
    });
//    /* ------------------------- onfocus valdiations  ------------------------------------------------------------	 */
    $("#addperdtlCernumber").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...Select The Cast.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#datepicker").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR... Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR... Enter The Certificate Number.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#addperdtlIssuAuth").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR... Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR... Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "\n  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#cerplace").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select The Issuing Authority.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#remarks").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var place = $('#cerplace').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select The Issuing Authority.";
        } else if (place === "") {
            flag = 0;
            str = "ERR...  Enter The place.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#upload_cast_cert").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var place = $('#cerplace').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select The Issuing Authority.";
        } else if (place === "") {
            flag = 0;
            str = "ERR...  Enter The place.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#addperdtlCerValNo").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var place = $('#cerplace').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select The Issuing Authority.";
        } else if (place === "") {
            flag = 0;
            str = "ERR...  Enter The place.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#datepicker2").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var place = $('#cerplace').val();
        var CerValNo = $('#addperdtlCerValNo').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select The Issuing Authority.";
        } else if (place === "") {
            flag = 0;
            str = "ERR...  Enter The place.";
        } else if (CerValNo === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Number.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#addperdtlValIssAuth").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var place = $('#cerplace').val();
        var CerValNo = $('#addperdtlCerValNo').val();
        var datepicker2 = $('#datepicker2').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select The Issuing Authority.";
        } else if (place === "") {
            flag = 0;
            str = "ERR...  Enter The place.";
        } else if (CerValNo === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Number.";
        } else if (datepicker2 === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Date.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#addperdtlTechPlace").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var place = $('#cerplace').val();
        var CerValNo = $('#addperdtlCerValNo').val();
        var datepicker2 = $('#datepicker2').val();
        var ValIssAuth = $('#addperdtlValIssAuth').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select Issuing Authority.";
        } else if (place === "") {
            flag = 0;
            str = "ERR...  Enter The place.";
        } else if (CerValNo === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Number.";
        } else if (datepicker2 === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Date.";
        } else if (ValIssAuth === "") {
            flag = 0;
            str = "ERR... Select Validation Issuing  Authority.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#addperdtlTechRemarks").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var place = $('#cerplace').val();
        var CerValNo = $('#addperdtlCerValNo').val();
        var datepicker2 = $('#datepicker2').val();
        var ValIssAuth = $('#addperdtlValIssAuth').val();
        var TechPlace = $('#addperdtlTechPlace').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select Issuing Authority.";
        } else if (place === "") {
            flag = 0;
            str = "ERR...  Enter The place.";
        } else if (CerValNo === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Number.";
        } else if (datepicker2 === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Date.";
        } else if (ValIssAuth === "") {
            flag = 0;
            str = "ERR... Select Validation Issuing  Authority.";
        } else if (TechPlace === "") {
            flag = 0;
            str = "ERR... Enter The Certificate Validation place..";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#uplod_cer_val").focus(function() {
        var flag = 1;
        var str = "";
        var tech_religion = $('#tech_religion').val();
        var categry = $('#addperdtlTcCateg').val();
        var cernumbr = $('#addperdtlCernumber').val();
        var date = $('#datepicker').val();
        var issuauth = $('#addperdtlIssuAuth').val();
        var place = $('#cerplace').val();
        var CerValNo = $('#addperdtlCerValNo').val();
        var datepicker2 = $('#datepicker2').val();
        var ValIssAuth = $('#addperdtlValIssAuth').val();
        var TechPlace = $('#addperdtlTechPlace').val();
        var cast = $('#addperdtlTaCaste').val();
        if (tech_religion === "") {
            flag = 0;
            str = "ERR...  Select The Religion.";
        } else if (categry === "") {
            flag = 0;
            str = "ERR...  Select The Category.";
        } else if (cast === "") {
            flag = 0;
            str = "ERR...  Select The Cast.";
        } else if (cernumbr === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Number.";
        } else if (date === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Date.";
        } else if (issuauth === "") {
            flag = 0;
            str = "ERR...  Select Issuing Authority.";
        } else if (place === "") {
            flag = 0;
            str = "ERR...  Enter The place.";
        } else if (CerValNo === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Number.";
        } else if (datepicker2 === "") {
            flag = 0;
            str = "ERR...  Enter The Certificate Validation Date.";
        } else if (ValIssAuth === "") {
            flag = 0;
            str = "ERR... Select Validation Issuing  Authority.";
        } else if (TechPlace === "") {
            flag = 0;
            str = "ERR... Enter The Certificate Validation place..";
        }

        if (!flag) {
            alert(str);
        }
    });
    /*--   length validation------------------------------------------------------------------------*/
    $("#addperdtlCernumber").on('keypress', function() {
        $(function() {
            $('#addperdtlCernumber').bind('input', function() {
                $(this).val(function(_, v) {
                    return v.replace(/\s+/g, '');
                });
            });
        });
        if ($(this).val().length > 49) {
            alert("Too long Certificate Number");
            return false;

        }
    });
    $("#cerplace").on('keypress', function() {
        if ($(this).val().length > 29) {
            alert("Too long Characters For Place");
            return false;
        }
    });
    $("#remarks").on('keypress', function() {
        if ($(this).val().length > 49) {
            alert("Too long Characters For Remarks");
            return false;
        }
    });
    $("#addperdtlCerValNo").on('keypress', function() {
        $(function() {
            $('#addperdtlCerValNo').bind('input', function() {
                $(this).val(function(_, v) {
                    return v.replace(/\s+/g, '');
                });
            });
        });
        if ($(this).val().length > 49) {
            alert("Too long Certificate Validation Number");
            return false;
        }
    });
    $("#addperdtlTechPlace").on('keypress', function() {
        if ($(this).val().length > 29) {
            alert("Too long Characters For Certificate Validation Place");
            return false;
        }
    });
    $("#addperdtlTechRemarks").on('keypress', function() {
        if ($(this).val().length > 49) {
            alert("Too long Characters For Certificate Remarks");
            return false;
        }
    });
    /*-----------------------------------------------------------------------*/

    $('input[type="file"]').change(function() {
        if ($(this).val != '') {
            confirm("Are you sure you want to \n upload this Certificate.?");
            var ext = this.value.match(/\.(.+)$/)[1];
            switch (ext) {
                case 'jpg':
                case 'jpeg':
                case 'png':
                    break;
                default:
                    alert('This is not an allowed file type.');
                    this.value = '';
            }
        }
    });

    $('#pdfpath').click(function() {
        confirm('Please confirm about this file..!!');
    });
//    $('#addperdtlCernumber').change(function() {
//        if ($(this).val != '') {
//            $('#cer_val_frm').children().removeAttr('disabled');
//        }
//    });


    var optVals = ''
    $('#addperdtlValIssAuth option').each(function() {
        if ($(this).attr('value') != 17) {
            optVals += "<option value='" + $(this).attr('value') + "'>" + $(this).text() + "</option>";
        }
    });
    $('#addperdtlTcCateg').change(function() {
        var cluster_id = parseInt($('#addperdtlTcCateg :selected').val());
        var category = parseInt($('#addperdtlTcCateg').val());
        if (category != "") {
            if (cluster_id != 1) {
                $('#cer_frm').children().removeAttr('disabled');
                $('#cer_val_frm').children().removeAttr('disabled');
            } else if (cluster_id == 1) {
                $('#addperdtlCernumber').val('');
                $('#datepicker').val('');
                $('#addperdtlIssuAuth').val('');
                $('#cerplace').val('');
                $('#remarks').val('');
                $('#view').hide();
                $('#mycontainer1').hide();

                $('#addperdtlCerValNo').val('');
                $('#datepicker2').val('');
                $('#addperdtlValIssAuth').val('');
                $('#addperdtlTechPlace').val('');
                $('#addperdtlTechRemarks').val('');
                $('#view_val_cer').hide();
                $('#cerfval').hide();

                $("#cer_frm").children().attr("disabled", "disabled");
                $("#cer_val_frm").children().attr("disabled", "disabled");
            }

            if (category == '3') {
                var str = '';
                str += "<option value='' selected>" + 'Select Validation Authority ' + "</option>";
                str += "<option value='17'>" + 'Scheduled Tribe Certificate Scrutiny Committee,Maharashtra State,Pune ' + "</option>";
                $('#addperdtlValIssAuth').html(str);
            } else {
                jQuery.post(window.webroot + 'Teachers/CertValIssAuth', {}, function(data) {
                    $('#addperdtlValIssAuth').html(optVals);
                });
            }

            jQuery.post(window.webroot + 'Teachers/selectcast', {category_id: cluster_id}, function(data) {
                $('#addperdtlTaCaste').html(data);
            });
        } else {
            alert("ERR...Select the Category.");
            $("#addperdtlTcCateg").focus();
        }
    });
    $("#exit_addperdtl").click(function() {
        // $url = "addperdtl";
        $('#subcontent').html('');
    });
//    $(document.body).on('change', '#addperdtlTaCaste', function() {
//        //alert("hi");
//        var categ = $('#addperdtlTcCateg :selected').val();
//        var caste = $('#addperdtlTaCaste :selected').val();
//
//        jQuery.post(window.webroot + 'Teachers/selectsubcast', {categ_id: categ, castid: caste}, function(data) {
//            $('#subcast_id').html(data);
//        });
//    });
}

function  NewOtherDetails() {
    window.tchr_id = $('#tchr_id :selected').val();
    var tchr = window.tchr_id;
    var arr = tchr.split(':');
    jQuery.post(window.webroot + 'Teachers/othr_persnl_dtl', {$id: arr[0]}, function(data) {
        var ta_mother_tng = '';
        var ta_mari_stat = '';
        var ta_ele_card_no = '';
        var ta_ex_serv = '';
        var ta_height_ft = '';
        var ta_height_dt = '';
        var ta_height_inch = '';
        var ta_weight = '';
        var ta_weight_dt = '';
        var ta_blood_grp = '';
        var ta_id_mark1 = '';
        var ta_id_mark2 = '';
        var ta_shikshan_sevak = '';
        var ta_nontch_days = '';
        var ta_cwsn_trng = '';
        var cwsn_year = '';
        var ta_height_cm = '';
        var tchr_fname = '';
        var tchr_mname = '';
        var tchr_lname = '';
        var post_desc = '';
        var tchr_id = '';
        var ta_reason = '';
        var tchr_type = '';
        $.each(data, function(key, val) {
            $.each(val, function(key, val) {
                $.each(val, function(key, val) {
                    $.each(val, function(key, val) {
                        if (key === 'tchr_id') {
                            tchr_id = '(' + val + ')';
                            $("#otherperdtlTchrid").val(val);
                        }
                        if (key === 'ta_mother_tng') {
                            ta_mother_tng = val;
                        }
                        if (key === 'ta_mari_stat') {
                            ta_mari_stat = val;
                        }
                        if (key === 'ta_ele_card_no') {
                            ta_ele_card_no = val;
                        }
                        if (key === 'ta_ex_serv') {
                            ta_ex_serv = val;
                        }
                        if (key === 'tchr_type') {
                            tchr_type = val;
                        }
                        if (key === 'ta_height_ft') {
                            ta_height_ft = val;
                        }
                        if (key === 'ta_reason') {
                            ta_reason = val;
                        }
                        if (key === 'ta_height_inch') {
                            ta_height_inch = val;
                        }
                        if (key === 'ta_height_dt') {
                            ta_height_dt = val;
                        }
                        if (key === 'ta_weight') {
                            ta_weight = val;
                        }
                        if (key === 'ta_weight_dt') {
                            ta_weight_dt = val;
                        }
                        if (key === 'ta_blood_grp') {
                            ta_blood_grp = val;
                        }
                        if (key === 'ta_id_mark1') {
                            ta_id_mark1 = val;
                        }
                        if (key === 'ta_id_mark2') {
                            ta_id_mark2 = val;
                        }
                        if (key === 'ta_ele_card_no') {
                            ta_ele_card_no = val;
                        }
                        if (key === 'ta_shikshan_sevak') {
                            ta_shikshan_sevak = val;
                        }
                        if (key === 'ta_nontch_days') {
                            ta_nontch_days = val;
                        }
                        if (key === 'ta_cwsn_trng') {
                            ta_cwsn_trng = val;
                        }
                        if (key === 'cwsn_year') {
                            cwsn_year = val;
                        }
                        if (key === 'ta_height_cm') {
                            ta_height_cm = val;
                        }
                        if (key === 'tchr_fname') {
                            if (val) {
                                tchr_fname = val;
                            } else {
                                tchr_fname = '';
                            }
                        }
                        if (key === 'tchr_mname') {
                            if (val) {
                                tchr_mname = val;
                            } else {
                                tchr_mname = '';
                            }
                        }
                        if (key === 'tchr_lname') {
                            if (val) {
                                tchr_lname = val;
                            } else {
                                tchr_lname = '';
                            }
                        }
                        if (key === 'post_desc') {
                            if (val) {
                                post_desc = val;
                            } else {
                                post_desc = '';
                            }
                        }
                        if (key === 'verif_flag') {
                            verif_flag = val;
                            $('#otherperdtlVerifFlag').val(verif_flag);
                        }
                    });
                });
            });
        });
        var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
        $("#addperdtlTchrcode").text(tchr_id);
        $("#addperdtlTchrdesgn").text(post_desc);
        $("#addperdtlTchrname").text(tchrname);
        $("#tchr_type").val(tchr_type);
        $('#otherperdtlTaMotherTng option[value=' + $.trim(ta_mother_tng) + ']').attr("selected", "selected");
        $('#ta_mari_stat option[value=' + $.trim(ta_mari_stat) + ']').attr("selected", "selected");
        $("#otherperdtlTaEleCardNo").val(ta_ele_card_no);
        $("#otherperdtlTaHeightFt").val(ta_height_ft);
        $("#otherperdtlTaHeightInch").val(ta_height_inch);
        $("#otherperdtlTaHeightCm").val(ta_height_cm);
        $("#otherperdtlTaWeight").val(ta_weight);
        $("#otherperdtlTaNontchDays").val(ta_nontch_days);
        if (ta_cwsn_trng === '1')
        {
            $('#otherperdtlTaCwsnTrng1').prop('checked', true);
            $("#cyear").show();
            $("#otherperdtlCwsnYear").show();
            $("#otherperdtlCwsnYear").val(cwsn_year);
        } else {
            $('#otherperdtlTaCwsnTrng2').prop('checked', true);
        }
        if (ta_ex_serv === '1')
        {
            $('#otherperdtlTaExServ1').prop('checked', true);
        } else {
            $('#otherperdtlTaExServ2').prop('checked', true);
        }

        if (ta_shikshan_sevak === '1')
        {
            $('#otherperdtlTaShikshanSevak1').prop('checked', true);
        } else {
            $('#otherperdtlTaShikshanSevak2').prop('checked', true);
        }

        $('#ta_blood_grp option[value=' + $.trim(ta_blood_grp) + ']').attr("selected", "selected");
        $("#otherperdtlTaIdMark1").val(ta_id_mark1);
        $("#otherperdtlTaIdMark2").val(ta_id_mark2);
        $("#otherperdtlTaNoDaysAssi").val(ta_nontch_days);
        $("#otherperdtlTaTrainCwsn").val(ta_cwsn_trng);
        $("#otherperdtlTechElecCard").val(ta_ele_card_no);
        $('#otherperdtlTechRemarks').val(ta_reason);
    }, 'json');
}

function OtherValidation() {
    var numpattern = /^[0-9]*$/;
    var htwtpattern = /^[0-9]*$/;
    var charval = /^[a-zA-Z]*$/;
    var numcharval = /^[a-zA-Z0-9 ]*$/;
    var tchr_type_hidden = parseInt($('#tchr_type_hidden').val());

    if (tchr_type_hidden == '2') {
        $("input[type=radio][id=otherperdtlTaExServ2]").attr('checked', true);
        $("input[type=radio][id=otherperdtlTaExServ1]").attr('disabled', true);
        $('#otherperdtlTaNontchDays').prop('readonly', true);
    }

    $('#otherperdtlTaHeightFt').change(function() {
        var htft = parseInt($('#otherperdtlTaHeightFt').val());
        if (htwtpattern.test($('#otherperdtlTaHeightFt').val()) == false) {
            alert("ERR...Invalid height in ft..");
        } else if (htft < 1 || htft > 8) {
            alert("ERR...Entered Hight in Feet is Invalid.");
            $('#otherperdtlTaHeightFt').val('');
        } else if (htft != "") {
            var hightft = parseInt($('#otherperdtlTaHeightFt').val());
            if ($('#otherperdtlTaHeightInch').val() == '') {
                var hightinch = 0;
            }
            else {
                var hightinch = parseInt($('#otherperdtlTaHeightInch').val());
            }
            var inches = parseInt((hightft * 12) + hightinch);
            var result = parseInt(Math.round(inches / 0.393701));
            $("#otherperdtlTaHeightCm").val(result);
        }
    });
    $('#otherperdtlTaHeightInch').change(function() {
        var htinch = parseInt($('#otherperdtlTaHeightInch').val());
        if (htwtpattern.test($('#otherperdtlTaHeightInch').val()) == false) {
            alert("ERR...Entered Hight in Inch is Invalid.");
            $('#otherperdtlTaHeightInch').val('');
        }
        if (htinch < 0 || htinch > 11) {
            alert("ERR...Entered Hight in Inch is Invalid.");
            $('#otherperdtlTaHeightInch').val('');
        }
        else if (htinch != "") {
            var hightft = parseInt($('#otherperdtlTaHeightFt').val());
            var hightinch = parseInt($('#otherperdtlTaHeightInch').val());
            var inches = parseInt((hightft * 12) + hightinch);
            var result = parseInt(Math.round(inches / 0.393701));
            $("#otherperdtlTaHeightCm").val(result);
        }

    });
    $('#otherperdtlTaWeight').change(function() {
        var wtpattern = /^[0-9]*$/;
        var weight = parseInt($('#otherperdtlTaWeight').val());
        if (wtpattern.test($('#otherperdtlTaWeight').val()) == false) {
            alert("ERR...Invalid Weight..");
            $("#otherperdtlTaWeight").val("");
        } else if (weight < 30 || weight > 150) {
            alert("ERR...Entered Weight is Invalid.");
            $("#otherperdtlTaWeight").val("");
        }
    });
//    $('#otherperdtlTaHeightInch').change(function () {
//        var hightft = parseInt($('#otherperdtlTaHeightFt').val());
//        var hightinch = parseInt($('#otherperdtlTaHeightInch').val());
//
//        var inches = parseInt((hightft * 12) + hightinch);
//        var result = parseInt(Math.round(inches / 0.393701));
//        $("#otherperdtlTaHeightCm").val(result);
//    });

    $('#otherperdtlTaIdMark1').change(function() {
        if (numcharval.test($('#otherperdtlTaIdMark1').val()) == false) {
            alert("ERR...Invalid Identification Marks (#1)..");
            //  $("#otherperdtlTaIdMark1").val("");
        }
    });
    $('#otherperdtlTaNontchDays').change(function() {
        var hightft = parseInt($('#otherperdtlTaNontchDays').val());
        if (!(hightft > -1 && hightft <= 220)) {
            alert("ERR...Invalid No of working days spent on non-teaching assignment should not be greater than total working days.");
            $('#otherperdtlTaNontchDays').val('');
        }
    });
    $('#otherperdtlTaEleCardNo').change(function() {
        if (numcharval.test($('#otherperdtlTaEleCardNo').val()) == false) {
            alert("ERR...Invalid Election Card No...");
            $("#otherperdtlTaEleCardNo").focus();
        }
    });
    /*--   length validation------------------------------------------------------------------------*/
    $("#otherperdtlTaEleCardNo").on('change', function() {
        if ($(this).val().length > 10) {
            alert("ERR...Too long Election Card Number");
            // $("#otherperdtlTaEleCardNo").val("");
            $("#otherperdtlTaEleCardNo").focus();
            return false;
        }
    });
    $("#otherperdtlTaHeightFt").on('keypress', function() {
        if ($(this).val().length > 2) {
            alert("ERR...Invalid height length in Feet");
            //$("#otherperdtlTaHeightFt").val("");
            $("#otherperdtlTaHeightFt").focus();
            return false;
        }
    });
    $("#otherperdtlTaHeightInch").on('keypress', function() {
        if ($(this).val().length > 2) {
            alert("ERR...Invalid height length in Inch");
            // $("#otherperdtlTaHeightInch").val("");
            $("#otherperdtlTaHeightInch").focus();
            return false;
        }
    });
    $("#otherperdtlTaWeight").on('change', function() {
        if ($(this).val().length > 3) {
            alert("ERR...Invalid weight length ");
            // $("#otherperdtlTaWeight").val("");
            $("#otherperdtlTaWeight").focus();
            return false;
        }
    });
    $("#otherperdtlTaIdMark1").on('keypress', function() {
        if ($(this).val().length > 74) {
            alert("ERR...Invalid Identification Marks (#1) length");
            $("#otherperdtlTaIdMark1").focus();
            return false;
        }
    });
    $("#otherperdtlTaIdMark2").on('keypress', function() {
        if ($(this).val().length > 74) {
            alert("ERR...Invalid Identification Marks (#2) length");
            $("#otherperdtlTaIdMark2").focus();
            return false;
        }
    });
    $("#otherperdtlTaNontchDays").on('keypress', function() {
        if ($(this).val().length > 234) {
            alert("ERR...Invalid No. of working days ");
            $("#otherperdtlTaNontchDays").focus();
            return false;
        }
    });
    $("#otherperdtlTaCwsnTrng").on('keypress', function() {
        if ($(this).val().length > 1) {
            alert("ERR...Invalid CWSN");
            $("#otherperdtlTaCwsnTrng").focus();
            return false;
        }
    });
    /* ------------------------- onfocus valdiations  ------------------------------------------------------------	 */
    $("#ta_mari_stat").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...Select The Mother Tongue.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#otherperdtlTaEleCardNo").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#otherperdtlTaHeightFt").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        // var otherperdtlTaEleCardNo = $('#otherperdtlTaEleCardNo').val();

        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
//        if (otherperdtlTaEleCardNo === "") {
//            flag = 0;
//            str = "ERR...  Select Election Card No.";
//        }
        if (!flag) {
            alert(str);
        }
    });
    $("#otherperdtlTaHeightInch").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else

        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#ht_date").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        var otherperdtlTaHeightInch = $('#otherperdtlTaHeightInch').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        } else
        if (otherperdtlTaHeightInch === "") {
            flag = 0;
            str = "ERR...  Enter Height in Inch.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#otherperdtlTaWeight").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        var otherperdtlTaHeightInch = $('#otherperdtlTaHeightInch').val();
        var ht_date = $('#ht_date').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        } else
        if (otherperdtlTaHeightInch === "") {
            flag = 0;
            str = "ERR...  Enter Height in Inch.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#wt_date").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        var otherperdtlTaHeightInch = $('#otherperdtlTaHeightInch').val();
        var ht_date = $('#ht_date').val();
        var otherperdtlTaWeight = $('#otherperdtlTaWeight').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        } else
        if (otherperdtlTaHeightInch === "") {
            flag = 0;
            str = "ERR...  Enter Height in Inch.";
        } else
        if (otherperdtlTaWeight === "") {
            flag = 0;
            str = "ERR...  Enter Weight .";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#otherperdtlTaIdMark1").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        var otherperdtlTaHeightInch = $('#otherperdtlTaHeightInch').val();
        var otherperdtlTaWeight = $('#otherperdtlTaWeight').val();
        var ta_blood_grp = $('#ta_blood_grp').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        } else
        if (otherperdtlTaHeightInch === "") {
            flag = 0;
            str = "ERR...  Enter Height in Inch.";
        } else
        if (otherperdtlTaWeight === "") {
            flag = 0;
            str = "ERR...  Enter Weight .";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#otherperdtlTaIdMark2").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        var otherperdtlTaHeightInch = $('#otherperdtlTaHeightInch').val();
        var otherperdtlTaWeight = $('#otherperdtlTaWeight').val();
        var ta_blood_grp = $('#ta_blood_grp').val();
        var otherperdtlTaIdMark1 = $('#otherperdtlTaIdMark1').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        } else
        if (otherperdtlTaHeightInch === "") {
            flag = 0;
            str = "ERR...  Enter Height in Inch.";
        }
        else
        if (otherperdtlTaWeight === "") {
            flag = 0;
            str = "ERR...  Enter Weight .";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#ta_blood_grp").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        var otherperdtlTaHeightInch = $('#otherperdtlTaHeightInch').val();
        var otherperdtlTaWeight = $('#otherperdtlTaWeight').val();
        var otherperdtlTaIdMark1 = $('#otherperdtlTaIdMark1').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        } else
        if (otherperdtlTaHeightInch === "") {
            flag = 0;
            str = "ERR...  Enter Height in Inch.";
        }
        else
        if (otherperdtlTaWeight === "") {
            flag = 0;
            str = "ERR...  Enter Weight .";
        } else
        if (otherperdtlTaIdMark1 === "") {
            flag = 0;
            str = "ERR...  Enter Identification Marks (#1) .";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#otherperdtlTaNontchDays").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        var otherperdtlTaHeightInch = $('#otherperdtlTaHeightInch').val();
        var ht_date = $('#ht_date').val();
        var otherperdtlTaWeight = $('#otherperdtlTaWeight').val();
        var wt_date = $('#wt_date').val();
        var ta_blood_grp = $('#ta_blood_grp').val();
        var otherperdtlTaIdMark1 = $('#otherperdtlTaIdMark1').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        } else
        if (otherperdtlTaHeightInch === "") {
            flag = 0;
            str = "ERR...  Enter Height in Inch.";
        } else
        if (otherperdtlTaWeight === "") {
            flag = 0;
            str = "ERR...  Enter Weight .";
        } else
//        if (ta_blood_grp === "") {
//            flag = 0;
//            str = "ERR...  Enter Blood Group.";
//        } else
        if (otherperdtlTaIdMark1 === "") {
            flag = 0;
            str = "ERR...  Enter Identification Marks (#1) .";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#otherperdtlTaCwsnTrng").focus(function() {
        var flag = 1;
        var str = "";
        var otherperdtlTaMotherTng = $('#otherperdtlTaMotherTng').val();
        var ta_mari_stat = $('#ta_mari_stat').val();
        var otherperdtlTaHeightFt = $('#otherperdtlTaHeightFt').val();
        var otherperdtlTaHeightInch = $('#otherperdtlTaHeightInch').val();
        var ht_date = $('#ht_date').val();
        var otherperdtlTaWeight = $('#otherperdtlTaWeight').val();
        var wt_date = $('#wt_date').val();
        var ta_blood_grp = $('#ta_blood_grp').val();
        var otherperdtlTaIdMark1 = $('#otherperdtlTaIdMark1').val();
        var otherperdtlTaNontchDays = $('#otherperdtlTaNontchDays').val();
        if (otherperdtlTaMotherTng === "") {
            flag = 0;
            str = "ERR...  Select Mother Tongue.";
        } else
        if (ta_mari_stat === "") {
            flag = 0;
            str = "ERR...  Select Marital Status.";
        } else
        if (otherperdtlTaHeightFt === "") {
            flag = 0;
            str = "ERR...  Enter Height in Ft.";
        } else
        if (otherperdtlTaHeightInch === "") {
            flag = 0;
            str = "ERR...  Enter Height in Inch.";
        } else
        if (otherperdtlTaWeight === "") {
            flag = 0;
            str = "ERR...  Enter Weight .";
        } else
//        if (ta_blood_grp === "") {
//            flag = 0;
//            str = "ERR...  Enter Blood Group.";
//        } else
        if (otherperdtlTaIdMark1 === "") {
            flag = 0;
            str = "ERR...  Enter Identification Marks (#1) .";
        }
        else
        if (otherperdtlTaNontchDays === "") {
            flag = 0;
            str = "ERR...  Enter No. of working days .";
        }

        if (!flag) {
            alert(str);
        }
    });
}

function UdiseTrainingValidation() {
    $("#senioryear").hide();
    $("#senior").hide();
    $("#selectionyear").hide();
    $("#selection").hide();
    $("#cyear").hide();
    $("#cwsnyear").hide();
    $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng1]").attr('disabled', true);
    $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng2]").attr('disabled', true);
    $("#UdiseTrainingTrdSeniorGrdTrng1").click(function() {
        var yes = $('#UdiseTrainingTrdSeniorGrdTrng1').val();
        if (yes == 1) {
            $("#senioryear").show();
            $("#senior").show();
            $("#trd_senior_trng_dt").change(function() {
                var senior_trng_date = $('#trd_senior_trng_dt').val();
                var date = senior_trng_date.substring(0, 2);
                var month = senior_trng_date.substring(3, 5);
                var year = senior_trng_date.substring(6, 10);
                var senior_trng = new Date(year, month - 1, date); //Birth Date Converted

                var serv_entry_dt = $('#UdiseTrainingTchrServEntryDt').val();
                var date1 = serv_entry_dt.substring(0, 2);
                var month1 = serv_entry_dt.substring(3, 5);
                var year1 = serv_entry_dt.substring(6, 10);
                var serv_entry = new Date(year1, month1 - 1, date1); //Birth Date Converted

                if (yes == 1 && senior_trng_date != "") {
                    if (serv_entry > senior_trng) {
                        alert("Err...Training Date Can Not be Smaller Than Service Entry Date");
                    }
                    $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng1]").attr('disabled', false);
                    $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng2]").attr('disabled', false);
                }
            });
        }
    });
    $("#UdiseTrainingTrdSeniorGrdTrng2").click(function() {
        var no = $('#UdiseTrainingTrdSeniorGrdTrng2').val();
        if (no == 2) {
            $("#senioryear").hide();
            $("#senior").hide();
            $('#trd_senior_trng_dt').val('');
            trd_selection_trng_dt
            $("#selectionyear").hide();
            $("#selection").hide();
            $('#trd_selection_trng_dt').val('');
            $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng2]").attr('checked', true);
            $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng1]").attr('disabled', true);
            $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng2]").attr('disabled', true);
        }
    });
    $("#UdiseTrainingTrdSelectionGrdTrng1").click(function() {
        var yes = $('#UdiseTrainingTrdSelectionGrdTrng1').val();
        if (yes == 1) {
            $("#selectionyear").show();
            $("#selection").show();
            $("#trd_selection_trng_dt").change(function() {
                var selection_trng_date = $('#trd_selection_trng_dt').val();
                var date = selection_trng_date.substring(0, 2);
                var month = selection_trng_date.substring(3, 5);
                var year = selection_trng_date.substring(6, 10);
                var selection_trng = new Date(year, month - 1, date); //Birth Date Converted

                var senior_entry_dt = $('#trd_senior_trng_dt').val();
                var date1 = senior_entry_dt.substring(0, 2);
                var month1 = senior_entry_dt.substring(3, 5);
                var year1 = senior_entry_dt.substring(6, 10);
                var senior_trng = new Date(year1, month1 - 1, date1); //Birth Date Converted

                if (senior_entry_dt != "" && selection_trng_date != "") {
                    if (selection_trng < senior_trng) {
                        alert("Err...Selection Training Date Can Not be Smaller Than Senior Training Date");
                    }
                }
            });
        }
    });
    $("#UdiseTrainingTrdSelectionGrdTrng2").click(function() {
        var no = $('#UdiseTrainingTrdSelectionGrdTrng2').val();
        if (no == 2) {
            $("#selectionyear").hide();
            $("#selection").hide();
            $('#trd_selection_trng_dt').val('');
        }
    });
    $("#UdiseTrainingTrdCwsnTrained1").click(function() {
        var yes = $('#UdiseTrainingTrdCwsnTrained1').val();
        if (yes == 1) {
            $("#cyear").show();
            $("#cwsnyear").show();
        }
    });
    $("#UdiseTrainingTrdCwsnTrained2").click(function() {
        var no = $('#UdiseTrainingTrdCwsnTrained2').val();
        if (no == 2) {
            $("#cyear").hide();
            $("#cwsnyear").hide();
            $('#UdiseTrainingTrdCwsnTrngYear').val('');
        }
    });
    $("#UdiseTrainingTrdCwsnTrngYear").change(function() {
        var year = parseInt($('#UdiseTrainingTrdCwsnTrngYear').val());
        var current_year = new Date().getFullYear()
        if (year < 2000 || year > current_year) {
            alert(" \n Err...Invalid CWSN Year");
            $('#UdiseTrainingTrdCwsnTrngYear').val('');
        }
    });

    $('#UdiseTrainingTrdBrcDays').change(function() {
        var brcdays = parseInt($('#UdiseTrainingTrdBrcDays').val());
        if (!(brcdays > -1)) {
            alert("ERR...Invalid No of Block Resource Center ");
            $('#UdiseTrainingTrdBrcDays').val('');
        }
    });
    $('#UdiseTrainingTrdCrcDays').change(function() {
        var brcdays = parseInt($('#UdiseTrainingTrdBrcDays').val());
        if (!(brcdays > -1)) {
            alert("ERR...Invalid No of Block Resource Center ");
            $('#UdiseTrainingTrdBrcDays').val('');
        }
    });
    $('#UdiseTrainingTrdUrcDays').change(function() {
        var brcdays = parseInt($('#UdiseTrainingTrdBrcDays').val());
        if (!(brcdays > -1)) {
            alert("ERR...Invalid No of Block Resource Center ");
            $('#UdiseTrainingTrdBrcDays').val('');
        }
    });
    $('#UdiseTrainingTrdOthDays').change(function() {
        var brcdays = parseInt($('#UdiseTrainingTrdOthDays').val());
        if (!(brcdays > -1)) {
            alert("ERR...Invalid No of Block Resource Center ");
            $('#UdiseTrainingTrdOthDays').val('');
        }
    });
    $('#UdiseTrainingTrdBrcDays,#UdiseTrainingTrdCrcDays,#UdiseTrainingTrdUrcDays,#UdiseTrainingTrdOthDays').keyup(function() {
        var sum = Number($('#UdiseTrainingTrdBrcDays').val()) + Number($('#UdiseTrainingTrdCrcDays').val()) + Number($('#UdiseTrainingTrdUrcDays').val()) + Number($('#UdiseTrainingTrdOthDays').val());
        $('#total').text(sum);
    });
}

function UdiseTrainingVJson() {

    window.tchr_id = $('#tchr_id :selected').val();
    var tchr = window.tchr_id;
    var arr = tchr.split(':');
    jQuery.post(webroot + 'Teachers/udise_training_persnl_dtl', {$id: arr[0]}, function(data) {
        var tchr_fname = '';
        var tchr_mname = '';
        var tchr_lname = '';
        var post_desc = '';
        var tchr_id = '';
        var tchr_type = '';
        var trd_brc_days = '';
        var trd_crc_days = '';
        var trd_urc_days = '';
        var trd_oth_days = '';
        var trd_senior_grd_trng = '';
        var trd_senior_trng_dt = '';
        var trd_selection_grd_trng = '';
        var trd_selection_trng_dt = '';
        var trd_cwsn_trained = '';
        var trd_cwsn_trng_year = '';
        var trd_comp_usage = '';
        var tchr_type = '';
        var tchr_serv_entry_dt = '';
        $.each(data, function(key, val) {
            $.each(val, function(key, val) {
                $.each(val, function(key, val) {
                    $.each(val, function(key, val) {
                        if (key === 'tchr_id') {
                            tchr_id = '(' + val + ')';
                            $("#addperdtlTchrcode").val(val);
                            $("#UdiseTrainingTchrid").val(val);
                        }
                        if (key === 'tchr_type') {
                            tchr_type = val;
                        }
                        if (key === 'tchr_serv_entry_dt') {
                            if (val) {
                                tchr_serv_entry_dt = val;
                                arr = tchr_serv_entry_dt.split('-');
                                jQuery('#UdiseTrainingTchrServEntryDt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                            }
                        }
                        if (key === 'trd_brc_days') {
                            trd_brc_days = val;
                        }
                        if (key === 'trd_crc_days') {
                            trd_crc_days = val;
                        }
                        if (key === 'trd_urc_days') {
                            trd_urc_days = val;
                        }
                        if (key === 'trd_oth_days') {
                            trd_oth_days = val;
                        }
                        if (key === 'trd_senior_grd_trng') {
                            trd_senior_grd_trng = val;
                        }
                        if (key === 'trd_senior_trng_dt') {
                            trd_senior_trng_dt = val;
                        }
                        if (key === 'trd_selection_grd_trng') {
                            trd_selection_grd_trng = val;
                        }
                        if (key === 'trd_selection_trng_dt') {
                            trd_selection_trng_dt = val;
                        }
                        if (key === 'trd_cwsn_trained') {
                            trd_cwsn_trained = val;
                        }
                        if (key === 'trd_cwsn_trng_year') {
                            trd_cwsn_trng_year = val;
                        }
                        if (key === 'trd_comp_usage') {
                            trd_comp_usage = val;
                        }

                        if (key === 'tchr_fname') {
                            if (val) {
                                tchr_fname = val;
                            } else {
                                tchr_fname = '';
                            }
                        }
                        if (key === 'tchr_mname') {
                            if (val) {
                                tchr_mname = val;
                            } else {
                                tchr_mname = '';
                            }
                        }
                        if (key === 'tchr_lname') {
                            if (val) {
                                tchr_lname = val;
                            } else {
                                tchr_lname = '';
                            }
                        }
                        if (key === 'post_desc') {
                            if (val) {
                                post_desc = val;
                            } else {
                                post_desc = '';
                            }
                        }

                    });
                });
            });
        });
        var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
        $("#addperdtlTchrcode").text(tchr_id);
        $("#addperdtlTchrdesgn").text(post_desc);
        $("#addperdtlTchrname").text(tchrname);
        $("#tchr_type").val(tchr_type);
        $("#UdiseTrainingTrdBrcDays").val(trd_brc_days);
        $("#UdiseTrainingTrdCrcDays").val(trd_crc_days);
        $("#UdiseTrainingTrdUrcDays").val(trd_urc_days);
        $("#UdiseTrainingTrdOthDays").val(trd_oth_days);
        var sum = 0;
        sum = parseInt(trd_brc_days) + parseInt(trd_crc_days) + parseInt(trd_urc_days) + parseInt(trd_oth_days);
        if (sum) {
            $('#total').text(sum);
        } else {
            $('#total').text(0);
        }
        if (trd_cwsn_trained === '1')
        {
            $('#UdiseTrainingTrdCwsnTrained1').prop('checked', true);
            $("#cwsnyear").show();
            $("#cyear").show();
            $("#UdiseTrainingTrdCwsnTrngYear").val(trd_cwsn_trng_year);
        } else {
            $('#otherperdtlTaCwsnTrng2').prop('checked', true);
        }

        if (trd_senior_grd_trng === '1' && trd_senior_trng_dt != '')
        {
            $('#UdiseTrainingTrdSeniorGrdTrng1').prop('checked', true);
            $("#senioryear").show();
            $("#senior").show();
            arr = trd_senior_trng_dt.split('-');
            jQuery('#trd_senior_trng_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);

            $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng1]").attr('disabled', false);
            $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng2]").attr('disabled', false);
        } else {
            $('#UdiseTrainingTrdSeniorGrdTrng2').prop('checked', true);
            $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng1]").attr('disabled', true);
            $("input[type=radio][id=UdiseTrainingTrdSelectionGrdTrng2]").attr('disabled', true);
        }

        if (trd_selection_grd_trng === '1')
        {
            $('#UdiseTrainingTrdSelectionGrdTrng1').prop('checked', true);
            $("#selectionyear").show();
            $("#selection").show();
            if (trd_selection_trng_dt) {
                arr = trd_selection_trng_dt.split('-');
                jQuery('#trd_selection_trng_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
            }

        } else {
            $('#UdiseTrainingTrdSelectionGrdTrng2').prop('checked', true);
        }

        if (trd_comp_usage === '1')
        {
            $('#UdiseTrainingTrdCompUsage1').prop('checked', true);
        } else {
            $('#UdiseTrainingTrdCompUsage2').prop('checked', true);
        }

    }, 'json');
}

function TrainingJson() {
    window.tchr_id = $('#tchr_id :selected').val();
    var tchr = window.tchr_id;
    var arr = tchr.split(':');
    jQuery.post(window.webroot + 'Teachers/jsontraining', {$id: arr[0]}, function(data) {
        var tchr_fname = '';
        var tchr_mname = '';
        var tchr_lname = '';
        var tchr_id = '';
        var tchr = '';
        var trng_type = '';
        var trng_title = '';
        var inst_cd = '';
        var trng_categ = '';
        var trng_level = '';
        var trng_from_dt = '';
        var trng_to_dt = '';
        var trng_attend = '';
        var trng_cert = '';
        var trng_remarks = '';
        var tchr_serv_entry_dt = '';
        var siteArray = data.array;
        $.each(data, function(key, val) {
            $.each(val, function(key, val) {
                $.each(val, function(key, val) {
                    $.each(val, function(key, val) {
                        if (key === 'tchr_id') {
                            //tchr = val;
                            tchr_id = '(' + val + ')';
                            $("#TrainingTchrid").val(val);
                        }

                        if (key === 'tchr_fname') {
                            if (val) {
                                tchr_fname = val;
                            } else {
                                tchr_fname = '';
                            }
                        }
                        if (key === 'tchr_mname') {
                            if (val) {
                                tchr_mname = val;
                            } else {
                                tchr_mname = '';
                            }
                        }
                        if (key === 'tchr_lname') {
                            if (val) {
                                tchr_lname = val;
                            } else {
                                tchr_lname = '';
                            }
                        }
                        if (key === 'post_desc') {
                            if (val) {
                                post_desc = val;
                            } else {
                                post_desc = '';
                            }
                        }
                        if (key === 'tchr_serv_entry_dt') {
                            if (val) {
                                var arr = val.split('-');
                                servdate = arr[2] + "/" + arr[1] + "/" + arr[0];
                                tchr_serv_entry_dt = val;
                            }

                        }

//                            if (key === 'trng_from_dt') {
//                                trng_from_dt = val;
//                            }
//                            if (key === 'trng_to_dt') {
//                                trng_to_dt = val;
//                            }
                    });
                });
            });
        });
        var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
        $("#addperdtlTchrcode").text(tchr_id);
        $("#addperdtlTchrdesgn").text(post_desc);
        $("#addperdtlTchrname").text(tchrname);
        $("#TrainingTrngType").val(trng_type);
        $("#TrainingServEntryDt").val(servdate);
        $("#TrainingInstCd").val(inst_cd);
        $("#TrainingTrngLevel").val(trng_level);
        $("#datepickerfrm").val(trng_from_dt);
        $("#datepickerto").val(trng_to_dt);
        $("#TrainingTrngTitle").val(trng_title);
        $("#TrainingTrngRemarks").val(trng_remarks);
        if (trng_from_dt) {
            var arr = trng_from_dt.split('-');
            jQuery('#TrainingHdnfrmdate').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
        }
        if (trng_to_dt) {
            var arr = trng_to_dt.split('-');
            jQuery('#TrainingHdntodate').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
        }
    }, 'json');
    jQuery.post(window.webroot + 'Teachers/traininggridbyid', {tchr_id: arr[0]}, function(data) {
        $('#griddisply').html(data);
    })
}

function FamilyJson() {
    window.tchr_id = $('#tchr_id :selected').val();
    var tchr = window.tchr_id;
    var arr = tchr.split(':');
    jQuery.post(window.webroot + 'Teachers/familygridbyid', {tchr_id: arr[0]}, function(data) {
        $('#griddisply').html(data);
    })

    jQuery.post(window.webroot + 'Teachers/jsonfamily', {$id: arr[0]}, function(data) {

        var tchr_fname = '';
        var tchr_mname = '';
        var tchr_lname = '';
        var tchr_id = '';
        var tchr = '';
        var tchr_birth_dt = '';
        var tchr_gender = '';
        $.each(data, function(key, val) {
            $.each(val, function(key, val) {
                $.each(val, function(key, val) {
                    $.each(val, function(key, val) {
                        if (key === 'tchr_id') {
                            tchr_id = '(' + val + ')';
                            $("#FamilyTchrid").val(val);
                        }
                        if (key === 'tchr_birth_dt') {
                            var arr = val.split('-');
                            bdate = arr[2] + "/" + arr[1] + "/" + arr[0];
                            $("#FamilyTchrBirthDt").val(bdate);
                        }
                        if (key === 'tchr_fname') {
                            if (val) {
                                tchr_fname = val;
                            } else {
                                tchr_fname = '';
                            }
                        }
                        if (key === 'tchr_mname') {
                            if (val) {
                                tchr_mname = val;
                            } else {
                                tchr_mname = '';
                            }
                        }
                        if (key === 'tchr_lname') {
                            if (val) {
                                tchr_lname = val;
                            } else {
                                tchr_lname = '';
                            }
                        }
                        if (key === 'post_desc') {
                            if (val) {
                                post_desc = val;
                            } else {
                                post_desc = '';
                            }
                        }
                        if (key === 'tchr_serv_entry_dt') {
                            if (val) {
                                var arr = val.split('-');
                                servdate = arr[2] + "/" + arr[1] + "/" + arr[0];
                                tchr_serv_entry_dt = val;
                            }

                        }
                        if (key === 'tchr_gender') {
                            tchr_gender = val;
                        }

                    });
                });
            });
        });
        var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
        $("#addperdtlTchrcode").text(tchr_id);
        $("#addperdtlTchrdesgn").text(post_desc);
        $("#addperdtlTchrname").text(tchrname);
        $('#FamilyFamilyGender').text(tchr_gender);
        if (tchr_gender == '1') {
            var select = document.getElementById("FamilyTfRelCd");
            select.remove('5');
        } else {
            alert(tchr_gender);
            var select = document.getElementById("FamilyTfRelCd");
            select.remove('6');
        }
    }, 'json');

}

function FamilyValidation() {
    var adharv = /^[0-9]*$/;
    $('#tf_rel_dob').change(function() {
        var training_from_dt = $('#tf_rel_dob').val();
        var date = training_from_dt.substring(0, 2);
        var month = training_from_dt.substring(3, 5);
        var year = training_from_dt.substring(6, 10);
        var dateToCompare_from_dt = new Date(year, month - 1, date); //Birth Date Converted

        var Datepattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        var CurrentDate = new Date();
        var tchr_birth_dt = $('#FamilyTchrBirthDt').val();
        var date1 = tchr_birth_dt.substring(0, 2);
        var month1 = tchr_birth_dt.substring(3, 5);
        var year1 = tchr_birth_dt.substring(6, 10);
        var tchr_bdate_from_dt = new Date(year1, month1 - 1, date1); //Birth Date Converted

        var FamilyTfRelCd = $('#FamilyTfRelCd').val();
        if (FamilyTfRelCd == 1 || FamilyTfRelCd == 2)
        {
            if (tchr_bdate_from_dt <= dateToCompare_from_dt) {
                alert("\n Err...Parents Date of Birth can not be greater than Childrens Date of Birth");
                $("#tf_rel_dob").val('');
            }
        }

        if (FamilyTfRelCd == 7 || FamilyTfRelCd == 8)
        {
            if (tchr_bdate_from_dt > dateToCompare_from_dt) {
                alert("\n Err...Childrens Date of Birth can not be less than Parents Date of Birth");
                $("#tf_rel_dob").val('');
            }
            else {
                var diff = new Date(dateToCompare_from_dt - tchr_bdate_from_dt);
                var days = diff / 1000 / 60 / 60 / 24;

                if (parseInt(Math.round(days)) < parseInt(5475)) {
                    alert("Invalid Childrens Date of Birth ...");
                }
            }
        }

        if (training_from_dt != "") {
            if (Datepattern.test(training_from_dt) == false) {
                alert("\n Err... Please Enter Valid Date");
                $("#tf_rel_dob").val('');
            } else if (dateToCompare_from_dt > CurrentDate) {
                alert("\n Err...Date of Birth can not be greater than Todays date");
                $("#tf_rel_dob").val('');
            }
//            var diff = new Date(CurrentDate - dateToCompare_from_dt);
//            var days = diff / 1000 / 60 / 60 / 24;
//
//            if (parseInt(Math.round(days)) < parseInt(5840)) {
//                alert("Invalid Date of Birth ...");
//            }
        }

    });
    $('#FamilyTfEidCardNo').change(function() {
        var election_card = $('#FamilyTfEidCardNo').val();
        var charval = /^[a-zA-Z0-9]*$/;

        if (election_card != "") {
            if (charval.test(election_card) == false) {
                alert("\n Err... Please Enter Valid Election Card No");
                $("#FamilyTfEidCardNo").val('');
            } else
            if ($('#FamilyTfEidCardNo').val().length > 14 || $('#FamilyTfEidCardNo').val().length < 14) {
                alert("\n Err...Invalid Election Card No");
                $("#FamilyTfEidCardNo").val('');
            }
            if (election_card == '00000000000000') {
                alert("\n Err... Please Enter Valid Election Card No");
                $("#FamilyTfEidCardNo").val('');
            }

        }

    });
    $('#FamilyTfRelAdharCardNo1').change(function() {
        var adharv = /^[0-9]*$/;
        var AdharCardNo1 = parseInt($('#FamilyTfRelAdharCardNo1').val());
        if (parseInt($('#FamilyTfRelAdharCardNo1').val()) === 0) {
            alert("\n Err... Please Enter Valid Adhar Card No");
            $("#FamilyTfRelAdharCardNo1").val('');
        }
        if (AdharCardNo1 != "") {
            if (adharv.test(AdharCardNo1) == false) {
                alert("\n Err... Please Enter Valid Adhar Card No");
                $("#FamilyTfRelAdharCardNo1").val('');
            } else if ($('#FamilyTfRelAdharCardNo1').val().length < 4) {
                alert("\n Err...Invalid Adhar Card No");
                $("#FamilyTfRelAdharCardNo1").val('');
            }

        }
    });
    $('#FamilyTfRelAdharCardNo2').change(function() {
        var AdharCardNo2 = parseInt($('#FamilyTfRelAdharCardNo2').val());
//        if (parseInt($('#FamilyTfRelAdharCardNo2').val()) === 0) {
//            alert("\n Err... Please Enter Valid Adhar Card No");
//            $("#FamilyTfRelAdharCardNo2").val('');
//        }
        if (AdharCardNo2 != "") {
            if (adharv.test(AdharCardNo2) == false) {
                alert("\n Err... Please Enter Valid Adhar Card No");
                $("#FamilyTfRelAdharCardNo2").val('');
            } else
            if ($('#FamilyTfRelAdharCardNo2').val().length < 4) {
                alert("\n Err...Invalid Adhar Card No");
                $("#FamilyTfRelAdharCardNo2").val('');
            }
        }
    });
    $('#FamilyTfRelAdharCardNo3').change(function() {
        var AdharCardNo3 = parseInt($('#FamilyTfRelAdharCardNo3').val());
//        if (parseInt($('#FamilyTfRelAdharCardNo3').val()) === 0) {
//            alert("\n Err... Please Enter Valid Adhar Card No");
//            $("#FamilyTfRelAdharCardNo3").val('');
//        }
        if (AdharCardNo3 != "") {
            if (adharv.test(AdharCardNo3) == false) {
                alert("\n Err... Please Enter Valid Adhar Card No");
                $("#FamilyTfRelAdharCardNo3").val('');
            } else
            if ($('#FamilyTfRelAdharCardNo3').val().length < 4) {
                alert("\n Err...Invalid Adhar Card No");
                $("#FamilyTfRelAdharCardNo3").val('');
            }
        }
    });

    $('#FamilyTfRelAdharCardNo1,#FamilyTfRelAdharCardNo2,#FamilyTfRelAdharCardNo3').blur(function() {
        var AdharCardNo1 = $('#FamilyTfRelAdharCardNo1').val();
        var AdharCardNo2 = $('#FamilyTfRelAdharCardNo2').val();
        var AdharCardNo3 = $('#FamilyTfRelAdharCardNo3').val();
        if ((AdharCardNo1 != "" && AdharCardNo1.length == '4') && (AdharCardNo2 != "" && AdharCardNo2.length == '4') && (AdharCardNo3 != "" && AdharCardNo3.length == '4')) {
            $('#FamilyTfEidCardNo').attr('disabled', true);
        } else {
            $('#FamilyTfEidCardNo').attr('disabled', false);
        }

    });
}

function TrainingValidation() {
    jQuery("#TrainingTrngCert3").attr('checked', true);
    $("#TrainingTrngAttend2").click(function() {

        jQuery("#TrainingTrngCert3").attr('checked', true);

    });
    $("#TrainingTrngAttend1").click(function() {

        jQuery("#TrainingTrngCert2").attr('checked', true);

    });

    $("#TrainingInstCd").focus(function() {
        var flag = 1;
        var str = "";
        var TrainingTrngType = $('#TrainingTrngType').val();
        if (TrainingTrngType === "") {
            flag = 0;
            str = "ERR...Select Training Type .";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#TrainingTrngLevel").focus(function() {
        var flag = 1;
        var str = "";
        var TrainingTrngType = $('#TrainingTrngType').val();
        var TrainingInstCd = $('#TrainingInstCd').val();
        if (TrainingTrngType === "") {
            flag = 0;
            str = "ERR...Select Training Type .";
        } else if (TrainingInstCd === "") {
            flag = 0;
            str = "ERR...Select The Institute.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#datepickerfrm").focus(function() {
        var flag = 1;
        var str = "";
        var TrainingTrngType = $('#TrainingTrngType').val();
        var TrainingInstCd = $('#TrainingInstCd').val();
        var TrainingTrngLevel = $('#TrainingTrngLevel').val();
        if (TrainingTrngType === "") {
            flag = 0;
            str = "ERR...Select Training Type .";
        } else if (TrainingInstCd === "") {
            flag = 0;
            str = "ERR...Select The Institute.";
        } else if (TrainingTrngLevel === "") {
            flag = 0;
            str = "ERR...Select The Institute Level.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#datepickerto").focus(function() {
        var flag = 1;
        var str = "";
        var TrainingTrngType = $('#TrainingTrngType').val();
        var TrainingInstCd = $('#TrainingInstCd').val();
        var TrainingTrngLevel = $('#TrainingTrngLevel').val();
        var datepickerfrm = $('#datepickerfrm').val();
        if (TrainingTrngType === "") {
            flag = 0;
            str = "ERR...Select Training Type .";
        } else if (TrainingInstCd === "") {
            flag = 0;
            str = "ERR...Select The Institute.";
        } else if (TrainingTrngLevel === "") {
            flag = 0;
            str = "ERR...Select The Institute Level.";
        } else if (datepickerfrm === "") {
            flag = 0;
            str = "ERR...Select The From Date.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#TrainingTrngTitle").focus(function() {
        var flag = 1;
        var str = "";
        var TrainingTrngType = $('#TrainingTrngType').val();
        var TrainingInstCd = $('#TrainingInstCd').val();
        var TrainingTrngLevel = $('#TrainingTrngLevel').val();
        var datepickerfrm = $('#datepickerfrm').val();
        var datepickerto = $('#datepickerto').val();
        if (TrainingTrngType === "") {
            flag = 0;
            str = "ERR...Select Training Type .";
        } else if (TrainingInstCd === "") {
            flag = 0;
            str = "ERR...Select The Institute.";
        } else if (TrainingTrngLevel === "") {
            flag = 0;
            str = "ERR...Select The Institute Level.";
        } else if (datepickerfrm === "") {
            flag = 0;
            str = "ERR...Select The From Date.";
        } else if (datepickerto === "") {
            flag = 0;
            str = "ERR...Select The To Date.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#TrainingTrngRemarks").focus(function() {
        var flag = 1;
        var str = "";
        var TrainingTrngType = $('#TrainingTrngType').val();
        var TrainingInstCd = $('#TrainingInstCd').val();
        var TrainingTrngLevel = $('#TrainingTrngLevel').val();
        var datepickerfrm = $('#datepickerfrm').val();
        var datepickerto = $('#datepickerto').val();
        var TrainingTrngTitle = $('#TrainingTrngTitle').val();
        if (TrainingTrngType === "") {
            flag = 0;
            str = "ERR...Select Training Type .";
        } else if (TrainingInstCd === "") {
            flag = 0;
            str = "ERR...Select The Institute.";
        } else if (TrainingTrngLevel === "") {
            flag = 0;
            str = "ERR...Select The Institute Level.";
        } else if (datepickerfrm === "") {
            flag = 0;
            str = "ERR...Select The From Date.";
        } else if (datepickerto === "") {
            flag = 0;
            str = "ERR...Select The To Date.";
        }
        else if (TrainingTrngTitle === "") {
            flag = 0;
            str = "ERR...Enter Title.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $('#datepickerfrm').change(function() {
        var Datepattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        var CurrentDate = new Date();
        var training_from_dt = $('#datepickerfrm').val();
        var date = training_from_dt.substring(0, 2);
        var month = training_from_dt.substring(3, 5);
        var year = training_from_dt.substring(6, 10);
        var dateToCompare_from_dt = new Date(year, month - 1, date); //Birth Date Converted

        var TrainingServEntryDt = $('#TrainingServEntryDt').val();
        var date1 = TrainingServEntryDt.substring(0, 2);
        var month1 = TrainingServEntryDt.substring(3, 5);
        var year1 = TrainingServEntryDt.substring(6, 10);
        var service_dt = new Date(year1, month1 - 1, date1); //Birth Date Converted

        if (training_from_dt != "") {
            if (Datepattern.test(training_from_dt) == false) {
                alert("\n Err... Please Enter Valid Training From Date");
                $('#datepickerfrm').val('');
            } else if (dateToCompare_from_dt > CurrentDate) {
                alert("ERR..From date can not be greater than Todays date");
                $('#datepickerfrm').val('');
            } else if (service_dt > dateToCompare_from_dt) {
                alert("ERR..Training From date must be greater than Service entry date");
                $('#datepickerfrm').val('');
            }
        }
    });
    $('#datepickerto').change(function() {
        var training_from_dt = $('#datepickerto').val();
        var date = training_from_dt.substring(0, 2);
        var month = training_from_dt.substring(3, 5);
        var year = training_from_dt.substring(6, 10);
        var dateToCompare_from_dt = new Date(year, month - 1, date); //Birth Date Converted

        var training_to_dt = $('#datepickerfrm').val();
        var date1 = training_to_dt.substring(0, 2);
        var month1 = training_to_dt.substring(3, 5);
        var year1 = training_to_dt.substring(6, 10);
        var dateToCompare_to_dt = new Date(year1, month1 - 1, date1); //Birth Date Converted
        var CurrentDate = new Date();
        var Datepattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (training_from_dt != "") {
            if (Datepattern.test(training_from_dt) == false) {
                alert("\n Err... Please Enter Valid Training To Date");
                $('#datepickerto').val('');
            } else if (dateToCompare_from_dt > CurrentDate) {
                alert("To date can not be greater than Todays date");
                $('#datepickerto').val('');
            } else
            if (dateToCompare_from_dt < dateToCompare_to_dt) {
                alert("To date must be greater than From date");
                $('#datepickerto').val('');
            }
        }


    });
}

function SubjectTaughtJson() {
    window.tchr_id = $('#tchr_id :selected').val();
    var tchr = window.tchr_id;
    var arr = tchr.split(':');
    jQuery.post(window.webroot + 'Teachers/json_subj_taught', {$id: arr[0]}, function(data) {

        var tchr_fname = '';
        var tchr_mname = '';
        var tchr_lname = '';
        var tchr_id = '';
        var tchr = '';
        $.each(data, function(key, val) {
            $.each(val, function(key, val) {
                $.each(val, function(key, val) {
                    $.each(val, function(key, val) {
                        if (key === 'tchr_id') {
                            tchr_id = '(' + val + ')';
                            $("#SubtaughtTchrid").val(val);
                        }

                        if (key === 'tchr_fname') {
                            if (val) {
                                tchr_fname = val;
                            } else {
                                tchr_fname = '';
                            }
                        }
                        if (key === 'tchr_mname') {
                            if (val) {
                                tchr_mname = val;
                            } else {
                                tchr_mname = '';
                            }
                        }
                        if (key === 'tchr_lname') {
                            if (val) {
                                tchr_lname = val;
                            } else {
                                tchr_lname = '';
                            }
                        }
                        if (key === 'post_desc') {
                            if (val) {
                                post_desc = val;
                            } else {
                                post_desc = '';
                            }
                        }
                        if (key === 'tchr_serv_entry_dt') {
                            if (val) {
                                var arr = val.split('-');
                                servdate = arr[2] + "/" + arr[1] + "/" + arr[0];
                                tchr_serv_entry_dt = val;
                            }

                        }
                    });
                });
            });
        });
        var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
        $("#addperdtlTchrcode").text(tchr_id);
        $("#addperdtlTchrdesgn").text(post_desc);
        $("#addperdtlTchrname").text(tchrname);
    }, 'json');
    jQuery.post(window.webroot + 'Teachers/subjectggridbyid', {tchr_id: arr[0]}, function(data) {
        $('#griddisply').html(data);
    })

}

function SubjectTaughtValidation() {
    $('#SubtaughtTsClassFrom').change(function() {
        var subj_from = parseInt($('#SubtaughtTsClassFrom').val());
        parseInt($("#SubtaughtTsClassTo").val(subj_from));
        $("#SubtaughtHiddenClassTo").val(subj_from);
        var prof_level = parseInt($('#SubtaughtTsProfLevel :selected').val());
        var medium = parseInt($('#SubtaughtTsSubjectMedium :selected').val());
        var from = parseInt($('#SubtaughtTsClassFrom :selected').val());
        var to = parseInt($('#SubtaughtTsClassTo :selected').val());
        jQuery.post(webroot + 'Teachers/selectsubject', {prof_level: prof_level, medium: medium, from: from, to: to}, function(data) {
            $('#SubtaughtTsSubject').html(data);
        });
    });
    $('#SubtaughtTsSubject').change(function() {
        var prof_level = parseInt($('#SubtaughtTsProfLevel :selected').val());
        var medium = parseInt($('#SubtaughtTsSubjectMedium :selected').val());
        var from = parseInt($('#SubtaughtTsClassFrom :selected').val());
        var Subject = parseInt($('#SubtaughtTsSubject :selected').val());
        jQuery.post(webroot + 'Teachers/allocated_periods', {prof_level: prof_level, medium: medium, from: from, subject: Subject}, function(data) {
            $('#period').html(data);
        });
    });
    $('#SubtaughtTsProfLevel').change(function() {
        $('#SubtaughtTsSubjectMedium').val('');
        $('#SubtaughtTsClassFrom').val('');
        $('#SubtaughtTsSubject').val('');
        $('#SubtaughtTsClassTo:not(:selected)').attr('disabled', true);
        var flag = 1;
        var str = '';
        var prof_level = parseInt($('#SubtaughtTsProfLevel').val());
        if (prof_level == 1) {
            var categories = ["from", "1", "2", "3", "4", "5"];
            fill_combo_value(categories);
            checkSchoolCat(1, 5);
        }
        else if (prof_level == 2) {
            var categories = ["from", "6", "7", "8"];
            fill_combo_value(categories);
            var categories = ["6", "8"];
        }
        else if (prof_level == 3) {
            var categories = ["from", "1", "2", "3", "4", "5", "6", "7", "8"];
            fill_combo_value(categories);
            checkSchoolCat(1, 8);
        }
//        else if (prof_level == 4) {
//            var categories = ["6", "7", "8"];
//            fill_combo_value(categories);
//            checkSchoolCat(6, 8);
//        } 
        else if (prof_level == 5) {
            var categories = ["from", "9", "10"];
            fill_combo_value(categories);
            checkSchoolCat(9, 10);
        }
        else if (prof_level == 6) {
            var categories = ["from", "11", "12"];
            fill_combo_value(categories);
            checkSchoolCat(11, 12);
        }
        else if (prof_level == 7) {
            var categories = ["from", "6", "7", "8", "9", "10"];
            fill_combo_value(categories);
            var categories = ["6", "10"];
        }
        else if (prof_level == 8) {
            var categories = ["from", "9", "10", "11", "12"];
            fill_combo_value(categories);
            checkSchoolCat(9, 12);
        }

    });
    $("#SubtaughtTsSubjectMedium").focus(function() {
        var flag = 1;
        var str = "";
        var SubtaughtTsProfLevel = $('#SubtaughtTsProfLevel').val();
        if (SubtaughtTsProfLevel === "") {
            flag = 0;
            str = "ERR...Select The Subjects taught level.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#SubtaughtTsClassFrom").focus(function() {
        var flag = 1;
        var str = "";
        var SubtaughtTsProfLevel = $('#SubtaughtTsProfLevel').val();
        var SubtaughtTsSubjectMedium = $('#SubtaughtTsSubjectMedium').val();
        if (SubtaughtTsProfLevel === "") {
            flag = 0;
            str = "ERR...Select The Subjects taught level.";
        } else if (SubtaughtTsSubjectMedium === "") {
            flag = 0;
            str = "ERR...Select The Medium.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#SubtaughtTsClassTo").focus(function() {
        var flag = 1;
        var str = "";
        var SubtaughtTsProfLevel = $('#SubtaughtTsProfLevel').val();
        var SubtaughtTsSubjectMedium = $('#SubtaughtTsSubjectMedium').val();
        var SubtaughtTsClassFrom = $('#SubtaughtTsClassFrom').val();
        if (SubtaughtTsProfLevel === "") {
            flag = 0;
            str = "ERR...Select The Subjects taught level.";
        } else if (SubtaughtTsSubjectMedium === "") {
            flag = 0;
            str = "ERR...Select The Medium.";
        } else if (SubtaughtTsClassFrom === "0") {
            flag = 0;
            str = "ERR...Select The Class From.";
        }

        if (!flag) {
            alert(str);
        }
    });
    $("#SubtaughtTsSubject").focus(function() {
        var flag = 1;
        var str = "";
        var SubtaughtTsProfLevel = $('#SubtaughtTsProfLevel').val();
        var SubtaughtTsSubjectMedium = $('#SubtaughtTsSubjectMedium').val();
        var SubtaughtTsClassFrom = $('#SubtaughtTsClassFrom').val();
        var SubtaughtTsClassTo = $('#SubtaughtTsClassTo').val();
        if (SubtaughtTsProfLevel === "") {
            flag = 0;
            str = "ERR...Select The Subjects taught level.";
        } else if (SubtaughtTsSubjectMedium === "") {
            flag = 0;
            str = "ERR...Select The Medium.";
        } else if (SubtaughtTsClassFrom === "0") {
            flag = 0;
            str = "ERR...Select The Class From.";
        } else if (SubtaughtTsClassTo === "") {
            flag = 0;
            str = "ERR...Select The Class To.";
        }

        if (!flag) {
            alert(str);
        }
    });
}

function InitialAppValidation() {
    $('#initApptDtlAppPostMode').change(function() {
        var mode = parseInt($('#initApptDtlAppPostMode').val());
        if (mode < 600 || mode > 700) {
            alert(" \n Err...Invalid Mode of Getting Post ");
        }

    });
    $('#initApptDtlApmntSub2').change(function() {
        var sub1 = parseInt($('#initApptDtlApmntSub').val());
        var sub2 = parseInt($('#initApptDtlApmntSub2').val());
        if (sub1 == sub2) {
            alert(" \n Err...Selected Appointment for Subject2 is Invalid ");
            $('#initApptDtlApmntSub2').val('');
        }

    });
    $('#initApptDtlApmntSub3').change(function() {
        var sub1 = parseInt($('#initApptDtlApmntSub').val());
        var sub2 = parseInt($('#initApptDtlApmntSub2').val());
        var sub3 = parseInt($('#initApptDtlApmntSub3').val());
        if (sub3 == sub2 || sub3 == sub1) {
            alert(" \n Err...Selected Appointment for Subject3 is Invalid ");
            $('#initApptDtlApmntSub3').val('');
        }

    });
}

function UdiseQualificationJson() {

    window.tchr_id = $('#tchr_id :selected').val();
    var tchr = window.tchr_id;
    var arr = tchr.split(':');
    jQuery.post(window.webroot + 'Teachers/udise_qualification_dtl', {$id: arr[0]}, function(data) {
        var tchr_fname = '';
        var tchr_mname = '';
        var tchr_lname = '';
        var post_desc = '';
        var tchr_id = '';
        var tchr_type = '';
        var tl_math_sc_studied = '';
        var tl_eng_lang_studied = '';
        var tl_social_sc_studied = '';
        var tl_sub1 = '';
        var tl_sub2 = '';
        var teah_level = '';
        $.each(data, function(key, val) {
            $.each(val, function(key, val) {
                $.each(val, function(key, val) {
                    $.each(val, function(key, val) {
                        if (key === 'tchr_id') {
                            tchr_id = '(' + val + ')';
                            $("#addperdtlTchrcode").val(val);
                            $("#UdiseStudiedLevelTchrid").val(val);
                        }
                        if (key === 'tchr_type') {
                            tchr_type = val;
                        }

                        if (key === 'tchr_fname') {
                            if (val) {
                                tchr_fname = val;
                            } else {
                                tchr_fname = '';
                            }
                        }
                        if (key === 'tchr_mname') {
                            if (val) {
                                tchr_mname = val;
                            } else {
                                tchr_mname = '';
                            }
                        }
                        if (key === 'tchr_lname') {
                            if (val) {
                                tchr_lname = val;
                            } else {
                                tchr_lname = '';
                            }
                        }
                        if (key === 'post_desc') {
                            if (val) {
                                post_desc = val;
                            } else {
                                post_desc = '';
                            }
                        }

                        if (key === 'tl_sub1') {
                            if (val) {
                                tl_sub1 = val;
                            } else {
                                tl_sub1 = '';
                            }
                        }
                        if (key === 'tl_sub2') {
                            if (val) {
                                tl_sub2 = val;
                            } else {
                                tl_sub2 = '';
                            }
                        }
                        if (key === 'tl_math_sc_studied') {
                            if (val) {
                                tl_math_sc_studied = val;
                            } else {
                                tl_math_sc_studied = '';
                            }
                        }
                        if (key === 'tl_eng_lang_studied') {
                            if (val) {
                                tl_eng_lang_studied = val;
                            } else {
                                tl_eng_lang_studied = '';
                            }
                        }
                        if (key === 'tl_social_sc_studied') {
                            if (val) {
                                tl_social_sc_studied = val;
                            } else {
                                tl_social_sc_studied = '';
                            }
                        }
                        if (key === 'teah_level') {
                            if (val) {
                                teah_level = val;
                            } else {
                                teah_level = '';
                            }
                        }
                    });
                });
            });
        });
        var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
        $("#addperdtlTchrcode").text(tchr_id);
        $("#addperdtlTchrdesgn").text(post_desc);
        $("#addperdtlTchrname").text(tchrname);
        $("#tchr_type").val(tchr_type);
        $('#UdiseStudiedLevelTlMathScStudied option[value=' + $.trim(tl_math_sc_studied) + ']').attr("selected", "selected");
        $('#UdiseStudiedLevelTlEngLangStudied option[value=' + $.trim(tl_eng_lang_studied) + ']').attr("selected", "selected");
        $('#UdiseStudiedLevelTlSocialScStudied option[value=' + $.trim(tl_social_sc_studied) + ']').attr("selected", "selected");
        $('#UdiseStudiedLevelTlSub1 option[value=' + $.trim(tl_sub1) + ']').attr("selected", "selected");
        $('#UdiseStudiedLevelTlSub2 option[value=' + $.trim(tl_sub2) + ']').attr("selected", "selected");
        $('#UdiseStudiedLevelTeahLevel option[value=' + $.trim(teah_level) + ']').attr("selected", "selected");
    }, 'json');
}
/*-------------------*Mayuri End-------------------------- */
/*-------------------*Pravin Start -------------------------- */
function fill_combo_value(categories) {
    var select = document.getElementById("SubtaughtTsClassFrom");
    var frm = parseInt($('#SubtaughtClassfrm').val());
    var to = parseInt($('#SubtaughtClassto').val());
    $('#SubtaughtTsClassFrom').empty();
    for (var i = 0; i < categories.length; i++) {
        if (categories[i] < frm || categories[i] > to) {
            select.remove(i);
        } else {
            var opt = categories[i];
            var el = document.createElement("option");
            select.appendChild(el);
            if (opt == 'from') {
                el.textContent = 'from';
                el.value = 0;
            } else {
                el.textContent = opt;
                el.value = opt;
            }
            select.appendChild(el);
        }
    }
}

function checkSchoolCat(lc, hc) {
    var lc = parseInt(lc);
    var hc = parseInt(hc);
    var frm = parseInt($('#SubtaughtClassfrm').val());
    var to = parseInt($('#SubtaughtClassto').val());
    if ((lc <= to && lc >= frm) || (hc <= to && hc >= frm)) {

    } else {
        alert("Subject Taught Level is not matching with School From-To Level");
        $('#SubtaughtTsClassTo:not(:selected)').attr('disabled', false);
        $('#SubtaughtTsClassTo').val('');
        $('#SubtaughtTsProfLevel').val('');
    }
}

function isEmpty(check) {
    if (check == '') {
        return true;
    } else {
        return false;
    }
}

function isPanNumber(check) {
    var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    if (Panpattern.test(check) == false) {
        return true;
    } else {
        return false;
    }
}

function isAccountNumber(check) {
    var AccountNopattern = /^([0-9]{6})$/;
    if (AccountNopattern.test(check) == false) {
        return true;
    } else {
        return false;
    }
}
/*-------------------*Pravin End-------------------------- */