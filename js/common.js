$(function(){

});

var kakao_key = "c8dcf002e3cb41a603da7f0d485b5f0b";
var kakao_title = $("title").text();
var kakao_desc = $("subtitle").text()+" 토요일 낮 12시\n해운대 그린나래호텔 3층"; 
var share_url = document.URL;//"http://rocaille.speedgabia.com/wjddbwls_1013";

//kakao init
Kakao.init(kakao_key);
kakaoShare();

//kakaoShare
function kakaoShare(){
	Kakao.Link.createDefaultButton({
	 container: '#kakao-link-btn',
	 objectType: 'feed',
	 content: {
	   title: kakao_title,
	   description: kakao_desc,
	   imageUrl: share_url +'/shareImg.png',
	   link: {
	     mobileWebUrl: share_url,
	     webUrl: share_url
	   }
	 },

	 buttons: [
	   {
	     title: '청첩장 보러가기',
	     link: {
	       mobileWebUrl: share_url,
	       webUrl: share_url
	     }
	   },
	   
	 ]
	});
}

//callNumber
function callNumber(num){
	location.href="tel:"+num;
}