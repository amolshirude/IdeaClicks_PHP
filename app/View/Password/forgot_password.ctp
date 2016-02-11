<?php echo $this->element('../Pages/init'); ?>
    <title>Forgot Password</title>
</head>
<body>
<header>
    <h3>Forgot Password</h3>
            <?php echo $this->element('../Pages/header2'); ?>
</header><br>
<?php
        $message = $this->Session->consume('forgot_pswd_msg');
        
            echo '<div> <h3 style="color: #008000">';
            echo $message;
            echo '</h3></div>';
        
        ?>
<div style='padding:5px 10px 5px 10px'>
    <form name="forgotpassword" action="forgotPassword" method="post">
        <label>Email Id:</label><br><br><input type="email" name="email" class="textbox" placeholder="Email Id" required>
        <input type="submit" class="buttonclass" value="Submit">
    </form>
</div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <footer>
            <?php echo $this->element('../Pages/footer'); ?>
        </footer>
</body>
</html>