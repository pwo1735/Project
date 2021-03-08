$(function () {

  $('.product-menu__item').on('click', function () {
    $(this).toggleClass('product-menu__item--active');
  });



  $('.catalog-list__button').on('click', function () {
    $(this).toggleClass('catalog-list__button--active');

  });

  $('.product-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-one__num').styler();



  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      prefix: "$";
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    
  });
  $(".filter-recent__rate").rateYo({
    readOnly: true,
    spacing: "8px",
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });
  $(".product-one__rate").rateYo({
    readOnly: true,
    spacing: "13px",
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $(".catalog-list__rate").rateYo({
    readOnly: true,
    spacing: "13px",
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $(".comments__rate").rateYo({
    readOnly: true,
    spacing: "1px",
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });
  $(".review__rate").rateYo({
    readOnly: false,
    spacing: "1px",
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $('.slider-top__inner').slick({
    arrows: false,
    dots: true,
    speed: 1300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    vertical: true,
    draggable: false
  });
  var mixer = mixitup('.catalog-grid', {
    selectors: {
      control: '.week-catalog__btn'
    }
  });
  var mixer2 = mixitup('.design-catalog__content', {
    selectors: {
      control: '.design-catalog__btn'
    }
  });




});


