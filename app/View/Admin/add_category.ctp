<div id="categoryList">
    <table class="TFtable">
         <tr>
            <th><?php if (isset($category_name)) { echo $category_name; }; ?></th>
            <th>
                <form name="deleteCategory" action="deleteCategory" method="post">
                    <input type="hidden" name="category_id" value="<?php if (isset($category_id)) { echo $category_id; };?>" />
                    <input type="image" src="../app/webroot/img/delete.png" alt="Submit" height="20" width="20" onclick="return confirm('Are you sure you want to delete this category?')">
                </form>
            </th>
        </tr>
    </table>
</div>