// $(window).load(function () {
//   // $(".loader-wrap").fadeOut(400,function () {
//   //     $(this).remove();
//   //     $(".loader-wrap").css({"display": "none"});
//   // });

// });
$(document).ready(function () {
  new WOW().init();
  if ($(window).width() < 992) {
    $(".img-conainer").unwrap()
    $(".our-work").addClass("owl-carousel owl-theme")
    $('.our-work').owlCarousel({
      loop: true,
      rtl: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3,
          dots: true
        },
        1000: {
          items: 5
        }
      }
    })
  }
  //  $('#nav-icon3').click(function(){
  //    $('#nav-icon3').toggleClass('open');

  //  });

  $("#nav-icon3").on("click", function () {
    if ($("#nav-icon3").hasClass("open")) {
      $(".animated-nav").fadeOut();
      $('#nav-icon3').removeClass('open');
      $("html, body").css({ "overflow": "visible" });
    } else {
      $(".animated-nav").fadeIn();
      $('#nav-icon3').addClass('open');
      $("html, body").css({ "overflow": "hidden" });
    }
  });
  $(".animated-nav").on("click", function () {
    $(".animated-nav").fadeOut();
    $('#nav-icon3').removeClass('open');
    $("html, body").css({ "overflow": "visible" });
  });

  // $(".zx-header .scroll-icon").on("click", function () {

  //   $(window).scrollTop($(".zx-header").innerHeight(), "slow")

  // });
  // $(window).on("scroll", function () {
    
  // });

  $(window).on("scroll", function(){

    $('a[data-scroll]').on("click",function (e) {
      e.preventDefault();
      //Set Offset Distance from top to account for fixed nav
      var offset = 0;
      var target = ('#' + $(this).data('scroll'));
      var $target = $(target);
      //Animate the scroll to, include easing lib if you want more fancypants easings
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - offset
      }, 1000);
    });
  
  });



});
