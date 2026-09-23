;(function($){
"use strict";

 var WhHl = function ($scope, $) {
	var witr_car_vari = $scope.find('.witr_slick_active').eq(0);
if( witr_car_vari.length > 0){ witr_car_vari[0].style.display='block'; }	
	if (witr_car_vari.length > 0) {
	var witrshowdata = witr_car_vari.data('witrshowdata');	
	var witr_infiv = witrshowdata['witr_infiv'];
		var witr_stsv = parseInt(witrshowdata['witr_stsv']) || 3;
		var witr_stsrv = parseInt(witrshowdata['witr_stsrv']) || 1;		
		var witr_apv = witrshowdata['witr_apv'];
		var witr_apsv = parseInt(witrshowdata['witr_apsv']) || 3000;
		var witr_spv = parseInt(witrshowdata['witr_spv']) || 300;
		var witr_pohv = witrshowdata['witr_pohv'];
		var witr_cmv = witrshowdata['witr_cmv'];
		var witr_cpv = witrshowdata['witr_cpv'] ? parseInt( witrshowdata['witr_cpv'] ): 0;
		var witr_fadev = witrshowdata['witr_fadev'];
		var witr_arrv = witrshowdata['witr_arrv'];
		var witr_dotv = witrshowdata['witr_dotv'];
		
		var witr_bpdv = parseInt(witrshowdata['witr_bpdv']) || 1200;
		var witr_shv = parseInt(witrshowdata['witr_shv']) || 3;
		var witr_bptv = parseInt(witrshowdata['witr_bptv']) || 992;
		var witr_tshv = parseInt(witrshowdata['witr_tshv']) || 3;
		var witr_bpmv = parseInt(witrshowdata['witr_bpmv']) || 767;
		var witr_mshv = parseInt(witrshowdata['witr_mshv']) || 2;
		var witr_bpsmv = parseInt(witrshowdata['witr_bpsmv']) || 480;
		var witr_smshv = parseInt(witrshowdata['witr_smshv']) || 1;	

		
	witr_car_vari.slick({
		infinite: witr_infiv,
		slidesToShow: witr_stsv,
		slidesToScroll: witr_stsrv,		
		autoplay: witr_apv,
		autoplaySpeed: witr_apsv,					
		speed: witr_spv,
		pauseOnHover: witr_pohv,
		centerMode: witr_cmv,
		centerPadding: witr_cpv+'px',		
		fade: witr_fadev,
		arrows: witr_arrv,
		dots: witr_dotv,
		rtl: elementorFrontendConfig.is_rtl,
		responsive: [
			{
				breakpoint: witr_bpdv,
				settings: {
					slidesToShow: witr_shv,
				
				}
			},
			{
				breakpoint: witr_bptv,
				settings: {
					slidesToShow: witr_tshv,
					
				}
			},
			{
				breakpoint: witr_bpmv,
				settings: {
					slidesToShow: witr_mshv,
					
				}
			},			
			{
				breakpoint: witr_bpsmv,
				settings: {
					slidesToShow: witr_smshv,
					
				}
			}
		]		
	});		
	} 
	 
 }
 
  var WhCo = function ($scope, $) {
	var wcounter = $scope.find('.counter').eq(0);
	if (wcounter.length > 0) {
                wcounter.counterUp({
                    delay: 1,
                    time: 1000
                });
          
	} 
	 
 }
/*
var Wdhv = function ($scope, $) {
var wdhover = $scope.find('.single_protfolio').eq(0);
if (wdhover.length > 0) {
		wdhover.directionalHover();
		wdhover.directionalHover({
			overlay: "em_port_content",
			easing: "swing",
			speed: 50
		});	
		
} 
 
}*/

			/*==== Mouse Direction Hover Iffect ====*/
			
			$('.tx_dir_effect').directionalHover();
			$('.tx_dir_effect').directionalHover({				
				overlay: "tx_diff_style",				
				easing: "swing",
				speed: 50
			});	

 /* portfolio active */
 var Wpotf = function ($scope, $) {
	var portfolio = $scope.find('#epoitem').eq(0);
	if (portfolio.length > 0) {
                portfolio.imagesLoaded( function() {
					var epotitem =$('.em_portitem');
                    epotitem.isotope({
                        itemSelector: ".eportfolio_item",
                        layoutMode: 'masonry',
                        filter:"*",
                        animationOptions :{
                            duration:1000
                        },
                        hiddenStyle: {
                            opacity: 0,
                            transform: 'scale(.4)rotate(60deg)',
                        },
                        visibleStyle: {
                            opacity: 1,
                            transform: 'scale(1)rotate(0deg)',
                        },
                        stagger: 0,
                        transitionDuration: '0.9s',
                        masonry: {}
                    });
                    $(".filter_menu li").on('click',function(){
                        $(".filter_menu li").removeClass("current_menu_item");
                        $(this).addClass("current_menu_item");

                        var selector = $(this).attr("data-filter");
                        epotitem.isotope({
                            filter: selector,
                            animationOptions: {
                                animationDuration: 750,
                                easing: 'linear',
                                queue: false
                            }
                        });
                        return false;
                    });

                });
	} 
	 
 }

 /* product active */
 var Wproduct = function ($scope, $) {
	var eproduct = $scope.find('#em_load_product').eq(0);
	if (eproduct.length > 0) {
			eproduct.imagesLoaded( function() {
				var epitem =$('.em_item_product');
				
				epitem.isotope({
					itemSelector: ".eproduct_item",
					layoutMode: 'masonry',
					filter:"*",
					animationOptions :{
						duration:1000
					},
					hiddenStyle: {
						opacity: 0,
						transform: 'scale(.4)rotate(60deg)',
					},
					visibleStyle: {
						opacity: 1,
						transform: 'scale(1)rotate(0deg)',
					},
					stagger: 0,
					transitionDuration: '0.9s',
					masonry: {}
				});
				$("#witrp_filter li").on('click',function(){
					$("#witrp_filter li").removeClass("ema_product_item");
					$(this).addClass("ema_product_item");

					var selector = $(this).attr("data-filter");
					epitem.isotope({
						filter: selector,
						animationOptions: {
							animationDuration: 750,
							easing: 'linear',
							queue: false
						}
					});
					return false;
				});

			});
	} 
	 
 }  
 var Wprog = function () {
 new WOW().init();	
}



 /*
 var WhAcco = function ($scope, $) {
	var witr_acco = $scope.find('#accordion').eq(0);
	if (witr_acco.length > 0) {
				$('#accordion .card').each(function () {
					var $this = $(this);
					$this.on('click', function (e) {
						var has = $this.hasClass('active');
						$('#accordion .card').removeClass('active show');
						if (has) {
							$this.removeClass('active show');
						} else {
							$this.addClass('active show');
						}
					});
				});
	} 
	 
 }
    */
     /* Run this code under Elementor. */
    $(window).on('elementor/frontend/init', function () {
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/witrsliderslick.default', WhHl);
		 /*elementorFrontend.hooks.addAction( 'frontend/element_ready/wportg.default', Wdhv);*/
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/wportg.default', Wpotf);		 
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/carsoulw.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/witrsslick.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/witrimgtext.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/witreventw.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/witrblogwisget.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/witrpslide.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/wscreencls.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/witrtestiw.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/wcounterw.default', WhCo);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/wprogress.default', Wprog);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/wproduct.default', WhHl);
		 elementorFrontend.hooks.addAction( 'frontend/element_ready/wproduct.default', Wproduct);
    });

})(jQuery);