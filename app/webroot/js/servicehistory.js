    $(document).ready(function () {
        var curr_desig_dt = $('#desig_dt').val();
        var arr = curr_desig_dt.split('-');
        var daycount = arr[2];
        var monthcount = arr[1];
        var years = arr[0];
        var tchr_serv_entry_dt_c = daycount + "/" + monthcount + "/" + years;
        var tchr_curr_desig_dt = tchr_serv_entry_dt_c; //Date of Joining of Current Post
        var date = tchr_curr_desig_dt.substring(0, 2);
        var month = tchr_curr_desig_dt.substring(3, 5);
        var year = tchr_curr_desig_dt.substring(6, 10);
        var dateToCompare_curr_desig_dt = new Date(year, month - 1, date); //Date of Joining of Current Post Converted


        var sch_entry_dt = $('#sch_dt').val();
        var scharr = sch_entry_dt.split('-');
        var daycount = scharr[2];
        var monthcount = scharr[1];
        var years = scharr[0];
        var tchr_curr_sch_dt_c = daycount + "/" + monthcount + "/" + years;
        var tchr_curr_sch_dt = tchr_curr_sch_dt_c; //Date of Joining of Current Post
        var date = tchr_curr_sch_dt.substring(0, 2);
        var month = tchr_curr_sch_dt.substring(3, 5);
        var year = tchr_curr_sch_dt.substring(6, 10);
        var dateToCompare_curr_sch_dt = new Date(year, month - 1, date); //Date of Joining of Current District Converted


        $('#save_servicehistory').on('click', function (e) {

            flag = 1;
            if (flag == 1) {

                $("#FamilyServiceHistoryForm").submit(); //addPersonalDtl

            }
            e.preventDefault();
        });

        $("#tsh_to_dt").focusout(function () {

            var date123 = new Date();
            var tchr_from_dt = $('#tsh_from_dt').val();
            var date = tchr_from_dt.substring(0, 2);
            var month = tchr_from_dt.substring(3, 5);
            var year = tchr_from_dt.substring(6, 10);
            var dateToCompare_tchr_from_dt = new Date(year, month - 1, date);
            var tchr_to_dt = $(this).val();
            var date = tchr_to_dt.substring(0, 2);
            var month = tchr_to_dt.substring(3, 5);
            var year = tchr_to_dt.substring(6, 10);
            var dateToCompare_tchr_to_dt = new Date(year, month - 1, date); //Date of Joining of Current Post Converted


            if (dateToCompare_tchr_to_dt < dateToCompare_tchr_from_dt) {
                alert("Enter From date is Greater than To date");
                jQuery('#tsh_to_dt').val('');
            }

            if (dateToCompare_tchr_to_dt > date123) {

                alert("Enter To date Greater than today's date.");
                $(this).val('');
                $(this).focus();
            }
        });

        $("#overlay_srch").hide();
        var servdate = $('#srv_dt').val();
        var arr = servdate.split('-');
        var convertedservdate = (arr[2] + "/" + arr[1] + "/" + arr[0]);
        var tchr_serv_entry_dt = convertedservdate;
        var date = tchr_serv_entry_dt.substring(0, 2);
        var month = tchr_serv_entry_dt.substring(3, 5);
        var year = tchr_serv_entry_dt.substring(6, 10);
        var dateToCompare_serv_entry_dt = new Date(year, month - 1, date);
        var datetoday = new Date();


        $("#FamilyServiceHistoryForm").ajaxForm({
            url: 'servicehistorysave',
            type: 'post',
            success: function (data) {
                  // console.log(data);
                //$("#success").show().fadeOut(5000);
                alert("Data Saved Successfully.");
                $("#serviceHistory").click();
            },
            error: function (data) {
                //$("#error").show().fadeOut(5000);
                alert("Err..Data Not Saved Successfully.");
            }
        });
        $("#family_exit").click(function () {
            $('#subcontent').html('');
        });
        $("#tsh_from_dt").datepicker({
            //minDate: 1,
            showOn: 'both',
            showOn: "button",
                    buttonImage: '../img/calendar.gif',
            maxDate: 0,
            minDate: dateToCompare_serv_entry_dt,
            buttonImageOnly: true,
        });
        $("#tsh_from_dt").change(function () {

            var tchr_from_dt = $('#tsh_from_dt').val();
            $("#tsh_to_dt").datepicker("destroy");
            $("#tsh_to_dt").datepicker({
                //minDate: 1,
                showOn: 'both',
                showOn: "button",
                        buttonImage: '../img/calendar.gif',
                minDate: tchr_from_dt,
                maxDate: datetoday,
                buttonImageOnly: true,
            });
            var days = tchr_from_dt.substring(0, 2);
            var month = tchr_from_dt.substring(3, 5);
            var year = tchr_from_dt.substring(6, 10);
            date = year + '-' + month + '-' + days;
            var dateToCompare_from_dt = new Date(date);
//            var  dateToCompare_from_dt= new Date(year, month - 1, date);
            var arr = tchr_from_dt.split('/');
            var daycount = arr[0];
            var monthcount = arr[1];
            var years = arr[2];
            var day = daycount.length;
            var months = monthcount.length;
            if (day == 1 && months == 1) {
                var date = '0' + daycount + '/' + '0' + monthcount + '/' + years;
                $('#tsh_from_dt').val(date);
            }
            if (day == 2 && months == 1) {
                var date = daycount + '/' + '0' + monthcount + '/' + years;
                $('#tsh_from_dt').val(date);
            }
            if (day == 1 && months == 2) {

                var date = '0' + daycount + '/' + monthcount + '/' + years;
                $('#tsh_from_dt').val(date);
            }
//            alert(dateToCompare_serv_entry_dt);
//            alert(dateToCompare_from_dt);
            if (dateToCompare_serv_entry_dt > dateToCompare_from_dt) {
// else if ((daydiff(parseDate($('#srv_dt').val()), parseDate($('#tchr_birth_dt').val()))) > 0) {
                alert("Enter From date less than Service entry date.");
                $('#tsh_from_dt').val('');
                $('#tsh_from_dt').focus();
            }
            if ((daydiff(parseDate(tchr_serv_entry_dt_c), parseDate(tchr_curr_sch_dt_c))) == 0) {
                if ((daydiff(parseDate(tchr_serv_entry_dt_c), parseDate($('#tsh_from_dt').val()))) == 0) {
                    if ((daydiff(parseDate(tchr_curr_sch_dt_c), parseDate($('#tsh_from_dt').val()))) == 0) {

                        var r=confirm("Warning... Pl. do not enter Current Posting details.</n>You may enter Service History details prior joining to this Post or School since Date of Entry in Serivce.");
                        if(r==true)
                        {
                          $('#tsh_from_dt').val('');  
                        }
                    }
                }
            }

            $("#tsh_to_dt").change(function () {


                var tchr_to_dt = $('#tsh_to_dt').val();
                var date = tchr_to_dt.substring(0, 2);
                var month = tchr_to_dt.substring(3, 5);
                var year = tchr_to_dt.substring(6, 10);
                date = year + '-' + month + '-' + date;
                var dateToCompare_to_dt = new Date(date);
                getAge(dateToCompare_from_dt, dateToCompare_to_dt, year, month, date)


                var array = tchr_to_dt.split('/');
                var daycount = array[0];
                var monthcount = array[1];
                var years = array[2]
                var day = daycount.length;
                var months = monthcount.length;
                if (day == 1 && months == 1) {
                    // alert(tchr_to_dt);
                    var date = '0' + daycount + '/' + '0' + monthcount + '/' + years;
                    $('#tsh_to_dt').val(date);
                }
                if (day == 2 && months == 1) {
                    var date = daycount + '/' + '0' + monthcount + '/' + years;
                    $('#tsh_to_dt').val(date);
                }
                if (day == 1 && months == 2) {

                    var date = '0' + daycount + '/' + monthcount + '/' + years;
                    $('#tsh_to_dt').val(date);
                }

            });

        });
        $("#Search").click(function () {

            $("#overlay_srch").show();
        });
        $("#submit_search").click(function () {

            $("#overlay_srch").hide();
        });
        $('#exit_search').click(function () {
            $("#overlay_srch").hide();
        });


        function getAge(dateString, fixedDate, year, month, day) {
            var now = fixedDate;
            var yearNow = now.getYear();
            var monthNow = now.getMonth();
            var dateNow = now.getDate();
            dob = dateString;
            var yearDob = dob.getYear();
            var monthDob = dob.getMonth();
            var dateDob = dob.getDate();
            var age = {};
            yearAge = yearNow - yearDob;
            if (monthNow >= monthDob)
                var monthAge = monthNow - monthDob;
            else {
                yearAge--;
                var monthAge = 12 + monthNow - monthDob;
            }

            if (dateNow >= dateDob)
                var dateAge = dateNow - dateDob;
            else {
                monthAge--;
                var dateAge = 31 + dateNow - dateDob;
                if (monthAge < 0) {
                    monthAge = 11;
                    yearAge--;
                }
            }

            age = {
                years: yearAge,
                months: monthAge,
                days: dateAge
            };
            var outputYear;
            var outputMonth;
            var outputDay;
            if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
                outputYear = age.years;
                outputMonth = age.months;
                outputDay = age.days;
            }
            else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
                outputYear = 0;
                outputMonth = 0;
                outputDay = age.days;
            }
            else if ((age.years > 0) && (age.months == 0) && (age.days == 0)) {
                outputYear = age.years;
                outputMonth = 0;
                outputDay = 0;
            }
            else if ((age.years > 0) && (age.months > 0) && (age.days == 0)) {
                outputYear = age.years;
                outputMonth = age.months;
                outputDay = 0;
            }
            else if ((age.years == 0) && (age.months > 0) && (age.days > 0)) {
                outputYear = 0;
                outputMonth = age.months;
                outputDay = age.days;
            }
            else if ((age.years > 0) && (age.months == 0) && (age.days > 0)) {
                outputYear = age.years;
                outputMonth = 0;
                outputDay = age.days;
            }
            else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {
                outputYear = 0;
                outputMonth = age.months;
                outputDay = 0;
            }
            else {
                outputYear = 0;
                outputMonth = 0;
                outputDay = 0;
            }

            $("#FamilyYear").val(outputYear);
            $("#FamilyMonths").val(outputMonth);
        }

        $(document).on('click', '.servicegrid', function () {
            var serialid = this.id;

            $('#servicehistoryTchrid').val(serialid);
            $tchr_id = jQuery.trim($('#tchrval').val());
            if (serialid !== '') {
                jQuery.post('servicehistoryserialid', {serialid: serialid, tchr_id: $tchr_id}, function (data) {


                    $.each(data, function (key, val) {
                        $.each(val, function (key, val) {
                            $.each(val, function (key, val) {
                                if (key === 'tsh_from_dt') {

                                    $fromdt = val;
                                    var arr = $fromdt.split('-');
                                    jQuery('#tsh_from_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                }
                                if (key === 'tsh_to_dt') {

                                    $todt = val;
                                    var arr = $todt.split('-');
                                    jQuery('#tsh_to_dt').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                }
                                if (key === 'schl_id') {
                                    var code = "(" + val + ")";
                                    $('#schname').val(code);
                                }
                                var schcode = document.getElementById('schname').value;
                                if (key === 'sch_name') {
                                    var fullnamecode = schcode + val;
                                    $('#FamilySchoolname').val(fullnamecode);
                                    $('#schname').val('');
                                }
                                if (key === 'tsh_post') {

                                    $('#FamilyPost').val(val);
                                }
                                if (key === 'tsh_post_mode') {
                                    $('#FamilyModePost').val(val);
                                }
                                if (key === 'tsh_order_no') {
                                    $('#FamilyOrdernumber').val(val);
                                }
                                if (key === 'tsh_order_dt') {

                                    $orderdt = val;
                                    var arr = $orderdt.split('-');
                                    jQuery('#orderdate').val(arr[2] + "/" + arr[1] + "/" + arr[0]);
                                }
                                if (key === 'tsh_exp_year') {

                                    $('#FamilyYear').val(val);
                                }
                                if (key === 'tsh_exp_month') {

                                    $('#FamilyMonths').val(val);
                                }
                                if (key === 'tsh_postaid') {
                                    var abc = jQuery.trim(val);
                                    $('#posts').val(abc);
                                }


                            });
                        });
                    });
                }, 'json');
            }
        });
        $("#service_delete").click(function () {

            var sid = $('#servicehistoryTchrid').val();

            if (sid != '') {
                if (window.confirm("Are you sure want to delete Record ?")) {
                    jQuery.post('deleteserviceid', {srid: sid}, function (data) {
                        $('#serviceHistory').trigger('click');

                        alert("Record deleted Succesfully.");
//                        }

                    });
                }
            }
        });

        $("#tsh_to_dt").on('change', function () {

            var date123 = new Date();
            var tchr_to_dt = $(this).val();
            var date = tchr_to_dt.substring(0, 2);
            var month = tchr_to_dt.substring(3, 5);
            var year = tchr_to_dt.substring(6, 10);
            date = year + '-' + month + '-' + date;
            var dateToCompare_to_dt = new Date(date);
            var tchr_from_dt = $('#tsh_from_dt').val();
            var datefrom = tchr_from_dt.substring(0, 2);
            var monthfrom = tchr_from_dt.substring(3, 5);
            var yearfrom = tchr_from_dt.substring(6, 10);
            datefrom = yearfrom + '-' + monthfrom + '-' + datefrom;
            var dateToCompare_from_dt = new Date(datefrom);
            if (dateToCompare_to_dt > date123) {

                alert("Enter To date Greater than today's date.");
                $(this).val('');
                $(this).focus();
            }
            if (dateToCompare_to_dt < dateToCompare_from_dt) {

                alert("Enter To date Less than from date.");
                $(this).val('');
                $(this).focus();
            }

        });

        $("#seachschcode").on('focusout', function () {
            var schcode = $(this).val();
            jQuery.post('serachcode', {schcode: schcode}, function (data) {
                $('#schoolNameSerHist').html(data);
            });
        });
        $('#dist_id_search').on('change', function () {
            var dist_id = $('#dist_id_search :selected').val();
            jQuery.post('SelectBlocksearch', {dist_id: dist_id}, function (data) {
                $('#dist_div').html(data);
            });
        });
        $('#dist_div').on('change', function () {
            var clus_id = $('#searchblock_id :selected').val();
            jQuery.post('SelectClustersearch', {clus_id: clus_id}, function (data) {
                $('#cluster_div').html(data);
            });
        });
        $('#cluster_div').on('change', function () {
            var sch_id = $('#searchcluster_id :selected').val();
            jQuery.post('SelectSchoolsearch', {sch_id: sch_id}, function (data) {
                $('#school_div').html(data);
            });
        });
        $('#submit_search').on('click', function () {
            var sch_id = $('#searchteacher_id :selected').val();
            var value = $('#searchteacher_id option:selected').text();
//            alert(value);
            var namencode = '(' + sch_id + ')' + " " + value;
            $('#FamilySchoolname').val(namencode);
            $('#seachschcode').val(sch_id);
        });
        $('#cancel_search').on('click', function () {
            $('#dist_id_search').val('');
            $('#searchblock_id').val('');
            $('#searchcluster_id').val('');
            $('#searchteacher_id').val('');
        });


        $('#service_cancel').on('click', function () {
            $("input[type=text]").val("");
//        $('#searchblock_id').val('');
//        $('#searchcluster_id').val('');
//        $('#searchteacher_id').val('');

        });
        $('#service_exit').click(function () {
            $url = "teaching";
            $(location).attr('href', $url);
        });

        $("#shist_print").click(function () {
            var language = $("#FamilyLanguage").val();
            if (language == 'jpn') {
                window.open('/Help_doc/Marathi/hm_shist_M_hlp.pdf');
            } else {
                window.open('/Help_doc/English/hm_shist_E_hlp.pdf');
            }
        });

    });
