// /*=== Javascript function indexing hear===========

// 01. headerSticky()
// 02. swiperActivation()
// 03. wowActive()
// 04. videoActivation()
// 05. jaraLux()
// 06. backToTopInit()
// 07. cookiePopup()
// 08. datePicker()
// 09. magnificPopup()
// 10. mobileMenu()
// 11. desktopMenu()
// 12. stickySidebar()
// 13. Preloader()


// ==================================================*/
// (function ($) {
//     'use strict';
   
//     var rtsJs = {
//       m: function (e) {
//         rtsJs.d();
//         rtsJs.methods();
//       },
//       d: function (e) {
//           this._window = $(window),
//           this._document = $(document),
//           this._body = $('body'),
//           this._html = $('html')
//       },
//       methods: function (e) {
//         rtsJs.headerSticky();
//         rtsJs.swiperActivation();
//         rtsJs.wowActive();
//         rtsJs.videoActivation();
//         rtsJs.jaraLux();
//         rtsJs.backToTopInit();
//         rtsJs.datePicker();
//         rtsJs.magnificPopup();
//         rtsJs.mobileMenu();
//         rtsJs.desktopMenu();
//         rtsJs.stickySidebar();
//         rtsJs.preloader();
//       },
//        // sticky Header
//       headerSticky: function () {
//         $(window).on("scroll", function() {
//           var ScrollBarPostion = $(window).scrollTop();
//           if (ScrollBarPostion > 100) {
//             $(".header__function").addClass("is__sticky");      
//           } else {
//             $(".header__function").removeClass("is__sticky");   
//           }
//         });
//       },
//       swiperActivation: function(){
//         $(document).ready(function(){
//           // HERO SLIDER 
//           var swiper = new Swiper(".banner__slider", {
//             direction: "horizontal",
//             slidesPerView: 1,
//             loop: true,
//             navigation: {
//               nextEl: ".next",
//               prevEl: ".prev",
//             },
//             speed: 1000,
//             effect: "slide",
//             autoplay: {
//               delay: 5000,
//               disableOnInteraction: false,
//             }
//           });

//           var swiper = new Swiper(".apartment__slider", {
//             slidesPerView: "3",
//             spaceBetween: 30,
//             centeredSlides: true,
//             loop: true,
//             speed: 1000,
//             effect: "slide",
//             pagination: {
//               el: ".rts-pagination",
//               clickable: true
//             },
//             breakpoints: {
//               0: {
//                 slidesPerView: 1,
//                 centeredSlides: false
//               },
//               768: {
//                 slidesPerView: 2.1
//               },
//               1200: {
//                 slidesPerView: 3
//               }
//             }
//           });

//           // TESTIMONIAL SLIDER
//           var swiper = new Swiper(".testimonial__slider", {
//             direction: "horizontal",
//             slidesPerView: 1,
//             loop: true,
//             speed: 1000,
//             centeredSlides: true,
//             autoplay: false,
//             navigation: {
//               nextEl: ".slider-button-next",
//               prevEl: ".slider-button-prev",
//             },
//           });
          
//           // TESTIMONIAL SLIDER
//           var swiper = new Swiper(".testimonial__slider", {
//             direction: "horizontal",
//             slidesPerView: 1,
//             loop: true,
//             speed: 1000,
//             centeredSlides: true,
//             autoplay: false,
//             navigation: {
//               nextEl: ".button-next",
//               prevEl: ".button-prev",
//             },
//           });

//           // APARTMENT SLIDER
//           var apartMent = new Swiper(".room__slider", {
//             slidesPerView: 3,
//             spaceBetween: 30,
//             loop: true,
//             speed: 1000,
//             centeredSlides: true,
//             autoplay: false,
//             pagination: {
//               el: ".rts-pagination",
//               clickable: true
//             },
//             breakpoints: {
//               0: {
//                 slidesPerView: 1,
//               },
//               575: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//                 centeredSlides: false
//               },
//               1200: {
//                 slidesPerView: 3,
//               },
//               1400: {
//                 slidesPerView: 3,
//               }
//             }
//           });
			
// 			// Amenities SLIDER
//           var apartMent = new Swiper(".amenities-slider", {
//             slidesPerView: 3,
//             spaceBetween: 30,
//             loop: true,
//             speed: 1000,
//             centeredSlides: true,
//             autoplay: false,
//             pagination: {
//               el: ".rts-pagination",
//               clickable: true
//             },
//             breakpoints: {
//               0: {
//                 slidesPerView: 3,
//                 spaceBetween: 8,
//               },
//               575: {
//                 slidesPerView: 3,
//                 spaceBetween: 8,
//               },
//               768: {
//                 slidesPerView: 3,
//                 centeredSlides: false
//               },
//               1200: {
//                 slidesPerView: 3,
//               },
//               1400: {
//                 slidesPerView: 3,
//               }
//             }
//           });
		  
// 		  // Amenities SLIDER
//           var apartMent = new Swiper(".outdoor-gallery", {
//             slidesPerView: 2,
//             spaceBetween: 10,
//             loop: true,
//             speed: 1000,
//             autoplay: false,
//             pagination: {
//               el: ".rts-pagination",
//               clickable: true
//             },
//             breakpoints: {
//               0: {
//                 slidesPerView: 1,
//               },
//               575: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 1,
//                 centeredSlides: false
//               },
//               1200: {
//                 slidesPerView: 2,
//               },
//               1400: {
//                 slidesPerView: 2,
//               }
//             }
//           });
          
//           // APARTMENT SLIDER
//           var apartMent = new Swiper(".main__room__slider", {
//             slidesPerView: 4,
//             spaceBetween: 30,
//             loop: true,
//             speed: 1000,
//             centeredSlides: false,
//             autoplay: false,
//             pagination: {
//               el: ".rts-pagination",
//               clickable: true
//             },
//             breakpoints: {
//               0: {
//                 slidesPerView: 1,
//               },
//               575: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//                 centeredSlides: false
//               },
//               992: {
//                 slidesPerView: 2.5,
//                 centeredSlides: false
//               },
//               1200: {
//                 slidesPerView: 3,
//               },
//               1400: {
//                 slidesPerView: 4,
//               }
//             }
//           });

//         // GALLERY SLIDER
//         let Gallery = new Swiper(".gallery__slider", {
//           slidesPerView: 4,
//           spaceBetween: 30,
//           loop: true,
//           speed: 1000,
//           autoplay: true,
//           navigation: {
//             nextEl: ".slider-button-next",
//             prevEl: ".slider-button-prev",
//           },
//           breakpoints: {
//             0: {
//               slidesPerView: 1,
//             },
//             575: {
//               slidesPerView: 2,
//             },
//             768: {
//               slidesPerView: 3,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//             1400: {
//               slidesPerView: 4,
//             }
//           }
//         });

//         // ROOM SLIDER FOUR
//         let RoomFour = new Swiper(".room__slider.is__home__four", {
//           slidesPerView: 2,
//           spaceBetween: 30,
//           loop: true,
//           speed: 1000,
//           autoplay: true,
//           navigation: {
//             nextEl: ".slider-button-next",
//             prevEl: ".slider-button-prev",
//           },
//           breakpoints: {
//             0: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },  
//             1200: {
//               slidesPerView: 2,
//             },
//           }
//         });

//         // SERVICE SLIDER HOME FOUR
//         let serviceFour = new Swiper(".service__slider", {
//           slidesPerView: 4,
//           spaceBetween: 30,
//           loop: true,
//           speed: 1000,
//           autoplay: true,
//           pagination: {
//             el: ".rts-pagination",
//             clickable: true
//           },
//           breakpoints: {
//             0: {
//               slidesPerView: 1,
//             },
//             767: {
//               slidesPerView: 2.01,
//             },
//             991: {
//               slidesPerView: 2.5,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//             1400: {
//               slidesPerView: 3,
//             },
//             1600: {
//               slidesPerView: 4,
//             }
//           }
//         });

//         // SERVICE SLIDER HOME FIVE
//         let serviceFive = new Swiper(".service__slider__five", {
//           slidesPerView: 3.05,
//           spaceBetween: 30,
//           loop: true,
//           speed: 1000,
//           autoplay: true,
//           centeredSlides: true,
//           navigation: {
//             nextEl: ".slider-button-next",
//             prevEl: ".slider-button-prev",
//           },
//           breakpoints: {
//             0: {
//               slidesPerView: 1,
//               centeredSlides: false,
//             },
//             767: {
//               slidesPerView: 2.01,
//               centeredSlides: false,
//             },
//             991: {
//               slidesPerView: 2.5,
//               centeredSlides: false,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//             1400: {
//               slidesPerView: 3,
//             }
//           }
//         });

//         // VIDEO TEXT SLIDER
//         let videoText = new Swiper(".video__text__slider", {
//           slidesPerView: 1,
//           spaceBetween: 0,
//           loop: true,
//           speed: 1000,
//           autoplay: true,
//           autoplay: {
//             delay: 5000,
//           }
//         });

//         // Initialize the main slider (model__hero__top)
//         var mainSlider = new Swiper('.testimonial__author', {
//             slidesPerView: 1,
//             loop: true,
//             speed: 1000,
//             grabCursor: true,
//             effect: 'fade',
//         });

//         // Initialize the thumbnail slider (model__hero__slider)
//         var thumbSlider = new Swiper('.tm__slider__five', {
//             slidesPerView: 1,
//             loop: true,
//             speed: 1000,
//             effect: 'slide',
//             grabCursor: true,
//             autoplay: {
//                 delay: 3000,
//             },
//             navigation: {
//                 nextEl: ".button-next",
//                 prevEl: ".button-prev",
//             },
//         });
//         // Synchronize the two sliders
//         mainSlider.controller.control = thumbSlider;
//         thumbSlider.controller.control = mainSlider;
//         });
         
//         // instagram slider
//         var instaSlider = new Swiper('.insta__gallery__slider', {
//             slidesPerView: 5,
//             loop: true,
//             speed: 1000,
//             spaceBetween: 10,
//             grabCursor: true,
//             centeredSlides: true,
//             autoplay: {
//                 delay: 300000,
//             },
//             breakpoints: {
//               0: {
//                 slidesPerView: 3,
//                 spaceBetween: 8,
//               },
//               480: {
//                 slidesPerView: 3,
//                 spaceBetween: 8,
//               },
//               576: {
//                 slidesPerView: 3,
//                 spaceBetween: 8,
//               },
//               768: {
//                 slidesPerView: 3.5,
//                 spaceBetween: 0,
//               },
//               992: {
//                 slidesPerView: 4.5,
//                 spaceBetween: 0,
//               },
//               1200: {
//                 slidesPerView: 4.5,
//                 spaceBetween: 0,
//               },
//             }
//           });

//       },  
//       wowActive: function () {
//         new WOW().init();
//       },

//       videoActivation: function (e) {
//         $(document).ready(function() {
//           $('.popup-youtube, .popup-vimeo, .popup-gmaps, .video-play').magnificPopup({
//             disableOn: 700,
//             type: 'iframe',
//             mainClass: 'mfp-fade',
//             removalDelay: 160,
//             preloader: false,
//             fixedContentPos: false
//           });
//         });
//       },

//       jaraLux: function (e) {
//         $(document).ready(function() {
//           // Function to detect if the device is mobile
//           function isMobileDevice() {
//               return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//           }
      
//           // Initialize jarallax only if it's not a mobile device
//           if (!isMobileDevice()) {
//               $('.jarallax').jarallax();
//           } else {
//               console.log('Jarallax skipped on mobile devices');
//           }
//       });
      
//       },

//       backToTopInit: function (e) {
//         $(document).ready(function () {
//           var backButton = $("#rts-back-to-top");
//           $(window).scroll(function () {
//             if ($(this).scrollTop() > 100) {
//               backButton.addClass("show");
//             } else {
//               backButton.removeClass("show");
//             }
//           });
//           backButton.on("click", function () {
//             $("html, body").animate(
//               {
//                 scrollTop: 0,
//               },
//               1000
//             );
//           });
//         });
//       },

//       datePicker: function (e) {
//         $(function () {
//           $("#check__in, #check__out").datepicker({
//               dateFormat: "dd-mm-yy",
//               duration: "fast"
//           });
//       });
//       },
//       magnificPopup: function (e) {
//         $('.gallery').each(function() { 
//           $(this).magnificPopup({
//               delegate: 'a', 
//               type: 'image',
//               gallery: {
//                 enabled:true
//               }
//           });
//       });
//       },
//       mobileMenu: function (e) {
//         try {
//           $(".offcanvas__menu").meanmenu({
//             meanMenuContainer: ".mobile__menu__active",
//             meanScreenWidth: "991",
//             meanExpand: ["+"],
//           });
//         } catch (error) {
//           console.log(error);
//         }
//       },
//       desktopMenu: function (e) {
//         $(document).ready(function() {
//           $('.has__children .toggle').on('click', function(event) {
//               event.preventDefault(); // Prevent the default action of the click event
              
//               var $parentLi = $(this).closest('li'); // Get the closest <li> element
      
//               // Toggle the 'active' class on the parent <li> to show/hide the submenu
//               $parentLi.toggleClass('active');
              
//               // Optionally, close other open menus by removing the 'active' class from other <li> elements
//               $('.has__children').not($parentLi).removeClass('active');
//           });
//       });
//       },
//       stickySidebar: function (e) {
//         if (typeof $.fn.theiaStickySidebar !== "undefined") {
//           $(".sticky-wrap .sticky-item").theiaStickySidebar({
//             additionalMarginTop: 100,
//           });
//         }
//       },
//       preloader: function (e){
//         window.addEventListener('load',function(){
//           document.querySelector('body').classList.add("loaded")  
//         });     
//       }

//     }
//     rtsJs.m(); 

  
//   })(jQuery, window)  


// const swiper = new Swiper(".secCWrapper", {
//   loop: true,
//   spaceBetween: 20,

//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//   },

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   //   RESPONSIVE BREAKPOINTS

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },

//     470: {
//       slidesPerView: 2,
//     },

//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

const swiperam = new Swiper('.swiper-am', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
//   column:5,

  slidesPerView: 3,
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 50
    },
    // when window width is >= 640px
    760: {
      spaceBetween: 50
    }
  },
  
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
//   column:5,

  slidesPerView: 3,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4
    },
    // when window width is >= 640px
    760: {
      slidesPerView: 5,
      spaceBetween: 300
    }
  },
  
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});