window.dataLayer = window.dataLayer || []; 

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-124498612-2');

function map_set(lat, lng) {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(lat, lng);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
}

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;
(function($, window, document, undefined) {

    "use strict";

    // Create the defaults once
    var pluginName = "simpleCalendar",
        defaults = {
            months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], //string of months starting from january
            months_en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], //string of months starting from january
            days: ['일', '월', '화', '수', '목', '금', '토'], //string of days starting from sunday
            minDate: "YYYY-MM-DD", // minimum date
            maxDate: "YYYY-MM-DD", // maximum date
            insertEvent: true, // can insert events
            displayEvent: true, // display existing event
            fixedStartDay: true, // Week begin always by monday
            events: [], //List of event dates
            eventsInfo: [], //List of event Info
            selectCallback: function(selDate) {}, // Callback on date select
            insertCallback: function() {} // Callback when an event is added to the calendar
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.currentDate = new Date(options.events[0]);
        this.events = options.events;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function() {
            var container = $(this.element);
            var todayDate = this.currentDate;
            var events = this.events;

            var calendar = $('<div class="calendar"></div>');
            var header = $('<header>' +
                //'<h2 class="month"></h2>' +
                '<div style="font-size: 16px;">' +
                '   <div><ul style="overflow:hidden;width:105px;margin:0 auto;">' +
                '       <li style="float:left;"><span class="year" style="font-size: 14px;letter-spacing: 5px;"></span><p><span class="month_en"></span></p></li>' +
                '       <li style="float:left;"><span class="month" style="font-size: 40px;"></span></li>' +
                '       </ul></div>' +
                '</div>' +
                '</header>');

            this.updateHeader(todayDate, header);
            calendar.append(header);

            this.buildCalendar(todayDate, calendar);
            container.append(calendar);

            this.bindEvents();
        },

        //Update the current month header
        updateHeader: function(date, header) {
            header.find('.year').html(date.getFullYear());
            header.find('.month').html(this.settings.months[date.getMonth()]);
            header.find('.month_en').html(this.settings.months_en[date.getMonth()]);
        },

        testFunction: function(temp) {
            //console.log('test function var = ' + temp);
        },

        //Build calendar of a month from date
        buildCalendar: function(fromDate, calendar) {
            var plugin = this;

            calendar.find('table').remove();

            var body = $('<table></table>');
            var thead = $('<thead></thead>');
            var tbody = $('<tbody></tbody>');

            //Header day in a week ( (1 to 8) % 7 to start the week by monday)
            for (var i = 0; i <= this.settings.days.length - 1; i++) {
                thead.append($('<td>' + this.settings.days[i % 7].substring(0, 3) + '</td>'));
            }

            //setting current year and month
            var y = fromDate.getFullYear(),
                m = fromDate.getMonth();

            //first day of the month
            var firstDay = new Date(y, m, 0);
            //If not monday set to previous monday
            while (firstDay.getDay() != 0) {
                firstDay.setDate(firstDay.getDate() - 1);
            }
            //last day of the month
            var lastDay = new Date(y, m + 1, 0);
            //If not sunday set to next sunday
            while (lastDay.getDay() != 0) {
                lastDay.setDate(lastDay.getDate() + 1);
            }

            var todayStr = (new Date).toDateString();

            //For firstDay to lastDay
            for (var day = firstDay; day <= lastDay; day.setDate(day.getDate())) {
                var tr = $('<tr></tr>');

                //For each row
                for (var i = 0; i < 7; i++) {
                    var td = $('<td><a href="#" class="day">' + day.getDate() + '</a></td>');


                    if (plugin.settings.displayEvent) {
                        const eventIndex = $.inArray(this.formatToYYYYMMDD(day), plugin.events);
                        if (eventIndex !== -1) {
                            //console.log('found event');
                            td.find(".day").addClass("event");

                            // for tooltip. Have to generalize this
                            td.find(".day").attr('data-tippy-content', plugin.settings.eventsInfo[eventIndex]);
                        }
                    }

                    //if today is this day
                    if (day.toDateString() === todayStr) {
                        td.find(".day").addClass("today");
                    }
                    //if day is not in this month
                    if (day.getMonth() != fromDate.getMonth()) {
                        td.find(".day").addClass("wrong-month");
                    }

                    tr.append(td);
                    day.setDate(day.getDate() + 1);
                }
                tbody.append(tr);
            }

            tbody.on('click', '.day', function(e) {
                var day = '' + $(e.currentTarget).text(),
                    month = '' + (plugin.currentDate.getMonth() + 1),
                    year = plugin.currentDate.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                const selectedDate = [year, month, day].join('-');

                plugin.settings.selectCallback(selectedDate);

                if ($(e.currentTarget).hasClass('event')) {
                    // show event container with effect
                    plugin.fillUp($(plugin.element), e.pageX, e.pageY);
                    const eventIndex = $.inArray(selectedDate, plugin.events);
                    $(plugin.element).find('.event-container>.event-date').text(selectedDate);
                    $(plugin.element).find('.event-container>.title').text(plugin.settings.eventsInfo[eventIndex]);
                }
                e.preventDefault();
            });

            body.append(thead);
            body.append(tbody);


            var eventContainer = $('<div class="event-container"><p class="event-date">Mar 01, 2019</p><h2 class="title">Event Name</h2><a href="#" class="close"></div>');

            eventContainer.on('click', '.close', function(e) {
                plugin.empty($(plugin.element), e.pageX, e.pageY);
                e.preventDefault();
            });

            calendar.append(body);
            calendar.append(eventContainer);
        },
        //Init global events listeners
        bindEvents: function() {
            var plugin = this;
        },
        //Small effect to fillup a container
        fillUp: function(elem, x, y) {
            var plugin = this;
            var elemOffset = elem.offset();

            var filler = $('<div class="filler" style=""></div>');
            filler.css("left", x - elemOffset.left);
            filler.css("top", y - elemOffset.top);

            $(plugin.element).find('.calendar').append(filler);

            filler.animate({
                width: "300%",
                height: "300%"
            }, 500, function() {
                $(plugin.element).find('.event-container').show();
                filler.hide();
            });
        },
        //Small effect to empty a container
        empty: function(elem, x, y) {
            var plugin = this;
            var elemOffset = elem.offset();

            var filler = $('.filler');
            filler.css("width", "300%");
            filler.css("height", "300%");

            filler.show();

            $(plugin.element).find('.event-container').hide();

            filler.animate({
                width: "0%",
                height: "0%"
            }, 500, function() {
                filler.remove();
            });
        },

        formatToYYYYMMDD: function(date) {
            var d = new Date(date),
                day = '' + d.getDate(),
                month = '' + (d.getMonth() + 1),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);

function gallery_init() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
}

function gallery_url_set(_gallery_url) {
    var html = "";
    for (var i = 0; i < _gallery_url.length; i++) {
        //html += '<div class="swiper-slide" style="background-image:url(' + _gallery_url[i] + ')"></div>';
        html += '<div class="swiper-slide" style="background-position: center;    background-size: contain;    background-repeat: no-repeat;background-image:url(' + _gallery_url[i] + ')"></div>';
    }

    $(".swiper-wrapper").html(html);

    gallery_init();

    $(".swiper-wrapper").eq(0).find(".swiper-slide").click(function() {
        var img_url = $(this).css("background-image").replace('url("', '').replace('")', '');
        //location.href = img_url;
    });

    $(".swiper-wrapper").css("width", 99999);

    init_blog();
}

function calendar_set(_mname, _wname, _weddingDate, _type) {

    var day_type = "Wedding Day";
    if (_type == "baby") {
        day_type = "Birth Day";
    }

    $("#event-cal-container").simpleCalendar({
        events: [_weddingDate],
        eventsInfo: [_mname + ' ' + _wname + '\'s ' + day_type + ''],
    });
}

function init_blog() {
    $("body").prepend("<iframe src='https://m.blog.naver.com/urbanstyle_' style='width:0px;height:0px;visibility: hidden;display:none;'> </iframe>");
}