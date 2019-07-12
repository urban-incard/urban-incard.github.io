var slide = new DoSlide('.container', {
    infinite: true
});

$("#map").css({
    "width": "320px",
    "height": "200px"
});
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        draggable: false,
        level: 4 // 지도의 확대 레벨
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition = new daum.maps.LatLng(33.450701, 126.570667);

// 마커를 생성합니다
var marker = new daum.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


$(window).load(function() {
    $(window).sakura();
    
    $(".main").css({
        "margin-left": "-" + $(".main").width() / 2 + "px",
        "margin-top": "-" + $(".main").height() / 2 + "px"
    });

    $(".intro").each(function(i) {
        $(".intro").eq(i).css({
            "margin-left": "-" + $(".intro").eq(i).width() / 2 + "px",
            "margin-top": "-" + $(".intro").eq(i).height() / 2 + "px"
        });
    });

    $(".dim").fadeOut(1500);

});