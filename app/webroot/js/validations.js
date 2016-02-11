/*------------------------------pravin --Personal details------------------------------------------------*/
function validationCommen() {
    /*Personal page validation start*/
    $("#txtEng4").focusout(function() {
        var flag = 1;
        var str = "";
        var tchr_fname = $('#txtEng4').val();
        var Alphapattern = /^[a-zA-Z]+$/;
        if (tchr_fname === "") {
            flag = 0;
//            $("#txtEng4").focus();
//            $('#tchr_fname').css('border-color', 'red');
            str = "\n Please Enter Teacher First Name.";
        }
        else if (Alphapattern.test(tchr_fname) == false) {
            flag = 0;
//            $("#txtEng4").focus();
            str = "\n Err... Please Enter Valid Teacher First Name.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#txtEng5").focusout(function() {
        var flag = 1;
        var str = "";
        var tchr_fname = $('#txtEng4').val();
        var tchr_mname = $('#txtEng5').val();
        var Alphapattern = /^[a-zA-Z]+$/;
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
        if (!flag) {
            alert(str);
        }
    });
    $("#txtEng6").focusout(function() {
        var flag = 1;
        var str = "";
        var tchr_fname = $('#txtEng4').val();
        var tchr_mname = $('#txtEng5').val();
        var tchr_lname = $('#txtEng6').val();
        var Alphapattern = /^[a-zA-Z]+$/;
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
        if (!flag) {
            alert(str);
        }
    });
    $("#txtHindi4").focusout(function() {
        var flag = 1;
        var str = "";
        var tchr_fname = $('#txtEng4').val();
        var tchr_mname = $('#txtEng5').val();
        var tchr_lname = $('#txtEng6').val();
        var Alphapattern = /^[a-zA-Z]+$/;
        var tchr_fname_d = $('#txtHindi4').val();
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
        if (!flag) {
            alert(str);
        }
    });
    $("#txtHindi5").focusout(function() {
        var flag = 1;
        var str = "";
        var tchr_fname = $('#txtEng4').val();
        var tchr_mname = $('#txtEng5').val();
        var tchr_lname = $('#txtEng6').val();
        var Alphapattern = /^[a-zA-Z]+$/;
        var tchr_fname_d = $('#txtHindi4').val();
        var tchr_mname_d = $('#txtHindi5').val();
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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#txtHindi6").focusout(function() {
        var flag = 1;
        var str = "";
        var tchr_fname = $('#txtEng4').val();
        var tchr_mname = $('#txtEng5').val();
        var tchr_lname = $('#txtEng6').val();
        var Alphapattern = /^[a-zA-Z]+$/;
        var tchr_fname_d = $('#txtHindi4').val();
        var tchr_mname_d = $('#txtHindi5').val();
        var tchr_lname_d = $('#txtHindi6').val();
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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#tchr_birth_dt").focusout(function() {
        var tchr_recruitment_type_hidden = $('#tchr_recruitment_type_hidden').val();
        if (tchr_recruitment_type_hidden == 'newRecuritment') {
            var flag = 1;
            var str = "";
            var tchr_fname = $('#txtEng4').val();
            var tchr_mname = $('#txtEng5').val();
            var tchr_lname = $('#txtEng6').val();
            var Alphapattern = /^[a-zA-Z]+$/;
            var tchr_fname_d = $('#txtHindi4').val();
            var tchr_mname_d = $('#txtHindi5').val();
            var tchr_lname_d = $('#txtHindi6').val();
            var tchr_birth_dt = $('#tchr_birth_dt').val();
            var date = tchr_birth_dt.substring(0, 2);
            var month = tchr_birth_dt.substring(3, 5);
            var year = tchr_birth_dt.substring(6, 10);
            var dateToCompare_birth_dt = new Date(year, month - 1, date); //Birth Date Converted

            var Datepattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            var CurrentDate = new Date();
            if (tchr_fname === "") {
                flag = 0;
//                $("#txtEng4").focus();
                str = "\n Please Enter Teacher First Name.";
            }
            else if (Alphapattern.test(tchr_fname) == false) {
                flag = 0;
//                $("#txtEng4").focus();
                str = "\n Err... Please Enter Valid Teacher First Name.";
            }
            else if (tchr_mname === "") {
                flag = 0;
//                $("#txtEng5").focus();
                str = "\n Please Enter Teacher Middle Name.";
            }
            else if (Alphapattern.test(tchr_mname) == false) {
                flag = 0;
//                $("#txtEng5").focus();
                str = "\n Err... Please Enter Valid Teacher Middle Name.";
            }
            else if (tchr_lname === "") {
                flag = 0;
//                $("#txtEng6").focus();
                str = "\n Please Enter Teacher Last Name.";
            }
            else if (Alphapattern.test(tchr_lname) == false) {
                flag = 0;
//                $("#txtEng6").focus();
                str = "\n Err... Please Enter Valid Teacher Last Name.";
            }
            else if (tchr_fname_d === "") {
                flag = 0;
//                $("#txtHindi4").focus();
                str = "\n Please Enter Teacher First Name in Devanagari.";
            }
            else if (tchr_mname_d === "") {
                flag = 0;
//                $("#txtHindi5").focus();
                str = "\n Please Enter Teacher Middle Name in Devanagari.";
            }
            else if (tchr_lname_d === "") {
                flag = 0;
//                $("#txtHindi6").focus();
                str = "\n Please Enter Teacher Last Name in Devanagari.";
            }
            else if (tchr_birth_dt === "") {
                flag = 0;
//                $("#tchr_birth_dt").focus();
                str = "\n Please Enter Teacher Date of Birth.";
            }
            else if (Datepattern.test(tchr_birth_dt) == false) {
                flag = 0;
//                $("#tchr_birth_dt").focus();
                str = "\n Err... Please Enter Valid Date of Birth.";
            }
            else if (dateToCompare_birth_dt > CurrentDate) {
                flag = 0;
//                $("#tchr_birth_dt").focus();
                str = "\n Err... Invalid Date of Birth.";
            }
            if (!flag) {
                alert(str);
            }
        }
    });
    $("#tchr_serv_entry_dt").focusout(function() {
        var tchr_recruitment_type_hidden = $('#tchr_recruitment_type_hidden').val();
        var flag = 1;
        var str = "";
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
        var setDateOld = new Date();
        var setDateOld1 = new Date();
        var setDateOld2 = new Date();
        var tchr_serv_entry_dt = $('#tchr_serv_entry_dt').val(); //Date of Entry in Service 
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
//alert(tchr_serv_entry_dt+"\n"+dateToCompare_appt_end_dt +"\n"+setDate);
        if ((dateToCompare_appt_end_dt - setDate123) < 0) {
//            alert("above 5");
            jQuery('#TeacherShikshanSevak1').prop('checked', true);
            $("input[name='tchr_type']").attr('disabled', false);
            $("#shikshan_sevak_dt_lable_td").show();
            $("#shikshan_sevak_dt_td").show();
            $("#tchr_appt_end_dt").val("");
        }
        else {
//            alert("below 5");
            jQuery('#TeacherShikshanSevak2').prop('checked', true);
            $("input[name='tchr_type']").attr('disabled', true);
            $("#shikshan_sevak_dt_lable_td").hide();
            $("#shikshan_sevak_dt_td").hide();
            $("#tchr_appt_end_dt").val("");
        }


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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
        else if (tchr_birth_dt === "") {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (Datepattern.test(tchr_birth_dt) == false) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Please Enter Valid Date of Birth.";
        }
        else if (dateToCompare_birth_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Invalid Date of Birth.";
        }
        else if (tchr_gender == undefined) {
            flag = 0;
            str = "\n Please Select Teacher Gender.";
        }
        else if (tchr_serv_entry_dt == "") {
            flag = 0;
            $("#tchr_servC_entry_dt").focus();
            str = "\n Please Date of Entry in Service.";
        }
        else if (Datepattern.test(tchr_serv_entry_dt) == false) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Entry in Service.";
        }
        else if ((daydiff(parseDate($('#tchr_serv_entry_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Enter Date of Entry in Service Greater than Date of Birth .";
        }
        else if (dateToCompare_serv_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service";
        }
        else if ((dateToCompare_serv_entry_dt - setDate) < 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service as Date is less than 18 Years from Date of Birth.";
        }
        if (tchr_recruitment_type_hidden == 'newRecuritment') {
            var d = new Date();
            var n = d.getFullYear() - 1;
            var mon = '01';
            var dat = '01';

//            alert("------"+setDate.setFullYear(d.getFullYear() - 1,  01, 01));
            if ((dateToCompare_serv_entry_dt - setDate.setFullYear(d.getFullYear() - 1, mon -1, dat)) < 0) {
                flag = 0;
//            $("#").focus();
            str = "\n Err... Please Enter Valid Date of Entry in Service for New Recruitment.";
            }
            if ((dateToCompare_serv_entry_dt - setDate.setFullYear(d.getFullYear() - 1, mon -1, dat)) >= 0) {
//                alert("right");
            }
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#tchr_edu_entry_dt").focusout(function() {
        var tchr_recruitment_type_hidden = $('#tchr_recruitment_type_hidden').val();
        var flag = 1;
        var str = "";
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
// alert((daydiff(parseDate($('#tchr_edu_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))));

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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
        else if (tchr_birth_dt === "") {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (Datepattern.test(tchr_birth_dt) == false) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Please Enter Valid Date of Birth.";
        }
        else if (dateToCompare_birth_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Invalid Date of Birth.";
        }
        else if (tchr_gender == undefined) {
            flag = 0;
            str = "\n Please Enter Teacher Gender.";
        }
        else if (tchr_serv_entry_dt == "") {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Date of Entry in Service.";
        }
        else if (Datepattern.test(tchr_serv_entry_dt) == false) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Entry in Service.";
        }
        else if ((daydiff(parseDate($('#tchr_serv_entry_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Enter Date of Entry in Service Greater than Date of Birth .";
        }
        else if (dateToCompare_serv_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service";
        }
        else if ((dateToCompare_serv_entry_dt - setDate) < 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service as Date is less than 18 Years from Date of Birth.";
        }
        else if (tchr_edu_entry_dt == "") {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Please Enter Date of Joining Current Mgmt.";
        }
        else if (Datepattern.test(tchr_edu_entry_dt) == false) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining Current Mgmt.";
        }
        else if (dateToCompare_edu_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining Current Mgmt.";
        }
        else if ((daydiff(parseDate($('#tchr_edu_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining in Joining Current Mgmt.";
        }

        if (!flag) {
            alert(str);
        }
        else {
            if (tchr_recruitment_type_hidden == 'newRecuritment') {
                var tchr_birth_dt = $('#tchr_birth_dt').val();
                jQuery.post(window.webroot + 'Teachers/checkDuplicateRecruitment', {tchr_fname: tchr_fname, tchr_mname: tchr_mname, tchr_lname: tchr_lname, tchr_birth_dt: tchr_birth_dt, tchr_gender: tchr_gender}, function(data) {
                    if (data != '') {
                        $("#overlay_search_personal").show();
                        $("#overlay_search_personal").show();
                        $('#duplicate_search_box_personal').html(data);
                    }
                }); //JQUERY
            }
        }
    });
    $("#tchr_curr_desig_dt").focusout(function() {
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
        var tchr_curr_desg_cd = $('#tchr_curr_desg_cd').val();
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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
        else if (tchr_birth_dt === "") {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (Datepattern.test(tchr_birth_dt) == false) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Please Enter Valid Date of Birth.";
        }
        else if (dateToCompare_birth_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Invalid Date of Birth.";
        }
        else if (tchr_gender == undefined) {
            flag = 0;
            str = "\n Please Enter Teacher Gender.";
        }
        else if (tchr_serv_entry_dt == "") {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Date of Entry in Service.";
        }
        else if (Datepattern.test(tchr_serv_entry_dt) == false) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Entry in Service.";
        }
        else if ((daydiff(parseDate($('#tchr_serv_entry_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Enter Date of Entry in Service Greater than Date of Birth .";
        }
        else if (dateToCompare_serv_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service";
        }
        else if ((dateToCompare_serv_entry_dt - setDate) < 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service as Date is less than 18 Years from Date of Birth.";
        }
        else if (tchr_edu_entry_dt == "") {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Please Enter Date of Joining Current Mgmt.";
        }
        else if (Datepattern.test(tchr_edu_entry_dt) == false) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining Current Mgmt.";
        }
        else if (dateToCompare_edu_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining Current Mgmt.";
        }
        else if ((daydiff(parseDate($('#tchr_edu_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining in Joining Current Mgmt.";
        }
        else if (tchr_recruitment_type_hidden == 'newRecuritment') {
            var tchr_curr_desg_cd = $('#tchr_curr_desg_cd').val();
            if (tchr_curr_desg_cd == "") {
                flag = 0;
                str = "\n Err... Select Current Post/Designation.";
            }
        }
        if (tchr_curr_desig_dt == "") {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Please Enter Date of Joining in Current Designation.";
        }
        else if (Datepattern.test(tchr_curr_desig_dt) == false) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining in Current Designation.";
        }
        else if (dateToCompare_curr_desig_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current Designation.";
        }
        else if ((daydiff(parseDate($('#tchr_curr_desig_dt').val()), parseDate($('#tchr_edu_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current Designation.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#tchr_appt_end_dt").focusout(function() {

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
        var CurrentDate = new Date();
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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
        else if (tchr_birth_dt === "") {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (Datepattern.test(tchr_birth_dt) == false) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Please Enter Valid Date of Birth.";
        }
        else if (dateToCompare_birth_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Invalid Date of Birth.";
        }
        else if (tchr_gender == undefined) {
            flag = 0;
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (tchr_serv_entry_dt == "") {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Date of Entry in Service.";
        }
        else if (Datepattern.test(tchr_serv_entry_dt) == false) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Entry in Service.";
        }
//        else if (dateToCompare_serv_entry_dt < dateToCompare_birth_dt) {
        else if ((daydiff(parseDate($('#tchr_serv_entry_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Enter Date of Entry in Service Greater than Date of Birth .";
        }
        else if (dateToCompare_serv_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service";
        }
        else if ((dateToCompare_serv_entry_dt - setDate) < 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service as Date is less than 18 Years from Date of Birth.";
        }
        else if (tchr_edu_entry_dt == "") {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Please Enter Date of Joining Current Mgmt.";
        }
        else if (Datepattern.test(tchr_edu_entry_dt) == false) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining Current Mgmt.";
        }
        else if (dateToCompare_edu_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining Current Mgmt.";
        }
        else if ((daydiff(parseDate($('#tchr_edu_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining in Joining Current Mgmt.";
        }
        else if (tchr_recruitment_type_hidden == 'newRecuritment') {
            var tchr_curr_desg_cd = $('#tchr_curr_desg_cd').val();
            if (tchr_curr_desg_cd == "") {
                flag = 0;
                str = "\n Err... Select Current Post/Designation.";
            }
        }
        if (tchr_curr_desig_dt == "") {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Please Enter Date of Joining in Current Designation.";
        }
        else if (Datepattern.test(tchr_curr_desig_dt) == false) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining in Current Designation.";
        }
        else if (dateToCompare_curr_desig_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current Designation.";
        }
        else if ((daydiff(parseDate($('#tchr_curr_desig_dt').val()), parseDate($('#tchr_edu_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
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
//alert(dateToCompare_appt_end_dt +"\n"+setDate);

            if (tchr_appt_end_dt == "") {
                flag = 0;
                str = "\n Please Enter End of Term of Appoinment.";
            }
            else if (Datepattern.test(tchr_appt_end_dt) == false) {
                flag = 0;
                str = "\n Err... Please Enter Valid End of Term of Appoinment.";
            }
//            else if (dateToCompare_appt_end_dt1 > CurrentDate) {
//                flag = 0;
//                str = "\n Err... Invalid End of Term of Appoinment.";
//            }

            if ((dateToCompare_appt_end_dt - setDate) < 0) {
                flag = 0;
                str = "\n Err... Invalid End of Term of Appoinment as Date is less than 3 Years from Service Date.";
            }
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#tchr_dist_entry_dt").focusout(function() {
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
        var CurrentDate = new Date();
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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
        else if (tchr_birth_dt === "") {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (Datepattern.test(tchr_birth_dt) == false) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Please Enter Valid Date of Birth.";
        }
        else if (dateToCompare_birth_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Invalid Date of Birth.";
        }
        else if (tchr_gender == undefined) {
            flag = 0;
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (tchr_serv_entry_dt == "") {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Date of Entry in Service.";
        }
        else if (Datepattern.test(tchr_serv_entry_dt) == false) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Entry in Service.";
        }
        else if ((daydiff(parseDate($('#tchr_serv_entry_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Enter Date of Entry in Service Greater than Date of Birth .";
        }
        else if (dateToCompare_serv_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service";
        }
        else if ((dateToCompare_serv_entry_dt - setDate) < 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service as Date is less than 18 Years from Date of Birth.";
        }
        else if (tchr_edu_entry_dt == "") {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Please Enter Date of Joining Current Mgmt.";
        }
        else if (Datepattern.test(tchr_edu_entry_dt) == false) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining Current Mgmt.";
        }
        else if (dateToCompare_edu_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining Current Mgmt.";
        }
        else if ((daydiff(parseDate($('#tchr_edu_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining in Joining Current Mgmt.";
        }
        else if (tchr_recruitment_type_hidden == 'newRecuritment') {
            var tchr_curr_desg_cd = $('#tchr_curr_desg_cd').val();
            if (tchr_curr_desg_cd == "") {
                flag = 0;
                str = "\n Err... Select Current Post/Designation.";
            }
        }
        if (tchr_curr_desig_dt == "") {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Please Enter Date of Joining in Current Designation.";
        }
        else if (Datepattern.test(tchr_curr_desig_dt) == false) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining in Current Designation.";
        }
        else if (dateToCompare_curr_desig_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current Designation.";
        }
        else if ((daydiff(parseDate($('#tchr_curr_desig_dt').val()), parseDate($('#tchr_edu_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
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
//            else if (dateToCompare_appt_end_dt1 > CurrentDate) {
//                flag = 0;
//                str = "\n Err... Invalid End of Term of Appoinment.";
//            }
            if ((dateToCompare_appt_end_dt - setDate) < 0) {
                flag = 0;
                str = "\n Err... Invalid End of Term of Appoinment as Date is less than 3 Years from Service Date.";
            }
        }
        if (tchr_dist_entry_dt == "") {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Please Enter Date of Joining of Current District.";
        }
        if (Datepattern.test(tchr_dist_entry_dt) == false) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining of Current District.";
        }
        else if ((daydiff(parseDate($('#tchr_dist_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining of Current District.";
        }
        if (dateToCompare_district_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\nErr... Invalid Date of Joining of Current District.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#tchr_block_entry_dt").focusout(function() {
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
        var CurrentDate = new Date();
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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
        else if (tchr_birth_dt === "") {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (Datepattern.test(tchr_birth_dt) == false) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Please Enter Valid Date of Birth.";
        }
        else if (dateToCompare_birth_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Invalid Date of Birth.";
        }
        else if (tchr_gender == undefined) {
            flag = 0;
            str = "\n Please Select Teacher Gender.";
        }
        else if (tchr_serv_entry_dt == "") {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Date of Entry in Service.";
        }
        else if (Datepattern.test(tchr_serv_entry_dt) == false) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Entry in Service.";
        }
        else if ((daydiff(parseDate($('#tchr_serv_entry_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Enter Date of Entry in Service Greater than Date of Birth .";
        }
        else if (dateToCompare_serv_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service";
        }
        else if ((dateToCompare_serv_entry_dt - setDate) < 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service as Date is less than 18 Years from Date of Birth.";
        }
        else if (tchr_edu_entry_dt == "") {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Please Enter Date of Joining Current Mgmt.";
        }
        else if (Datepattern.test(tchr_edu_entry_dt) == false) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining Current Mgmt.";
        }
        else if (dateToCompare_edu_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining Current Mgmt.";
        }
        else if ((daydiff(parseDate($('#tchr_edu_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining in Joining Current Mgmt.";
        }
        if (tchr_curr_desig_dt == "") {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Please Enter Date of Joining in Current Designation.";
        }
        else if (Datepattern.test(tchr_curr_desig_dt) == false) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining in Current Designation.";
        }
        else if (dateToCompare_curr_desig_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current Designation.";
        }
        else if ((daydiff(parseDate($('#tchr_curr_desig_dt').val()), parseDate($('#tchr_edu_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
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
        else if ($("input[name='tchr_type']:checked").val()) {
            var radioValue = $("input[name='tchr_type']:checked").val();
            if (radioValue == 1) {
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
//                else if (dateToCompare_appt_end_dt > CurrentDate) {
//                    flag = 0;
//                    str = "\n Err... Invalid End of Term of Appoinment.";
//                }
                if ((dateToCompare_appt_end_dt - setDate) < 0) {
                    flag = 0;
                    str = "\n Err... Invalid End of Term of Appoinment as Date is less than 3 Years from Service Date.";
                }
            }
        }
        if (tchr_dist_entry_dt == "") {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Please Enter Date of Joining of Current District.";
        }
        if (Datepattern.test(tchr_dist_entry_dt) == false) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining of Current District.";
        }
        else if ((daydiff(parseDate($('#tchr_dist_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining of Current District.";
        }
        if (dateToCompare_district_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\nErr... Invalid Date of Joining of Current District.";
        }
        if (tchr_block_entry_dt == "") {
            flag = 0;
//            $("#tchr_block_entry_dt").focus();
            str = "\n Please Enter Date of Joining in Current Block.";
        }
        if (Datepattern.test(tchr_block_entry_dt) == false) {
            flag = 0;
//            $("#tchr_block_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining in Current Block.";
        }
        else if ((daydiff(parseDate($('#tchr_block_entry_dt').val()), parseDate($('#tchr_dist_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_block_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current Block.";
        }
        if (dateToCompare_block_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_block_entry_dt").focus();
            str = "\nErr... Invalid Date of Joining in Current Block.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#tchr_curr_sch_dt").focusout(function() {
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
//            $("#txtHindi5").focus();
            str = "\n Please Enter Teacher Middle Name in Devanagari.";
        }
        else if (tchr_lname_d === "") {
            flag = 0;
//            $("#txtHindi6").focus();
            str = "\n Please Enter Teacher Last Name in Devanagari.";
        }
        else if (tchr_birth_dt === "") {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Please Enter Teacher Date of Birth.";
        }
        else if (Datepattern.test(tchr_birth_dt) == false) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Please Enter Valid Date of Birth.";
        }
        else if (dateToCompare_birth_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_birth_dt").focus();
            str = "\n Err... Invalid Date of Birth.";
        }
        else if (tchr_gender == undefined) {
            flag = 0;
            str = "\n Please Select Teacher Gender.";
        }
        else if (tchr_serv_entry_dt == "") {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Date of Entry in Service.";
        }
        else if (Datepattern.test(tchr_serv_entry_dt) == false) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Entry in Service.";
        }
        else if ((daydiff(parseDate($('#tchr_serv_entry_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Please Enter Date of Entry in Service Greater than Date of Birth .";
        }
        else if (dateToCompare_serv_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service";
        }
        else if ((dateToCompare_serv_entry_dt - setDate) < 0) {
            flag = 0;
//            $("#tchr_serv_entry_dt").focus();
            str = "\n Err... Invalid Date of Entry in Service as Date is less than 18 Years from Date of Birth.";
        }
        else if (tchr_edu_entry_dt == "") {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Please Enter Date of Joining Current Mgmt.";
        }
        else if (Datepattern.test(tchr_edu_entry_dt) == false) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining Current Mgmt.";
        }
        else if (dateToCompare_edu_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining Current Mgmt.";
        }
        else if ((daydiff(parseDate($('#tchr_edu_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_edu_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining in Joining Current Mgmt.";
        }
        else if (tchr_recruitment_type_hidden == 'newRecuritment') {
            var tchr_curr_desg_cd = $('#tchr_curr_desg_cd').val();
            if (tchr_curr_desg_cd == "") {
                flag = 0;
                str = "\n Err... Select Current Post/Designation.";
            }
        }
        if (tchr_curr_desig_dt == "") {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Please Enter Date of Joining in Current Designation.";
        }
        else if (Datepattern.test(tchr_curr_desig_dt) == false) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining in Current Designation.";
        }
        else if (dateToCompare_curr_desig_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current Designation.";
        }
        else if ((daydiff(parseDate($('#tchr_curr_desig_dt').val()), parseDate($('#tchr_edu_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_curr_desig_dt").focus();
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
//            else if (dateToCompare_appt_end_dt > CurrentDate) {
//                flag = 0;
////                $("#tchr_appt_end_dt").focus();
//                str = "\n Err... Invalid End of Term of Appoinment.";
//            }
            if ((dateToCompare_appt_end_dt - setDate) < 0) {
                flag = 0;
                str = "\n Err... Invalid End of Term of Appoinment as Date is less than 3 Years from Service Date.";
            }
        }
        if (tchr_dist_entry_dt == "") {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Please Enter Date of Joining of Current District.";
        }
        if (Datepattern.test(tchr_dist_entry_dt) == false) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining of Current District.";
        }
        else if ((daydiff(parseDate($('#tchr_dist_entry_dt').val()), parseDate($('#tchr_serv_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining of Current District.";
        }
        if (dateToCompare_district_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_dist_entry_dt").focus();
            str = "\nErr... Invalid Date of Joining of Current District.";
        }
        if (tchr_block_entry_dt == "") {
            flag = 0;
//            $("#tchr_block_entry_dt").focus();
            str = "\n Please Enter Date of Joining in Current Block.";
        }
        if (Datepattern.test(tchr_block_entry_dt) == false) {
            flag = 0;
//            $("#tchr_block_entry_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining in Current Block.";
        }
        else if ((daydiff(parseDate($('#tchr_block_entry_dt').val()), parseDate($('#tchr_dist_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_block_entry_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current Block.";
        }
        if (dateToCompare_block_entry_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_block_entry_dt").focus();
            str = "\nErr... Invalid Date of Joining in Current Block.";
        }
        if (tchr_curr_sch_dt == "") {
            flag = 0;
//            $("#tchr_curr_sch_dt").focus();
            str = "\n Please Enter Date of Joining in Current School.";
        }
        if (Datepattern.test(tchr_curr_sch_dt) == false) {
            flag = 0;
//            $("#tchr_curr_sch_dt").focus();
            str = "\n Err... Please Enter Valid Date of Joining in Current School.";
        }
//        if (dateToCompare_curr_sch_dt < dateToCompare_block_entry_dt) {
        else if ((daydiff(parseDate($('#tchr_curr_sch_dt').val()), parseDate($('#tchr_block_entry_dt').val()))) > 0) {
            flag = 0;
//            $("#tchr_curr_sch_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current School.";
        }
        if (dateToCompare_curr_sch_dt > CurrentDate) {
            flag = 0;
//            $("#tchr_curr_sch_dt").focus();
            str = "\n Err... Invalid Date of Joining in Current School.";
        }
        if (!flag) {
            alert(str);
        }
    });
    /*Personal page validation end*/

    /*PAy pf page validation end*/
    $("#tp_pay_com_cd").focusout(function() {
        var flag = true;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        if ((isEmpty(tp_pay_com_cd)) || (isNaN(tp_pay_com_cd))) {
            flag = false;
            str = "\n Please Select Pay Commission.";
        }
        if (!flag) {
            alert(str);
        }
    });
//    $("#tp_basic_pay").focusout(function() { }//For  Validation go in teaching_nonteaching.js

    $("#tp_next_incr_dt").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#tp_sen_grade_scale_dt").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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

        var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var tp_sen_grade_scale = $("input[name='tp_sen_grade_scale']:checked").val();
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit)
            {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }


        if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
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
        if (!flag) {
            alert(str);
        }
    });
    $("#tp_sel_grade_scale_dt").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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

        var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var CurrentDate = new Date();
        var tp_sen_grade_scale = $("input[name='tp_sen_grade_scale']:checked").val();
        var tp_sel_grade_scale = $("input[name='tp_sel_grade_scale']:checked").val();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit)
            {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
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

        if (!flag) {
            alert(str);
        }
    });
    $("#tp_pan_no").focusout(function() {

        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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

        var tp_pan_no = $('#tp_pan_no').val();
        var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var tp_sen_grade_scale = $("input[name='tp_sen_grade_scale']:checked").val();
        var tp_sel_grade_scale = $("input[name='tp_sel_grade_scale']:checked").val();
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit)
            {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
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




        else if (isEmpty(tp_pan_no) || isPanNumber(tp_pan_no)) {
            flag = 0;
            str = "\n Please Enter Valid Pan No.";
        }
        if (!flag) {
            alert(str);
        }
    });
    $("#tp_acct_type").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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

        var tp_pan_no = $('#tp_pan_no').val();
        var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var tp_acct_type = $('#tp_acct_type').val();
        var tp_sen_grade_scale = $("input[name='tp_sen_grade_scale']:checked").val();
        var tp_sel_grade_scale = $("input[name='tp_sel_grade_scale']:checked").val();
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
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

        else if (isEmpty(tp_pan_no) || isPanNumber(tp_pan_no)) {
            flag = 0;
            str = "\n Please Enter Valid Pan No.";
        }
        else if (isEmpty(tp_acct_type)) {
            flag = 0;
            str = "\n Please Select Account Type.";
        }
        if (!flag) {

            alert(str);
        }
    });
    $("#tp_acct_maint").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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

        var tp_pan_no = $('#tp_pan_no').val();
        var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var tp_acct_type = $('#tp_acct_type').val();
        var tp_acct_maint = $('#tp_acct_maint').val();
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }

        else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (isEmpty(tp_pan_no) || isPanNumber(tp_pan_no)) {
            flag = 0;
            $("#tp_pan_no").focus();
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
        if (!flag) {
            alert(str);
        }
    });
    $("#tp_pf_nps_series").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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

        var tp_pan_no = $('#tp_pan_no').val();
        var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var tp_acct_type = $('#tp_acct_type').val();
        var tp_acct_maint = $('#tp_acct_maint').val();
        var tp_pf_nps_series = $('#tp_pf_nps_series').val();
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (isEmpty(tp_pan_no) || isPanNumber(tp_pan_no)) {
            flag = 0;
            $("#tp_pan_no").focus();
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

        if (!flag) {

            alert(str);
        }
    });
    $("#tp_pf_no").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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

        var tp_pan_no = $('#tp_pan_no').val();
        var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var tp_acct_type = $('#tp_acct_type').val();
        var tp_acct_maint = $('#tp_acct_maint').val();
        var tp_pf_nps_series = $('#tp_pf_nps_series').val();
        var tp_pf_no = $('#tp_pf_no').val();
        var PfAccountNopattern = /^([0-9]{6})$/;
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (isEmpty(tp_pan_no) || isPanNumber(tp_pan_no)) {
            flag = 0;
            $("#tp_pan_no").focus();
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

        if (!flag) {
            alert(str);
        }
    });
    $("#tp_gis_appl").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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

        var tp_pan_no = $('#tp_pan_no').val();
        var Panpattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var tp_acct_type = $('#tp_acct_type').val();
        var tp_acct_maint = $('#tp_acct_maint').val();
        var tp_pf_nps_series = $('#tp_pf_nps_series').val();
        var tp_pf_no = $('#tp_pf_no').val();
        var PfAccountNopattern = /^([0-9]{6})$/;
        var tp_gis_appl = $('#tp_gis_appl').val();
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (isEmpty(tp_pan_no) || isPanNumber(tp_pan_no)) {
            flag = 0;
            $("#tp_pan_no").focus();
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


        if (!flag) {
            alert(str);
        }
    });
    $("#tp_gis_memb_dt").focusout(function() {
        var flag = 1;
        var str = "";
        var tp_pay_com_cd = $('#tp_pay_com_cd').val();
        var tp_pay_scale_cd = $('#tp_pay_scale_cd').val();
        var tp_basic_pay = $('#tp_basic_pay').val();
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
        var CurrentDate = new Date();
        if (isEmpty(tp_pay_com_cd)) {
            flag = 0;
            str = "\n Please Select Pay Commission.";
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
                $("#tp_pay_in_band").focus();
                str = "\n Please Enter Pay In Band.";
            }
            if (tp_pay_in_band < psc_lo_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_pay_in_band > psc_up_limit) {
                flag = 0;
                $("#tp_pay_in_band").focus();
                str = "\n Err... Please Enter Valid Pay In Band.";
            }
            if (tp_grade_pay === "") {
                flag = 0;
                $("#tp_grade_pay").focus();
                str = "\n Please Enter Grade Pay.";
            }
        }
        else if (isEmpty(tp_basic_pay)) {
            flag = 0;
            $("#tp_basic_pay").focus();
            str = "\n Please Enter Basic Pay.";
        }
        else if (isEmpty(tp_incr_dt)) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Please Enter Pay w.e.f. Date.";
        }
        else if (Datepattern.test(tp_incr_dt) == false) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt > CurrentDate) {
            flag = 0;
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (dateToCompare_incr_dt < dateToCompare_serv_entry_dt_post) {
            flag = 0;
            $("#tp_incr_dt").focus();
            str = "\n Err... Please Enter Pay w.e.f. Date.";
        }
        else if (isEmpty(tp_next_incr_dt)) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Please Enter Next Increment Date.";
        }
        else if (Datepattern.test(tp_next_incr_dt) == false) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (dateToCompare_incr_dt > dateToCompare_next_incr_dt) {
            flag = 0;
            $("#tp_next_incr_dt").focus();
            str = "\n Err... Please Enter Next Increment Date.";
        }
        else if (isEmpty(tp_pan_no) || isPanNumber(tp_pan_no)) {
            flag = 0;
            $("#tp_pan_no").focus();
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
        if (!flag) {
            alert(str);
        }
    });
}

function parseDate(str) { //http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}
function daydiff(first, second) {
    return (second - first) / (1000 * 60 * 60 * 24);
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