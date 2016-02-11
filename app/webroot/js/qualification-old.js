
// Form Validation on :  Model-> teacher->Navigation->ph->Form->Physically Handicap Details .
// by : hemant kadam   
  $(document).ready(function () {
      
      var TechrExam = $('#acad_qualificationTechrExam').val();
     
      var TechrYearPass = $('#acad_qualificationTechrYearPass').val();
     
       //alert(acad_qualificationTechrMark);
        var cerno = /^[a-zA-Z0-9()./-]*$/;
        var numpattern = /^[a-zA-Z0-9()./-]*$/;
        var namepattern = /^[a-zA-Z., ]*$/;
        var gradecheck = /^[a-zA-Z]$/;
        //var persng  = /^(3[5-9]|[4-9]\d|9[0-9])$|^100$/;
         var persng  =  /^\d*(\.\d{1})?\d{0,1}$/;
        var exrydate = /^((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))$/;
     
       $('#acad_qualificationSelectedAcadQual').change(function () {
           var AcadQual = $('#acad_qualificationSelectedAcadQual').val();
             //alert(AcadQual);
           if(AcadQual==""){
                $('#acad_qualificationTechrExam').attr('disabled', 'disabled');
               alert("Select Level.");
                return false;
           }else{
               if (AcadQual == 1 || AcadQual ==2 ||AcadQual ==3 ) {
                 //$('#acad_qualificationMainsubject').attr('disabled', 'disabled');
                 $('#acad_qualificationSelecoptsub1').attr('disabled', 'disabled');
                 $('#acad_qualificationSelecoptsub2').attr('disabled', 'disabled');
                 $('#acad_qualificationSelecoptsub1').val("");
                 $('#acad_qualificationSelecoptsub2').val("");
            }else{
                  $('#acad_qualificationSelecoptsub1').removeAttr('disabled');
                  $('#acad_qualificationSelecoptsub2').removeAttr('disabled');
                   $('#acad_qualificationSelecoptsub1').val("");
                 $('#acad_qualificationSelecoptsub2').val("");
            }
           }
          
             
       });
        $('#acad_qualificationTechrMedium').change(function () {
          var TechrMedium = $('#acad_qualificationTechrMedium').val();
             //alert(TechrMedium);
           if(TechrMedium==""){
               alert("Select Medium.");
                return false;
           }
            
       });
        $('#acad_qualificationTechrMonthPass').change(function () {
           var TechrMonthPass = $('#acad_qualificationTechrMonthPass').val();
             //alert(TechrMonthPass);
           if(TechrMonthPass==""){
                //$('#acad_qualificationTechrMonthPass').attr('disabled', 'disabled');
               alert("Select Month of Passing.");
                return false;
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
       
//       $('#acad_qualificationTechrCollage').focusout(function () {
//             var TechrCollage = $('#acad_qualificationTechrCollage').val();
//           if(TechrCollage==''){
//                alert("Enter Institute/Collage Name.");
//                return false;
//           }
//            
//       });
       
//        $('#acad_qualificationTechrBoard').change(function () {
//        var TechrBoard = $('#acad_qualificationTechrBoard').val();
//            if(namepattern.test(TechrBoard)== false){
//                $("#TechrBoard").focus();
//                $('#TechrBoard').css('border-color', 'red');
//                alert("Err... Invalid Board / University Name.");
//                return false;
//            }
//            
//       });
       
//       $('#acad_qualificationTechrBoard').focusout(function () {
//           var TechrBoard = $('#acad_qualificationTechrBoard').val();
//           if(TechrBoard==""){
//               alert("Select Board / University Name.");
//                return false;
//           }
//            
//       });
       
       $('#acad_qualificationTechrMark').change(function () {
         var TechrMark = $('#acad_qualificationTechrMark').val();
         //var str = '4.5';
            var substr = TechrMark.split('.');
            var vals = substr[0];
           // alert(vals);
          if(persng.test(TechrMark)== false){
                $("#TechrMark").focus();
                $('#TechrMark').css('border-color', 'red');
                alert("Err... Invalid Percentage.");
                return false;
            }else{
                if(vals < 35 || vals >99){
                    // alert("indside if");
                     alert("Err... Percentage should be greater than 35% and less than 100%.");
                    return false;
                }else{
                  //  alert("indside else");
                   
                }
            }
       });
       
       $('#acad_qualificationTechrMark').focusout(function () {
          var TechrMark = $('#acad_qualificationTechrMark').val();
          if(TechrMark==""){
               alert("Enter Percentage.");
                return false;
           }
       });     
       
       
       $('#acad_qualificationTechrGrade').change(function () {
        var TechrGrade = $('#acad_qualificationTechrGrade').val();
            if(gradecheck.test(TechrGrade)== false){
                $("#TechrGrade").focus();
                $('#TechrGrade').css('border-color', 'red');
                alert("Err... Invalid Grade.");
                return false;
            }
            
       });
       
       $('#acad_qualificationTechrGrade').focusout(function () {
            var TechrGrade = $('#acad_qualificationTechrGrade').val();
          if(TechrGrade==""){
               alert("Enter Grade.");
                return false;
           }
            
       });
       
       $('#acad_qualificationMainsubject').change(function () {
           var AcadMainSub = $('#acad_qualificationMainsubject').val();
          
           if(AcadMainSub==""){
                //$('#acad_qualificationTechrExam').attr('disabled', 'disabled');
               alert("Select Main Subject.");
                return false;
           }
            
       });
       
       
        $('#acad_qualificationSelectedAcadQual').change(function () {
        //alert("inside");
          var AcadQual = $('#acad_qualificationSelectedAcadQual').val();
            // alert(AcadQual);
            if(AcadQual == 1 || AcadQual == 2 || AcadQual == 3){
            
            $('#acad_qualificationMainsubject').prop('disabled', 'disabled');
            	
            }else{
                $('#acad_qualificationMainsubject').val("");
                 $('#acad_qualificationMainsubject').removeAttr('disabled');
            }
            if(AcadQual!=''){
                jQuery.post('/Education/Teachers/SubjectsbyLevelid', {level_id: AcadQual}, function (data) {
                    //alert(data);
                   $('#sublst').html(data); 

                });
            }
            
            if(AcadQual!=''){
             jQuery.post('/Education/Teachers/ExaminationbyLevelid', {level_id: AcadQual}, function (data) {
                 //alert(data);
                  $('#acad_qualificationTechrExam').removeAttr('disabled');
                $('#examdtl').html(data); 
                
             });
            }else{
                 $('#acad_qualificationTechrExam').attr('disabled', 'disabled');
            }
             if(AcadQual!=''){
                // alert(AcadQual);
                jQuery.post('/Education/Teachers/BoardUnivbyLevelid', {level_id: AcadQual}, function (data) {
                   // alert(data);
                   $('#borddtl').html(data); 

                });
            }
            
            if (AcadQual == 1 || AcadQual == 2 || AcadQual == 3) {
                // $('#acad_qualificationMainsubject').attr('disabled', 'disabled');
                 $('#acad_qualificationSelecoptsub1').attr('disabled', 'disabled');
               $('#acad_qualificationSelecoptsub2').attr('disabled', 'disabled');
            }else{
                 $('#acad_qualificationMainsubject').removeAttr('disabled');
                 $('#acad_qualificationSelecoptsub1').removeAttr('disabled');
               $('#acad_qualificationSelecoptsub2').removeAttr('disabled');
            }
            
        });
        
        $('#acad_qualificationTechrState').change(function () {
        //alert("inside");
        var AcadQual = $('#acad_qualificationSelectedAcadQual').val();
          var Acadstateid = $('#acad_qualificationTechrState').val();
         // alert(AcadQual);
         // alert(Acadstateid);
          if(Acadstateid!=''){
                // alert(AcadQual);
                jQuery.post('/Education/Teachers/BoardUnivbystateid', {level_id: AcadQual,state_id: Acadstateid}, function (data) {
                    //alert(data);
                   $('#borddtl').html(data); 

                });
            }
            
        });
        
//        $('#cancel_tch_personal').click(function () {
//          $("#acad_qualificationSerialId,#acad_qualificationSelectedAcadQual,#acad_qualificationTechrExam,#acad_qualificationTechrCollage,#acad_qualificationTechrBoard,#acad_qualificationTechrMedium,#acad_qualificationTechrState,#acad_qualificationTechrMonthPass,#acad_qualificationTechrYearPass,#acad_qualificationTechrMark,#acad_qualificationTechrGrade,#acad_qualificationSelecoptsub1,#acad_qualificationSelecoptsub2,#acad_qualificationTechrOthersub,#acad_qualificationTechrRemark").val("");
//                        //$('#imgrow').hide();
//                       
//       });
        $(document).on('click', '#cancel_tch_personal', function () {
            var sid =  $('#acad_qualificationSerialId').val();
           // $('#acad_qualificationSerialId').val(sid);
             //alert(srialid);
            //ShowProgress();	
            //alert(sid);
            if (sid !== '') {
                 $('#delete_tch').removeAttr('disabled');
                 $('#delete_tch').css("background","linear-gradient(to bottom, #1f89c2 5%, #79b3e0 100%) repeat scroll 0 0 #1f89c2");
                $('#imgrow').show(); 
                jQuery.post('/Education/Teachers/teacherQualibyserialid', {sid: sid}, function (data) {

                    var siteArray = data.array;
                        //alert(data.length);
                    if (data.length > 0) {

                        if (!$.isArray(siteArray) || !siteArray.length) {
                            //handler either not an array or empty array
                            $('input[type="submit"]').removeAttr('disabled');
                            $.each(data, function (key, val) {
                                $.each(val, function (key1, val1) {

                                      $.each(val1, function (key2, val2) {
                                        // alert("inside"); 
                                        // alert(key2+"==="+val2);
                                        if (key2 === 'tq_inst_name') {
                                            jQuery('#acad_qualificationTechrCollage').val('');
                                            jQuery('#acad_qualificationTechrCollage').val(val2);
                                        }
                                         else if (key2 === 'tq_board_univ') {
                                            jQuery('#acad_qualificationTechrBoard').val('');
                                              var val = $.trim(val2);
                                            // alert(val);
                                            jQuery('#acad_qualificationTechrBoard').val(val);
                                        }
                                       else if (key2 === 'tq_pass_year') {
                                            jQuery('#acad_qualificationTechrYearPass').val('');
                                            jQuery('#acad_qualificationTechrYearPass').val(val2);
                                        }
                                       else if (key2 === 'tq_qual_lvl') {

                                            // jQuery('#phIsathtype').val(val2);
                                            var val = val2;
                                            //alert(val);
                                            $('#acad_qualificationSelectedAcadQual option[value=' + $.trim(val) + ']').attr("selected", "selected");

                                            jQuery.post('/Education/Teachers/ExaminationbyLevelid', {level_id: val}, function (data) {
                                                //  alert(data);
                                                $('#acad_qualificationTechrExam').removeAttr('disabled');
                                                $('#examdtl').html(data);

                                            });
                                            jQuery.post('/Education/Teachers/SubjectsbyLevelid', {level_id: val}, function (data) {
                                                //alert(data);
                                               $('#sublst').html(data); 

                                            });
                                            if(val==1 || val==2 || val== 3 ){
                                               $('#acad_qualificationSelecoptsub1').attr('disabled', 'disabled'); 
                                              $('#acad_qualificationSelecoptsub2').attr('disabled', 'disabled');
                                            }
                                        }
                                        else if (key2 === 'tq_degree') {
                                            //var val = val2;
                                            //alert(val2);
                                            setTimeout(function (){
                                                 $('#acad_qualificationTechrExam option[value=' + $.trim(val2) + ']').attr("selected", "selected");		
                                            },350);
                                       
                                        }
                                        else if (key2 === 'tq_medium') {

                                            // jQuery('#phIsathtype').val(val2);
                                            var val = val2;
                                            $('#acad_qualificationTechrMedium option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                        }
                                        else if (key2 === 'tq_state_pass') {

                                            // jQuery('#phIsathtype').val(val2);
                                            var val = val2;
                                            if (val < 10) {
                                                $('#acad_qualificationTechrState option[value=' + 0 + $.trim(val) + ']').attr("selected", "selected");
                                            } else {
                                                $('#acad_qualificationTechrState option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                            }
                                        } 
                                       else if (key2 === 'tq_pass_month') {

                                            // jQuery('#phIsathtype').val(val2);
                                            var val = val2;
                                            
                                            $('#acad_qualificationTechrMonthPass option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                        }
                                       else if (key2 === 'tq_maj_sub') {
                                            //alert(val2);
                                            var val = val2;
                                            $('#acad_qualificationMainsubject option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                        
                                            }
                                        else if (key2 === 'tq_min_sub1') {

                                            // jQuery('#phIsathtype').val(val2);
                                            var val = $.trim(val2);
                                           // alert(val);
                                            if(val != ''){
                                                //alert(val);
                                               // alert("val");
                                            $('#acad_qualificationSelecoptsub1 option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                        }
                                        } 
                                        else if (key2 === 'tq_min_sub2') {

                                            // jQuery('#phIsathtype').val(val2);
                                            var val = $.trim(val2);
                                            if(val != ''){
                                            $('#acad_qualificationSelecoptsub2').removeAttr('disabled');
                                            $('#acad_qualificationSelecoptsub2 option[value=' + $.trim(val) + ']').attr("selected", "selected");
                                        }
                                        } 
                                       else if (key2 === 'tq_pcnt') {
                                            var intgr = parseFloat(val2);
                                            // alert(intgr);
                                            jQuery('#acad_qualificationTechrMark').val(intgr);
                                        }
                                        else if (key2 === 'tq_grade') {
                                            val = $.trim(val2);
                                            jQuery('#acad_qualificationTechrGrade').val(val);
                                        }
                                        else if (key2 === 'tq_othr_sub') {
                                            jQuery('#acad_qualificationTechrOthersub').val(val2);
                                        }
                                        else if (key2 === 'tq_remarks') {
                                            jQuery('#acad_qualificationTechrRemark').val(val2);
                                        }
                                        else if (key2 === 'tq_cert_fname') {
                                            //  alert(val2);

                                            var imgpath = "/Education/acadmic/";
                                            if (val2) {
                                                $('#mycontainer').hide();
                                                $('#delete').show();
                                                $("#addperdtlUplodimg").val(val);
                                                $('#close').show();

                                                // $('#showimage').attr("src",(imgpath+val2));
                                                var newImage = $('<img align="center" height="150" width="483"  id="popimg"/>');
                                                newImage.attr('src', (imgpath + val2));
                                                $('#abc').append(newImage);

                                                var newImage = $('<img align="center" height="35" width="35" style="cursor:pointer;pointer;height: 35px;padding-bottom:5px;padding-left:4px;width:35px;right:100px;"id="popup" onClick="div_show()" />');
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

                                                var newImage = $('<img align="center" height="35" width="35" style="cursor:pointer;pointer;height: 35px;width:35px;padding-bottom:5px;padding-left:4px;right:100px;"id="popup" onClick="div_show()" />');
                                                newImage.attr('src', (imgpath));
                                                $('#imgrow').html(newImage);
                                                jQuery('#phCertimg').val(val2);

                                            }


                                        }

                                    });
                                });
                            });
                        } else {
                           // alert("outside dgfdfg");
                        }
                     } else {

                         alert("No Data Available ");
                        $("#acad_qualificationSelectedAcadQual,#acad_qualificationTechrExam,#acad_qualificationTechrCollage,#acad_qualificationTechrBoard,#acad_qualificationTechrMedium,#acad_qualificationTechrState,#acad_qualificationTechrMonthPass,#acad_qualificationTechrYearPass,#acad_qualificationTechrMark,#acad_qualificationTechrGrade,#acad_qualificationSelecoptsub1,#acad_qualificationSelecoptsub2,#acad_qualificationTechrOthersub,#acad_qualificationTechrRemark").val("");
                        $('#imgrow').hide();
                        $('#save_ph_dtl').show();
                        $('#cancel_tch_personal').show();
                        $('input').prop('readonly', false);
                        $('select').prop('disabled', false);
                        $('input[type="radio"]').prop('disabled', false);
                        //$('#uplodimage').prop('disabled', 'disabled');
                        $("#upload_cert_img").prop('disabled', false);
                        $(".ui-datepicker-trigger").prop('disabled', false);
                        var vfg = $('#phTchrFlg').val('');
                    }//HideProgress();
                }, 'json');
            }
        });
   });
   
   
        
   
        $(document.body).on('click', '#save_acad_dtl', function() {
            // alert("inside submit");
         var AcadQual = $('#acad_qualificationSelectedAcadQual').val();
         var TechrExam = $('#acad_qualificationTechrExam').val();
         var TechrCollage = $('#acad_qualificationTechrCollage').val();
         var TechrBoard = $('#acad_qualificationTechrBoard').val();
         var TechrMedium = $('#acad_qualificationTechrMedium').val();
         var TechrMonthPass = $('#acad_qualificationTechrMonthPass').val();
         var TechrYearPass = $('#acad_qualificationTechrYearPass').val();
         var TechrMark = $('#acad_qualificationTechrMark').val();
         var TechrGrade = $('#acad_qualificationTechrGrade').val();
         var AcadMainSub = $('#acad_qualificationMainsubject').val();
        
       //alert(acad_qualificationTechrMark);
        var cerno = /^[a-zA-Z0-9()./-]*$/;
        var numpattern = /^[a-zA-Z0-9()./-]*$/;
        var namepattern = /^[a-zA-Z., ]*$/;
        var gradecheck = /^[a-zA-Z]$/;
        //var persng  = /^(3[5-9]|[4-9]\d|9[0-9])$|^100$/;
         //var persng  = /^(3[5-9]|[4-9]\d|9[0-9])$|^100$/;
         var persng  =  /^\d*(\.\d{1})?\d{0,1}$/;
         
        var exrydate = /^((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))$/;
     
           if(AcadQual==""){
               alert("Select Level.");
                return false;
           }
           
            if(TechrExam==""){
               alert("Select Examination.");
                return false;
           }

           if(TechrMonthPass==""){
               alert("Select Month of Passing.");
                return false;
           }

//           if(TechrCollage==""){
//               alert("Enter Institute/Collage Name.");
//                return false;
//           }else{
//        
//                if(namepattern.test(TechrCollage)== false){
//                    $("#TechrCollage").focus();
//                    $('#TechrCollage').css('border-color', 'red');
//                    alert("Err... Invalid Institute/Collage Name.");
//                    return false;
//                }
//            }
// 
//           if(TechrBoard==""){
//               alert("Enter Board / University Name.");
//                return false;
//           }
//           else{
//        
//                if(namepattern.test(TechrBoard)== false){
//                    $("#TechrBoard").focus();
//                    $('#TechrBoard').css('border-color', 'red');
//                    alert("Err... Invalid Board / University Name.");
//                    return false;
//                }
//            }
            
           if(TechrMedium==""){
               alert("Select Medium.");
                return false;
           }
 
         if(TechrMark==""){
               alert("Enter Percentage.");
                return false;
           }else{
        
                if(persng.test(TechrMark)== false){
                    $("#TechrMark").focus();
                    $('#TechrMark').css('border-color', 'red');
                    alert("Err... Invalid Percentage.");
                    return false;
                }
            }
            if(AcadMainSub==""){
               alert("Select Main Subject.");
                return false;
           }
      
//            if(TechrGrade==""){
//                       alert("Enter Grade.");
//                        return false;
//                }else{
//
//                 if(gradecheck.test(TechrGrade)== false){
//                     $("#TechrGrade").focus();
//                     $('#TechrGrade').css('border-color', 'red');
//                     alert("Err... Invalid Grade.");
//                     return false;
//                 }
//             }
    
});
 
 