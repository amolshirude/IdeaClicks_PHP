<?php
$cakeDescription = __d('cake_dev', 'Header Data');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en">
    <head>
        <meta charset="utf-8">
            <script type="text/javascript" src="jquery-ui-1.10.4.custom.js"></script>
            <script type="text/javascript">
                window.webroot = '<?php echo $this->webroot; ?>';
            </script>
            <?php echo $this->Html->charset(); ?>
            <!-- disable iPhone inital scale -->
            <meta name="viewport" content="width=700px; initial-scale=1.0">

                <title>Login</title>
                <?php
                echo $this->Html->meta('icon');
                echo $this->Html->css('common');
                echo $this->Html->css('style');
                echo $this->Html->css('media-queries');
                echo $this->Html->script('common');
                echo $this->fetch('meta');
                echo $this->fetch('css');
                echo $this->fetch('script');
                echo $this->Html->script('http://code.jquery.com/jquery-2.1.0.min.js');
                echo $this->Html->script('http://code.jquery.com/jquery-1.10.2.min.js');
                echo $this->Html->meta('icon');
                echo $this->fetch('meta');
                echo $this->fetch('css');
                echo $this->fetch('script');
                echo $this->Html->script('jquery.min');
                echo $this->Html->css('common');
                echo $this->Html->script('common');
                ?>

                </head>
                <body>
                    <div id="pagewrap">
                        <header id="header">
                            <p id="header-strip"></p>
                                    <h1 id="site-logo"><!-- <a href="#"><img src="images/top-bg.jpg" alt="Logo"></a>--></h1>
                            <nav>
                                <ul id="main-nav" class="clearfix">
                                    <li> <?php echo $this->Html->link('Initial Apt Dtl', array('action' => 'index')); ?></li>

                                </ul>
                            </nav>
                        </header>	
                        <div id="content">
                            <?php echo $this->Session->flash(); ?>
                            <?php echo $this->fetch('content'); ?>
                        </div>
                        <footer id="footer">
                            
                        </footer>
                    </div>
                </body>
                </html>