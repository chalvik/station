(function ($) {
  "use strict";
  /*==== preloder  ====*/
  function txpreloader() {
      $(window).on("load", function () {
          $("#twr_pretwr_loader_pre").addClass("twr_loader_pre");
          if ($("#twr_pretwr_loader_pre").hasClass("twr_loader_pre")) {
              $("#pretwr_loader_pre")
                  .delay(900)
                  .queue(function () {
                      $(this).remove();
                  });
          }
      });
  }
  txpreloader();
  /*==== preloder remove  ====*/
  $(".twr_precross").on("click", function () {
      $("#pretwr_loader_pre").addClass("twr_pre_remove");
  });
   /*==== hamburger remove  ====*/
  $(".hamburger").on("click", function () {
      $(this).toggleClass("is-active");
      $(this).next().toggleClass("nav-show");
  });
     /*==== meanmenu menu  ====*/
  $(".mobile-menu nav").meanmenu({ meanScreenWidth: "990", meanMenuContainer: ".mobile-menu", onePage: !0 });
  var emsmenu = $(".em-quearys-menu i.t-quearys");
  var emscmenu = $(".em-quearys-menu i.t-close");
  var emsinner = $(".em-quearys-inner");
  emsmenu.on("click", function () {
      emsinner.addClass("em-s-open");
      $(this).addClass("em-s-hiddens");
      emscmenu.removeClass("em-s-hidden");
  });
  emscmenu.on("click", function () {
      emsinner.removeClass("em-s-open");
      $(this).addClass("em-s-hidden");
      emsmenu.removeClass("em-s-hidden");
  });
  var rightma = $(".right_sideber_menu i.openclass");
  var rightmi = $(".right_sideber_menu i.closeclass");
  var rightmir = $(".right_sideber_menu_inner");
  rightma.on("click", function () {
      rightmir.addClass("tx-s-open");
  });
  rightmi.on("click", function () {
      rightmir.removeClass("tx-s-open");
  });
     /*==== mobile menu  ====*/
  var mrightma = $(".mobile_menu_o i.openclass");
  var mrightmi = $(".mobile_menu_o i.closeclass");
  var mrightmir = $(".mobile_menu_inner");
  var mobile_ov = $(".mobile_overlay");
  var mobile_onep = $(".mobile-menu .mean-nav ul#menu-one-page-menu li");
  var mobile_onenp = $(".mobile-menu .mean-nav ul#menu-one-page-menu li.menu-item-has-children");
  mrightma.on("click", function () {
      mrightmir.addClass("tx-s-open");
      mobile_ov.addClass("mactive");
  });
  mrightmi.on("click", function () {
      mrightmir.removeClass("tx-s-open");
      mobile_ov.removeClass("mactive");
  });
  mobile_onep.on('click', function() {
    mrightmir.removeClass('tx-s-open');
    mobile_ov.removeClass('mactive');
});
mobile_onenp.on('click', function() {
    mrightmir.addClass('tx-s-open');
    mobile_ov.addClass('mactive');
}); 
     /*==== one page menu  ====*/
  var top_offset = $(".one_page").height() + 0;
  $(".one_page .muzium_menu .nav_scroll").onePageNav({ currentClass: "current", changeHash: !1, scrollSpeed: 1000, scrollOffset: top_offset, scrollThreshold: 0.5, filter: "", easing: "swing" });
  $(".nav_scroll > li:first-child").addClass("current");
  var pksticky = $(".scroll_fixed");
  $(window).on("scroll", function () {
      if ($(window).scrollTop() > 200) {
          pksticky.addClass("prefix");
      } else {
          pksticky.removeClass("prefix");
      }
  });
     /*==== transprent menu  ====*/
  var pktransp = $(".trp_nav_area");
  $(window).on("scroll", function () {
      if ($(window).scrollTop() > 200) {
          pktransp.addClass("hbg2");
      } else {
          pktransp.removeClass("hbg2");
      }
  });
     /*==== headrooma  ====*/
  if ($(".headrooma").length != 0) {
      var myElement = document.querySelector(".headrooma");
      var headroom = new Headroom(myElement);
      headroom.init();
  }
    /*==== venobox ====*/ 
 new VenoBox({
    selector: '.venobox',
});
   /*==== blog-messonary  ====*/
  $(".bgimgload").imagesLoaded(function () {
      if ($.fn.isotope) {
          var $blogmassonary = $(".blog-messonary");
          $blogmassonary.isotope({ itemSelector: ".grid-item", filter: "*", resizesContainer: !0, layoutMode: "masonry", transitionDuration: "0.8s" });
      }
  });
     /*==== slick active  ====*/
  var recentreviewf = $(".recent-reviews");
  if (recentreviewf.length > 0) {
      recentreviewf.slick({ infinite: !0, autoplay: !0, autoplaySpeed: 3000, speed: 1000, slidesToShow: 1, slidesToScroll: 1, arrows: !0, dots: !1 });
  }
  var tfooter = $(".witr_footer_carousel");
  if (tfooter.length > 0) {
      tfooter.slick({ infinite: !0, autoplay: !0, autoplaySpeed: 3000, speed: 1000, slidesToScroll: 1, arrows: !1, dots: !0 });
  }
  var wsingle_gallery = $(".single_gallery");
  if (wsingle_gallery.length > 0) {
      wsingle_gallery.slick({ infinite: !0, autoplay: !0, autoplaySpeed: 3000, speed: 2000, slidesToShow: 1, slidesToScroll: 1, arrows: !0, dots: !1 });
  }
  var wsingle_evactive = $(".single_evactive");
  if (wsingle_evactive.length > 0) {
      wsingle_evactive.slick({ infinite: !0, autoplay: !0, autoplaySpeed: 3000, speed: 2000, slidesToShow: 3, slidesToScroll: 1, arrows: !0, dots: !1,
          responsive: [
              { breakpoint: 1200, settings: { slidesToShow: 3 } },
              { breakpoint: 992, settings: { slidesToShow: 2 } },
              { breakpoint: 767, settings: { slidesToShow: 1 } },
          ],
	  });
  } 
  var wp_related = $(".wp_related");
  if (wp_related.length > 0) {
      wp_related.slick({
          infinite: !1,
          autoplay: !1,
          autoplaySpeed: 3000,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: !0,
          dots: !1,
          responsive: [
              { breakpoint: 1200, settings: { slidesToShow: 3 } },
              { breakpoint: 992, settings: { slidesToShow: 2 } },
              { breakpoint: 767, settings: { slidesToShow: 1 } },
          ],
      });
  }
  var witr_cross_car = $(".witr_cross_car");
  if (witr_cross_car.length > 0) {
      witr_cross_car.slick({ infinite: !1, autoplay: !0, autoplaySpeed: 3000, speed: 1000, slidesToShow: 2, slidesToScroll: 1, arrows: !0, dots: !1, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 1 } }] });
  }
/*==== scrollUp  ====*/
$.scrollUp({
	scrollText: '<i class="ti-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
}); 



})(jQuery);
