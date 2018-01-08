<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pressed Press</title>
    <link rel="icon" href="favicons/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#000000">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/fonts.css">
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery-ui.min.js"></script>
    <script src="assets/js/jsc3d.min.js"></script>
    <script src="assets/js/jsc3d.webgl.min.js"></script>
    <script src="assets/js/jsc3d.touch.min.js"></script>
    <script type="text/javascript" src="assets/js/logo3d.js"></script>

</head>
<body>
<div class="vert-wrap menu-lv1">
    <div class="content">
        <ul>
            <li>扁社</li>
            <li class="pub-button"><a href="#" class="publication-toggle">出版物</a></li>
            <li class="music-button"><a href="#" class="music-toggle">音乐</a></li>
            <li class="about-button"><a href="#" class="about-toggle">关于</a></li>
        </ul>
    </div>
</div>
<!-- LEVEL TWO MENUS -->
<div class="vert-wrap menu-lv2 publication">
    <div class="content">
        <table class="pub-content">
            <tr><td><a href="#" class="joyride publication-index" id="joyride">alvalee《Joyride》</a></td></tr>
            <tr><td><a href="#" class="daiding publication index">靳彤《待定》</a></td></tr>
        </table>
    </div>
</div>
<div class="vert-wrap menu-lv2 music">
    <div class="content">
        <table class="music-content">
            <tr><td>alvalee《Joyride》---</td></tr>
            <tr><td>靳彤《待定》---</td></tr>
        </table>
    </div>
</div>
<div class="vert-wrap menu-lv2 about">
    <div class="content">
        <table class="about-content">
            <tr><td>扁社由<a href="mailto:cz@pressed.press" style="color:red;">周琛</a>和<a href="mailto:ts@pressed.press" style="color:blue;">甜食</a>组成，成立于2017年。从事摄影、音乐、独立出版等领域的实践。试图从日常生活直视当代文化，重建无关紧要的历史。</td></tr>
            <tr><td>　</td></tr>
            <tr><td><a href="mailto:press@pressed.press">press@pressed.press</a></td></tr>
        </table>
    </div>
</div>
<div class="vert-wrap lv3 publication-entry joyride-entry">
    <div class="entry">

    </div>
</div>
<div class="switcher">
    <table>
        <tr><td><a href="index_en.html">en</a>・<a href="index_zh.html">汉</a></td></tr>
    </table>
</div>
<div class="logo3d-container">
    <canvas id="logo3d" width="1000" height="600">
        <img src="imgs/PP_logo.png">
    </canvas>
</div>

<script>
    $( "p" ).click(function() {
        $( this ).slideUp();
    });

    $( ".publication-toggle" ).click(function() {
        $(".menu-lv2").hide();
        $(".lv3").hide();
        $(".logo3d-container").css({"position": "absolute", "z-index": "-100"});
        $(".logo3d-container").offset({ top: l3y, left: l3x });
        $(".pub-content").offset({ top: pty});
        $(".publication").show();
        $(".music-toggle").css("text-decoration", "none");
        $(".about-toggle").css("text-decoration", "none");
        $(".publication-index").css("text-decoration", "none");
        $(this).css("text-decoration", "line-through");
    });


    $(".publication-index").click(function(){
        $.ajax({
            url: "article_retrieval.php",
            method: "GET",
            data: {article: $(this).attr("id")},
            context: document.body
        }).done(function(data) {
            console.log(data);
            $(".entry").html(data);
        });
        $(".lv3").hide();
        $(".joyride-entry").show("slide", { direction: "left" }, 300);
        $(".publication-index").css("text-decoration", "none");
        $(this).css("text-decoration", "line-through");
    });

    $(".music-toggle").click(function(){
        $(".menu-lv2").hide();
        $(".lv3").hide();
        $(".logo3d-container").css({"position": "absolute", "z-index": "-100"});
        $(".logo3d-container").offset({ top: l3y, left: l3x });
        $(".music-content").offset({ top: mty});
        $(".publication-index").css("text-decoration", "none");
        $(".music").show();
        $(".about-toggle").css("text-decoration", "none");
        $(".publication-toggle").css("text-decoration", "none");
        $(".publication-index").css("text-decoration", "none");
        $(this).css("text-decoration", "line-through");
    });

    $(".about-toggle").click(function(){
        $(".menu-lv2").hide();
        $(".lv3").hide();
        $(".logo3d-container").css({"position": "absolute", "z-index": "-100"});
        $(".logo3d-container").offset({ top: l3y, left: l3x });
        $(".about-content").offset({ top: aty});
        $(".publication-index").css("text-decoration", "none");
        $(".about").show();
        $(".publication-toggle").css("text-decoration", "none");
        $(".music-toggle").css("text-decoration", "none");
        $(".publication-index").css("text-decoration", "none");
        $(this).css("text-decoration", "line-through");
    });

</script>
<script type="text/javascript" src="assets/js/logo3d.js"></script>
<script type="text/javascript" src="assets/js/loaded.js"></script>
</body>
</html>

