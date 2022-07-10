$(document).ready(function(){

$('.js--menu').click(function() {
    var nav = $('.js--nav__list');

nav.slideToggle(200);
    var icon = $('.js--menu');
    if (icon.hasClass('fa-bars')) {
        icon.addClass('fa-times');
        icon.removeClass('fa-bars');
    } else {
        icon.addClass('fa-bars');
        icon.removeClass('fa-times');
    }
    $(window).on('resize', function() {

        if ($(this).width() > 600) {
        $('.nav__list').css({
            'display': 'inline-block'
        });
        } else {
        $('.nav__list').css({
            'display': 'none'
        });
        }
    });
});
    $('.featured__grid').isotope({
        itemSelector: '.featured__grid--item',
        layoutMode: 'fitRows'
    });
        $('.featured__item').click(function(){
            $('.featured__item').removeClass('featured__item-active');
            $(this).addClass('featured__item-active');

            var selector = $(this).attr('data-filter');
            $('.featured__grid').isotope({
                filter: selector
            });
            return false;
        });
});
var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 900
})