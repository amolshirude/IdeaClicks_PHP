google.load("language", "1", "elements", {packages: "transliteration"});
function myfunction(a) {
    var filed = 'txtEng' + a;
    // alert(filed);
    if (a) {
        var strEngName = document.getElementById(filed).value;
        var strEngArray = new Array();
        strEngArray = strEngName.split(" ");
        var str = '';
        for (i = 0; i < strEngArray.length; i++)
        {
            // var temp = strEngArray[i];

            google.language.transliterate([strEngArray[i]], "en", "hi", function (result) {
                if (!result.error) {
                    var trans_id = 'txtHindi' + a;
                    var container = document.getElementById(trans_id);
                    if (result.transliterations && result.transliterations.length > 0 && result.transliterations[0].transliteratedWords.length > 0) {
                        container.value = result.transliterations[0].transliteratedWords[0];
                        str = str + ' ' + container.value;
                    }
                    document.getElementById(trans_id).value = $.trim(str);
                }
            }
            );
        }

        str = '';
        if (document.getElementById(filed).value.length < 0) {

            document.getElementById(trans_id).value = '';

        }
        //document.getElementById(filed).value = document.getElementById(filed).value.replace(/^\s+|\s+$/g, '');

    }
}

