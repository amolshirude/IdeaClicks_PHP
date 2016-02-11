
// Form Validation on :  Model-> teacher->Navigation->ph->Form->Physically Handicap Details .
// by : hemant kadam   
$(document).ready(function () {

    var persng = /^\d*(\.\d{1})?\d{0,1}$/;
    var NomType = $('#nominationdtlSelectNomination').val();
    var TechrMember = $('#nominationdtlFamilyMembName').val();

    $('#nominationdtlSelectNomination').change(function () {
        var NomType = $('#nominationdtlSelectNomination').val();
       // alert(NomType);
        var tid=$('#tchr_id_hidden').val();
        if (NomType == "") {
            alert("Select Nomination Type.");
            return false;
        }
        if (NomType == "P") {
          //  alert("Here Prov fund");
          //  alert(tid);
            jQuery.post(window.webroot+'Teachers/acctype', {tch_id: tid}, function (data) {
                if(data=='D'){
                    alert("This option is not applicable for the selected teacher");
                    jQuery('#nominationdtlSelectNomination').val('');
                    $('#nominationdtlSelectNomination').removeAttr('disabled');
                } // alert(data);
            });
           
        }
        if(NomType == "N"){
          // alert("Here N pension"); 
      
          //  alert(tid);
            jQuery.post(window.webroot+'Teachers/acctype', {tch_id: tid}, function (data) {
                if(data=='G'){
                      alert("This option is not applicable for the selected teacher");
                    jQuery('#nominationdtlSelectNomination').val('');
                    $('#nominationdtlSelectNomination').removeAttr('disabled');
                }//alert(data);  
            });
        }

    
    });

    $('#nominationdtlFamilyMembName').change(function () {
        var TechrMember = $('#nominationdtlFamilyMembName').val();
        if (TechrMember == "") {
            alert("Select Family Member.");
            return false;
        }
    });

    $('#nominationdtlTechrMark').focusout(function () {
        var TechrMark = $('#nominationdtlTechrMark').val();
        if (TechrMark == "") {
            alert("Enter Percentage.");
            return false;
        }
    });


//       $('#nominationdtlTechrMark').change(function () {
//         var TechrMark = $('#nominationdtlTechrMark').val();
//            var substr = TechrMark.split('.');
//            var vals = substr[0];
//           // alert(vals);
//          if(persng.test(TechrMark)== false){
//                $("#TechrMark").focus();
//                $('#TechrMark').css('border-color', 'red');
//                alert("Err... Invalid Percentage.");
//                return false;
//            }else{
//                if(vals < 1 || vals >99){
//                     alert("Err... Percentage should be greater than 1% and less than 100%.");
//                    return false;
//                }else{
//                   
//                }
//            }
//       });
//       
    $('#save_nomisn_dtl').click(function () {

        var NomType = $('#nominationdtlSelectNomination').val();
        var TechrMember = $('#nominationdtlNomiDate').val();
        var Techrserdate = $('#nominationdtlServdate').val();
        var TechrMark = $('#nominationdtlTechrMark').val();
        var numpattern = /^[a-zA-Z0-9()./-]*$/;
        var persng = /^\d*(\.\d{1})?\d{0,1}$/;

        if (NomType == "") {
            alert("Select Nomination Type.");
            return false;
        }

        if (TechrMember == "") {
            alert("Enter Nomination Date.");
            return false;
        } else {

            var newdate = Techrserdate.split("-").reverse().join("/");
            //   jQuery('#nominationdtlNomiDate').val(newdate);
        }
    });
    
    
    $('#cancel_tch_personal').click(function () {

        $('#nominationdtlSelectNomination').removeAttr('disabled');
        $('#nominationdtlSelectNomination').val('');
        $('#nominationdtlNomiDate').val('');
        $('#nominationdtlTechrNomiAs').val('');
        $('input[type="submit"]').attr('disabled', 'disabled');
        $('#cancel_tch_personal').attr('disabled', 'disabled');
        $('input[type="submit"]').css("background", "rgba(39, 120, 137, 0.6)");
        $('#cancel_tch_personal').css("background", "rgba(39, 120, 137, 0.6)");
        $("#fmilymemder").hide();
        $('#griddisply').hide();
//             var tid = $('#nominationdtlTchrId').val();
//             var Nomityp = $('#nominationdtlFamilytpid').val();
//             
//             jQuery.post(window.webroot+'Teachers/nominasngridbyid', {tchr_id: tid,nomiid:Nomityp}, function (data) {
//               // alert(data);
//                $('#griddisply').html(data);
//             });
//            
//             jQuery.post(window.webroot+'Teachers/Percentbynomitype', {tchr_id: tid,nomiid:Nomityp}, function(data) {
//                var count =   Object.keys(data).length ;
//                i=0; var sum = 0;
//                   $.each(data, function(key1, val1) {
//                       $.each(val1, function(key, val) {
//                            $.each(val, function(key3, val3) {
//                                 //alert(count);
//                                 if (key3 === 'tn_pcnt') {
//                                   
//                                        // alert(i);
//                                     jQuery('#nominationdtlTechrMark'+i).val(val3);
//                                     i++;
//                                    sum += Number(val3);
//                                    jQuery('#totalPrice').val(sum);
//                                 }
//                            });
//                       });
//                       
//                   });
//            }, 'json');

    });

    var tchr_id = $("#tchr_id_hidden").val();
    var tchr_type = $("#tchr_type_hidden").val();

    jQuery.post(window.webroot+'Teachers/PersonalDetails', {tchr_id: tchr_id, tchr_type: tchr_type}, function (data) {
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
                else if (key === 'post_desc') {
                    jQuery('#tchr_designation').text(val);
                    jQuery('#tchr_curr_desg_cd').val(val);
                }
                else if (key === 'tchr_serv_entry_dt') {
                    if (val) {
                        jQuery('#nominationdtlServdate').val(val);
                    }
                }
                else if (key === 'tchr_id') {
                    jQuery('#tchr_code').text(val);
                }
                else if (key === 'tchr_gender') {
                    tchr_gender = val;
                    jQuery('#nominationdtlNominationGender').val(val);
                }

            });
        });
    }, 'json');

});

$(document).on('change', '#nominationdtlFamilyMembName', function () {
    var AcadQual = $('#nominationdtlFamilyMembName').val();
    $('#nominationdtlFmlyid').val(AcadQual);
    // alert(AcadQual);
    if (AcadQual != '') {
        jQuery.post(window.webroot+'Teachers/familymemberytpe', {mem_id: AcadQual}, function (data) {
            // alert(data);
            //   $('#nominationdtlSelectNomination').removeAttr('disabled');
            $('#membrtyp').html(data);

        });
    } else {
        // $('#acad_qualificationTechrExam').attr('disabled', 'disabled');
    }
});



 