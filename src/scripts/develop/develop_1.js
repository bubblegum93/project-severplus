function burger(){
  var menu = $('.header-nav-list');
  $('.burger').on('click', function(e) {
    e.preventDefault();

    if ($('.burger').hasClass('active')) {
      menu.slideUp('fast');
      // $('.header-nav-list').addClass('slideRightBack')
      $(this).removeClass('active');
    } else {
      // $('.header-nav-list').removeClass('slideRightBack')
      menu.slideDown('fast');
      // menu.attr( "style", "display: flex" );
      $(this).addClass('active');
    }
  });

  $(window).resize(function() {
    var menu = $('.site-list');
    var w = $(window).width();
    if(w > 1024) {
      menu.removeAttr('style');
      $('.burger').removeClass('active');
    }
  });
};

$(document).ready(function(){
  burger();

  $('.medical-list-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: false
        }
      }
    ]
    
  });

  $('.specialist-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1152,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    $('.button-circle-prev').on('click', function(e) {
        e.preventDefault();
        $('.specialist-slider').slick('slickPrev');
      });
    
      $('.button-circle-next').on('click', function(e) {
        e.preventDefault();
        $('.specialist-slider').slick('slickNext');
      });

      $(".header-nav__appointment").on("click", function(e) {
        e.preventDefault();
        $(".model-appointment").addClass("model-show");
        $(".overlay").addClass("active");
        $('.model-appointment .name input').focus();
      });

      $(".model-close").on("click", function(e) {
        $(".model-appointment").removeClass("model-show")
        $(".overlay").removeClass("active")
      });

      $(document).keydown(function(e) {
        if (e.keyCode == 27) {
          $(".model-appointment").removeClass("model-show")
          $(".overlay").removeClass("active")
        }
    });

    $(".phone-mask").mask("(999) 999-9999");



});

$(window).load(function(){

});

$(window).resize(function(){

});