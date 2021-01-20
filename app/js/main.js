$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });
 
  $('.product-slider__inner').slick({
    arrows:false,
    slidesToShow:4,
    slidesToScroll: 4,
    dots:true,
  });
  $("#example_id").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });
  $('.icon-th-list').on('click', function(){
    $('.products__item').addClass('list');
    $(this).addClass('active');
    $('.icon-th-large').removeClass('active');
  });
  $('.icon-th-large').on('click', function(){
    $('.products__item').removeClass('list');
    $(this).addClass('active');
    $('.icon-th-list').removeClass('active');
  });
  var mixer = mixitup('.products__inner-box');
});