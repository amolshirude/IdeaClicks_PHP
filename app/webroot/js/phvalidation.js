
// Form Validation on :  Model-> teacher->Navigation->ph->Form->Physically Handicap Details .
// by : hemant kadam   
$(function () {
    $("#datepicker").datepicker({
        //minDate: 1,
        showOn: 'both',
        showOn: "button",
                buttonImage: '../img/calendar.gif',
        maxDate: 0,
        buttonImageOnly: true,
    });

});

$(document).ready(function () {
// //  alert("hello");
////            $('input[type="submit"]').removeAttr('disabled');
//            $('#cancel_tch_personal').removeAttr('disabled');

    $("#phtbl").hide();
    $("#nomsg").show();

//    $("#phRadioGroup2").click(function () {
//        $(".exrydatid").show();
//    });
//    $("#phRadioGroup1").click(function () {
//        $(".exrydatid").hide();
//    });


//    var persng = /^(4[0-9]|[4-9]\d|9[0-9]?100)$/;
    $("#phTechPhPersnt").focusout(function () {
        var TeacherTechPhPersnt = parseInt($('#phTechPhPersnt').val());

        if (TeacherTechPhPersnt < 40 || TeacherTechPhPersnt > 100) {
            alert("Err... Invalid Disability Percentage.");
            $("#phTechPhPersnt").val('');
        }
//        if (persng.test(TeacherTechPhPersnt) == false) {
//            $("#TeacherTechPhPersnt").focus();
//            $('#TeacherTechPhPersnt').css('border-color', 'red');
//            alert("Err... Invalid Disability Percentage.");
//            return false;
//        }
    });
    $("#datepicker").change(function (event) {
        var datepicker = $('#datepicker').val();
        var currentDate = new Date(); //Current Date
        var tchr_birth_dt = $('#phTchrBirthDt').val();
       
        var date = tchr_birth_dt.substring(0, 2);
        var month = tchr_birth_dt.substring(3, 5);
        var year = tchr_birth_dt.substring(6, 10);
        var dateToCompare_birth_dt = new Date(year, month - 1, date);//Birth Date Converted

        var tchr_serv_entry_dt = $('#datepicker').val(); //Date of Entry in Service 
        var date = tchr_serv_entry_dt.substring(0, 2);
        var month = tchr_serv_entry_dt.substring(3, 5);
        var year = tchr_serv_entry_dt.substring(6, 10);
        var dateToCompare_serv_entry_dt = new Date(year, month - 1, date);//Date of Entry in Service Converted

        var now = new Date(tchr_birth_dt);
        var past = new Date(tchr_serv_entry_dt);
        var nowYear = now.getFullYear();
        var pastYear = past.getFullYear();
        var YearDiff = pastYear - nowYear; //Year Difference of 2 dates

        if (tchr_serv_entry_dt != '') {
            if (dateToCompare_serv_entry_dt < dateToCompare_birth_dt) {
                $("#datepicker").focus();
                alert("Err.. Enter Certificate Date Greater than Date of Birth .");
                return false;
            }
        }
        if (dateToCompare_serv_entry_dt > currentDate) {
            $("#datepicker").focus();
            alert("Err.. Enter Certificate Date less than today Date.");
            return false;
        }

        var exrydate = /(((0|1)[1-9]|2[1-9]|3[0-1])\/(0[1-9]|1[1-2])\/((19|20)\d\d))$/;

        if (exrydate.test(datepicker) === false) {

            $("#datepicker").focus();
            $('#datepicker').css('border-color', 'red');
            alert("Err... Invalid Certificate Date.");
            return false;
        } else {

        }
    });



    $("#datepicker").change(function () {
        var str = $('#datepicker').val();
        if (/^\d{2}\/\d{2}\/\d{4}$/i.test(str)) {
            var parts = str.split("/");
            var day = parts[0] && parseInt(parts[0], 10);
            var month = parts[1] && parseInt(parts[1], 10);
            var year = parts[2] && parseInt(parts[2], 10);
            var duration = 5;//parseInt( $("#registerfor").val(), 10);

            if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
                var expiryDate = new Date(year, month - 1, day - 1);
                expiryDate.setFullYear(expiryDate.getFullYear() + duration);
                var day = ('0' + expiryDate.getDate()).slice(-2);
                var month = ('0' + (expiryDate.getMonth() + 1)).slice(-2);
                var year = expiryDate.getFullYear();
                $('#phTechPhExprydate').val(day + "/" + month + "/" + year);
            } else {
                // display error message
            }
        }

        //$('#UserTechPhExprydate').attr("value",$d);
    });

    //$('input[type="submit"]').attr('disabled', 'disabled');
   // $('#cancel_tch_personal').attr('disabled', 'disabled');
//    $('input[type="submit"]').css("background", "rgba(39, 120, 137, 0.6)");
//    $('#cancel_tch_personal').css("background", "rgba(39, 120, 137, 0.6)");


    $('input[type="text"],#phTechPhRemark').keyup(function () {
        if ($(this).val() !== '') {
            $('input[type="submit"]').removeAttr('disabled');
            $('#cancel_tch_personal').removeAttr('disabled');
            $('input[type="submit"]').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
            $('#cancel_tch_personal').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
        }
    });

    $('select,input[type="radio"],#uplodimage', '#phTechIssuAuthority', 'phTechPhPlace', 'phTechPhRemark').click(function () {
        $('input[type="submit"]').removeAttr('disabled');
        $('#cancel_tch_personal').removeAttr('disabled');
        $('input[type="submit"]').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
        $('#cancel_tch_personal').css("background", "linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
    });

    $("#uplodimage").click(function () {
        $("input[id='upload_cert_img']").click();
    });

    $("#viewimage").click(function () {
        $("input[id='view_cert_img']").click();
    });



//    $('input[type="submit"]').attr('disabled', 'disabled');
//    $('#cancel_tch_personal').attr('disabled', 'disabled');
//    $('input[type="submit"]').css("background", "rgba(39, 120, 137, 0.6)");
//    $('#cancel_tch_personal').css("background", "rgba(39, 120, 137, 0.6)");
    $("#phtbl").show();
    $("#nomsg").hide();
    ShowProgress();
    var tid = $('#phTchrId').val();
    var bla = $('#phTchrBirthDt').val();
    // alert(bla);
    $('.myClass').removeClass('myClass');
    $(this).addClass('myClass');

    var tchr_id = $("#tchr_id_hidden").val();
    var tchr_type = $("#tchr_type_hidden").val();

    jQuery.post('/Education/Teachers/PersonalDetails', {tchr_id: tchr_id, tchr_type: tchr_type}, function (data) {
        $.each(data, function (key1, val1) {
            $.each(val1, function (key, val) { 
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
                else if (key === 'tchr_id') {
                    jQuery('#tchr_code').text('(' + val + ')');
                }
                else if (key === 'post_desc') {
                    jQuery('#tchr_designation').text(val);
                    jQuery('#tchr_curr_desg_cd').val(val);
                } 
                
            });
        });
    }, 'json');

//            jQuery.post('/Education/Teachers/Teacherdetailbyid', {tchr_id: tid}, function (data) {
//                //alert(data);
//                $.each(data, function (key, val) {
//
//                    $.each(val, function (key1, val1) {
//                        $.each(val1, function (key2, val2) {
//                            if (key2 === 'tchr_birth_dt') {
//                                 var d = val2;
//                                    d = d.substr(0, 10).split("-");
//                                    d = d[2] + "/" + d[1] + "/" + d[0];
//                             
//                                document.getElementById('phTchrBirthDt').setAttribute('value', d);
//                                $('#phTchrBirthDt').val(d);
//                            }
//                            else if (key2 === 'schl_id') {
//                                var cod = '('+val2+')';
//                                $('#tcod').text(cod);
//                            }
//                            else if (key2 === 'tchr_fname') {
//                                if (val2 == null) {
//                                    val2 = "";
//                                    $('#tfnm').text(val2);
//                                } else {
//
//                                }
//                            }
//                            else if (key2 === 'tchr_mname') {
//                                if (val2 == null) {
//                                    val2 = "";
//                                    $('#tmnm').text(val2);
//                                } else {
//
//                                }
//                            }
//                            else if (key2 === 'tchr_lname') {
//                               
//                                $('#tlnm').text(val2);
//                            }
//                            else if (key2 === 'tchr_curr_desg_cd') {
//                               
//                            }
//
//                        });
//                    });
//                });
//            }, 'json');

    if (tid !== '') {

        jQuery.post('/Education/Teachers/teacherdatabyid', {techr_id: tid}, function (data) {

            var siteArray = data.array;

            if (data.length > 0) {

                if (!$.isArray(siteArray) || !siteArray.length) {
                    //handler either not an array or empty array
                    $('input[type="submit"]').removeAttr('disabled');
                    $.each(data, function (key, val) {
                        $.each(val, function (key1, val1) {

                            $.each(val1, function (key2, val2) {
                                // alert("inside"); 
                                // alert(key2+"==="+val2);
                                if (key2 === 'ph_disab_per') {
                                    jQuery('#phTechPhPersnt').val('');
                                    jQuery('#phTechPhPersnt').val(val2);
                                }
                                else if (key2 === 'ph_cert_no') {
                                    jQuery('#phPhCertNo').val('');
                                    jQuery('#phPhCertNo').val(val2);
                                }
                                else if (key2 === 'ph_order_no') {
                                    jQuery('#phPhOrderNo').val('');
                                    jQuery('#phPhOrderNo').val(val2);
                                }
                                else if (key2 === 'ph_cert_fname') {


                                    var imgpath = "/Education/ph/";
                                    if (val2) {
                                        $('#mycontainer').hide();
                                        $('#delete').show();
                                        $("#addperdtlUplodimg").val(val);
                                        $('#close').show();

                                        // $('#showimage').attr("src",(imgpath+val2));
                                        var newImage = $('<img align="center" height="150" width="483"  id="popimg"/>');
                                        newImage.attr('src', (imgpath + val2));
                                        $('#abc').append(newImage);

                                        var newImage = $('<img align="center" height="35" width="35" style="cursor:pointer;pointer;height: 35px;padding-bottom:5px;padding-left:4px;width:35px;right:255px;margin-top: -115px; position: absolute;"id="popup" onClick="div_show()" />');
                                        newImage.attr('src', (imgpath + val2));
                                        $('#imgrow').html(newImage);
                                        jQuery('#phCertimg').val(val2);

                                    } else {
                                        $('#mycontainer').hide();
                                        $('#delete').show();
                                        $("#addperdtlUplodimg").val(val);
                                        $('#close').show();
                                        var imgpath = "/Education/ph/notAvailable.jpg";

                                        // $('#showimage').attr("src",(imgpath+val2));
                                        var newImage = $('<img align="center" height="150" width="483"   id="popimg"/>');
                                        newImage.attr('src', (imgpath));
                                        $('#abc').append(newImage);

                                        var newImage = $('<img align="center" height="180" width="180" style="cursor:pointer;pointer;height: 35px;width:35px;padding-bottom:5px;padding-left:4px;right:255px;margin-top: -115px; position: absolute;"id="popup" onClick="div_show()" />');
                                        newImage.attr('src', (imgpath));
                                        $('#imgrow').html(newImage);
                                        jQuery('#phCertimg').val(val2);

                                    }


                                }
                                else if (key2 === 'ph_remarks') {
                                    jQuery('#phTechPhRemark').val('');
                                    jQuery('#phTechPhRemark').val(val2);
                                } else if (key2 === 'ph_cert_auth') {

                                    // jQuery('#phIsathtype').val(val2);
                                    var val = val2;
                                    $('#phTechIssuAuthority option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                }
//                                else if (key2 === 'ph_cd') {
//
//                                    if (val2 == 1)
//                                    {
//                                        jQuery('#phRadioGroup1').prop('checked', true);
//                                        $(".exrydatid").hide();
//                                    } else {
//
//                                        jQuery('#phRadioGroup2').prop('checked', true);
//                                        // alert("inside");
//                                        $(".exrydatid").show();
//                                    }
                                    // jQuery('#ph_cd').val(val);
//                                }
                                else if (key2 === 'ph_cd') {
                                    var val = val2;
                                    $('#phDistype option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                }
                                else if (key2 === 'ph_place') {
                                    //  alert(val2);
                                    //jQuery('#phTechPhPlace').val('');
                                    jQuery('#phTechPhPlace').val(val2);
                                }
                                else if (key2 === 'verif_flag') {
                                    //alert(val2);
                                    // jQuery('#phTechPhExprydate').val(val2);
                                    document.getElementById('phTchrFlg').setAttribute('value', val2);
                                    $('#phTchrFlg').val(val2);

                                    var vfg = $('#phTchrFlg').val();


                                    if (vfg == 'F') {
                                        alert("Data has been already forwarded to Cluster for Verification.");
//                                        $('input[type="submit"]').attr('disabled', 'disabled');
                                        $('#imgrow').show();
                                        $('input').prop('readonly', true);
                                        $('select').prop('disabled', 'disabled');
                                        $('#tech_list').prop('disabled', 'disabled');
                                        $('input[type="radio"]').prop('disabled', 'disabled');
                                        //$('#uplodimage').prop('disabled', 'disabled');
                                        $("#upload_cert_img").prop('disabled', 'disabled');
                                        $(".ui-datepicker-trigger").hide();
                                        $('#phTechPhRemark').css('color', '');
                                    }
                                    if (vfg == 'V') {

                                        alert("Data has been Verified from Cluster.");
                                      //  $('input[type="submit"]').attr('disabled', 'disabled');
                                        $('#imgrow').show();
                                        $('input').prop('readonly', true);
                                        $('select').prop('disabled', 'disabled');
                                        $('#tech_list').prop('disabled', 'disabled');
                                        $('input[type="radio"]').prop('disabled', 'disabled');
                                        //$('#uplodimage').prop('disabled', 'disabled');
                                        $('#phTechPhRemark').css('color', '');
                                        $("#upload_cert_img").prop('disabled', 'disabled');
                                        $(".ui-datepicker-trigger").hide();
                                    }
                                    if (vfg == 'E') {
                                        // alert(vfg);
                                       // $('input[type="submit"]').attr('disabled', 'disabled');
                                        $('#imgrow').show();
                                        $('input').prop('readonly', false);
                                        $('select').prop('disabled', false);
                                        $('#tech_list').prop('disabled', 'disabled');
                                        $('input[type="radio"]').prop('disabled', false);
                                        $('#phTechPhRemark').css('color', '');
                                        $("#upload_cert_img").prop('disabled', false);
                                    }
                                    if (vfg == 'R') {
                                        alert('Record Rejected by Cluster Head,plz see the remarks for data updation.');
                                      //  $('input[type="submit"]').attr('disabled', 'disabled');
                                        $('#imgrow').show();
                                        $('input').prop('readonly', false);
                                        $('select').prop('disabled', false);
                                        $('#tech_list').prop('disabled', 'disabled');
                                        $('input[type="radio"]').prop('disabled', false);
                                        $('#phTechPhRemark').css('color', 'red');
                                        $("#upload_cert_img").prop('disabled', false);
                                    }
                                }

                                var crdt = val1.ph_cert_dt;
                                var crexprydt = val1.ph_expiry_dt;
                                var orddt = val1.ph_order_dt;
                                //alert(crdt);
                                // alert(orddt);
                                // alert(crexprydt);
                                if (/^\d{4}\-\d{2}\-\d{2}$/i.test(crdt)) {

                                    var parts = crdt.split('-');
                                    var year = parts[0] && parseInt(parts[0], 10);
                                    var day = parts[2] && parseInt(parts[2], 10);
                                    var month = parts[1] && parseInt(parts[1], 10);
                                    //  var show = $('#datepicker').val( day + "/" + month + "/" + year );
                                    // alert(year);alert(day);alert(month);
                                    if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {

                                        var nday = ('0' + day).slice(-2);
                                        var nmonth = ('0' + (month)).slice(-2);
                                        var nyear = year;
                                        $('#datepicker').val(nday + "/" + nmonth + "/" + nyear);

                                    }
                                }
                                if (/^\d{4}\-\d{2}\-\d{2}$/i.test(crexprydt)) {
                                    // alert(crexprydt);
                                    var parts = crexprydt.split('-');
                                    var year = parts[0] && parseInt(parts[0], 10);
                                    var day = parts[2] && parseInt(parts[2], 10);
                                    var month = parts[1] && parseInt(parts[1], 10);
                                    //alert(day);

                                    // var show = $('#phTechPhExprydate').val( day + "/" + month + "/" + year );
                                    if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
                                        var nday = ('0' + day).slice(-2);
                                        var nmonth = ('0' + (month)).slice(-2);
                                        var nyear = year;
                                        $('#phTechPhExprydate').val(nday + "/" + nmonth + "/" + nyear);
                                    }
                                }


                            });
                        });
                    });
                } else {
                    //alert("outside dgfdfg");
                }
            } else {

                // alert("No Data Available ");
                $("input#phTechPhPersnt,input#phPhCertNo,#datepicker,#phPhOrderNo,#phTechPhRemark,#phTechPhExprydate,#phDistype,#phTechIssuAuthority").val("");
                $('#imgrow').hide();
                $('#save_ph_dtl').show();
                $('#cancel_tch_personal').show();
                $('input').prop('readonly', false);
                $('select').prop('disabled', false);
                $('#tech_list').prop('disabled', 'disabled');
                $('input[type="radio"]').prop('disabled', false);
                //$('#uplodimage').prop('disabled', 'disabled');
                $("#upload_cert_img").prop('disabled', false);
                $(".ui-datepicker-trigger").prop('disabled', false);
                var vfg = $('#phTchrFlg').val('');
            }
            HideProgress();
        }, 'json');
    }


    $(document).on('click', '#cancel_tch_personal', function () {
        $("#phtbl").show();
        $("#nomsg").hide();
        //$('input[type="submit"]').attr('disabled', 'disabled');
      //  $('#cancel_tch_personal').attr('disabled', 'disabled');
//        $('input[type="submit"]').css("background", "rgba(39, 120, 137, 0.6)");
//        $('#cancel_tch_personal').css("background", "rgba(39, 120, 137, 0.6)");
        ShowProgress();
        var tid = $('#phTchrId').val();
        // alert(tid);
        var bla = $('#phTchrBirthDt').val();

        jQuery.post('/Education/Teachers/Teacherdetailbyid', {tchr_id: tid}, function (data) {
            //alert(data);
            $.each(data, function (key, val) {

                $.each(val, function (key1, val1) {
                    $.each(val1, function (key2, val2) {
                        // alert(key2+"==="+val2);
                        if (key2 === 'tchr_birth_dt') {
                            var d = val2;
                            d = d.substr(0, 10).split("-");
                            d = d[2] + "/" + d[1] + "/" + d[0];
                            // alert(d);
                            document.getElementById('phTchrBirthDt').setAttribute('value', d);
                            $('#phTchrBirthDt').val(d);
                        }
                        else if (key2 === 'schl_cd_shalarath') {
                            var cod = '(' + val2 + ')';
                            $('#tcod').text(cod);
                        }
                        else if (key2 === 'tchr_fname') {
                            if (val2 == null) {
                                val2 = "";
                                $('#tfnm').text(val2);
                            } else {

                            }
                        }
                        else if (key2 === 'tchr_mname') {
                            if (val2 == null) {
                                val2 = "";
                                $('#tmnm').text(val2);
                            } else {

                            }
                        }
                        else if (key2 === 'tchr_lname') {
                            $('#tlnm').text(val2);
                        }
                        else if (key2 === 'tchr_curr_desg_cd') {
                        }

                    });
                });
            });
        }, 'json');

        if (tid !== '') {

            jQuery.post('/Education/Teachers/teacherdatabyid', {techr_id: tid}, function (data) {
                var siteArray = data.array;

                if (data.length > 0) {

                    if (!$.isArray(siteArray) || !siteArray.length) {
                        //handler either not an array or empty array
                        $('input[type="submit"]').removeAttr('disabled');
                        $.each(data, function (key, val) {
                            $.each(val, function (key1, val1) {
                                $.each(val1, function (key2, val2) {
                                    if (key2 === 'ph_disab_per') {
                                        jQuery('#phTechPhPersnt').val('');
                                        jQuery('#phTechPhPersnt').val(val2);
                                    }
                                    else if (key2 === 'ph_cert_no') {
                                        jQuery('#phPhCertNo').val('');
                                        jQuery('#phPhCertNo').val(val2);
                                    }
                                    else if (key2 === 'ph_order_no') {
                                        jQuery('#phPhOrderNo').val('');
                                        jQuery('#phPhOrderNo').val(val2);
                                    }
                                    else if (key2 === 'ph_cert_fname') {
                                        var imgpath = "/Education/ph/";
                                        if (val2) {
                                            $('#mycontainer').hide();
                                            $('#delete').show();
                                            $("#addperdtlUplodimg").val(val);
                                            $('#close').show();
                                            var newImage = $('<img align="center" height="150" width="483"  id="popimg"/>');
                                            newImage.attr('src', (imgpath + val2));
                                            $('#abc').append(newImage);
                                            var newImage = $('<img align="center" height="180" width="180" style="cursor:pointer;pointer;height: 35px;width:35px;padding-bottom:5px;padding-left:4px;right:255px;margin-top: -115px; position: absolute;"id="popup" onClick="div_show()" />');
                                            newImage.attr('src', (imgpath + val2));
                                            $('#imgrow').html(newImage);
                                            jQuery('#phCertimg').val(val2);

                                        } else {
                                            $('#mycontainer').hide();
                                            $('#delete').show();
                                            $("#addperdtlUplodimg").val(val);
                                            $('#close').show();
                                            var imgpath = "/Education/ph/notAvailable.jpg";
                                            var newImage = $('<img align="center" height="150" width="483"   id="popimg"/>');
                                            newImage.attr('src', (imgpath));
                                            $('#abc').append(newImage);
                                            var newImage = $('<img align="center" height="180" width="180" style="cursor:pointer;pointer;height: 35px;width:35px;padding-bottom:5px;padding-left:4px;right:255px;margin-top: -115px; position: absolute;"id="popup" onClick="div_show()" />');
                                            newImage.attr('src', (imgpath));
                                            $('#imgrow').html(newImage);
                                            jQuery('#phCertimg').val(val2);
                                        }
                                    }
                                    else if (key2 === 'ph_remarks') {
                                        jQuery('#phTechPhRemark').val('');
                                        jQuery('#phTechPhRemark').val(val2);
                                    } else if (key2 === 'ph_cert_auth') {
                                        var val = val2;
                                        $('#phTechIssuAuthority option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                    }
                                    else if (key2 === 'ph_place') {
                                        // alert(val2);
                                        //jQuery('#phTechPhPlace').val('');
                                        jQuery('#phTechPhPlace').val(val2);
                                    }
//                                    else if (key2 === 'ph_cd') {
//                                        if (val2 == 1) {
//                                            jQuery('#phRadioGroup1').prop('checked', true);
//                                            $(".exrydatid").hide();
//                                        } else {
//                                            jQuery('#phRadioGroup2').prop('checked', true);
//                                            $(".exrydatid").show();
//                                        }
//                                    }
                                    else if (key2 === 'ph_cd') {
                                        var val = val2;
                                        $('#phDistype option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                    }
                                    else if (key2 === 'verif_flag') {
                                        document.getElementById('phTchrFlg').setAttribute('value', val2);
                                        $('#phTchrFlg').val(val2);
                                        var vfg = $('#phTchrFlg').val();

                                    }

                                    var crdt = val1.ph_cert_dt;
                                    var crexprydt = val1.ph_expiry_dt;
                                    var orddt = val1.ph_order_dt;
                                    if (/^\d{4}\-\d{2}\-\d{2}$/i.test(crdt)) {

                                        var parts = crdt.split('-');
                                        var year = parts[0] && parseInt(parts[0], 10);
                                        var day = parts[2] && parseInt(parts[2], 10);
                                        var month = parts[1] && parseInt(parts[1], 10);
                                        if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
                                            var nday = ('0' + day).slice(-2);
                                            var nmonth = ('0' + (month)).slice(-2);
                                            var nyear = year;
                                            $('#datepicker').val(nday + "/" + nmonth + "/" + nyear);

                                        }
                                    }
                                    if (/^\d{4}\-\d{2}\-\d{2}$/i.test(crexprydt)) {
                                        // alert(crexprydt);
                                        var parts = crexprydt.split('-');
                                        var year = parts[0] && parseInt(parts[0], 10);
                                        var day = parts[2] && parseInt(parts[2], 10);
                                        var month = parts[1] && parseInt(parts[1], 10);
                                        if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
                                            var nday = ('0' + day).slice(-2);
                                            var nmonth = ('0' + (month)).slice(-2);
                                            var nyear = year;
                                            $('#phTechPhExprydate').val(nday + "/" + nmonth + "/" + nyear);
                                        }
                                    }



                                });
                            });
                        });
                    } else {
                        //alert("outside dgfdfg");
                    }
                } else {

                    // alert("No Data Available ");
                    $("input#phTechPhPersnt,input#phPhCertNo,#datepicker,#phPhOrderNo,#phTechPhRemark,#phTechPhExprydate,#phDistype,#phTechIssuAuthority").val("");
                    $('#imgrow').hide();
                    $('#save_ph_dtl').show();
                    $('#cancel_tch_personal').show();
                    $('input').prop('readonly', false);
                    $('select').prop('disabled', false);
                    $('input[type="radio"]').prop('disabled', false);
                    //$('#uplodimage').prop('disabled', 'disabled');
                    $("#upload_cert_img").prop('disabled', false);
                    var vfg = $('#phTchrFlg').val('');
                }
                HideProgress();
            }, 'json');
        }

    });

});

function HideProgress() {
    $('.loader').hide();
    //alert('hide');
}
function ShowProgress() {
    $('.loader').show();
}


function limitText(field, maxChar) {
    $(field).attr('maxlength', maxChar);
}
$(document.body).on('click', '#save_ph_dtl', function () {
 //   alert("inside");
    var TeacherDistype = $('#phDistype').val();
    var phPhCertNo = $('#phPhCertNo').val();
    var TeacherPhOrderNo = $('#phPhOrderNo').val();
    var TeacherTechPhPersnt = $('#phTechPhPersnt').val();
    var TeacherTechIssuAuthority = $('#phTechIssuAuthority').val();
    var TeacherTechPhExprydate = $('#datepicker').val();
    // var phordrdate = $('#datepicker2').val();
    var phTchrBirthDt = $('#phTchrBirthDt').val();

    var selTchrId = $('#phTchrId').val();
    var phplace = $('#phTechPhPlace').val();
    if (selTchrId == '') {
        alert("Select Teacher First.");
        return false;
    }

    //var cerno = /^[ A-Za-z0-9_@./#&+-]*$/;
    var cerno = /^[a-zA-Z0-9()./-]*$/;
    var numpattern = /^[a-zA-Z0-9()./-]*$/;
    var persng = /^(4[0-9]|[4-9]\d|9[0-9]?100)$/;
    var exrydate = /^((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))$/;
    var vfg = $('#phTchrFlg').val();

    var currentDate = new Date(); //Current Date
    var tchr_birth_dt = $('#phTchrBirthDt').val();
    // alert(currentDate);
    var date = tchr_birth_dt.substring(0, 2);
    var month = tchr_birth_dt.substring(3, 5);
    var year = tchr_birth_dt.substring(6, 10);
    var dateToCompare_birth_dt = new Date(year, month - 1, date);//Birth Date Converted
    // alert(dateToCompare_birth_dt);
    var tchr_serv_entry_dt = $('#datepicker').val(); //Date of Entry in Service 
    var date = tchr_serv_entry_dt.substring(0, 2);
    var month = tchr_serv_entry_dt.substring(3, 5);
    var year = tchr_serv_entry_dt.substring(6, 10);
    var dateToCompare_serv_entry_dt = new Date(year, month - 1, date);//Date of Entry in Service Converted
    //alert(dateToCompare_serv_entry_dt);
    var now = new Date(tchr_birth_dt);
    var past = new Date(tchr_serv_entry_dt);
    var nowYear = now.getFullYear();
    var pastYear = past.getFullYear();
    var YearDiff = pastYear - nowYear; //Year Difference of 2 dates



    if (vfg == 'F') {
        alert("Data has been already forwarded to Cluster for Verification.");
        return false;
    }
    if (vfg == 'V') {
        alert("Data has been already Verified from Cluster.");
        return false;
    }

    if (tchr_serv_entry_dt !== '') {

        if (dateToCompare_serv_entry_dt < dateToCompare_birth_dt) {
            $("#datepicker").focus();
            alert("Err.. Enter Certificate Date Greater than Date of Birth .");
            return false;
        }
    }

    if (dateToCompare_serv_entry_dt > currentDate) {
        $("#datepicker").focus();
        alert("Err.. Enter Certificate Date less than today Date.");
        return false;
    }

    if (dateToCompare_serv_entry_dt > currentDate) {
        $("#datepicker").focus();
        alert("Err.. Enter Certificate Date less than Today Date.");
        return false;
    }




    if (TeacherDistype == "") {

        alert("Err...Please Select Disability Type.");
        $("#TeacherDistype").focus();
        $('#TeacherDistype').css('border-color', 'red');
        return false;

    }

    if (phPhCertNo == "") {

        alert("Err...Please Enter Teacher Cirtificate Number.");
        $("#phPhCertNo").focus();
        $('#phPhCertNo').css('border-color', 'red');
        return false;

    } else {

        if (cerno.test(phPhCertNo) == false) {
            $("#phPhCertNo").focus();
            $('#phPhCertNo').css('border-color', 'red');
            alert("Err... Invalid Cirtificate No.");
            return false;
        }
    }

    if (TeacherTechPhPersnt == "") {

        alert("Err...Please Enter Percentage.");
        $("#TeacherTechPhPersnt").focus();
        $('#TeacherTechPhPersnt').css('border-color', 'red');
        return false;

    } else {

        if (persng.test(TeacherTechPhPersnt) == false) {
            $("#TeacherTechPhPersnt").focus();
            $('#TeacherTechPhPersnt').css('border-color', 'red');
            alert("Err... Invalid Disability Percentage.");
            return false;
        }
    }

    if (TeacherTechIssuAuthority == "") {

        alert("Err...Please Select Issuing Authority.");
        $("#phIsathtype").focus();
        $('#phIsathtype').css('border-color', 'red');
        return false;

    }

    if (TeacherPhOrderNo == "") {

        alert("Err...Please Enter Order Number.");
        $("#TeacherPhOrderNo").focus();
        $('#TeacherPhOrderNo').css('border-color', 'red');
        return false;

    } else {

        if (numpattern.test(TeacherPhOrderNo) == false) {
            $("#TeacherPhOrderNo").focus();
            $('#TeacherPhOrderNo').css('border-color', 'red');
            alert("Err... Invalid Order Number.");
            return false;
        }
    }
    if (phplace == "") {

        alert("Err...Please Enter Place of Authority.");
        $("#phTechPhPlace").focus();
        $('#phTechPhPlace').css('border-color', 'red');
        return false;

    }

//    if (upload_cert_img == "") {
//         
//            alert("Error...Please Upload image.");
//            $("#upload_cert_img").focus();
//            $('#upload_cert_img').css('border-color', 'red');
//            return false;
//        
//    }


});

// function Validate(elem) {
//    
//    // create array containing textbox elements
//    var input = [document.getElementById('phTechPhPersnt'), document.getElementById('phPhCertNo'),document.getElementById('phPhOrderNo')];
//
//    for (var i = 0; i < input.length; i++)
//    // loop through each element to see if value is empty
//    {
//        if (input[i].value == '' && elem.id == input[i].id) {
//            switch (input[i].id) {
//
//                case 'phTechPhPersnt':
//                    alert('Enter Percentage.');
//                     $("#phTechPhPersnt").focus();
//                    $('#phTechPhPersnt').css('border-color', 'red');
//                    break;
//                case 'phPhCertNo':
//                    alert('Enter Certificate No.');
//                    break;
//                case 'phPhOrderNo':
//                    alert('Enter Order No.');
//                    break;
//            }
//
//            elem.focus();
//        }
//    }
//}