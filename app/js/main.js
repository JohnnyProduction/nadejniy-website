$(function(){
    $('.slider').slick({
        //infinite: true,
        //speed: 300,
        slidesToShow: 3,
        centerMode: true,
        //variableWidth: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="">',
        //asNavFor: '.slider-dotshead',
    })
});