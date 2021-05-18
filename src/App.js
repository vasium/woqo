import croppedLogo from "./images/cropped-logo.png";
import authorMockupDark300x173 from "./images/author-mockup-dark-300x173.png";
import authorMockupDark768x443 from "./images/author-mockup-dark-768x443.png";
import authorMockupDark from "./images/author-mockup-dark.png";
// import contact from "./images/contact-bg.jpg";
// import croppedSiteIcon150x150 from "./images/cropped-site-icon-150x150.png";
// import croppedSiteIcon300x300 from "./images/cropped-site-icon-300x300.png";
import heroBanner2 from "./images/hero-banner-2.png";
import logo1 from "./images/logo-1.png";
import logo2 from "./images/logo-2.png";
import logo3 from "./images/logo-3.png";
import logo4 from "./images/logo-4.png";
import logo5 from "./images/logo-5.png";
import pdfIcon from "./images/pdf_icon.png";

import fav from "./images/ios_fav8/img00.png";
import poly from "./images/3d_lowpolydiorama/img00.png";
import pool from "./images/3d_poolhouse/img00.png";
import pixar from "./images/animation_pixarllamp/img00.png";
import maze from "./images/ar_maze/img00.png";
import archviz from "./images/archviz_interior/img00.png";
import robot from "./images/substance_robot&shield/img00.png";
import cyber from "./images/unity_cybercity/img00.png";
import miniature from "./images/unity_miniaturemaze/img00.png";
import haunted from "./images/vr_hauntedchristmas/img00.png";
import house from "./images/vr_house/img00.png";
import club from "./images/vr_nightclub/img00.png";
import poolhouse from "./images/vr_poolhouse/img00.png";

import "./css/fontawesome.min.css";
import "./css/style.min.css";
import "./css/style.css";
import "./css/frontend.min.css";
import "./css/font-awesome.min.css";
import "./css/post-55.css";
import "bootstrap/dist/css/bootstrap.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./css/odometer-theme-default.min.css";

// import jQuery from "jquery";

import $ from "jquery";
import "jquery/dist/jquery.slim.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "fitvids/dist/fitvids.js";
import "jquery-ui/ui/widgets/tooltip.js";
// import "jquery-parallax.js/parallax.js";
// import "./js/parallax.js";

import ImagesLoaded from "imagesloaded/imagesloaded.js";
import jQueryBridget from "jquery-bridget";
import Isotope from "isotope-layout";

import "odometer/odometer.js";

window.jQuery = $;

require("owl.carousel/dist/owl.carousel.js");
require("jquery-scrolla/dist/js/jquery.scrolla.js");
require("jquery-is-in-viewport/dist/isInViewport.jquery.js");

function App() {
  // ---------

  // function onePageMenu() {
  //   function onePageNav($selector) {
  //     var $navSelector = $($selector);
  //     $navSelector
  //       .not('[href="/#"]')
  //       .not('[href="#0"]')
  //       .on("click", function (event) {
  //         if (
  //           window.location.pathname.replace(/^\//, "") ===
  //             this.pathname.replace(/^\//, "") &&
  //           window.location.hostname === this.hostname
  //         ) {
  //           var target = $(this.hash);
  //           target = target.length
  //             ? target
  //             : $("[name=" + this.hash.slice(1) + "]");
  //           $navSelector.removeClass("active");
  //           if (target.length) {
  //             if ($(this)[0].hash.slice(1) === target[0].id) {
  //               $(this).addClass("active");
  //             } else {
  //               $(this).removeClass("active");
  //             }
  //           }
  //           if (target.length) {
  //             event.preventDefault();
  //             $("html, body").animate({ scrollTop: target.offset().top }, 1000);
  //           }
  //         }
  //       });
  //     $navSelector.each(function (event) {
  //       var target = $(this.hash);
  //       if (target.length) {
  //         if (window.location.hash.slice(1) === target[0].id) {
  //           $(this).addClass("active");
  //         } else if (!window.location.hash) {
  //         } else {
  //           $(this).removeClass("active");
  //         }
  //       }
  //     });

  //     function onScroll(event) {
  //       var scrollPos = $(document).scrollTop();
  //       $navSelector.each(function () {
  //         var currLink = $(this);
  //         if (
  //           currLink[0].hash !== "" &&
  //           $(currLink[0].hash).position() !== undefined
  //         ) {
  //           var $getNavHas = $(currLink).prop("href").split("#")[1],
  //             $getSection = $("#" + $getNavHas);
  //           $getSection.each(function () {
  //             var $topPos = $(this).offset().top,
  //               $topPosRound = Math.round($topPos - 120),
  //               $presentPos = Math.round(scrollPos);
  //             if (
  //               $topPosRound <= $presentPos &&
  //               $topPosRound + $(this).height() > $presentPos
  //             ) {
  //               $(currLink).parent().addClass("active");
  //             } else {
  //               $(currLink).parent().removeClass("active");
  //             }
  //           });
  //         } else {
  //           return false;
  //         }
  //       });
  //     }
  //     $(document).on("scroll", onScroll);
  //   }
  //   onePageNav(".mainmenu li a");
  // }

  // ---------
  function progress_var() {
    var $progressBar = $(".skill-progress");
    var $skillBar = $(".skill-bar");

    if ($progressBar.length) {
      // var $section = $progressBar.parent();
      $skillBar.each(function () {
        $progressBar.isInViewport(function (status) {
          if (status === "entered") {
            $(this)
              .find(".progress-content")
              .animate(
                { width: $(this).find(".skill-bar").attr("datapercentage") },
                1500
              );
            $(this)
              .find(".progress-mark")
              .animate(
                { left: $(this).find(".skill-bar").attr("datapercentage") },
                {
                  duration: 1500,
                  step: function (now, fx) {
                    var data = Math.round(now);
                    $(this)
                      .find(".percent")
                      .html(data + "%");
                  },
                }
              );
          }
        });
      });
    }
  }

  // ---------

  jQueryBridget("imagesLoaded", ImagesLoaded, $);

  function contentLoading() {
    $("body").imagesLoaded(function () {
      $(".preloader").delay(2000).fadeOut("slow");
      setTimeout(function () {
        $("body").removeClass("no-scroll");
        $("body").addClass("loading-done");
      }, 2000);
      $("[data-animate]").scrolla({ mobile: true });
    });
  }

  // ---------

  function menu_script() {
    var $submenu = $(".mainmenu").find("li").has(".sub-menu");
    $submenu.prepend(
      "<span class='menu-click'><i class='menu-arrow fa fa-plus'></i></span>"
    );
    var $mobileSubMenuOpen = $(".menu-click");
    $mobileSubMenuOpen.each(function () {
      var $self = $(this);
      $self.on("click", function (e) {
        e.stopImmediatePropagation();
        $self.siblings(".sub-menu").slideToggle("slow");
        $self.children(".menu-arrow").toggleClass("menu-extend");
      });
    });
    var $hamburger_link = $(".hamburger-menus");
    $hamburger_link.on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("click-menu");
      $(this).next().toggleClass("menuopen");
    });
    var $overlayClose = $(".overlaybg");
    $overlayClose.on("click", function (e) {
      e.preventDefault();
      $(this).parent().removeClass("menuopen");
      $(this).parent().siblings(".hamburger-menus").removeClass("click-menu");
    });
    var menuelem = $(".hamburger-content .menu-block");
    var delay_count = 0;
    menuelem.find("ul.mainmenu > li").each(function () {
      $(this).css("transition-delay", delay_count * 200 + "ms");
      delay_count++;
    });
    $(".hg-promo-numbers").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
  }

  function background_image() {
    $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(
      function () {
        var $this = $(this);
        if ($this.hasClass("pt-separate-bg-element")) {
          $this.append('<div class="pt-background">');
          if ($("[data-bg-color]")) {
            $this
              .find(".hg-background")
              .css("background-color", $this.attr("data-bg-color"));
          }
          if (
            $this.attr("data-bg-particles-line-color") ||
            $this.attr("data-bg-particles-dot-color")
          ) {
            $this
              .find(".hg-background")
              .append('<div class="hg-background-particles">');
            $(".hg-background-particles").each(function () {
              var lineColor = $this.attr("data-bg-particles-line-color");
              var dotColor = $this.attr("data-bg-particles-dot-color");
              var parallax = $this.attr("data-bg-particles-parallax");
              $(this).particleground({
                density: 15000,
                lineWidth: 0.2,
                lineColor: lineColor,
                dotColor: dotColor,
                parallax: parallax,
                proximity: 200,
              });
            });
          }
          if ($this.attr("data-bg-image") !== undefined) {
            $this
              .find(".hg-background")
              .append('<div class="hg-background-image">');
            $this
              .find(".hg-background-image")
              .css(
                "background-image",
                "url(" + $this.attr("data-bg-image") + ")"
              );
            $this
              .find(".hg-background-image")
              .css("background-size", $this.attr("data-bg-size"));
            $this
              .find(".hg-background-image")
              .css("background-position", $this.attr("data-bg-position"));
            $this
              .find(".hg-background-image")
              .css("opacity", $this.attr("data-bg-image-opacity"));
            $this
              .find(".hg-background-image")
              .css("background-size", $this.attr("data-bg-size"));
            $this
              .find(".hg-background-image")
              .css("background-repeat", $this.attr("data-bg-repeat"));
            $this
              .find(".hg-background-image")
              .css("background-position", $this.attr("data-bg-position"));
            $this
              .find(".hg-background-image")
              .css("background-blend-mode", $this.attr("data-bg-blend-mode"));
          }
          if ($this.attr("data-bg-parallax") !== undefined) {
            $this.find(".hg-background-image").addClass("hg-parallax-element");
          }
        } else {
          if ($this.attr("data-bg-color") !== undefined) {
            $this.css("background-color", $this.attr("data-bg-color"));
            if ($this.hasClass("btn")) {
              $this.css("border-color", $this.attr("data-bg-color"));
            }
          }
          if ($this.attr("data-bg-image") !== undefined) {
            $this.css(
              "background-image",
              "url(" + $this.attr("data-bg-image") + ")"
            );
            $this.css("background-size", $this.attr("data-bg-size"));
            $this.css("background-repeat", $this.attr("data-bg-repeat"));
            $this.css("background-position", $this.attr("data-bg-position"));
            $this.css(
              "background-blend-mode",
              $this.attr("data-bg-blend-mode")
            );
          }
        }
      }
    );
    // $("[data-bg-parallax='scroll']").each(function () {
    //   var speed = $(this).attr("data-bg-parallax-speed");
    //   var $this = $(this);
    //   var isVisible;
    //   var backgroundPosition;

    //   console.log("fsfsd");
    //   console.log($this);

    //   console.log("fsfsd");
    //   console.log($this);

    //   $this.isInViewport(function (status) {
    //     if (status === "entered") {
    //       console.log("fsdffsddfssdf");
    //       isVisible = 1;
    //       var position;
    //       $(window).scroll(function () {
    //         if (isVisible === 1) {
    //           position = $(window).scrollTop() - $this.offset().top;
    //           backgroundPosition =
    //             100 -
    //             (Math.abs(-$(window).height() - position) /
    //               ($(window).height() + $this.height())) *
    //               100;
    //           if (
    //             $this
    //               .find(".hg-parallax-element")
    //               .hasClass("hg-background-image")
    //           ) {
    //             $this
    //               .find(".hg-background-image.hg-parallax-element")
    //               .css("background-position-y", position / speed + "px");
    //           } else {
    //             $this
    //               .find(".hg-parallax-element")
    //               .css("transform", "translateY(" + position / speed + "px)");
    //           }
    //         }
    //       });
    //     }
    //     if (status === "leaved") {
    //       isVisible = 0;
    //     }
    //   });
    // });
  }

  function popupscript() {
    function getScrollBarWidth() {
      var $outer = $("<div>")
          .css({ visibility: "hidden", width: 100, overflow: "scroll" })
          .appendTo("body"),
        widthWithScroll = $("<div>")
          .css({ width: "100%" })
          .appendTo($outer)
          .outerWidth();
      $outer.remove();
      return 100 - widthWithScroll;
    }
    var $popupImage = $(".popup-image");
    if ($popupImage.length > 0) {
      $popupImage.magnificPopup({
        type: "image",
        fixedContentPos: false,
        gallery: { enabled: true },
        removalDelay: 300,
        mainClass: "mfp-fade",
        callbacks: {
          open: function () {
            $(".page-wrapper, .navbar-nav").css(
              "margin-right",
              getScrollBarWidth()
            );
          },
          close: function () {
            $(".page-wrapper, .navbar-nav").css("margin-right", 0);
          },
        },
      });
    }
    var $videoPopup = $(".video-popup");
    if ($videoPopup.length > 0) {
      $videoPopup.magnificPopup({
        type: "iframe",
        removalDelay: 300,
        mainClass: "mfp-fade",
        overflowY: "hidden",
        iframe: {
          markup:
            '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            "</div>",
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1",
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1",
            },
            gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
          },
          srcAction: "iframe_src",
        },
      });
    }
  }

  // make Isotope a jQuery plugin
  jQueryBridget("isotope", Isotope, $);

  function isotope_activation() {
    var IsoGriddoload = $(".portfolio-grid");
    IsoGriddoload.isotope({
      itemSelector: ".item",
      masonryHorizontal: { rowHeight: 100 },
    });
    var ProjMli = $(".portfolio-filter li a");
    var ProjGrid = $(".portfolio-grid");
    ProjMli.on("click", function (e) {
      e.preventDefault();
      ProjMli.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      ProjGrid.isotope({
        filter: selector,
        animationOptions: { duration: 750, easing: "linear", queue: false },
      });
    });
  }

  // function content_video() {
  //   var $postVideo = $(".blog-single-page");
  //   $postVideo.fitvids();
  // }

  function allCarousel() {
    var $owlCarousel = $(".owl-carousel");
    if ($owlCarousel.length) {
      $owlCarousel.each(function () {
        var items = parseInt($(this).attr("data-owl-items"), 10);

        if (!items) items = 1;
        var nav = parseInt($(this).attr("data-owl-nav"), 2);
        if (!nav) nav = 0;
        var dots = parseInt($(this).attr("data-owl-dots"), 2);
        if (!dots) dots = 0;
        var center = parseInt($(this).attr("data-owl-center"), 2);
        if (!center) center = 0;
        var loop = parseInt($(this).attr("data-owl-loop"), 2);
        if (!loop) loop = 0;
        var margin = parseInt($(this).attr("data-owl-margin"), 10);
        if (!margin) margin = 0;
        var autoWidth = parseInt($(this).attr("data-owl-auto-width"), 2);
        if (!autoWidth) autoWidth = 0;
        var navContainer = $(this).attr("data-owl-nav-container");
        if (!navContainer) navContainer = 0;
        var autoplay = parseInt($(this).attr("data-owl-autoplay"), 2);
        if (!autoplay) autoplay = 0;
        var autoplayTimeOut = parseInt(
          $(this).attr("data-owl-autoplay-timeout"),
          10
        );
        if (!autoplayTimeOut) autoplayTimeOut = 5000;
        var autoHeight = parseInt($(this).attr("data-owl-auto-height"), 2);
        if (!autoHeight) autoHeight = 0;
        var animationIn = $(this).attr("data-owl-anim-in");
        if (!animationIn) animationIn = 0;
        else animationIn = $(this).attr("data-owl-anim-in");
        var animationOut = $(this).attr("data-owl-anim-out");
        if (!animationOut) animationOut = 0;
        else animationOut = $(this).attr("data-owl-anim-out");
        if ($("body").hasClass("rtl")) var rtl = true;
        else rtl = false;
        if (items === 1) {
          $(this).owlCarousel({
            navContainer: navContainer,
            animateOut: animationOut,
            animateIn: animationIn,
            autoplayTimeout: autoplayTimeOut,
            autoplay: 1,
            autoHeight: autoHeight,
            center: center,
            loop: loop,
            margin: margin,
            autoWidth: autoWidth,
            items: 1,
            autoplayHoverPause: 1,
            nav: nav,
            dots: dots,
            rtl: rtl,
            navText: [],
          });
        } else {
          $(this).owlCarousel({
            navContainer: navContainer,
            animateOut: animationOut,
            animateIn: animationIn,
            autoplayTimeout: autoplayTimeOut,
            autoplay: autoplay,
            autoHeight: autoHeight,
            center: center,
            loop: loop,
            margin: margin,
            autoWidth: autoWidth,
            items: 1,
            autoplayHoverPause: 1,
            nav: nav,
            dots: dots,
            rtl: rtl,
            navText: [],
            responsive: {
              1199: { items: items },
              992: { items: 2 },
              768: { items: 2 },
              0: { items: 1 },
            },
          });
        }
        if ($(this).find(".owl-item").length === 1) {
          $(this)
            .find(".owl-nav")
            .css({ opacity: 0, "pointer-events": "none" });
        }
      });
    }
  }

  function scroll_script() {
    var $fixedHeader = $(".fixed-header");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() >= 350) {
        $fixedHeader.addClass("sticky-enable");
      } else {
        $fixedHeader.removeClass("sticky-enable");
      }
    });
    var $scrolltop = $("#scroll-top");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > $(this).height()) {
        $scrolltop.addClass("btn-show").removeClass("btn-hide");
      } else {
        $scrolltop.addClass("btn-hide").removeClass("btn-show");
      }
    });
    $("a[href='#top']").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "normal");
      return false;
    });
  }
  function tooltipScript() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  function initializ() {
    // onePageMenu();
    menu_script();
    // content_video();
    background_image();
    allCarousel();
    progress_var();
    popupscript();
    tooltipScript();
    scroll_script();
  }

  $(function () {
    initializ();
  });
  $(window).on("load", function () {
    contentLoading();
    isotope_activation();
  });

  //---

  return (
    <div className="App">
      <div
        className="
      home
      page-template-default page page-id-55
      wp-custom-logo wp-embed-responsive
      wpb-js-composer
      js-comp-ver-5.6
      vc_responsive
      elementor-default elementor-page elementor-page-55
    "
      >
        <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="site-header sticky-header">
          <div className="container-fluid pd-0">
            <div className="row no-gutters" style={{ background: "#000" }}>
              <div className="col-xl-7">
                <div className="header-left-block">
                  <div className="site-branding">
                    <a
                      href="index.html"
                      className="custom-logo-link"
                      rel="home"
                    >
                      <img
                        width="69"
                        height="69"
                        src={croppedLogo}
                        className="custom-logo"
                        alt="Woqomoqo Dark"
                      />
                    </a>
                  </div>

                  <div className="site-navigation">
                    <div className="hamburger-menus">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <nav className="navigation">
                      <div className="overlaybg"></div>
                      <div className="menu-wrapper">
                        <div className="menu-content">
                          <ul id="menu-main-menu" className="mainmenu">
                            <li
                              id="menu-item-01"
                              className="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                            current-menu-item current_page_item
                            menu-item-01
                          "
                            >
                              <a href="#skills-block" aria-current="page">
                                Skills
                              </a>
                            </li>
                            <li
                              id="menu-item-02"
                              className="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                            current-menu-item current_page_item
                            menu-item-02
                          "
                            >
                              <a href="#about-block" aria-current="page">
                                About
                              </a>
                            </li>
                            <li
                              id="menu-item-03"
                              className="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                            current-menu-item current_page_item
                            menu-item-03
                          "
                            >
                              <a href="#portfolio-block" aria-current="page">
                                Portfolio
                              </a>
                            </li>
                            <li
                              id="menu-item-04"
                              className="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                            current-menu-item current_page_item
                            menu-item-04
                          "
                            >
                              <a href="#cv-block" aria-current="page">
                                CV
                              </a>
                            </li>
                            <li
                              id="menu-item-05"
                              className="
                            menu-item
                            menu-item-type-custom
                            menu-item-object-custom
                            current-menu-item current_page_item
                            menu-item-05
                          "
                            >
                              <a href="#contact-block" aria-current="page">
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="col-xl-5">
                <div className="header-right-block dark">
                  {/* <div className="header-right-block bg-white dark"> */}

                  <div
                    className="mail-block"
                    // style={
                    //   ({ background: "#000" }, { backgroundColor: "#000" })
                    // }
                  >
                    <a href="mailto:vzotikas@gmaIl.com">
                      <i className="fas fa-envelope"></i>
                      <span>vzotikas@gmail.com</span>
                    </a>
                  </div>
                  <div className="call-block">
                    <a href="tel:+46 70-251 81 70">
                      <i className="fas fa-phone"></i>
                      <span>+46 70-251 81 70</span>
                    </a>
                  </div>
                  <div className="social-block">
                    <ul>
                      <li>
                        <a target="_self" href="/#">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_self" href="/#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_self" href="/#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="woqomoqo-page-builder-elementor clearfix">
          <div
            data-elementor-type="post"
            data-elementor-id="55"
            className="elementor elementor-55 elementor-bc-flex-widget"
            data-elementor-settings="[]"
          >
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
                <section
                  className="
                elementor-element elementor-element-09066bf
                elementor-section-full_width
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="09066bf"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-9e2737f
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="9e2737f"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-9b42a5f
                            elementor-widget
                            elementor-widget-woqomoqo-banner
                          "
                              data-id="9b42a5f"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-banner.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="hero-block">
                                  <div className="container-xl">
                                    <div className="row">
                                      <div className="col-md-9">
                                        <div className="horizontal-border"></div>
                                        <h2 className="hero-subheading">
                                          VR Developer
                                        </h2>
                                        <h2 className="hero-title">
                                          Vasilis Zotikas
                                        </h2>
                                        <ul className="hero-designation">
                                          <li>VR Developer</li>
                                          <li>Web Developer</li>
                                          <li>Programmer</li>
                                        </ul>
                                        {/* {function playMyVideo() {
                                          var video =
                                            document.getElementById("myVideo");

                                          if (video.paused) {
                                            video.play();
                                          } else {
                                            video.pause();
                                          }
                                        }}
                                        <p hidden>
                                          <video id="myVideo"></video>
                                        </p>
                                        <a
                                          onclick="playMyVideo()"
                                          href="/video.mp4"
                                          class="hero-video-btn video-popup"
                                        >
                                          <i class="fas fa-play"></i>
                                          <span class="video-title">
                                            Showreel
                                          </span>
                                        </a> */}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="hg-background">
                                    <div
                                      className="hg-background-image"
                                      data-bg-image={heroBanner2}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="
                elementor-element
                elementor-element-bdea9ed
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="bdea9ed"
                  data-element_type="section"
                  id="skills-block"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-8b92155
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="8b92155"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-5c8e732
                            elementor-align-center
                            elementor-widget
                            elementor-widget-woqomoqo-main-headings
                          "
                              data-id="5c8e732"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-main-headings.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="section-title">
                                  <h2 className="title-counter">Skills</h2>
                                  <h2 className="title-main">Skills</h2>

                                  <div className="title-border">
                                    <span className="small-border bg-black"></span>
                                    <span className="large-border bg-deep-cerise"></span>
                                    <span className="small-border bg-black"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="
                            elementor-element
                            elementor-element-e3d104f
                            elementor-widget
                            elementor-widget-woqomoqo-service
                          "
                              data-id="e3d104f"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-service.default"
                            >
                              <div className="elementor-widget-container">
                                <div
                                  className="service-carousel owl-carousel"
                                  data-owl-items="3"
                                  data-owl-margin="30"
                                  data-owl-dots="1"
                                  data-animate="hg-fadeInUp"
                                  style={{ opacity: 100 }}
                                >
                                  <div className="item">
                                    <div className="service-card">
                                      <div className="service-icon color-deep-cerise">
                                        <i className="fas fa-marker"></i>
                                      </div>
                                      <h2 className="service-title">Design</h2>
                                      <div className="service-list">
                                        <div className="service-content">
                                          <p>
                                            I like exploring new ways to take my
                                            imagination to new places through
                                            creative design.
                                          </p>
                                        </div>
                                        <div className="service-hover-content">
                                          <ul>
                                            <li>Maya / Blender</li>
                                            <li>Substance Painter</li>
                                            <li>Adobe Photoshop / Sketch</li>
                                            <li>Adobe Premiere</li>
                                            <li>Adobe AfterEffect</li>
                                            <li>Adobe Illustartor</li>
                                            <li>Final Cut Pro X</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="shadow-icon">
                                        <i className="fas fa-marker"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div className="service-card">
                                      <div className="service-icon color-deep-cerise">
                                        <i className="fas fa-database"></i>
                                      </div>
                                      <h2 className="service-title">
                                        Developing
                                      </h2>
                                      <div className="service-list">
                                        <div className="service-content">
                                          <p>
                                            I enjoy to create, operate, and
                                            monetize amazing applications and
                                            immersive experiences.
                                          </p>
                                        </div>

                                        <div className="service-hover-content">
                                          <ul>
                                            <li>Unity3D</li>
                                            <li>Unreal Engine</li>
                                            <li>Xcode</li>
                                            <li>React</li>
                                            <li>UX/UI Design</li>
                                            <li>Web Design</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="shadow-icon">
                                        <i className="fas fa-database"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div className="service-card">
                                      <div className="service-icon color-deep-cerise">
                                        <i className="fas fa-code"></i>
                                      </div>
                                      <h2 className="service-title">
                                        Programming
                                      </h2>
                                      <div className="service-list">
                                        <div className="service-content">
                                          <p>
                                            I am a passionate creator of
                                            beautiful code, beautiful functions,
                                            and beautiful programs.
                                          </p>
                                        </div>

                                        <div className="service-hover-content">
                                          <ul>
                                            <li>C#</li>
                                            <li>Javascript</li>
                                            <li>Swift</li>
                                            <li>Objective-C</li>
                                            <li>HTML / CSS</li>
                                            <li>MySQL</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="shadow-icon">
                                        <i className="fas fa-code"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div className="service-card">
                                      <div className="service-icon color-deep-cerise">
                                        <i className="fas fa-headphones"></i>
                                      </div>
                                      <h2 className="service-title">
                                        Sound Design
                                      </h2>
                                      <div className="service-list">
                                        <div className="service-content">
                                          <p>
                                            For me, the sound design and the
                                            musical score is a big part of what
                                            makes my creations work.
                                          </p>
                                        </div>

                                        <div className="service-hover-content">
                                          <ul>
                                            <li>Adobe Audition</li>
                                            <li>Wwise</li>
                                            <li>FMOD</li>
                                            <li>Logic Pro X</li>
                                            <li>Audacity</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="shadow-icon">
                                        <i className="fas fa-headphones"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div className="service-card">
                                      <div className="service-icon color-deep-cerise">
                                        <i className="fas fa-vr-cardboard"></i>
                                      </div>
                                      <h2 className="service-title">VR SDKs</h2>
                                      <div className="service-list">
                                        <div className="service-content">
                                          <p>
                                            VR can be like magic and using the
                                            right technological magic tricks is
                                            the only way to go.
                                          </p>
                                        </div>

                                        <div className="service-hover-content">
                                          <ul>
                                            <li>Oculus SDK</li>
                                            <li>OpenVR SDK</li>
                                            <li>Google VR SDK</li>
                                            <li>SteamVR</li>
                                            <li>VRTK</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="shadow-icon">
                                        <i className="fas fa-vr-cardboard"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item">
                                    <div className="service-card">
                                      <div className="service-icon color-deep-cerise">
                                        <i className="fas fa-network-wired"></i>
                                      </div>
                                      <h2 className="service-title">Misc</h2>
                                      <div className="service-list">
                                        <div className="service-content">
                                          <p>
                                            My skills and expertise are wide and
                                            I am always aiming to be up to date
                                            with the latest trends in
                                            technology.
                                          </p>
                                        </div>

                                        <div className="service-hover-content">
                                          <ul>
                                            <li>Git</li>
                                            <li>Agile Methodologies</li>
                                            <li>Storytelling</li>
                                            <li>Microsoft Office</li>
                                            <li>Apple iWork</li>
                                            <li>Microsoft Windowss</li>
                                            <li>Apple macOS</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="shadow-icon">
                                        <i className="fas fa-network-wired"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="
                elementor-element
                elementor-element-6736f33
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="6736f33"
                  data-element_type="section"
                  id="about-block"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-482b066
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="482b066"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-c06861d
                            elementor-align-center
                            elementor-widget
                            elementor-widget-woqomoqo-main-headings
                          "
                              data-id="c06861d"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-main-headings.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="section-title">
                                  <h2 className="title-counter">About Me</h2>
                                  <h2 className="title-main">About Me</h2>

                                  <div className="title-border">
                                    <span className="small-border bg-black"></span>
                                    <span className="large-border bg-deep-cerise"></span>
                                    <span className="small-border bg-black"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="
                            elementor-element
                            elementor-element-2b0e8ec
                            elementor-widget
                            elementor-widget-heading
                          "
                              data-id="2b0e8ec"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2
                                  className="
                                elementor-heading-title elementor-size-default
                              "
                                >
                                  My Skills &amp; Experience
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="
                elementor-element
                elementor-element-fcb34ba
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="fcb34ba"
                  data-element_type="section"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-9d7620c
                      elementor-column
                      elementor-col-25
                      elementor-top-column
                    "
                        data-id="9d7620c"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap">
                          <div className="elementor-widget-wrap"></div>
                        </div>
                      </div>
                      <div
                        className="
                      elementor-element
                      elementor-element-9dd6018
                      elementor-column
                      elementor-col-50
                      elementor-top-column
                    "
                        data-id="9dd6018"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-9e2f48a
                            elementor-widget
                            elementor-widget-text-editor
                          "
                              data-id="9e2f48a"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                    My knowledge is of a wide range. From photo
                                    and video editing, to 3D and UX/UI design
                                    and from programming, to mobile applications
                                    development. Lately though I discovered a
                                    new passion, Virtual and Augmented Reality!
                                    My focus now is on AR/VR and immersive
                                    computing. My tools among others are Unity,
                                    C#, Maya, Blender, Photoshop, Visual Studio,
                                    and After Effects. I am mainly a generalist
                                    but I can be flexible when it’s needed. I am
                                    also up to date with Agile methodologies
                                    like Scrum, Lean Software Development and
                                    Kanban.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                      elementor-element
                      elementor-element-dfb0050
                      elementor-column
                      elementor-col-25
                      elementor-top-column
                    "
                        data-id="dfb0050"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap">
                          <div className="elementor-widget-wrap"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="
                elementor-element
                elementor-element-9f7610e
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="9f7610e"
                  data-element_type="section"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-c431003
                      elementor-column
                      elementor-col-25
                      elementor-top-column
                    "
                        data-id="c431003"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap">
                          <div className="elementor-widget-wrap"></div>
                        </div>
                      </div>
                      <div
                        className="
                      elementor-element
                      elementor-element-20eb427
                      elementor-column
                      elementor-col-50
                      elementor-top-column
                    "
                        data-id="20eb427"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <section
                              className="
                            elementor-element
                            elementor-element-b628dd8
                            elementor-section-boxed
                            elementor-section-height-default
                            elementor-section-height-default
                            elementor-section
                            elementor-inner-section
                          "
                              data-id="b628dd8"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-no">
                                <div className="elementor-row">
                                  <div
                                    className="
                                  elementor-element
                                  elementor-element-2de36e6
                                  elementor-column
                                  elementor-col-50
                                  elementor-inner-column
                                "
                                    data-id="2de36e6"
                                    data-element_type="column"
                                  >
                                    <div
                                      className="
                                    elementor-column-wrap
                                    elementor-element-populated
                                  "
                                    >
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="
                                        elementor-element
                                        elementor-element-23520ab
                                        elementor-widget
                                        elementor-widget-woqomoqo-progressbar
                                      "
                                          data-id="23520ab"
                                          data-element_type="widget"
                                          data-widget_type="woqomoqo-progressbar.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="skill-progress">
                                              <div
                                                className="skill-bar"
                                                datapercentage="94%"
                                              >
                                                <h4 className="progress-title-holder">
                                                  <span className="progress-title">
                                                    Web & Mobile Developing
                                                  </span>
                                                  <span className="progress-wrapper">
                                                    <span className="progress-mark">
                                                      <span className="percent">
                                                        94%
                                                      </span>
                                                    </span>
                                                  </span>
                                                </h4>
                                                <div className="progress-outter">
                                                  <div className="progress-content"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="
                                        elementor-element
                                        elementor-element-2787cc4
                                        elementor-widget
                                        elementor-widget-woqomoqo-progressbar
                                      "
                                          data-id="2787cc4"
                                          data-element_type="widget"
                                          data-widget_type="woqomoqo-progressbar.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="skill-progress">
                                              <div
                                                className="skill-bar"
                                                datapercentage="85%"
                                              >
                                                <h4 className="progress-title-holder">
                                                  <span className="progress-title">
                                                    Programing
                                                  </span>
                                                  <span className="progress-wrapper">
                                                    <span className="progress-mark">
                                                      <span className="percent">
                                                        85%
                                                      </span>
                                                    </span>
                                                  </span>
                                                </h4>
                                                <div className="progress-outter">
                                                  <div className="progress-content"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="
                                  elementor-element
                                  elementor-element-2e33f4f
                                  elementor-column
                                  elementor-col-50
                                  elementor-inner-column
                                "
                                    data-id="2e33f4f"
                                    data-element_type="column"
                                  >
                                    <div
                                      className="
                                    elementor-column-wrap
                                    elementor-element-populated
                                  "
                                    >
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="
                                        elementor-element
                                        elementor-element-6bb02e6
                                        elementor-widget
                                        elementor-widget-woqomoqo-progressbar
                                      "
                                          data-id="6bb02e6"
                                          data-element_type="widget"
                                          data-widget_type="woqomoqo-progressbar.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="skill-progress">
                                              <div
                                                className="skill-bar"
                                                datapercentage="88%"
                                              >
                                                <h4 className="progress-title-holder">
                                                  <span className="progress-title">
                                                    UI/UX & 3D Graphics
                                                  </span>
                                                  <span className="progress-wrapper">
                                                    <span className="progress-mark">
                                                      <span className="percent">
                                                        88%
                                                      </span>
                                                    </span>
                                                  </span>
                                                </h4>
                                                <div className="progress-outter">
                                                  <div className="progress-content"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="
                                        elementor-element
                                        elementor-element-6705d5e
                                        elementor-widget
                                        elementor-widget-woqomoqo-progressbar
                                      "
                                          data-id="6705d5e"
                                          data-element_type="widget"
                                          data-widget_type="woqomoqo-progressbar.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="skill-progress">
                                              <div
                                                className="skill-bar"
                                                datapercentage="90%"
                                              >
                                                <h4 className="progress-title-holder">
                                                  <span className="progress-title">
                                                    VR/AR Developing
                                                  </span>
                                                  <span className="progress-wrapper">
                                                    <span className="progress-mark">
                                                      <span className="percent">
                                                        90%
                                                      </span>
                                                    </span>
                                                  </span>
                                                </h4>
                                                <div className="progress-outter">
                                                  <div className="progress-content"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                      elementor-element
                      elementor-element-ffbfc25
                      elementor-column
                      elementor-col-25
                      elementor-top-column
                    "
                        data-id="ffbfc25"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap">
                          <div className="elementor-widget-wrap"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="
                elementor-element
                elementor-element-ce99f39
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="ce99f39"
                  data-element_type="section"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-d350aa5
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="d350aa5"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-bc1541f
                            elementor-widget
                            elementor-widget-image
                          "
                              data-id="bc1541f"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <img
                                    width="987"
                                    height="569"
                                    src={authorMockupDark}
                                    className="attachment-large size-large"
                                    alt=""
                                    srcSet={`${authorMockupDark} 987w, ${authorMockupDark300x173} 300w, ${authorMockupDark768x443} 768w`}
                                    sizes="(max-width: 987px) 100vw, 987px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="
                elementor-element
                elementor-element-d7f907c
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="d7f907c"
                  data-element_type="section"
                  id="portfolio-block"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-d159a54
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="d159a54"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-2e71d3d
                            elementor-align-center
                            elementor-widget
                            elementor-widget-woqomoqo-main-headings
                          "
                              data-id="2e71d3d"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-main-headings.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="section-title">
                                  <h2 className="title-counter">Portfolio</h2>
                                  <h2 className="title-main">Portfolio</h2>

                                  <div className="title-border">
                                    <span className="small-border bg-black"></span>
                                    <span className="large-border bg-deep-cerise"></span>
                                    <span className="small-border bg-black"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="
                elementor-element
                elementor-element-731c51c
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="731c51c"
                  data-element_type="section"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-9ff1cad
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="9ff1cad"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-1059b69
                            elementor-widget
                            elementor-widget-woqomoqo-portfolio
                          "
                              data-id="1059b69"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-portfolio.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="row portfolio-grid">
                                  {/* <!-- ==== ArchViz Interior ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={archviz}
                                          alt="ArchViz Interior"
                                          srcSet={`${archviz} 361w, ${archviz} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/archviz_interior/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/archviz_interior/index.html"
                                            className="single-image"
                                          >
                                            ArchViz Interior
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          VR Experience
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== VR Poolhouse ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={poolhouse}
                                          alt="VR Poolhouse"
                                          srcSet={`${poolhouse} 361w, ${poolhouse} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/vr_poolhouse/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/vr_poolhouse/index.html"
                                            className="single-image"
                                          >
                                            VR Poolhouse
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          VR Experience
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== VR Night Club ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={club}
                                          alt="VR Night Club"
                                          srcSet={`${club} 361w, ${club} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/vr_nightclub/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/vr_nightclub/index.html"
                                            className="single-image"
                                          >
                                            VR Night Club
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          VR Experience
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== VR Haunted Christmas ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={haunted}
                                          alt="VR Haunted Christmas"
                                          srcSet={`${haunted} 361w, ${haunted} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/vr_hauntedchristmas/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/vr_hauntedchristmas/index.html"
                                            className="single-image"
                                          >
                                            VR Haunted Christmas
                                          </a>
                                        </h3>
                                        <div className="cate">VR Game</div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== VR House ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={house}
                                          alt="VR House"
                                          srcSet={`${house} 361w, ${house} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/vr_house/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/vr_house/index.html"
                                            className="single-image"
                                          >
                                            VR House
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          VR Experience
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== Miniature Maze ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={miniature}
                                          alt="Miniature Maze"
                                          srcSet={`${miniature} 361w, ${miniature} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/unity_miniaturemaze/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/unity_miniaturemaze/index.html"
                                            className="single-image"
                                          >
                                            Miniature Maze
                                          </a>
                                        </h3>
                                        <div className="cate">Unity Game</div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== Cyber City ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={cyber}
                                          alt="Cyber City"
                                          srcSet={`${cyber} 361w, ${cyber} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/unity_cybercity/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/unity_cybercity/index.html"
                                            className="single-image"
                                          >
                                            Cyber City
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          Unity Project
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== Pool House ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={pool}
                                          alt="Pool House"
                                          srcSet={`${pool} 361w, ${pool} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/3d_poolhouse/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/3d_poolhouse/index.html"
                                            className="single-image"
                                          >
                                            Pool House
                                          </a>
                                        </h3>
                                        <div className="cate">Maya Project</div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== Robot & Shield ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={robot}
                                          alt="Robot & Shield"
                                          srcSet={`${robot} 361w, ${robot} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/substance_robot&shield/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/substance_robot&shield/index.html"
                                            className="single-image"
                                          >
                                            Robot & Shield
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          Substance Painter Project
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== Low Poly Diorama ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={poly}
                                          alt="Low Poly Diorama"
                                          srcSet={`${poly} 361w, ${poly} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/3d_lowpolydiorama/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/3d_lowpolydiorama/index.html"
                                            className="single-image"
                                          >
                                            Low Poly Diorama
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          Maya Low Poly Diorama
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== AR Maze ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={maze}
                                          alt="AR Maze"
                                          srcSet={`${maze} 361w, ${maze} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/ar_maze/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/ar_maze/index.html"
                                            className="single-image"
                                          >
                                            AR Maze
                                          </a>
                                        </h3>
                                        <div className="cate">AR Game</div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== Fav8 ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={fav}
                                          alt="Fav8"
                                          srcSet={`${fav} 361w, ${fav} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/ios_fav8/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/ios_fav8/index.html"
                                            className="single-image"
                                          >
                                            Fav8
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          iOS Application
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <!-- ==== Pixar Lamp ==== --> */}

                                  <div className="col-md-6 col-lg-4 item">
                                    <div
                                      className="portfolio-item"
                                      data-animate="hg-fadeInUp"
                                      style={{ opacity: 100 }}
                                    >
                                      <figure className="portfolio-thumb">
                                        <img
                                          src={pixar}
                                          alt="Pixar Lamp"
                                          srcSet={`${pixar} 361w, ${pixar} 300w`}
                                          sizes="(max-width: 361px) 100vw, 361px"
                                        />
                                        <div className="overlay-wrapper">
                                          <div className="overlay"></div>
                                          <div className="popup">
                                            <div className="popup-inner">
                                              <a
                                                href="portfolio/animation_pixarllamp/index.html"
                                                className="single-image"
                                              >
                                                <i className="fa fa-search"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </figure>
                                      <div className="content">
                                        <h3>
                                          <a
                                            href="portfolio/animation_pixarllamp/index.html"
                                            className="single-image"
                                          >
                                            Pixar Lamp
                                          </a>
                                        </h3>
                                        <div className="cate">
                                          Maya Animation
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="
                elementor-element
                elementor-element-7babbeb
                elementor-section-content-middle
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="7babbeb"
                  data-element_type="section"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-f91128c
                      elementor-column
                      elementor-col-20
                      elementor-top-column
                    "
                        data-id="f91128c"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-5dab927
                            elementor-widget
                            elementor-widget-image
                          "
                              data-id="5dab927"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <a
                                    href="https://unity.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-elementor-open-lightbox=""
                                  >
                                    <img
                                      width="86"
                                      height="86"
                                      src={logo1}
                                      className="attachment-full size-full"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                      elementor-element
                      elementor-element-e6559a5
                      elementor-column
                      elementor-col-20
                      elementor-top-column
                    "
                        data-id="e6559a5"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-a24eaa9
                            elementor-widget
                            elementor-widget-image
                          "
                              data-id="a24eaa9"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <a
                                    href="https://store.steampowered.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-elementor-open-lightbox=""
                                  >
                                    <img
                                      width="86"
                                      height="86"
                                      src={logo2}
                                      className="attachment-full size-full"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                      elementor-element
                      elementor-element-4572ccc
                      elementor-column
                      elementor-col-20
                      elementor-top-column
                    "
                        data-id="4572ccc"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-a16f07c
                            elementor-widget
                            elementor-widget-image
                          "
                              data-id="a16f07c"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <a
                                    href="https://www.unrealengine.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-elementor-open-lightbox=""
                                  >
                                    <img
                                      width="106"
                                      height="86"
                                      src={logo3}
                                      className="attachment-full size-full"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                      elementor-element
                      elementor-element-7cca90e
                      elementor-column
                      elementor-col-20
                      elementor-top-column
                    "
                        data-id="7cca90e"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-c57707c
                            elementor-widget
                            elementor-widget-image
                          "
                              data-id="c57707c"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <a
                                    href="https://www.oculus.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-elementor-open-lightbox=""
                                  >
                                    <img
                                      width="96"
                                      height="86"
                                      src={logo4}
                                      className="attachment-full size-full"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                      elementor-element
                      elementor-element-b1d0237
                      elementor-column
                      elementor-col-20
                      elementor-top-column
                    "
                        data-id="b1d0237"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-061833c
                            elementor-widget
                            elementor-widget-image
                          "
                              data-id="061833c"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <a
                                    href="https://www.apple.com/swift"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-elementor-open-lightbox=""
                                  >
                                    <img
                                      width="87"
                                      height="86"
                                      src={logo5}
                                      className="attachment-full size-full"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -----------------------CV-------------------- */}

                <section
                  className="
                elementor-element
                elementor-element-cadf8f2
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="cadf8f2"
                  data-element_type="section"
                  id="cv-block"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-5f4ecf7
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="5f4ecf7"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-4611808
                            elementor-align-center
                            elementor-widget
                            elementor-widget-woqomoqo-main-headings
                          "
                              data-id="4611808"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-main-headings.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="section-title">
                                  <h2 className="title-counter">CV</h2>

                                  <h2 className="title-main">CV</h2>

                                  <div className="title-border">
                                    <span className="small-border bg-black"></span>
                                    <span className="large-border bg-deep-cerise"></span>
                                    <span className="small-border bg-black"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ------------- */}

                <section
                  className="
                elementor-element
                elementor-element-406db30
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="406db30"
                  data-element_type="section"
                  // data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-db52ba7
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="db52ba7"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-2696e40
                            elementor-widget
                            elementor-widget-woqomoqo-blog
                          "
                              data-id="2696e40"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-blog.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div
                                      className="post-item"
                                      // data-animate="hg-fadeInUp"
                                    ></div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div
                                      className="post-item"
                                      // data-animate="hg-fadeInUp"
                                    >
                                      <article className="post">
                                        <figure className="post-thumb">
                                          <div className="entry-date">
                                            Jan 29, 2020
                                          </div>
                                          <a href="/docs/vzcv2021.pdf">
                                            <img src={pdfIcon} alt="" />
                                          </a>
                                        </figure>
                                        <div className="post-detail">
                                          <h2 className="entry-title">
                                            <a
                                              href="/docs/vzcv2021.pdf"
                                              rel="bookmark"
                                            >
                                              Download my Curriculum Vitae
                                            </a>
                                          </h2>
                                        </div>
                                      </article>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -----------------------CV-END-------------------- */}

                <section
                  className="
                elementor-element elementor-element-59a35a7
                section-parallax
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
                elementor-section
                elementor-top-section
              "
                  data-id="59a35a7"
                  data-element_type="section"
                  id="contact-block"
                  data-settings='{"background_background":"classNameic","parallax_background_enable":"parallax"}'
                >
                  <div className="elementor-background-overlay"></div>
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="
                      elementor-element
                      elementor-element-5322986
                      elementor-column
                      elementor-col-100
                      elementor-top-column
                    "
                        data-id="5322986"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="
                            elementor-element
                            elementor-element-510aa49
                            elementor-align-center
                            elementor-widget
                            elementor-widget-woqomoqo-main-headings
                          "
                              data-id="510aa49"
                              data-element_type="widget"
                              data-widget_type="woqomoqo-main-headings.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="section-title">
                                  <h2 className="title-counter">Contact Me</h2>
                                  <h2 className="title-main">Contact Me</h2>
                                  <div className="title-border">
                                    <span className="small-border bg-black"></span>
                                    <span className="large-border bg-deep-cerise"></span>
                                    <span className="small-border bg-black"></span>
                                  </div>

                                  <div>
                                    <div className="contact-item"></div>
                                  </div>

                                  <div>
                                    <div className="contact-item">
                                      <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                      </div>
                                      <div className="details">
                                        <h3 className="info-title">Mail</h3>
                                        <p className="info-detail">
                                          vzotikas@gmail.com
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="contact-item">
                                      <div className="icon">
                                        <i className="fas fa-phone"></i>
                                      </div>
                                      <div className="details">
                                        <h3 className="info-title">Phone</h3>
                                        <p className="info-detail">
                                          +46 70-251 81 70
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="contact-item">
                                      <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                      </div>
                                      <div className="details">
                                        <h3 className="info-title">Address</h3>
                                        <p className="info-detail">
                                          Friluftsvägen 35
                                          <br />
                                          172 40, Sundbyberg
                                          <br />
                                          Sweden
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="site-footer pd-t-75 pd-b-75">
          <div className="container text-center">
            <div className="row">
              <div className="col-12">
                <a href="#top" className="back-to-top">
                  <span className="text">
                    Back <br />
                    To Top
                  </span>
                  <i className="fas fa-angle-up"></i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="footer-social mrt-30 mrb-30">
                  <li>
                    <a href="/#" target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_blank" rel="noreferrer">
                      Pinterest
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_blank" rel="noreferrer">
                      Behance
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_blank" rel="noreferrer">
                      Dribble
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p className="copyright-text">
                  Vasilis Zotikas (woqomoqo) 2021. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
