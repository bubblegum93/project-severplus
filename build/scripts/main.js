'use strict';

/**
* Check scroll-bar width
* exemple ->   let scroll = $.scrollbarWidth();
*/
$.scrollbarWidth = function () {
    var a, b, c;if (c === undefined) {
        a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b = a.children();c = b.innerWidth() - b.height(99).innerWidth();a.remove();
    }return c;
};

/**
* Scroll to the block
* @param {block} str - For what we click
* @param {targetBlock} str - to what we should scroll
*/
function scrollUp(block, targetBlock) {
    $(block).click(function (e) {
        var target = $(targetBlock).offset().top;

        $('body,html').stop().animate({ scrollTop: target }, 800);
        return false;

        e.preventDefault();
    });
}

/**
* Scroll animation
* @param {item} jquery obj - Wrapper for class 'animate-it';
*/
function animationBlock(item) {

    $(window).scroll(function () {
        checkForAnimate();
    });

    function checkForAnimate() {
        var bottomCheck = $(window).height() + $(window).scrollTop();
        var windowTop = $(window).scrollTop() + $(window).height() / 1.5;
        item.each(function () {
            if (windowTop > $(this).offset().top || bottomCheck > $('body').height() * 0.98) {

                var itemSect = $(this);
                var point = 0;
                itemSect.find('.animate-it').addClass('animated');

                var timer = setInterval(function () {
                    itemSect.find('.animate-delay').eq(point).addClass('animated');
                    point++;
                    if (itemSect.find('.animate-delay').length == point) {
                        clearInterval(timer);
                    }
                }, 200);
            }
        });
    }
    checkForAnimate();
}

/**
* GO TO href (smooth)
*/
function goTo() {
    $('.header-menu a').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top - 65;
        $('body,html').animate({ scrollTop: target }, 500);
    });
}

/**
* Cut text script
* (Add to  div class "cut-text" width data-attr "data-cut"(length letters to show) )
*/
function cutText() {
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function () {
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if (text.length > value && value > 0) {
            var newText = text.substring(0, value) + filler;
            $(this).text(newText);
        }
    });
};

/**
* Functional header butter
* @param {menuMobile} jquery obj - For what we click
* @param {toggleMenu} jquery obj - to what menu we will slideToggle
*/
function headeButer(menuMobile, toggleMenu) {
    if (menuMobile) {
        menuMobile.click(function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                $(this).toggleClass('active');
                toggleMenu.stop().slideToggle();
            }
        });

        $(document).on('click touchstart', function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0) {
                    toggleMenu.slideUp();
                    menuMobile.removeClass('active');
                }
            }
        });
    }
}

/**
* Expresion for numbers with spaces
* @param {x} number
* @return {string}
*/
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

$(document).ready(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());

    goTo();
});

$(window).resize(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());
});
'use strict';

function burger() {
  var menu = $('.header-nav-list');
  $('.burger').on('click', function (e) {
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

  $(window).resize(function () {
    var menu = $('.site-list');
    var w = $(window).width();
    if (w > 1024) {
      menu.removeAttr('style');
      $('.burger').removeClass('active');
    }
  });
};

$(document).ready(function () {
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
    responsive: [{
      breakpoint: 500,
      settings: {
        dots: false
      }
    }]

  });

  $('.specialist-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 1152,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('.button-circle-prev').on('click', function (e) {
    e.preventDefault();
    $('.specialist-slider').slick('slickPrev');
  });

  $('.button-circle-next').on('click', function (e) {
    e.preventDefault();
    $('.specialist-slider').slick('slickNext');
  });

  $(".header-nav__appointment").on("click", function (e) {
    e.preventDefault();
    $(".model-appointment").addClass("model-show");
    $(".overlay").addClass("active");
    $('.model-appointment .name input').focus();
  });

  $(".model-close").on("click", function (e) {
    $(".model-appointment").removeClass("model-show");
    $(".overlay").removeClass("active");
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".model-appointment").removeClass("model-show");
      $(".overlay").removeClass("active");
    }
  });

  $(".phone-mask").mask("(999) 999-9999");
});

$(window).load(function () {});

$(window).resize(function () {});
"use strict";

$(document).ready(function () {});

$(window).load(function () {});

$(window).resize(function () {});
"use strict";

$(document).ready(function () {});

$(window).load(function () {});

$(window).resize(function () {});
"use strict";

$(document).ready(function () {});

$(window).load(function () {});

$(window).resize(function () {});
"use strict";

$(document).ready(function () {});

$(window).load(function () {});

$(window).resize(function () {});