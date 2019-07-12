<?php
	$type = "type5";
	
	$relative_path = preg_replace("`\/[^/]*\.php$`i", "/", $_SERVER['PHP_SELF']);

	$base_URL = ($_SERVER['HTTPS'] == 'on') ? 'https://' : 'http://';
	$base_URL .= ($_SERVER['SERVER_PORT'] != '80') ? $_SERVER['HTTP_HOST'].':'.$_SERVER['SERVER_PORT'] : $_SERVER['HTTP_HOST'];
	// 바탕 URL

	$web_path = $base_URL.$relative_path;
	// PHP 파일이 있는 곳의 웹 경로

	$full_URL = $web_path.$php_filename;
	$full_URI = $base_URL.$_SERVER['REQUEST_URI'];
	
	$relative_file_server_path = $relative_path.$php_filename;
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>==REPLACE_TITLE== ==REPLACE_WEDDINGDATE== 결혼합니다.</title>
        <subtitle>==REPLACE_WEDDINGDATE==</subtitle>
        <meta property="og:title" content="==REPLACE_TITLE== ==REPLACE_WEDDINGDATE== 결혼합니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="<?php echo $web_path;?>" />
        <meta property="og:image" content="<?php echo $web_path;?>shareImg.png">
        <meta property="og:description" content="모바일청첩장 보러가기" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="renderer" content="webkit">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        <!-- css -->
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/css/<?php echo $type;?>.css">
        <link rel="stylesheet" type="text/css" href="/css/common/jquery-sakura.css">
        <link rel="stylesheet" href="/css/common/do-slide.min.css">

        <!-- js -->
        <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c8dcf002e3cb41a603da7f0d485b5f0b"></script>
        <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
        <script src="/js/common/jquery-sakura.min.js"></script>
        
        <!-- 익스플로러 9 이하 버전의 html5 인식용 스크립트 -->
        <!--[if lt ie 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <!-- // 익스플로러 9 이하 버전의 html5 인식용 스크립트 -->
    </head>
    <body>
        <!-- dim -->
		<div class="dim" style="position:fixed;left:0px;top:0px;width:100%;height:100%;background-color:#fff;z-index:1;"></div>
        <!-- nav -->
        <div class="nav" style="position:fixed;right:60px;bottom:60px;z-index:1;">
            <a href="javascript:kakaoShare();" id="kakao-link-btn">
                <img src="//dev.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" style="width:30px;height:30px;" />
            </a>
        </div>
        <div class="wrap ds-parent">
            <div class="ds-container container">
                <div class="section">
                    <div class="main" style="width:320px;text-align:center;position:absolute;top:50%;left:50%;">
						<div style="height:536px;">
							<style>
								.image_wrap{}
								.image_wrap ul,li{list-style:none;}
								.image_wrap ul{overflow:hidden;padding:0px;margin:0px;}
								.image_wrap ul > li {float:left;opacity:0.3;height:136px;}
								.image_wrap ul > li > img {width:106px;height:136px;}
								.image_wrap ul > li.active{opacity:1;}
							</style>
							<div class="image_wrap">
								<ul>
									<li><img src="4.jpg" style="width:212px" /></li>
									<li><img src="1.jpg" /></li>
									<li><img src="2.jpg" /></li>
									<li><div style="width:212px;height:136px;"></div></li>
									<li><img src="1.jpg" /></li>
									<li><img src="3.jpg" style="width:212px;" /></li>
								</ul>
								<div style="position:absolute;z-index:2;top:136px;left:106px;width:212px;height:136px;">
									<div style="font-size:12px;padding:10px;">
										이재호<br/>
										그리고<br/>
										장혜미<br/>
									</div>
									<div style="font-size:16px;padding:20px;font-weight:bold;">
										결혼합니다
									</div>
								</div>
							</div>
							<div style="padding:20px;">
								<div style="font-size:12px;padding:5px;">
									2019.04.14 토요일 13:00
								</div>
								<div style="font-size:12px;padding:5px;">
									보테가마지오 G층 로스타뇨채플
								</div>
							</div>
						</div>
                    </div>
					<div class"scroll_wrap" style="position:absolute;bottom:100px;left:50%;width:14px;margin:-7px;">
						<div class="scroll">
						  <div class="chevron"></div>
						  <div class="chevron"></div>
						  <div class="chevron"></div>
						</div>
					</div>
                </div>
                <div class="section text">
                    <div class="intro" style="width:320px;height:460px;text-align:center;position:absolute;top:50%;left:50%;">
						<div style="text-align:center;padding:30px;font-weight:bold;font-size:20px;">
							<span class="underline--magical" style="font-size:20px;">INVITATION</span>
						</div>
						<div style="text-align:center;">
							<p class="subheading">
							서로의 마음과 서로의<br>
							믿음을 간직하며<br>
							저희 두 사람이 새 출발의<br>
							<br>
							첫 걸음을 내딛게 되었습니다.<br>
							<br>
							좋은 꿈, 바른 뜻으로<br>
							올바르게 살 수 있도록<br>
							축복과 격려를 해주시면<br>
							더 없는 기쁨으로<br>
							잘 간직하겠습니다.
							</p>
						</div>
						<div style="text-align:center;font-size:14px;font-weight:bold;padding:20px;">
							<div>
								재호.혜미
							</div>
							<div>
								올림
							</div>
						</div>
						<div style="text-align:left;font-size:14px;width:185px;margin:0 auto;">
							<div>
								이병옥.최혜옥	의 장남	재호
							</div>
							<div>
								김민기.정소민	의 장녀 혜미
							</div>
						</div>
                    </div>
                </div>
                <div class="section text">
                    <div class="intro" style="width:250px;height:170px;text-align:center;position:absolute;top:50%;left:50%;">
						<h2 class="subheading" style="font-weight:normal;text-align:center;">
							Everything that I understand, I understand only because I love.<br/><br/>
							내가 이해하는 모든 것은 내가 사랑하기 때문에 이해한다.<br/><br/>
							<span class="underline--magical" style="font-size:12px;">Lev Tolstoy(레프 톨스토이)</span>
						</h2>
                    </div>
                </div>
                <div class="section cal">
					<div class="intro" style="width:320px;height:470px;text-align:center;position:absolute;top:50%;left:50%;">
						<div>
						
							<div style="text-align:center;padding:30px;font-weight:bold;font-size:20px;">
								<span class="underline--magical" style="font-size:20px;">WEDDING DAY</span>
							</div>
							
                            <!-- php common calendar -->
                            <?php
                                $wedding_year = "2019";
                                $wedding_month = "04";
                                $wedding_day = "13";
                                
                                require_once $_SERVER["DOCUMENT_ROOT"]."/include/calendar.php";
                            ?>
                            
							<div style="text-align:center;padding:30px;">
								<span class="underline--magical" style="font-size:12px;font-weight:bold;color:#000;">2019.04.14 토요일 오전 12시</span>
							</div>
							
						</div>
					</div>
                </div>
                <div class="section map">
					<div class="intro" style="width:320px;height:416px;text-align:center;position:absolute;top:50%;left:50%;">
						<div>
							<div style="text-align:center;padding:30px;font-weight:bold;font-size:20px;">
								<span class="underline--magical" style="font-size:20px;">LOCATION</span>
							</div>
							
							<div id="map" onclick="window.open('https://map.kakao.com/?map_type=TYPE_MAP&q=라온스퀘어&urlLevel=6')" style="filter: hue-rotate(-45deg);"></div>
							
							<div style="text-align:center;padding:30px;">
								<span class="underline--magical" style="font-size:12px;font-weight:bold;color:#000;">약도를 클릭 시 다음 지도로 이동합니다.</span>
							</div>
							
							<div style="padding:0px 0px;">
								<div style="color:#3e3e3e;text-align:left;width:320px;margin:0 auto;font-size:14px;font-weight:bold;line-height: 1.3;">서울 강남구 역삼1동 607-21<br/>루시컨벤션 2층 화이트홀</div>
								<div style="color:#565656;text-align:left;width:320px;margin:0 auto;font-size:14px;padding:5px 0px;">02-556-1005</div>
							</div>
						</div>
					</div>
					<div style="position:absolute;bottom:0px;background-color:#eaeaea;width:100%;padding:20px 0px;">
						<div style="color:#000;text-align:center;font-size:14px;font-weight:bold;"><a href="//urban-incard.iameeo.com" target="_blank">URBAN-INCARD</a></div>
					</div>
                </div>
            </div>
        </div>
      <!-- common script -->
      <script src="/js/common/do-slide.min.js"></script>
      <script src="/js/common.js"></script>
	  <script src="/js/<?php echo $type;?>.js"></script>
    </body>
    
   <?php require_once $_SERVER["DOCUMENT_ROOT"]."/include/google_analytics.php"; ?>
</html>