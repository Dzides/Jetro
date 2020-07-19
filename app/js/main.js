$(function(){

   $('.slider__top').slick({
      // infinite: true,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      arrows: false,
      // fade: true,
      asNavFor: '.slider__bot'
    });

    $('.slider__bot').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider__top',
      dots: false,
      // centerMode: true,
      focusOnSelect: true
    });

 });