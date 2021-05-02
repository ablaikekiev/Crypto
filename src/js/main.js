$(document).ready(function () {

    $('.tabs-navigation').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.tabs-content__form-text_forgot').on('click', function () {
        $('.tabs-navigation').removeClass('active');
        $('.tabs-content').removeClass('active');
        $('.tabs-content_fgtPassword').addClass('active')
    });
    $('.tabs-content__form-text_have').on('click', function () {
        $('.tabs-navigation').addClass('active');
        $('.tabs-content').removeClass('active');
        $('.tabs-navigation__link').removeClass('active');
        $('.tabs-navigation__link-login').addClass('active');
        $('.tabs-content_login').addClass('active');
    });
    $('.footer-label__btn').on('click', function () {
        $('.authentication').addClass('active')
    });

    $('.burger-menu').on('click', function () {
        $('.burger-menu').toggleClass('active')
        $('.header-flexBox').toggleClass('active')
    })

    var ablai = $('#slider');
    ablai.owlCarousel({
        items: 1,
        loop: true,
        dots: false
    });
// Go to the next item
    $('.team-flexBox__icon').click(function() {
        ablai.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.team-flexBox__icon').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        ablai.trigger('prev.owl.carousel', [300]);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.upArrow').fadeIn(3000)
        } else {
            $('.upArrow').fadeOut()
        }

    });
});