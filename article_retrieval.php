<?php
if(isset($_GET["article"])) {
    $article = $_GET["article"];
    $fileName = 'articles/'.$article.'.php';
    $myfile = fopen($fileName, "r") or die("Unable to open file!");
    echo fread($myfile,filesize($fileName));
    fclose($myfile);
}
?>