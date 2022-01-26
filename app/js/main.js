$(function () {

    /* ===== Rightside menu ===== */

    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    /* ===== Slider ===== */

    $('.top__slider').slick({
        dots: false,
        arrows: false,
        fade: true,
        autoplay: true
    });

    /* ===== Small - slider ===== */

    $('.small-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    });

    /* ===== Blog - slider ===== */

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"> <img src="images/icons/arrow-slide-left.svg" alt="arrow left"> </button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"> <img src="images/icons/arrow-slide-right.svg" alt="arrow right"> </button>'
    });

    

    /* ===== Gallery mixer ===== */

    let mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.office'
        }
    });


});

