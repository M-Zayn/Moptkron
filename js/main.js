
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".demo").fadeOut(500, function () {
      $(this).remove();
      $('body').css("overflow-y", "visible");


  });
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
  if ($(window).width() < 481) {
    $(".for-now").wrap(".sm-icons")
    
  }
  // //  $('#nav-icon3').click(function(){
  // //    $('#nav-icon3').toggleClass('open');

  // //  });

  $("#nav-icon3").on("click", function () {
    if ($("#nav-icon3").hasClass("open")) {
      $(".animated-nav").fadeOut();
      $('#nav-icon3').removeClass('open');
    } else {
      $(".animated-nav").fadeIn();
      $('#nav-icon3').addClass('open');
    }
  });
  $(".animated-nav").on("click", function () {
    $(".animated-nav").fadeOut();
    $('#nav-icon3').removeClass('open');
  });

  // $(".zx-header .scroll-icon").on("click", function () {

  //   $(window).scrollTop($(".zx-header").innerHeight(), "slow")

  // });
  // $(window).on("scroll", function () {
    
  // });





  

// });

$(function() {
  $("#nav-icon3").on("click", function() {
    $(".animated-nav").addClass("open");
  })


  $('a[data-scroll]').on("click",function (e){
    e.preventDefault();    
    
    $("html, body").animate({
      scrollTop: $($(this).attr("data-scroll")).offset().top
    }, 1000);
  });
})


