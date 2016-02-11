$(document).ready(function() {
    $('#delete').hide();
    $('#deleteval').hide();
    $('#close').hide();
    $('#valclose').hide();
    $('#view').hide();
    $('#view_val_cer').hide();
    // $('input[type="submit"]').attr('disabled', 'disabled');

//    $('#exit_cancel').on('click', function() {
//        $id = $('#addperdtlTchrid').val();
//
//        var cluster;
//        jQuery.post(webroot + 'Teachers/caste_display', {$id: $id}, function(data) {
//            var tc_religion = '';
//            var tc_categ = '';
//            var tc_caste = '';
//            var tc_sub_castse = '';
//            var tc_cert_no = '';
//            var tc_cert_dt = '';
//            var tc_cert_auth = '';
//            var tc_cert_place = '';
//            var tc_remarks = '';
//            var tc_cert_vld_no = '';
//            var tc_cert_vld_dt = '';
//            var tc_cert_vld_auth = '';
//            var tc_cert_vld_place = '';
//            var tc_vld_remarks = '';
//            var tchr_fname = '';
//            var tchr_mname = '';
//            var tchr_lname = '';
//            var tchr_id = '';
//            var tchr_birth_dt = '';
//            var tc_cert_fname = '';
//            var tc_cert_vld_fname = '';
//            var post_desc = '';
//            $.each(data, function(key, val) {
//
//                $.each(val, function(key, val) {
//
//                    $.each(val, function(key, val) {
//                        $.each(val, function(key, val) {
//                            if (key === 'tchr_id') {
//                                tchr_id = '(' + val + ')';
//                                $("#addperdtlTchrid").val(val);
//                            }
//                            if (key === 'tchr_birth_dt') {
//                                tchr_birth_dt = val;
//
//                                $("#addperdtlTchrbdate").val(val);
//                            }
//                            if (key === 'tc_religion') {
//                                tc_religion = val;
//                            }
//                            if (key === 'tc_categ') {
//                                tc_categ = val;
//                                var category_id = val;
//                                if (category_id != 1) {
//
//                                    $('#cer_frm').children().removeAttr('disabled');
//                                } else if (category_id == 1) {
//
//                                    $("#cer_frm").children().attr("disabled", "disabled");
//                                }
//
//                                cluster = val;
//                                tchr_id = $("#addperdtlTchrid").val();
//                            }
//                            if (key === 'tc_caste') {
//                                tc_caste = val;
//                            }
//                            if (key === 'tc_sub_castse') {
//                                tc_sub_castse = val;
//                                // $('#addperdtlTaSubCastse option[value=' + $.trim(val) + ']').attr("selected", "selected");
//                            }
//                            /*------------------------------------------------*/
//                            if (key === 'tc_cert_no') {
//                                tc_cert_no = val;
//                                if (tc_cert_no) {
//                                    $('#cer_val_frm').children().removeAttr('disabled');
//                                }
//                            }
//                            if (key === 'tc_cert_dt') {
//                                tc_cert_dt = val;
//                                var crdt = val;
//                            }
//                            if (key === 'tc_cert_auth') {
//                                tc_cert_auth = val;
//                            }
//                            if (key === 'tc_cert_place') {
//                                tc_cert_place = val;
//                            }
//                            if (key === 'tc_remarks') {
//                                tc_remarks = val;
//                            }
//                            if (key === 'tc_cert_fname') {
//                                tc_cert_fname = val;
//                            }
//                            if (key === 'tc_cert_vld_no') {
//                                tc_cert_vld_no = val;
//                            }
//                            if (key === 'tc_cert_vld_dt') {
//                                tc_cert_vld_dt = val;
//                            }
//                            if (key === 'tc_cert_vld_auth') {
//                                tc_cert_vld_auth = val;
//                            }
//                            if (key === 'tc_cert_vld_place') {
//                                tc_cert_vld_place = val;
//                            }
//                            if (key === 'tc_vld_remarks') {
//                                tc_vld_remarks = val;
//                            }
//                            if (key === 'tc_cert_vld_fname') {
//                                tc_cert_vld_fname = val;
//
//                            }
//                            /*-------------------  tcher mast table --------------------------------*/
//                            if (key === 'tchr_fname') {
//                                if (val) {
//                                    tchr_fname = val;
//                                } else {
//                                    tchr_fname = '';
//                                }
//                            }
//                            if (key === 'tchr_mname') {
//                                if (val) {
//                                    tchr_mname = val;
//                                } else {
//                                    tchr_mname = '';
//                                }
//                            }
//                            if (key === 'tchr_lname') {
//                                if (val) {
//                                    tchr_lname = val;
//                                } else {
//                                    tchr_lname = '';
//                                }
//                            }
//                            if (key === 'post_desc') {
//                                if (val) {
//                                    post_desc = val;
//                                } else {
//                                    post_desc = '';
//                                }
//                            }
//                        });
//                    });
//                });
//            });
//            var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
//            $("#addperdtlTchrcode").text(tchr_id);
//            $("#addperdtlTchrdesgn").text(post_desc);
//            $("#addperdtlTchrname").text(tchrname);
//            $('#tech_religion option[value=' + $.trim(tc_religion) + ']').attr("selected", "selected");
//            $('#addperdtlTcCateg option[value=' + $.trim(tc_categ) + ']').attr("selected", "selected");
//
//            jQuery.post(webroot + 'Teachers/selectcast', {category_id: tc_categ}, function(data) {
//                //   alert(ta_categ);
//                $('#addperdtlTaCaste').html(data);
//                $('#addperdtlTaCaste option[value=' + $.trim(tc_caste) + ']').attr("selected", "selected");
//            });
//
//            $("#addperdtlCernumber").val(tc_cert_no);
//
//            if (tc_cert_dt) {
//                if (/^\d{4}\-\d{2}\-\d{2}$/i.test(tc_cert_dt)) {
//                    var parts = tc_cert_dt.split('-');
//                    var year = parts[0] && parseInt(parts[0], 10);
//                    var month = parts[1] && parseInt(parts[1], 10);
//                    var day = parts[2] && parseInt(parts[2], 10);
//                    //  var show = $('#datepicker').val( day + "/" + month + "/" + year );
//
//                    if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
//
//                        var nday = ('0' + day).slice(-2);
//                        var nmonth = ('0' + (month)).slice(-2);
//                        var nyear = year;
//
//                        $('#datepicker').val(nday + "/" + nmonth + "/" + nyear);
//                    }
//                }
//            } else {
//                $('#datepicker').val('');
//            }
//
//            $('#addperdtlIssuAuth option[value=' + $.trim(tc_cert_auth) + ']').attr("selected", "selected");
//            $("#cerplace").val(tc_cert_place);
//            $("#remarks").val(tc_remarks);
//            $("#addperdtlCerValNo").val(tc_cert_vld_no);
//            if (tc_cert_vld_no) {
//                $('#cer_val_frm').children().removeAttr('disabled');
//            }
//
//            if (tc_cert_vld_dt) {
//                if (/^\d{4}\-\d{2}\-\d{2}$/i.test(tc_cert_vld_dt)) {
//                    var parts = tc_cert_vld_dt.split('-');
//                    var year = parts[0] && parseInt(parts[0], 10);
//                    var month = parts[1] && parseInt(parts[1], 10);
//                    var day = parts[2] && parseInt(parts[2], 10);
//                    //  var show = $('#datepicker').val( day + "/" + month + "/" + year );
//
//                    if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
//
//                        var nday = ('0' + day).slice(-2);
//                        var nmonth = ('0' + (month)).slice(-2);
//                        var nyear = year;
//
//                        $('#datepicker2').val(nday + "/" + nmonth + "/" + nyear);
//                    }
//                }
//            } else {
//                $('#datepicker2').val('');
//            }
//            // image 1
//            if (tc_cert_fname) {
//                $('#mycontainer1').show();
//                $('#view').show();
//                //  $('#mycontainer').hide();
//                $('#delete').show();
//                $("#addperdtlUplodimg").val(tc_cert_fname);
//                $('#close').show();
//                var newImage = $('<img align="center" height="150" width="483" id="popimg"/>');
//                newImage.attr('src', webroot + '/app/webroot/uploads/' + tc_cert_fname);
//                $('#abc').append(newImage);
//            } else {
//                //$('#mycontainer').show();
//                // $('#mycontainer1').hide();
//                $('#view').hide();
//                $('#delete').hide();
//                $('#close').hide();
//                $("#addperdtlUplodimg").val('');
//            }
//
//            var newImage = $('<img align="left" height="30" width="30" id="popup" onClick="div_show()" />');
//            newImage.attr('src', webroot + 'app/webroot/uploads/' + tc_cert_fname);
//            $('#mycontainer1').html('');
//            $('#mycontainer1').append(newImage);
//
//            //img2 
//            if (tc_cert_vld_fname) {
//                //$('#cerfval12').hide();
//                $('#view_val_cer').show();
//                $('#cerfval').show();
//                $('#deleteval').show();
//                $("#addperdtlUplodvalimg").val(tc_cert_vld_fname);
//                $('#valclose').show();
//                var newImage = $('<img align="center" height="150" width="483" id="valpopimg"/>');
//                newImage.attr('src', webroot + 'app/webroot/upload_cer_val/' + tc_cert_vld_fname);
//                $('#valabc').append(newImage);
//            } else {
//                //$('#cerfval12').show();
//                $('#view_val_cer').hide();
//
//                $('#deleteval').hide();
//                $('#valclose').hide();
//                $("#addperdtlUplodvalimg").val('');
//            }
//
//            var newImage = $('<img  align="left" height="30" width="30" id="valpopup" onClick="valabc_show()"/>');
//            newImage.attr('src', webroot + 'app/webroot/upload_cer_val/' + tc_cert_vld_fname);
//            $('#cerfval').html('');
//            $('#cerfval').append(newImage);
//
//            $('#addperdtlValIssAuth option[value=' + $.trim(tc_cert_vld_auth) + ']').attr("selected", "selected");
//            $("#addperdtlTechPlace").val(tc_cert_vld_place);
//            $("#addperdtlTechRemarks").val(tc_vld_remarks);
//
//        }, 'json');
//        
//    });

//    $("#save_otherperdtl123").click(function(){
//        var str = "";
//        var flag = 0;
//        var numpattern = /^[0-9]*$/;
//        var servicemen = $('#servicemen').val();
//        var ta_shikshan_sevak = $('#ta_shikshan_sevak').val();
//        if (document.getElementById('otherperdtlTaMotherTng').value == "")
//        {
//            flag = 1;
//            str += "ERR...Select the  Mother Tongue.\n";
//        }
//        else if (document.getElementById('ta_mari_stat').value == "")
//        {
//            flag = 1;
//            str += "ERR...Select the Marital Status.\n";
//        }
//        else if (document.getElementById('otherperdtlTaEleCardNo').value == "")
//        {
//            flag = 1;
//            str += "ERR...Fill The Election Card No.\n";
//        }
//        else if (document.getElementById('otherperdtlTaHeightFt').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter Height in Ft.\n";
//        } else if (document.getElementById('otherperdtlTaHeightInch').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter Height in Inch.\n";
//        } else if (document.getElementById('otherperdtlTaWeight').value == "")
//        {
//            flag = 1;
//            str += "ERR...Fill The Weight.\n";
//        } else if (document.getElementById('otherperdtlTaIdMark1').value == "")
//        {
//            flag = 1;
//            str += "ERR...Fill The Identification Marks1 .\n";
//        }
//        else if ((document.getElementById('tchr_type').value != '2') && (document.getElementById('otherperdtlTaNontchDays').value == ""))
//        {
//            flag = 1;
//            str += "ERR...Fill The No of working days.\n";
//        } else if ($('#otherperdtlTaCwsnTrng1').is(':checked')) {
//            if (document.getElementById('otherperdtlCwsnYear').value == "") {
//                
//                flag = 1;
//                str += "ERR...Fill The CWSN Year ..\n";
//            }
//        }
//
//
//        if (flag == 1)
//        {
//            alert(str);
//            return false;
//        }
//        else
//        {
//            return true;
//        }
//    });

//    $("#save_training123").click(function(){
//        var TrainingTrngType = $('#TrainingTrngType').val();
//        var TrainingInstCd = $('#TrainingInstCd').val();
//        var TrainingTrngLevel = $('#TrainingTrngLevel').val();
//        var datepickerfrm = $('#datepickerfrm').val();
//        var datepickerto = $('#datepickerto').val();
//        var TrainingTrngTitle = $('#TrainingTrngTitle').val();
//        // var TrainingTrngRemarks = $('#TrainingTrngRemarks').val();
//
//        if (TrainingTrngType == "") {
//            alert("Please Select Training Type");
//            $("#TrainingTrngType").focus();
//            $('#TrainingTrngType').css('border-color', 'red');
//            return false;
//        } else {
//            $('#TrainingTrngType').css('border-color', '');
//        }
//        if (TrainingInstCd == "") {
//            alert("Please Select Institute ");
//            $("#TrainingInstCd").focus();
//            $('#TrainingInstCd').css('border-color', 'red');
//            return false;
//        }
//        {
//            $('#TrainingInstCd').css('border-color', '');
//        }
//        if (TrainingTrngLevel == "") {
//            alert("Please Select Level ");
//            $("#TrainingTrngLevel").focus();
//            $('#TrainingTrngLevel').css('border-color', 'red');
//            return false;
//        }
//        {
//            $('#TrainingTrngLevel').css('border-color', '');
//        }
//        if (datepickerfrm == "") {
//            alert("Please Select From Date ");
//            $("#datepickerfrm").focus();
//            $('#datepickerfrm').css('border-color', 'red');
//            return false;
//        }
//        {
//            $('#datepickerfrm').css('border-color', '');
//        }
//        if (datepickerto == "") {
//            alert("Please Select To Date ");
//            $("#datepickerto").focus();
//            $('#datepickerto').css('border-color', 'red');
//            return false;
//        }
//        {
//            $('#datepickerto').css('border-color', '');
//        }
//        if (TrainingTrngTitle == "") {
//            alert("Please Enter Title ");
//            $("#TrainingTrngTitle").focus();
//            $('#TrainingTrngTitle').css('border-color', 'red');
//            return false;
//        }
//        {
//            $('#TrainingTrngTitle').css('border-color', '');
//        }
//        /*if (TrainingTrngRemarks == "") {
//         alert("Please Enter Remarks ");
//         $("#TrainingTrngRemarks").focus();
//         $('#TrainingTrngRemarks').css('border-color', 'red');
//         return false;
//         }
//         {
//         $('#TrainingTrngRemarks').css('border-color', '');
//         }*/
//
//
//    });

//    $('#save_udise_train123').click(function () {
//
//        var str = "";
//        var flag = 0;
//        var numpattern = /^[0-9]*$/;
//
//        if (document.getElementById('UdiseTrainingTrdBrcDays').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter BRC valiue .\n";
//        }
//        else if (document.getElementById('UdiseTrainingTrdCrcDays').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter CRC valiue.\n";
//        }
//        else if (document.getElementById('UdiseTrainingTrdUrcDays').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter DIET valiue.\n";
//        }
//        else if (document.getElementById('UdiseTrainingTrdOthDays').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter Other valiue.\n";
//        }
//        else if ($('#UdiseTrainingTrdSeniorGrdTrng1').is(':checked')) {
//            if (document.getElementById('trd_senior_trng_dt').value == "") {
//                flag = 1;
//                str += "ERR...Enter senior grade date ..\n";
//            }
//        }
//        if ($('#UdiseTrainingTrdSeniorGrdTrng1').is(':checked') && document.getElementById('trd_senior_trng_dt').value != "" && $('#UdiseTrainingTrdSelectionGrdTrng1').is(':checked')) {
//            
//            if (document.getElementById('trd_selection_trng_dt').value == "") {
//                flag = 1;
//                str += "ERR...Enter selection grade date ..\n";
//            }
//        }
//        if ($('#UdiseTrainingTrdCwsnTrained1').is(':checked')) {
//            if (document.getElementById('UdiseTrainingTrdCwsnTrngYear').value == "") {
//                flag = 1;
//                str += "ERR...Enter CWSN Year ..\n";
//            }
//        }
//
//        if (flag == 1)
//        {
//            alert(str);
//            return false;
//        }
//        else
//        {
//            return true;
//        }
//
//    })

//    $("#save_family123").click(function (){
//           
//        var str = "";
//        var flag = 0;
//        var numpattern = /^[0-9]*$/;
//        var FamilyTchrid = $('#FamilyTchrid').val();
//        var FamilyTfRelCd = $('#FamilyTfRelCd').val();
//
//        if (document.getElementById('txtEng1').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter the First Name.\n";
//        } else if (document.getElementById('txtEng2').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter the Middle Name.\n";
//        } else if (document.getElementById('txtEng3').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter the Last Name.\n";
//        }
//        else if (document.getElementById('FamilyTfRelCd').value == "")
//        {
//            flag = 1;
//            str += "ERR...Select the Relationship.\n";
//        }
//        else if (document.getElementById('txtHindi1').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter Name in Devnagari.\n";
//        } else if (document.getElementById('tf_rel_dob').value == "")
//        {
//            flag = 1;
//            str += "ERR...Enter Date Of Birth.\n";
//        }
//        else if (((document.getElementById('FamilyTfRelAdharCardNo1').value == "" || $("#FamilyTfRelAdharCardNo1").val().length < 4) || (document.getElementById('FamilyTfRelAdharCardNo2').value == "" || $("#FamilyTfRelAdharCardNo2").val().length < 4) || (document.getElementById('FamilyTfRelAdharCardNo3').value == "" || $("#FamilyTfRelAdharCardNo3").val().length < 4)) && (document.getElementById('FamilyTfEidCardNo').value == ""))
//        {
//            flag = 1;
//            str += "ERR...Enter valid Aadhar Card No. or  Election Card No\n";
//        }
//        if(document.getElementById('FamilyTfRelAdharCardNo1').value != "" && document.getElementById('FamilyTfRelAdharCardNo2').value != "" && document.getElementById('FamilyTfRelAdharCardNo3').value != ""){
//            $('#FamilyTfEidCardNo').attr('disabled', true);
//        }else{
//            $('#FamilyTfEidCardNo').attr('disabled', false);
//        }
//
//        if (flag == 1)
//        {
//            alert(str);
//            return false;
//        }
//        else
//        {
//            $("#FamilyFamilyForm").submit();
//            return true;
//        }
//    });

//    $("#save_subtaght123").click(function()
//    {
//        var str = "";
//        var flag = 0;
//
//        if (document.getElementById('SubtaughtTsProfLevel').value == "")
//        {
//            flag = 1;
//            str += "ERR...Select Subjects taught level .\n";
//        } else if (document.getElementById('SubtaughtTsSubjectMedium').value == "")
//        {
//            flag = 1;
//            str += "ERR...Select Subjects Medium .\n";
//        } else if (document.getElementById('SubtaughtTsSubject').value == "")
//        {
//            flag = 1;
//            str += "ERR...Select Subjects taught.\n";
//        } else if (document.getElementById('SubtaughtTsClassFrom').value == "")
//        {
//            flag = 1;
//            str += "ERR...Select the Class From.\n";
//        } else if (document.getElementById('SubtaughtTsClassTo').value == "")
//        {
//            flag = 1;
//            str += "ERR...Select the Class To.\n";
//        }
//
//
//        if (flag == 1)
//        {
//            alert(str);
//            return false;
//        }
//        else
//        {
//            $("#SubtaughtSubtaughtForm").submit();
//            return true;
//        }
//    });
    /*--------------------------------other personal details------------------------------------------------*/

//    $('#other_cancel').on('click', function() {
//        $id = $('#otherperdtlTchrid').val();
//        jQuery.post(webroot + 'Teachers/othr_persnl_dtl', {$id: $id}, function(data) {
//            var ta_mother_tng = '';
//            var ta_mari_stat = '';
//            var ta_ele_card_no = '';
//            var ta_ex_serv = '';
//            var ta_height_ft = '';
//            // var ta_height_dt = '';
//            var ta_height_inch = '';
//            var ta_weight = '';
//            //var ta_weight_dt = '';
//            var ta_blood_grp = '';
//            var ta_id_mark1 = '';
//            var ta_id_mark2 = '';
//            var ta_shikshan_sevak = '';
//            var ta_nontch_days = '';
//            var ta_cwsn_trng = '';
//            var ta_height_cm = '';
//            var tchr_fname = '';
//            var tchr_mname = '';
//            var tchr_lname = '';
//            var post_desc = '';
//            var tchr_id = '';
//
//            $.each(data, function(key, val) {
//                $.each(val, function(key, val) {
//                    $.each(val, function(key, val) {
//                        $.each(val, function(key, val) {
//                            if (key === 'tchr_id') {
//                                tchr_id = '(' + val + ')';
//                                $("#otherperdtlTchrid").val(val);
//                            }
//                            if (key === 'ta_mother_tng') {
//                                ta_mother_tng = val;
//                            }
//                            if (key === 'ta_mari_stat') {
//                                ta_mari_stat = val;
//                            }
//                            if (key === 'ta_ele_card_no') {
//                                ta_ele_card_no = val;
//                            }
//                            if (key === 'ta_ex_serv') {
//                                ta_ex_serv = val;
//                            }
//                            if (key === 'ta_height_ft') {
//                                ta_height_ft = val;
//                            }
//                            if (key === 'ta_height_inch') {
//                                ta_height_inch = val;
//                            }
////                            if (key === 'ta_height_dt') {
////                                ta_height_dt = val;
////                            }
//                            if (key === 'ta_weight') {
//                                ta_weight = val;
//                            }
////                            if (key === 'ta_weight_dt') {
////                                ta_weight_dt = val;
////                            }
//                            if (key === 'ta_blood_grp') {
//                                ta_blood_grp = val;
//                            }
//                            if (key === 'ta_id_mark1') {
//                                ta_id_mark1 = val;
//                            }
//                            if (key === 'ta_id_mark2') {
//                                ta_id_mark2 = val;
//                            }
//                            if (key === 'ta_ele_card_no') {
//                                ta_ele_card_no = val;
//                            }
//                            if (key === 'ta_shikshan_sevak') {
//                                ta_shikshan_sevak = val;
//                            }
//                            if (key === 'ta_nontch_days') {
//                                ta_nontch_days = val;
//                            }
//                            if (key === 'ta_cwsn_trng') {
//                                ta_cwsn_trng = val;
//                            }
//                            if (key === 'ta_height_cm') {
//                                ta_height_cm = val;
//                            }
//                            if (key === 'tchr_fname') {
//                                if (val) {
//                                    tchr_fname = val;
//                                } else {
//                                    tchr_fname = '';
//                                }
//                            }
//                            if (key === 'tchr_mname') {
//                                if (val) {
//                                    tchr_mname = val;
//                                } else {
//                                    tchr_mname = '';
//                                }
//                            }
//                            if (key === 'tchr_lname') {
//                                if (val) {
//                                    tchr_lname = val;
//                                } else {
//                                    tchr_lname = '';
//                                }
//                            }
//                            if (key === 'post_desc') {
//                                if (val) {
//                                    post_desc = val;
//                                } else {
//                                    post_desc = '';
//                                }
//                            }
//                        });
//                    });
//                });
//            });
//
//            var tchrname = tchr_fname + " " + tchr_mname + " " + tchr_lname;
//            $("#addperdtlTchrcode").text(tchr_id);
//            $("#addperdtlTchrdesgn").text(post_desc);
//            $("#addperdtlTchrname").text(tchrname);
//
//            $('#otherperdtlTaMotherTng option[value=' + $.trim(ta_mother_tng) + ']').attr("selected", "selected");
//            $('#ta_mari_stat option[value=' + $.trim(ta_mari_stat) + ']').attr("selected", "selected");
//            $("#otherperdtlTaEleCardNo").val(ta_ele_card_no);
//            $("#otherperdtlTaHeightFt").val(ta_height_ft);
//            $("#otherperdtlTaHeightInch").val(ta_height_inch);
//            $("#otherperdtlTaHeightCm").val(ta_height_cm);
//            $("#otherperdtlTaWeight").val(ta_weight);
//            $("#otherperdtlTaNontchDays").val(ta_nontch_days);
//            $("#otherperdtlTaCwsnTrng").val(ta_cwsn_trng);
//
////            if (ta_height_dt) {
////                if (/^\d{4}\-\d{2}\-\d{2}$/i.test(ta_height_dt)) {
////                    var parts = ta_height_dt.split('-');
////                    var year = parts[0] && parseInt(parts[0], 10);
////                    var month = parts[1] && parseInt(parts[1], 10);
////                    var day = parts[2] && parseInt(parts[2], 10);
////                    //  var show = $('#datepicker').val( day + "/" + month + "/" + year );
////
////                    if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
////
////                        var nday = ('0' + day).slice(-2);
////                        var nmonth = ('0' + (month)).slice(-2);
////                        var nyear = year;
////
////                        $('#ht_date').val(nday + "/" + nmonth + "/" + nyear);
////                    }
////                }
////            } else {
////                $('#ht_date').val('');
////            }
//
////            if (ta_weight_dt) {
////                if (/^\d{4}\-\d{2}\-\d{2}$/i.test(ta_weight_dt)) {
////                    var parts = ta_weight_dt.split('-');
////                    var year = parts[0] && parseInt(parts[0], 10);
////                    var month = parts[1] && parseInt(parts[1], 10);
////                    var day = parts[2] && parseInt(parts[2], 10);
////                    //  var show = $('#datepicker').val( day + "/" + month + "/" + year );
////
////                    if (day <= 31 && day >= 1 && month <= 12 && month >= 1) {
////
////                        var nday = ('0' + day).slice(-2);
////                        var nmonth = ('0' + (month)).slice(-2);
////                        var nyear = year;
////                        $('#wt_date').val(nday + "/" + nmonth + "/" + nyear);
////                    }
////                }
////            } else {
////                $('#wt_date').val('');
////            }
//
//            if (ta_ex_serv === '1')
//            {
//                $('#otherperdtlTaExServ1').prop('checked', true);
//            } else /*if (ta_ex_serv === '2') */ {
//                $('#otherperdtlTaExServ2').prop('checked', true);
//            }
//
//            if (ta_shikshan_sevak === '1')
//            {
//                $('#otherperdtlTaShikshanSevak1').prop('checked', true);
//            } else {
//                $('#otherperdtlTaShikshanSevak2').prop('checked', true);
//            }
//
//            $('#ta_blood_grp option[value=' + $.trim(ta_blood_grp) + ']').attr("selected", "selected");
//            $("#otherperdtlTaIdMark1").val(ta_id_mark1);
//            $("#otherperdtlTaIdMark2").val(ta_id_mark2);
//            //jQuery('#ta_shikshan_sevak').val(ta_shikshan_sevak);
//            $("#otherperdtlTaNoDaysAssi").val(ta_nontch_days);
//            $("#otherperdtlTaTrainCwsn").val(ta_cwsn_trng);
//            $("#otherperdtlTechElecCard").val(ta_ele_card_no);
//
//        }, 'json');
//    });

    // training  --------------------------
    $(document).on('click', '.Seraildtl', function() {
//        alert("aaa");
        var sid = this.id;
        $('#TrainingSerialId').val(sid);
        if (sid !== '') {
            jQuery.post(window.webroot+'Teachers/trainingbyserialid', {sid: sid}, function(data) {

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

                $.each(data, function(key, val) {
                    $.each(val, function(key, val) {
                        $.each(val, function(key, val) {
                            if (key === 'trng_type') {
                                trng_type = val;
                            }
                            if (key === 'trng_title') {
                                trng_title = val;
                            }
                            if (key === 'inst_cd') {
                                inst_cd = val;
                            }
                            if (key === 'trng_categ') {
                                trng_categ = val;
                            }
                            if (key === 'trng_level') {
                                trng_level = val;
                            }
                            if (key === 'trng_from_dt') {
                                trng_from_dt = val;
                            }
                            if (key === 'trng_to_dt') {
                                trng_to_dt = val;
                            }
                            if (key === 'trng_attend') {
                                trng_attend = val;
                            }
                            if (key === 'trng_cert') {
                                trng_cert = val;
                            }
                            if (key === 'trng_remarks') {
                                trng_remarks = val;
                            }
                        });
                    });
                });
                if (trng_type) {
                    $('#TrainingTrngType').val($.trim(trng_type));
                }
                $("#TrainingTrngTitle").val(trng_title);
                if (trng_categ === '1')
                {
                    $('#TrainingTrngCateg1').prop('checked', true);
                } else {
                    $('#TrainingTrngCateg2').prop('checked', true);
                }

                if (trng_attend === '1')
                {
                    $('#TrainingTrngAttend1').prop('checked', true);
                } else {
                    $('#TrainingTrngAttend2').prop('checked', true);
                }
                if (trng_cert === '1')
                {
                    $('#TrainingTrngCert1').prop('checked', true);
                } else if (trng_cert === '2') {
                    $('#TrainingTrngCert2').prop('checked', true);
                } else {
                    $('#TrainingTrngCert3').prop('checked', true);
                }
                $('#TrainingInstCd').val($.trim(inst_cd));
                $("#TrainingTrngRemarks").val(trng_remarks);
                $('#TrainingTrngLevel').val($.trim(trng_level));

                if (trng_from_dt) {
                    var arr = trng_from_dt.split('-');
                    jQuery('#datepickerfrm').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                } else {
                    $('#datepickerfrm').val('');
                }
                if (trng_to_dt) {
                    var arr = trng_to_dt.split('-');
                    jQuery('#datepickerto').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                } else {
                    $('#datepickerto').val('');
                }

            }, 'json');
        }
    });

//    $('#training_cancel').on('click', function() {
//        $('#TrainingTrngType').val('');
//        $('#TrainingInstCd').val('');
//        $('#TrainingTrngLevel').val('');
//        $('#datepickerfrm').val('');
//        $('#datepickerto').val('');
//        $('#TrainingTrngTitle').val('');
//        $('#TrainingTrngRemarks').val('');
//
//        $('#TrainingTrngCateg2').prop('checked', true);
//        $('#TrainingTrngAttend2').prop('checked', true);
//        $('#TrainingTrngCert2').prop('checked', true);
//    });

    // family --------------------------
    $(document).on('click', '.familydtl', function() {
        var sid = this.id;
        $('#FamilySerialId').val(sid);

        if (sid !== '') {
            jQuery.post(window.webroot+'Teachers/familybyserialid', {sid: sid}, function(data) {

                var tf_rel_fname = '';
                var tf_rel_mname = '';
                var tf_rel_lname = '';
                var tf_rel_fname_dev = '';
                var tf_rel_mname_dev = '';
                var tf_rel_lname_dev = '';
                var tf_rel_cd = '';
                var tf_rel_adhar_card_no = '';
                var tf_rel_dob = '';
                var tf_eid_card_no = '';
                var tn_fam_cover = '';

                $.each(data, function(key, val) {
                    $.each(val, function(key, val) {
                        $.each(val, function(key, val) {
                            if (key === 'tf_rel_fname') {
                                tf_rel_fname = val;
                            }
                            if (key === 'tf_rel_mname') {
                                tf_rel_mname = val;
                            }
                            if (key === 'tf_rel_lname') {
                                tf_rel_lname = val;
                            }
                            if (key === 'tf_rel_fname_dev') {
                                tf_rel_fname_dev = val;
                            }
                            if (key === 'tf_rel_mname_dev') {
                                tf_rel_mname_dev = val;
                            }
                            if (key === 'tf_rel_lname_dev') {
                                tf_rel_lname_dev = val;
                            }
                            if (key === 'tf_rel_dob') {
                                tf_rel_dob = val;
                            }
                            if (key === 'tf_rel_cd') {
                                tf_rel_cd = val;
                            }
                            if (key === 'tf_rel_adhar_card_no') {
                                tf_rel_adhar_card_no = val;
                            }
                            if (key === 'tn_fam_cover') {
                                tn_fam_cover = val;
                            }
                            if (key === 'tf_eid_card_no') {
                                tf_eid_card_no = val;
                            }
                            if (key === 'tf_fam_id_no') {
                                tf_fam_id_no = val;
                            }

                        });
                    });
                });

                $('#FamilyTfFamIdNo').val(tf_fam_id_no);
                $('#txtEng1').val($.trim(tf_rel_fname));
                $('#txtEng2').val($.trim(tf_rel_mname));
                $('#txtEng3').val($.trim(tf_rel_lname));

                $("#txtHindi1").val(tf_rel_fname_dev);
                $("#txtHindi2").val(tf_rel_mname_dev);
                $("#txtHindi3").val(tf_rel_lname_dev);
                if (tf_rel_cd) {
                    $('#FamilyTfRelCd').val($.trim(tf_rel_cd));
                }
                if (tf_rel_adhar_card_no) {

                    if (tf_rel_adhar_card_no) {
                        var str1 = tf_rel_adhar_card_no.substr(0, 4);
                        var str2 = tf_rel_adhar_card_no.substr(4, 4);
                        var str3 = tf_rel_adhar_card_no.substr(8, 4);
                        jQuery('#FamilyTfRelAdharCardNo1').val(str1);
                        jQuery('#FamilyTfRelAdharCardNo2').val(str2);
                        jQuery('#FamilyTfRelAdharCardNo3').val(str3);
                        if (str1 != '' && str2 != '' && str3 != '') {
                            $('#FamilyTfEidCardNo').attr('disabled', true);
                        } else {
                            $('#FamilyTfEidCardNo').attr('disabled', false);
                        }
                    }
                }

                if (tf_rel_dob) {
                    var arr = tf_rel_dob.split('-');
                    jQuery('#tf_rel_dob').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                } else {
                    $('#tf_rel_dob').val('');
                }
                if (tn_fam_cover === '1')
                {
                    $('#FamilyTnFamCover1').prop('checked', true);
                } else {
                    $('#FamilyTnFamCover2').prop('checked', true);
                }
                if (tf_eid_card_no) {
                    $('#FamilyTfEidCardNo').val($.trim(tf_eid_card_no));
                } else {
                    $('#FamilyTfEidCardNo').val('-');
                }



            }, 'json');
        }
    });

//    $('#family_cancel').on('click', function() {
//        $('#txtEng1').val('');
//        $('#txtEng2').val('');
//        $('#txtEng3').val('');
//        $('#txtHindi1').val('');
//        $('#txtHindi2').val('');
//        $('#txtHindi3').val('');
//        $('#tf_rel_dob').val('');
//        $('#FamilyTfRelCd').val('');
//        $('#FamilyTfEidCardNo').val('');
//        $('#FamilyTfRelAdharCardNo1').val('');
//        $('#FamilyTfRelAdharCardNo2').val('');
//        $('#FamilyTfRelAdharCardNo3').val('');
//        $('#FamilyTnLtcEligib2').prop('checked', true);
//        $('#FamilyTfMedEligib2').prop('checked', true);
//
//    });

    // subject taught
    $(document).on('click', '.Subjectdtl', function() {
        var sid = this.id;
        $('#SubtaughtSerialId').val(sid);
        if (sid !== '') {
            jQuery.post(window.webroot+'Teachers/subjectbyserialid', {sid: sid}, function(data) {

                var ts_prof_level = '';
                var ts_subject_medium = '';
                var ts_class_from = '';
                var ts_class_to = '';
                var ts_subject = '';
                var periods = '';

                $.each(data, function(key, val) {
                    $.each(val, function(key, val) {
                        $.each(val, function(key, val) {

                            if (key === 'ts_prof_level') {
                                ts_prof_level = val;
                            }
                            if (key === 'ts_subject_medium') {
                                ts_subject_medium = val;
                            }
                            if (key === 'ts_class_from') {
                                ts_class_from = val;
                            }
                            if (key === 'ts_class_to') {
                                ts_class_to = val;
                            }
                            if (key === 'ts_subject') {
                                ts_subject = val;
                            }
                            if (key === 'periods') {
                                periods = val;
                            }

                        });
                    });
                });

                $('#SubtaughtTsProfLevel').val($.trim(ts_prof_level));
                $('#SubtaughtTsSubjectMedium').val($.trim(ts_subject_medium));
                $('#SubtaughtTsClassFrom').val($.trim(ts_class_from));
                $('#SubtaughtTsClassTo').val($.trim(ts_class_to));
                $('#SubtaughtTsSubject').val($.trim(ts_subject));
                $("#period").text(periods);

                jQuery.post(webroot + 'Teachers/selectsubject', {prof_level: ts_prof_level, medium: ts_subject_medium, from: ts_class_from, to: ts_class_to}, function(data) {
                    $('#SubtaughtTsSubject').html(data);
                    $('#SubtaughtTsSubject option[value=' + $.trim(ts_subject) + ']').attr("selected", "selected");
                });
                jQuery.post(window.webroot + 'Teachers/allocated_periods', {prof_level: ts_prof_level, medium: ts_subject_medium, from: ts_class_from, subject: ts_subject}, function(data) {
                    $('#period').html(data);
                });


            }, 'json');
        }
    });

    $('#subtaght_cancel').on('click', function() {
        $('#SubtaughtTsProfLevel').val('');
        $('#SubtaughtTsSubjectMedium').val('');
        $('#SubtaughtTsClassFrom').val('');
        $('#SubtaughtTsClassTo').val('');
        $('#SubtaughtTsSubject').val('');

    });
});
/*--------------------------functions--------------------------------------------------------*/
function isAlpha(txt, errormsg)
{
    return ValidString(txt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', errormsg);
}
function isNumeric(txt)
{
    return ValidString(txt, '0123456789');
}
function isAlphaNumeric(txt, errormsg)
{
    return ValidString(txt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', errormsg);
}