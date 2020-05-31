$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slideToShow: 3,
        slideToScroll: 3,
        dots: false,
        prevArrow: $('.left'),
        nextArrow: $('.right')
    });
})
$('.mini-menu').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('show');
});

$('.bottom-arrow-up').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
});

$('.back').click(function () {
    $('.menu').removeClass('show');
    $('.mini-menu').removeClass('active')
});