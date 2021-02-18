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
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }     
      }
    ]
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
  
  $('input[type="file"], select').styler();

  $('.menu__btn').on('click', function (){
    $('.menu__list').slideToggle();  
  });  
  $('.header__btn-menu').on('click', function (){
    $('.header__box').toggleClass('active');  
  });
  $('.prodect-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.prodect-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.prodect-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

  var mixer = mixitup('.products__inner-box');
});