$(document).ready(function(){
    $(".hamburger").on('click', function () {
        $(this).toggleClass("hamburger_active");
        $(this).siblings().find(".menu").toggleClass("menu_active");
    });

    $(".footer__subtitle").on('click', function () {
        if ($(window).width() < 992) {
            $(this).parent().siblings().find(".footer__list").hide();
            $(this).parent().siblings( ).find(".footer__subtitle").removeClass('footer__subtitle_active');
            $(this).next(".footer__list").slideToggle();
            $(this).toggleClass("footer__subtitle_active");
        }
    });

    $('.all-articles__slider').slick({
        speed: 1000,
        arrows: false
    });

    $('.left').click(function(){
        $('.all-articles__slider').slick('slickPrev');
    })
    
    $('.right').click(function(){
        $('.all-articles__slider').slick('slickNext');
    })
});

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.header').addClass('header_active');
    } else {
        $('.header').removeClass('header_active');
    }
});