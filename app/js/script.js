window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

$(document).ready(function(){
    $(".footer__subtitle").on('click', function () {
        if ($(window).width() < 992) {
            $(this).parent().siblings().find(".footer__list").hide();
            $(this).parent().siblings( ).find(".footer__subtitle").removeClass('footer__subtitle_active');
            $(this).next(".footer__list").slideToggle();
            $(this).toggleClass("footer__subtitle_active");
        }
    });
});