jQuery.fn.exists = function () {
    return $(this).length;
};


/* mobile menu
 ============================================================*/
$(document).ready(function () {
    $('.rd-navbar').RDNavbar();
});

/*                          SELECT2                         */
/*----------------------------------------------------------*/
//$(document).ready(function () {
    //if ($(".select2-not-search").exists()) {
    //    $(".select2-not-search").select2({
    //        //theme: "tubeTheme",
    //        theme: "default",
    //        minimumResultsForSearch: Infinity,
    //        placeholder: "Выбирите населенный пункт",
    //        allowClear: true,
    //        width: '100%'
    //    });
    //}
    //if ($(".select2-search").exists()) {
    //    $(".select2-search").select2({
    //        //theme: "tubeTheme",
    //        theme: "default",
    //        placeholder: "Выбирите населенный пункт",
    //        allowClear: true,
    //        width: '100%'
    //    });
    //}
    //if ($(".select2-multiple").exists()) {
    //    $(".select2-multiple").select2({
    //        //theme: "tubeTheme",
    //        theme: "default",
    //        placeholder: "Выбирите населенный пункт",
    //        allowClear: true,
    //        width: '100%'
    //    });
    //}
    //if ($(".data-array-selected").exists()) {
    //    var data = [
    //        {id: 0, text: 'Абакан'},
    //        {id: 1, text: 'Азов'},
    //        {id: 2, text: 'Альметьевск'},
    //        {id: 3, text: 'Ангарск'},
    //        {id: 4, text: 'Арзамас'},
    //        {id: 5, text: 'Армавир'},
    //        {id: 6, text: 'Архангельск'},
    //        {id: 7, text: 'Астрахань'},
    //        {id: 8, text: 'Ачинск'},
    //        {id: 9, text: 'Барнаул'},
    //        {id: 10, text: 'Белгород'},
    //        {id: 11, text: 'Бийск'},
    //        {id: 12, text: 'Благовещенск'},
    //        {id: 13, text: 'Братск'},
    //        {id: 14, text: 'Брянск'},
    //        {id: 15, text: 'Великие Луки'},
    //        {id: 16, text: 'Великий Новгород'},
    //        {id: 17, text: 'Владивосток'},
    //        {id: 18, text: 'Владикавказ'},
    //        {id: 19, text: 'Владимир'},
    //        {id: 20, text: 'Волгоград'},
    //        {id: 21, text: 'Волгодонск'},
    //        {id: 22, text: 'Волжский'},
    //        {id: 23, text: 'Вологда'},
    //        {id: 24, text: 'Воркута'},
    //        {id: 25, text: 'Воронеж'},
    //        {id: 26, text: 'Грозный'},
    //        {id: 27, text: 'Дзержинск'},
    //        {id: 28, text: 'Екатеринбург'},
    //        {id: 29, text: 'Елец'},
    //        {id: 30, text: 'Ессентуки'},
    //        {id: 31, text: 'Иваново'},
    //        {id: 32, text: 'Ижевск'},
    //        {id: 33, text: 'Иркутск'},
    //        {id: 34, text: 'Йошкар-Ола'},
    //        {id: 35, text: 'Казань'},
    //        {id: 36, text: 'Калининград'},
    //        {id: 37, text: 'Калуга'},
    //        {id: 38, text: 'Камышин'},
    //        {id: 39, text: 'Кемерово'},
    //        {id: 40, text: 'Киров'},
    //        {id: 41, text: 'Кисловодск'},
    //        {id: 42, text: 'Ковров'},
    //        {id: 43, text: 'Коломна'},
    //        {id: 44, text: 'Комсомольск-на-Амуре'},
    //        {id: 45, text: 'Кострома'},
    //        {id: 46, text: 'Красногорск'},
    //        {id: 47, text: 'Краснодар'},
    //        {id: 48, text: 'Красноярск'},
    //        {id: 49, text: 'Курган'},
    //        {id: 50, text: 'Курск'},
    //        {id: 51, text: 'Кызыл'},
    //        {id: 52, text: 'Липецк'},
    //        {id: 53, text: 'Магадан'},
    //        {id: 54, text: 'Магнитогорск'},
    //        {id: 55, text: 'Майкоп'},
    //        {id: 56, text: 'Междуреченск'},
    //        {id: 57, text: 'Миасс'},
    //        {id: 58, text: 'Москва'},
    //        {id: 59, text: 'Мурманск'},
    //        {id: 60, text: 'Муром'},
    //        {id: 61, text: 'Мытищи'},
    //        {id: 62, text: 'Набережные Челны'},
    //        {id: 63, text: 'Назрань'},
    //        {id: 64, text: 'Нальчик'},
    //        {id: 65, text: 'Находка'},
    //        {id: 66, text: 'Нефтекамск'},
    //        {id: 67, text: 'Нефтеюганск'},
    //        {id: 68, text: 'Нижневартовск'},
    //        {id: 69, text: 'Нижнекамск'},
    //        {id: 70, text: 'Нижний Новгород'},
    //        {id: 71, text: 'Нижний Тагил'},
    //        {id: 72, text: 'Новокузнецк'},
    //        {id: 73, text: 'Новокуйбышевск'},
    //        {id: 74, text: 'Новороссийск'},
    //        {id: 75, text: 'Новосибирск'},
    //        {id: 76, text: 'Новоуральск'},
    //        {id: 77, text: 'Новочеркасск'},
    //        {id: 78, text: 'Новый Уренгой'},
    //        {id: 79, text: 'Норильск'},
    //        {id: 80, text: 'Ноябрьск'},
    //        {id: 81, text: 'Обнинск'},
    //        {id: 82, text: 'Одинцово'},
    //        {id: 83, text: 'Омск'},
    //        {id: 84, text: 'Орел'},
    //        {id: 85, text: 'Оренбург'},
    //        {id: 86, text: 'Орехово-Зуево'},
    //        {id: 87, text: 'Пенза'},
    //        {id: 88, text: 'Пермь'},
    //        {id: 89, text: 'Петрозаводск'},
    //        {id: 90, text: 'Петропавловск-Камчатский'},
    //        {id: 91, text: 'Псков'},
    //        {id: 92, text: 'Пятигорск'},
    //        {id: 93, text: 'Ростов-на-Дону'},
    //        {id: 94, text: 'Рыбинск'},
    //        {id: 95, text: 'Рязань'},
    //        {id: 96, text: 'Самара'},
    //        {id: 97, text: 'Санкт-Петербург'},
    //        {id: 98, text: 'Саранск'},
    //        {id: 99, text: 'Саратов'},
    //        {id: 100, text: 'Сергиев Посад'},
    //        {id: 101, text: 'Серпухов'},
    //        {id: 102, text: 'Смоленск'},
    //        {id: 103, text: 'Соликамск'},
    //        {id: 104, text: 'Сочи'},
    //        {id: 105, text: 'Ставрополь'},
    //        {id: 106, text: 'Старый Оскол'},
    //        {id: 107, text: 'Стерлитамак'},
    //        {id: 108, text: 'Сызрань'},
    //        {id: 109, text: 'Сыктывкар'},
    //        {id: 110, text: 'Таганрог'},
    //        {id: 111, text: 'Тамбов'},
    //        {id: 112, text: 'Тверь'},
    //        {id: 113, text: 'Тобольск'},
    //        {id: 114, text: 'Тольятти'},
    //        {id: 115, text: 'Томск'},
    //        {id: 116, text: 'Туапсе'},
    //        {id: 117, text: 'Тюмень'},
    //        {id: 118, text: 'Улан-Удэ'},
    //        {id: 119, text: 'Ульяновск'},
    //        {id: 120, text: 'Уссурийск'},
    //        {id: 121, text: 'Уфа'},
    //        {id: 122, text: 'Ухта'},
    //        {id: 123, text: 'Хабаровск'},
    //        {id: 124, text: 'Химки'},
    //        {id: 125, text: 'Чебоксары'},
    //        {id: 126, text: 'Челябинск'},
    //        {id: 127, text: 'Череповец'},
    //        {id: 128, text: 'Чита'},
    //        {id: 129, text: 'Элиста'},
    //        {id: 130, text: 'Энгельс'},
    //        {id: 131, text: 'Южно-Сахалинск'},
    //        {id: 132, text: 'Якутск'},
    //        {id: 133, text: 'Ярославль'}];
    //
    //    $(".data-array-selected").select2({
    //        data: data,
    //        placeholder: "Выбирите населенный пункт",
    //        allowClear: true,
    //        width: '100%'
    //    })
    //}
//});
$(document).ready(function () {
    $('select').styler({
        selectVisibleOptions: 10,
    });
    $(".jq-selectbox__dropdown ul").mCustomScrollbar({
        theme: "minimal-dark",
        scrollButtons: {enable: false}
    });
});


/*                          mCustomScrollbar                */
/*----------------------------------------------------------*/
(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar({
            theme:"minimal"
        });
    });
})(jQuery);


/*                          Fancybox                        */
/*----------------------------------------------------------*/
$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none'
    });
});



/*                          Responsive Tabs                  */
 /*----------------------------------------------------------*/
;
$(document).ready(function () {
    if ($(".resp-tabs").exists()) {
        $('.resp-tabs').easyResponsiveTabs({
        });
    }
});

/*                          Open/Close cnt                  */
/*----------------------------------------------------------*/
;
$(document).ready(function () {

    $('.stylelink').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('open').toggleClass('close');
        $(this).closest('.preview')
            .toggleClass('pre-close')
            .find('p.preview-more')
            .toggle();
    });
});


/*                          SWIPER                          */
/*----------------------------------------------------------*/
var swiper = new Swiper('.first-swiper-container', {
    //pagination: '.swiper-pagination',
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    effect: 'fade',
    loop: true
});
var swiper = new Swiper('.second-swiper-container', {
    //pagination: '.swiper-pagination',
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    effect: 'fade',
    loop: true
});

var horizontal_swiper = new Swiper('.horizontal_swiper', {
    paginationClickable: true,
    //spaceBetween: 30,
    //loop: true

    slidesPerView: '1',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    //height: 260,
    centeredSlides: true,
    parallax: true,
    speed: 2000,
    effect: "slide",
    //effect: "fade",
    //effect: "cube",
    //effect: "coverflow"
    //effect: "flip"

});

var vertical_swiper = new Swiper('.vertical_swiper', {
    slideToClickedSlide: true,
    slidesPerView: 6,
    spaceBetween: 5,
    mousewheelControl: true,
    //watchSlidesVisibility: true,
    centeredSlides: true,
    touchRatio: 0.2
});

horizontal_swiper.params.control = vertical_swiper;
vertical_swiper.params.control = horizontal_swiper;



/*                          Copyright Year                  */
/*----------------------------------------------------------*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $(".copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


///* EqualHeights
// ========================================================*/
;
$(document).ready(function(){
    var windowWidth = $(window).width();
    if(windowWidth > 991)
        $('.opo_eqH').equalHeights();
    else{
        $('.opo_eqH').css('height', 'inherit');
    }
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 991)
            $('.opo_eqH').equalHeights();
        else{
            $('.opo_eqH').css('height', 'inherit');
        }
    });
});









///* interactive search
// ========================================================*/
;
$(document).ready(function() {
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results').children('li');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
            return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
        });

        $(".results li").not(":containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','false');
        });

        $(".results li:containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','true');
        });

        var jobCount = $('.results li[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if(jobCount == '0') {$('.no-result').show();}
        else {$('.no-result').hide();}
    });
});



/* Yandex Map
 ========================================================*/
if (typeof(ymaps) == "object") {
    function init() {
        function Map_applications() {
            var myMap = new ymaps.Map('map_applications', {
                center: [57.638374, 39.853246],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            });
            myMap.behaviors.disable('scrollZoom'); // запрет зума колесом
            myMap.controls.add(
                new ymaps.control.ZoomControl()
            );
            var myCollection = new ymaps.GeoObjectCollection();
            myCollection.add(new ymaps.Placemark([57.638374, 39.853246], {
                balloonContent: 'Finishworks 1'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [26, 30],
                iconImageOffset: [0, 0]
            }));

            myMap.geoObjects.add(myCollection);
        }

        if ($("div").is("#map_applications")) {
            Map_applications();
        }

        function Map1() {
            var myMap = new ymaps.Map('map1', {
                center: [57.638374, 39.853246],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            });
            myMap.behaviors.disable('scrollZoom'); // запрет зума колесом
            myMap.controls.add(
                new ymaps.control.ZoomControl()
            );
            var myCollection = new ymaps.GeoObjectCollection();
            myCollection.add(new ymaps.Placemark([57.638374, 39.853246], {
                balloonContent: 'Метка = 1 ='
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [16, 21],
                iconImageOffset: [0, 0]
            }));
            myCollection.add(new ymaps.Placemark([57.637352, 39.847442], {
                balloonContent: 'Метка = 2 ='
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [16, 21],
                iconImageOffset: [0, 0]
            }));

            myCollection.add(new ymaps.Placemark([57.638017, 39.851449], {
                balloonContent: 'Метка = 3 ='
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [16, 21],
                iconImageOffset: [0, 0]
            }));

            myCollection.add(new ymaps.Placemark([57.639395, 39.848269], {
                balloonContent: 'Метка = 4 ='
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-icon.png',
                iconImageSize: [16, 21],
                iconImageOffset: [0, 0]
            }));

            myMap.geoObjects.add(myCollection);
        }
        if ($("div").is("#map1")) {
            Map1();
        }
    }
    ymaps.ready(init);
}







