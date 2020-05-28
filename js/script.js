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