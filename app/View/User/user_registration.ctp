<?php echo $this->element('../Pages/init'); ?>
<style>
    nav {
        line-height:30px;
        background-color:#9BDBDE;
        height:420px;
        width:200px;
        float:right;
        padding:5px;
    }
    section {
        float:left;
        padding:10px;
    }
</style>
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function() {
        // JavaScript form validation
        var checkPassword = function(str){
            var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            return re.test(str);
        };

        var checkForm = function(e){
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
        var supports_input_validity = function() {
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
</head>
<body onload="">
    <?php
    if(isset($this->params['url']['group_id'])&&isset($this->params['url']['random_no'])){
        CakeSession::write('group_id', $this->params['url']['group_id']);
        CakeSession::write('random_no', $this->params['url']['random_no']);}
    ?>
    <div>
        <header>
            <h4>User Registration</h4>
            <?php echo $this->element('../Pages/header2'); ?>
        </header>
    </div>
    <div>
        <section>
            <label> &nbsp;User Registration  >> Submit Ideas  >>  View Ideas >> Edit Profile</label>
            <?php
            $message = $this->Session->consume('user_reg_message');
            echo '<h4 style="color: #FF0000">';
            echo $message;
            if(isset($data)){echo $data['user_email'].'<br>please use another email id.';};
            echo '</h4>';
            ?>
            <?php echo '<h3 style="color: #FF0000">'; print_r($this->Session->flash()); echo '</h3>'; ?>
            <div style='padding:5px 10px 5px 10px'>
                <form id="myForm" name="userRegistration" action="userRegistration" method="post">
                    <input type="hidden" name="group_id" value="<?php echo CakeSession::read('group_id') ?>"/>
                    <input type="hidden" name="random_no" value="<?php echo CakeSession::read('random_no') ?>"/>
                    <label>Name</label><b style="color: red;">*</b>:<br><br><input type="text" class="textbox" name="user_name" id="user_name" value="<?php if(isset($data)){echo $data['user_name'];} ?>" placeholder="Full Name" style="width:350px;height:50px" required autofocus/><br><br>
                    <label>Email Id</label><b style="color: red;">*</b>:<br><br><input type="email" class="textbox" name="user_email" id="email_id" value="<?php if(isset($data)){echo $data['user_email'];} ?>" placeholder="email@domain.com" style="width:350px;height:50px" required/><br><br>
                    <label>Password</label><b style="color: red;">*</b>:<br><br><input id="password" class="textbox" name="password" title="Password must contain at least 6 characters, including UPPER/lowercase and numbers." type="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" placeholder="Password" style="width:350px;height:50px" required/><br><br>
                    <label>Confirm Password</label><b style="color: red;">*</b>:<br><br><input id="cpassword" class="textbox" name="c_password" title="Please enter the same Password as above." type="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" placeholder="Confirm Password" style="width:350px;height:50px" required/><br><br>
                    <p><input type="checkbox" id="field_terms" onchange="this.setCustomValidity(validity.valueMissing ? 'Please indicate that you accept the Terms and Conditions' : '');" name="check" value="check" required>I accept <b><a style="color: #9BDBDE" href="../Pages/termsandcondition">Terms and Conditions</a></b></p>
                    <input type="submit" id="submit" class="buttonclass" value="Register" />
                </form>
            </div>
        </section>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <footer>
        <?php echo $this->element('../Pages/footer'); ?>
    </footer>
</body>
</html>