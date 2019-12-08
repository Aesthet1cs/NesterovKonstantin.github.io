
$(document).ready(function(){
    //Add a another class to right bar menu
    // $('.right__slider__menu-item').click(function(e) {
    //     e.preventDefault();
    //     $('.right__slider__menu-item').removeClass('right__slider__menu__item-focused');
    //     $(this).addClass('right__slider__menu__item-focused');
    // });
    //right bar script end
    //burger menu
    $('.header__bars').on('click', function(){
        $('.navigation').toggle();
    });
    //burger menu end
    //Search form script
    const search = document.querySelector('.header__content-search');
    const body = document.querySelector('body');

    search.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.add('search--active');
    });
    body.addEventListener('click', function (e) {
        search.classList.remove('search--active');
    });
    //seatch scrip end
    //script for autorization start
    $('.autorization').click(function(e) {
        e.preventDefault();
        event.stopPropagation();
        $('.autorization__wrapper').addClass('autorization--active');
    });
    $('.autorization__wrapper').click(function(e) {
        event.stopPropagation();
    });
    $(window).click(function() {
        $('.autorization__wrapper').removeClass('autorization--active');
    })
    //script for autorization end
    $('.slider__inner').slick({
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        nextArrow: '.slider__controls-up',
        prevArrow: '.slider__controls-down',

    });

    var $status = $('.slider__counter');
    var $slickElement = $('.slider__inner');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' / ' + slick.slideCount);
    });
});
