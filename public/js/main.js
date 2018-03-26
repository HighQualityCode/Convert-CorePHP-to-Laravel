(function($) {
  "use strict";

  /*-----------------------------
	Menu Stick
---------------------------------*/
  if ($(".sticker")[0]) {
    $(".sticker");
    $(window).scroll(function() {
      var wind_scr = $(window).scrollTop();
      var window_width = $(window).width();
      var head_w = $(".sticker").height();
      if (window_width >= 10) {
        if (wind_scr < 400) {
          if ($(".sticker").data("stick") === true) {
            $(".sticker").data("stick", false);
            $(".sticker")
              .stop(true)
              .animate({ opacity: 0 }, 300, function() {
                $(".sticker").removeClass("stick slideDown");
                $(".sticker")
                  .stop(true)
                  .animate({ opacity: 1 }, 300);
              });
          }
        } else {
          if (
            $(".sticker").data("stick") === false ||
            typeof $(".sticker").data("stick") === "undefined"
          ) {
            $(".sticker").data("stick", true);
            $(".sticker")
              .stop(true)
              .animate({ opacity: 0 }, 300, function() {
                $(".sticker").addClass("stick slideDown");
                $(".sticker.stick")
                  .stop(true)
                  .animate({ opacity: 1 }, 300);
              });
          }
        }
      }
    });
  }

  /*----------------------------
    jQuery MeanMenu
------------------------------ */
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "990",
    meanMenuContainer: ".mobile-menu",
    onePage: true
  });

  /*----------------------------
    Wow js active
------------------------------ */
  new WOW().init();

  /*--------------------------
    ScrollUp
---------------------------- */

  $.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade"
  });

  /*--------------------------------
	Testimonial Slick Carousel
-----------------------------------*/
  $(".testimonial-text-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: ".slider-nav"
  });
  /*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
  $(".testimonial-image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testimonial-text-slider",
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: false,
          slidesToShow: 1,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  /*--------------------------------
	One Page Nav
-----------------------------------*/
  var top_offset = $(".main-menu").height() - -60;
  $(".main-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset
  });

  // var menu_offset = $('#menu-download').height() - -60;
  // $('#menu-download').onePageNav({
  //     currentClass: 'active',
  //     scrollOffset: menu_offset,
  // });
})(jQuery);

// Scroll to a certain element
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("#navbarTogglerDemo03 a, a.download").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
