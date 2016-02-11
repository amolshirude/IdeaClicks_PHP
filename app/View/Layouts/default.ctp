<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
$cakeDescription = __d('cake_dev', 'CakePHP: the rapid development php framework');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html>
<html>
    <head>

        <?php echo $this->Html->charset(); ?>
        <title>
            <?php echo $cakeDescription ?>:
            <?php echo $this->fetch('title'); ?>
        </title>
        <?php
        echo $this->Html->meta('icon');

        echo $this->Html->css('cake.generic');

        echo $this->fetch('meta');
        echo $this->fetch('css');
        echo $this->fetch('script');
        ?>
    </head>
    <body>
        <div id="container">
            <div id="header">

                <h3><b style="color: #ffffff;">view Ideas</b></h3>

                <a href="../User/user_profile"><b style="color: #ffffff">View Profile</b></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="../Ideas/submit_idea"><b style="color: #ffffff">Submit Idea</b></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="../Ideas/view_ideas"><b style="color: #ffffff">View Ideas</b></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="../Login/home"><b style="color: #ffffff">Logout</b></a>

            </div>
            <div id="content">

                <?php echo $this->Session->flash(); ?>

                <?php echo $this->fetch('content'); ?>
            </div>
            <div id="footer">

                <div><b>IdeaClicks</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="../Pages/about_us"><b style="color: #ffffff">About Us</b></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="../Pages/contact_us"><b style="color: #ffffff">Contact Us</b></a>
                </div>
                <h4>email Id:info@ideaclicks.in</h4>
                <h4>Contact No:9970509629</h4>

            </div>
        </div>

    </body>
</html>