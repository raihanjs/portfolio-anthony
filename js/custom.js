$(document).ready(function () {

   //Sticky Navbar
   $('.sticky-plugin').waypoint(function (direction) {
      if (direction == 'down') {
         $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky');
      }
   });



   //Animated Menu
   $('#btn').on({
      click: function () {
         $('.menu').css({ "left": "0" });
         $('#close').css({ "display": "block" });
         $('#btn').css({ "display": "none" });
      }
   });

   $('#close').on({
      click: function () {
         $('#close').css({ "display": "none" });
         $('#btn').css({ "display": "block" });
         $('.menu').css({ "left": "-100%" });
      }
   });

   //fakeloader
   window.FakeLoader.init({

   });

   //Counter
   $('.counter').counterUp({
      delay: 20,
      time: 1000
   });

   //WOW JS
   new WOW().init();

   $('.popup').magnificPopup({ type: 'image' });


   //scrollTop Button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
         $(".topbtn").fadeIn();
      } else {
         $(".topbtn").fadeOut();
      }
   });
   $(".topbtn").click(function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
   });

});
