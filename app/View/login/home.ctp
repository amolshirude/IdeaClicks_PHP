<?php //echo phpinfo();?>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="css/home.css">
        <title>login</title>
        <style>
            header {
                margin-right: 7%;
                color:black;
                text-align:right;
                padding:2px;
            }
            footer {
                margin-right: 4%;
                margin-left : 4%;
                background-color:#068097;
                color:white;
                text-align:left;
                padding:1px;
            }
            .carousel-inner > .item > img,
            .carousel-inner > .item > a > img {
                width: 100%;
                height:50%;
                margin: auto;
            }
        </style>
    </head>
    <body>
        <?php
        if(isset($this->params['url']['group_id'])&&isset($this->params['url']['random_no'])){
            CakeSession::write('group_id', $this->params['url']['group_id']);
            CakeSession::write('random_no', $this->params['url']['random_no']);}
        ?>
        <table>
            <tr>
                <td width="30%" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id="logo" src="img/logo.png"/>
                </td>
                <td width="70%">
                    <header>
                        <div>
                            <form name="login" action="Login/postLogin" method="post">
                                <input type="hidden" name="group_id" value="<?php echo CakeSession::read('group_id') ?>"/>
                                <input type="hidden" name="random_no" value="<?php echo CakeSession::read('random_no') ?>"/>
                                <input class="textbox" type="email" name="email" placeholder="Email Id" required>
                                <input class="textbox" type="password" name="password" placeholder="Password" required>
                                <input class="buttonclass" type="submit" style="background-color: #068097"value="Login">
                            </form>
                            <?php
                            $message = $this->Session->consume('login_message');
                            echo '<h4 style="color: #FF0000">';
                            echo $message;
                            echo '</h4>';
                            ?>
                        </div>
                        <?php echo $this->element('../Pages/header3'); ?>
                    </header>
                </td>
            </tr>
        </table>
        <br>

        <div class="container">
            <div id="myCarousel" style="background-color: #ffffff" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="img/header.jpg" alt="Chania" width="100%" height="345">
                    </div>

                    <div class="item">
                        <img src="img/carousel3.jpg" alt="Chania" width="100%" height="345">
                    </div>

                    <div class="item">
                        <img src="img/LikeMattersModified.jpg" alt="Chania" width="100%" height="345">
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>.
            </div>
        </div>
        <br>
        <div align="center">
           <h4>Lot of Ideas cross your mind but they just get lost as you fail to record them.</h4>
           <h4>You want to work on your ideas and also check if its worthy implementing them.</h4>
           <h4>But there's no place which helps you do that ?</h4>
           <a class="myButton" role="button" href="User/user_registration"><b>Register Now</b></a><br>
           <h4>And experience the simplest way to work on your ideas. Submit Ideas & Receive feedback.</h4>
           <h4>Happy Innovation !</h4>
                    <h4>Active Groups : <?php echo $activeGroups; ?> </h4>
                    <h4>Active Users : <?php echo $activeUsers; ?> </h4>

        </div>
        <br>
        <footer>
            <?php echo $this->element('../Pages/footer'); ?>
            <h4>You are visitor no. : <?php echo $visit_counter; ?> </h4>
        </footer>
    </body>
</html>