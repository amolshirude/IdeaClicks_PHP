<?php echo $this->element('../Pages/init'); ?>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<style>
    nav {
        line-height:30px;
        background-color:lightgray;
        height:420px;
        width:500px;
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
</head>
<body>
    <div>
        <header>
            <h3>Create Group</h3>
            <?php echo $this->element('../Pages/header1'); ?>
        </header><br>
    </div>
    <nav>
        <h4>Registered Group name ( Group Code ) [Total Ideas]</h4>
        <marquee direction="up" height="250" scrolldelay="200">
            <?php foreach ($groupInfo as $row): ?>
            <div align="left"><?php echo $row['Group']['txt_group_name'] . ' ( ' . $row['Group']['txt_group_code'] . ' ) '; ?></div>
            <?php endforeach; ?>
        </marquee>
    </nav>
    <section>
        <?php
        $message = $this->Session->consume('group_reg_message');
        if ($message == "Group already registered with this group code:") {
            echo '<h4 style="color: #FF0000">';
            echo $message;
            if(isset($data)){echo $data['group_code'].'<br>please use another group code.';}
            echo '</h4>';
        } else {
            echo '<h4 style="color: #FF0000">';
            echo $message;
            if(isset($data)){echo $data['group_admin_email'].'<br>please use another email id.';}
            echo '</h4>';
        }
        ?>
        <?php echo '<h3 style="color: #FF0000">'; print_r($this->Session->flash()); echo '</h3>'; ?>
        <form id="myForm" name="createGroup" action='createGroup' method="post">
            <label>Group Name:</label><br><input type="text" class="textbox" name="group_name" id="group_name" value="<?php if(isset($data)){echo $data['group_name'];} ?>" placeholder="Group Name" style="width:350px" required autofocus/><br>
            <label>Group Code:</label><br><input type="text" class="textbox" name="group_code" id="group_code" value="<?php if(isset($data)){echo $data['group_code'];} ?>" placeholder="eg : BSNL" style="width:350px" required/><br>
            <label>Group Type:</label><br>
            <select class="textbox" name="group_class_id" style="width:350px" required>
                <option value="">Select Group Class</option>
                <?php foreach ($GroupClass as $row): ?>
                <option value ="<?php echo $row['GroupClass']['nbr_group_class_id']; ?>">
                    <?php echo $row['GroupClass']['txt_group_class']; ?>
                </option>
                <?php endforeach; ?>
            </select><br>
            <label>Group Description:</label><br><textarea name="group_description" id="group_description" class="textbox" placeholder="Group Description" style="width:350px;height:100px;"><?php if(isset($data)){echo $data['group_description'];} ?></textarea><br>
            <p><input type="radio" id="group_type_id" name="group_type_id" value="1" checked/>Public
            <input type="radio" id="group_type_id" name="group_type_id" value="2"/>Private</p>
            <input type="submit" class="buttonclass" id="submit" value="Create Group" />
        </form>

    </section>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <footer>
        <?php echo $this->element('../Pages/footer'); ?>
    </footer>
</body>
</html>