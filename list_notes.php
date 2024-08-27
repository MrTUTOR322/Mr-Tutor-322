<?php
$dir = "uploads/";
$files = scandir($dir);
$files = array_diff($files, array('.', '..'));

echo '<ul>';
foreach ($files as $file) {
    echo '<li><a href="'.$dir.$file.'" download>'.$file.'</a></li>';
}
echo '</ul>';
