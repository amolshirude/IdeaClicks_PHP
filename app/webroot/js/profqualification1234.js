
function profqualification () {

    var TechrExam = $('#acad_qualificationTechrExam').val();

    var TechrYearPass = $('#techr_year_pass').val();
    jQuery('#curryear').val('');
    //var x=$('#curryear').val();
    //alert(x);
    //alert(acad_qualificationTechrMark);
    var cerno = /^[a-zA-Z0-9()./-]*$/;
    var numpattern = /^[a-zA-Z0-9()./-]*$/;
    var namepattern = /^[a-zA-Z., ]*$/;
    var gradecheck = /^[A-H][+-]?$/;
    //var persng  = /^(3[5-9]|[4-9]\d|9[0-9])$|^100$/;
    var persng = /^\d*(\.\d{1})?\d{0,1}$/;
    var exrydate = /^((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))$/;
    var hqual;
    var hdeg;

 


    $('#quallvl').change(function () {
        var quallvl = $('#quallvl').val();
        alert(quallvl);


    });


$('#acad_qualificationTechrMedium').unbind('change').bind('change', function (e) {
   // $('#acad_qualificationTechrMedium').change(function () {
        var TechrMedium = $('#acad_qualificationTechrMedium').val();
        //alert(TechrMedium);
        if (TechrMedium == "") {
            alert("Select Medium.");
            return false;
        }

    });
        $('#acad_qualificationTechrMonthPass').unbind('change').bind('change', function (e) {
    //$('#acad_qualificationTechrMonthPass').change(function () {
        var TechrMonthPass = $('#acad_qualificationTechrMonthPass').val();

        $('#acad_qualificationTchrMonth').val(TechrMonthPass);
        //alert(TechrMonthPass);
        if (TechrMonthPass == "") {
            //$('#acad_qualificationTechrMonthPass').attr('disabled', 'disabled');
            alert("Select Month of Passing.");
            return false;
        }
        if (TechrYearPass != "") {
            var TechrYearPass = $('#techr_year_pass').val();
             jQuery('#curryear').val(TechrYearPass); 
            var currentMonth = (new Date).getMonth() + 1;
            var currentYear = (new Date).getFullYear();
            if ((TechrYearPass == currentYear) && (TechrMonthPass > currentMonth)) {
                alert("Err.. Month should be less than current month");
               

                jQuery('#acad_qualificationTechrMonthPass').val('');
                return false;
            }

        }

    });
    $('#tyear').unbind('change').bind('change', function (e) {
  //  $('#tyear').change(function () {
        var TechrYearPass = $('#techr_year_pass').val();
        jQuery('#curryear').val(TechrYearPass);
//        alert("here");
        var TechrMonthPass = $('#acad_qualificationTechrMonthPass').val();
        var currentMonth = (new Date).getMonth() + 1;
        var currentYear = (new Date).getFullYear();
//          jQuery('#curryear').val(TechrYearPass); 
//          alert($('#curryear').val());
        // alert(currentMonth);
        if (TechrYearPass == "") {
             jQuery('#curryear').val('');
            return false;
        } else {
            if ((TechrYearPass == currentYear) && (TechrMonthPass > currentMonth)) {
                alert("Err.. Month should be less than current Year");
                jQuery('#techr_year_pass').val('');
              jQuery('#curryear').val(''); 
                jQuery('#acad_qualificationTechrMonthPass').val('');
                return false;
            }
        }

    });

//       $('#acad_qualificationTechrCollage').change(function () {
//        var TechrCollage = $('#acad_qualificationTechrCollage').val();
//          // alert(TechrCollage);
//            if(namepattern.test(TechrCollage)== false){
//                $("#TechrCollage").focus();
//                $('#TechrCollage').css('border-color', 'red');
//                alert("Err... Invalid Institute/Collage Name.");
//                return false;
//            }
//      
//       });


$('#acad_qualificationTechrMark').unbind('change').bind('change', function (e) {
//    $('#acad_qualificationTechrMark').change(function () {
        var TechrMark = $('#acad_qualificationTechrMark').val();
        //var str = '4.5';
        var substr = TechrMark.split('.');
        var vals = substr[0];
        // alert(vals);
        if (persng.test(TechrMark) == false) {
            $("#TechrMark").focus();
            $('#TechrMark').css('border-color', 'red');
            alert("Err... Invalid Percentage.");
            return false;
        } else {
            if (vals < 35 || vals > 99) {
                // alert("indside if");
                alert("Err... Percentage should be greater than 35% and less than 100%.");
                $('#acad_qualificationTechrMark').val('');
                return false;
            } else {
                //  alert("indside else");

            }
        }
    });

  $('#acad_qualificationTechrMark').unbind('focusout').bind('focusout', function (e) {
//    $('#acad_qualificationTechrMark').focusout(function () {
        var TechrMark = $('#acad_qualificationTechrMark').val();
        var TechrGrade = $('#acad_qualificationTechrGrade').val();
        if (TechrMark == "" && TechrGrade == "") {
            alert("Enter Percentage or grade");
            return false;
        }
    });

//$('#acad_qualificationTechrGrade').unbind('change').bind('change', function (e) {
////    $('#acad_qualificationTechrGrade').change(function () {
//        var TechrGrade = $('#acad_qualificationTechrGrade').val();
////          alert("here");
////          alert(gradecheck);
//        if (gradecheck.test(TechrGrade) == false) {
//
//            $("#TechrGrade").focus();
//            $('#TechrGrade').css('border-color', 'red');
//
//            alert("Err... Invalid Grade.");
//            $('#acad_qualificationTechrGrade').val('');
//            return false;
//        }
//
//    });

 $('#acad_qualificationTechrGrade').unbind('focusout').bind('focusout', function (e) {
  //  $('#acad_qualificationTechrGrade').focusout(function () {
        var TechrGrade = $('#acad_qualificationTechrGrade').val();
        var TechrMark = $('#acad_qualificationTechrMark').val();
        if (TechrGrade == "" && TechrMark == "") {
            alert("Enter Grade or Percentage");
            return false;
        }
        if (gradecheck.test(TechrGrade) == false) {

            $("#TechrGrade").focus();
            $('#TechrGrade').css('border-color', 'red');

            alert("Err... Invalid Grade.");
            $('#acad_qualificationTechrGrade').val('');
            return false;
        }


    });
$('#acad_qualificationMainsubject').unbind('change').bind('change', function (e) {
 //   $('#acad_qualificationMainsubject').change(function () {
        var AcadMainSub = $('#acad_qualificationMainsubject').val();

        if (AcadMainSub == "") {
            //$('#acad_qualificationTechrExam').attr('disabled', 'disabled');
            alert("Select Main Subject.");
            return false;
        }

    });

$('#acad_qualificationSelectedAcadQual').unbind('change').bind('change', function (e) {
  //  $('#acad_qualificationSelectedAcadQual').change(function () {
        //alert("inside");
        
        var AcadQual = $('#acad_qualificationSelectedAcadQual').val();
        // alert(AcadQual);
        var Acadstateid = $('#acad_qualificationTechrState').val();
        // alert(AcadQual);
        
        
           var tid = $('#tchr_id_hidden').val();
//        alert(tid);
            jQuery.post(window.webroot+'Teachers/getbirthdt', {tid: tid}, function (data) {
        //            alert(data);
                $('#tyear').html(data);
            });
        if (AcadQual == 1 || AcadQual == 2 || AcadQual == 3) {

            $('#acad_qualificationMainsubject').prop('disabled', 'disabled');

        } else {
            $('#acad_qualificationMainsubject').val("");
            $('#acad_qualificationMainsubject').removeAttr('disabled');
        }


        if (AcadQual != '') {
            jQuery.post(window.webroot+'Teachers/ExaminationbyLevelid', {level_id: AcadQual, type: 'P'}, function (data) {
                //alert(data);
                $('#acad_qualificationTechrExam').removeAttr('disabled');
                $('#examdtl').html(data);
//                 var deg = $('#acad_qualificationTechrExam').val();
//                    alert(deg);
                $('#hiddenqual').val(AcadQual);
//                    var q=$('#hiddenqual').val();
//                    alert(q);
                $('#acad_qualificationTechrExam').change(function () {
                    var degree = $('#acad_qualificationTechrExam').val();
                    // alert(degree);
                    $('#hiddendeg').val(AcadQual);
//                     var d=$('#hiddenqual').val();
//                    alert(d);
                    jQuery.post(window.webroot+'Teachers/Subjectsbyid', {degree: degree}, function (data) {

                        //alert(data);
                        $('#sublst').html(data);

                        $('#acad_qualificationMainsubject').change(function () {
                            // alert("here");
                            var mainsub = $('#acad_qualificationMainsubject').val();
                            //     alert(mainsub);
                            jQuery.post(window.webroot+'Teachers/OptionalSubject1', {degree: degree, mainsub: mainsub}, function (data) {

                                // alert(data);
                                $('#sublst1').html(data);

                                $('#acad_qualificationSelecoptsub1').change(function () {
                                    //alert("here");
                                    var mainsub = $('#acad_qualificationMainsubject').val();
                                    // alert(mainsub);
                                    var opt1 = $('#acad_qualificationSelecoptsub1').val();
                                    //alert(opt1);
                                    jQuery.post(window.webroot+'Teachers/OptionalSubject2', {degree: degree, mainsub: mainsub, opt1: opt1}, function (data) {

                                        $('#sublst2').html(data);
                                    });
                                });

                            });
                        });


                    });
                });


            });
        } else {
            $('#acad_qualificationTechrExam').attr('disabled', 'disabled');
        }

        if (Acadstateid != '') {
            // alert(AcadQual);
            jQuery.post(window.webroot+'Teachers/BoardUnivbystateid', {level_id: AcadQual, state_id: Acadstateid}, function (data) {
                //alert(data);
                $('#borddtl').html(data);

            });
        } else {
            jQuery.post(window.webroot+'Teachers/BoardUnivbyLevelid', {level_id: AcadQual}, function (data) {
                // alert(data);
                $('#borddtl').html(data);

            });
        }
        //  $('#acad_qualificationTechrState').val('');
        // $('#acad_qualificationTechrState').removeAttr('disabled');
        if (AcadQual == 1 || AcadQual == 2 || AcadQual == 3) {
            // $('#acad_qualificationMainsubject').attr('disabled', 'disabled');
            $('#acad_qualificationSelecoptsub1').attr('disabled', 'disabled');
            $('#acad_qualificationSelecoptsub2').attr('disabled', 'disabled');
        } else {
            $('#acad_qualificationMainsubject').removeAttr('disabled');
            $('#acad_qualificationSelecoptsub1').removeAttr('disabled');
            $('#acad_qualificationSelecoptsub2').removeAttr('disabled');
        }
        $("#acad_qualificationTechrExam,#acad_qualificationTechrCollage,#acad_qualificationTechrBoard,#acad_qualificationTechrMedium,#acad_qualificationTechrMonthPass,#acad_qualificationTechrYearPass,#acad_qualificationTechrMark,#acad_qualificationTechrGrade,#acad_qualificationSelecoptsub1,#acad_qualificationSelecoptsub2,#acad_qualificationTechrOthersub,#acad_qualificationTechrRemark").val("");
        $('#imgrow').hide();
    });
$('#acad_qualificationTechrState').unbind('change').bind('change', function (e) {
    //$('#acad_qualificationTechrState').change(function () {
        //alert("inside");
        var AcadQual = $('#acad_qualificationSelectedAcadQual').val();
        var Acadstateid = $('#acad_qualificationTechrState').val();
        // alert(AcadQual);
        // alert(Acadstateid);
        if (Acadstateid != '') {
            // alert(AcadQual);
            jQuery.post(window.webroot+'Teachers/BoardUnivbystateid', {level_id: AcadQual, state_id: Acadstateid}, function (data) {
                //alert(data);
                $('#borddtl').html(data);

            });
        }

    });


}




$('#save_acad_dtl').unbind('click').bind('click', function (e) {
    // alert("inside submit");var x;

    var AcadQual = $('#acad_qualificationSelectedAcadQual').val();
    var TechrExam = $('#acad_qualificationTechrExam').val();
    var TechrCollage = $('#acad_qualificationTechrCollage').val();
    var TechrBoard = $('#acad_qualificationTechrBoard').val();
    var TechrMedium = $('#acad_qualificationTechrMedium').val();
    var TechrMonthPass = $('#acad_qualificationTechrMonthPass').val();
    var TechrMonthPass = $('#acad_qualificationTechrMonthPass').val();
    var TechrMark = $('#acad_qualificationTechrMark').val();
    var TechrGrade = $('#acad_qualificationTechrGrade').val();
    var AcadMainSub = $('#acad_qualificationMainsubject').val();
    var TechrYear = $('#curryear').val();
    //alert(TechrYear);
    if(TechrYear==''){
        alert("Select Year.");
        return false;
    }
    if (AcadQual == "") {
        alert("Select Level.");
        return false;
    }

    if (TechrExam == "") {
        alert("Select Examination.");
        return false;
    }

    if (TechrMonthPass == "") {
        alert("Select Month of Passing.");
        return false;
    }


    if (TechrMedium == "") {
        alert("Select Medium.");
        return false;
    }

    if (TechrMark == "" && TechrGrade == "") {
        alert("Enter Percentage or grade");

        return false;
    }
    if (AcadMainSub == "") {
        alert("Select Main Subject.");
        return false;
    }
    

});

 