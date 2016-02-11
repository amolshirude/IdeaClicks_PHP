<!DOCTYPE html>
<html>
<head>
<style>
ul {
    float: left;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.menubar {
    float: right;
    text-decoration: none;
    color: white;
    background-color: lightslategray;
    padding: 0.2em 0.6em;
    border-right: 1px solid white;border-left: 1px solid white;
}
li {
    display: inline;
}
</style>
</head>
<body>
<table  width="100%" style="background-color:lightslategray;" >
<tr  align="right">  
 <td width="40%"/>
     <td style="color:white"><b>Login Group : <?php echo CakeSession::read('session_name');?></b></td>
</tr>
<tr  align="right"/>  
<tr  align="right"/> <tr  align="right"/>  
<tr  align="right"/> 
<tr  align="right"/>  
<tr  align="right"/> <tr  align="right"/>  
<tr  align="right"/> 
<tr  align="right"/>  
<tr  align="right"/> <tr  align="right"/>  
<tr  align="right"/> 
<tr  align="right"/> <tr  align="right"/>  
<tr  align="right"/> <tr  align="right"/> <tr  align="right"/>  
<tr  align="right"/> <tr  align="right"/> <tr  align="right"/>  
<tr  align="right"/> 
            <tr  align="right">  
 <td width="40%"/>
           <td>                
         <ul>
<li><a class ="menubar" href="../"><b style="color: #ffffff">Logout</b></a></li>
<li><a  class ="menubar" href="../Admin/change_password"><b style="color: #ffffff">Change Password</b></a></li>
<li><a class ="menubar" href="../Admin/view_ideas"><b style="color: #ffffff">View Ideas</b></a></li>
<li><a class ="menubar" href="../Admin/group_profile"><b style="color: #ffffff">View Profile</b></a> </li>
</ul></td>
</tr>
</table>
</body>
</html>