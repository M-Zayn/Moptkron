// $(window).load(function () {
//   // $(".loader-wrap").fadeOut(400,function () {
//   //     $(this).remove();
//   //     $(".loader-wrap").css({"display": "none"});
//   // });

// });
$(document).ready(function () {

  $('a[data-scroll]').on("click",function (e){
    // e.preventDefault();
    console.log($(this).attr("data-scroll"));
    
    $("body").animate({
      scrollTop: $($(this).attr("data-scroll")).offset().top
    })
  });

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

 



});
