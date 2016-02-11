<?php echo $this->element('../Pages/init'); ?>
<script src="../scripts/jquery-1.11.1.min.js"></script>
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function() {

        // JavaScript form validation

        var checkPassword = function(str)
        {
            var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            return re.test(str);
        };

        var checkForm = function(e)
        {
            if(this.password.value != "" && this.password.value == this.c_password.value) {
                if(!checkPassword(this.password.value)) {
                    alert("The password you have entered is not valid!");
                    this.password.focus();
                    e.preventDefault();
                    return;
                }
            } else {
                alert("Error: password and confirmed password mismatch");
                this.password.focus();
                e.preventDefault();
                return;
            }
        };

        var myForm = document.getElementById("myForm");
        myForm.addEventListener("submit", checkForm, true);

        // HTML5 form validation

        var supports_input_validity = function()
        {
            var i = document.createElement("input");
            return "setCustomValidity" in i;
        }

        if(supports_input_validity()) {
            var usernameInput = document.getElementById("field_username");
            usernameInput.setCustomValidity(usernameInput.title);

            var passwordInput = document.getElementById("password");
            passwordInput.setCustomValidity(passwordInput.title);

            var c_passwordInput = document.getElementById("cpassword");

            // input key handlers

            usernameInput.addEventListener("keyup", function() {
                usernameInput.setCustomValidity(this.validity.patternMismatch ? usernameInput.title : "");
            }, false);

            passwordInput.addEventListener("keyup", function() {
                this.setCustomValidity(this.validity.patternMismatch ? passwordInput.title : "");
                if(this.checkValidity()) {
                    c_passwordInput.pattern = this.value;
                    c_passwordInput.setCustomValidity(c_passwordInput.title);
                } else {
                    c_passwordInput.pattern = this.pattern;
                    c_passwordInput.setCustomValidity("");
                }
            }, false);

            c_passwordInput.addEventListener("keyup", function() {
                this.setCustomValidity(this.validity.patternMismatch ? c_passwordInput.title : "");
            }, false);

        }

    }, false);
</script>
<title>change password</title>
</head>
<body>
    <header>
        <?php echo $this->element('../Pages/header1'); ?>
    </header><br>
    <table>
        <tr valign="top">
        <td bgcolor="lightgrey" style='padding:5px 10px 5px 10px'>
            <div align="left">
                <?php
                $message = $this->Session->consume('pcmessage');
                if($message == "password changed successfully"){
                    echo '<h4 style="color: #068097">';
                    echo $message;
                    echo '</h4>';
                }else{
                    echo '<h4 style="color: #FF0000">';
                    echo $message;
                    echo '</h4>';
                }?>
                <form id="myForm" name="changepassword" action="changePassword" method="post">
                    <input type="hidden" name="user_id" value="<?php echo $userInfo['User']['nbr_user_id']; ?>"/>
                    <label>New Password :</label><br><br><input id="password" class="textbox" name="password" title="Password must contain at least 6 characters, including UPPER/lowercase and numbers." type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" placeholder="Password" style="height: 25px; width:350px" required /><br>
                    <label>Confirm Password :</label><br><br><input id="cpassword" class="textbox" name="c_password" title="Please enter the same Password as above." type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" placeholder="Confirm Password" style="height: 25px; width:350px"><br><br>
                    <input type="submit" class="buttonclass" value="Update">
                </form>
    </div></td></table>
    <br><br><br><br><br><br><br><br><br><br><br><br>
    <footer>
        <?php echo $this->element('../Pages/footer'); ?>
    </footer>
</body>
</html>