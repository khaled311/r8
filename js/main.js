$(window).on("load", function () {
    AOS.refresh();

    $(".loader").fadeOut(1000);
});

$(function () {
    try {
        const tilt = $(".js-tilt").tilt({
            perspective: 1000,
        });
    } catch (err) {}
    var a = 0;
    $(".about-popup").on("scroll", function () {
        if (
            a === 0 &&
            $(this).scrollTop() >=
                $(".numbers").offset().top - $(".numbers").innerHeight()
        ) {
            try {
                console.log(this);
                $(".timer").countTo({
                    speed: 1000,
                });
            } catch (err) {}
            a = 1;
        }
    });

    // Open Popup
    $(".pop").on("click", function (e) {
        e.preventDefault();
        $("." + $(this).data("target")).addClass("open");
        $("html").css("overflow", "hidden");
    });
    // Close Pop Up
    $("#close1").on("click", function () {
        $(this).parent().parent().parent().parent().removeClass("open");
        $("html").css("overflow", "auto");
    });

    // Categories Slider
    var headerswiper = new Swiper("header .swiper-container", {
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        speed: 700,
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: "header .swiper-pagination",
            clickable: true,
        },
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1,
        //     },
        //     480: {
        //         slidesPerView: 2,
        //     },
        //     992: {
        //         slidesPerView: 3,
        //     },
        //     1600: {
        //         slidesPerView: 4,
        //     },
        //     // 1700:{
        //     //   slidesPerView: 2.5
        //     // }
        // },
    });

    // Categories Slider
    var testimsswiper = new Swiper(".testims .swiper-container", {
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".testims .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 57,
                slidesPerView: 2,
            },
        },
    });

    // open Side Nav
    $(".menuTriger").on("click", function () {
        $(this).fadeOut();
        $(".sideNav").toggleClass("open");
        $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
        setTimeout(function () {
            $(".sideNav").addClass("origin");
        }, 500);
    });

    // Close Side Nav
    $(".navover, .close1").on("click", function () {
        if ($(".sideNav").hasClass("open")) {
            $(".menuTriger").fadeIn();
            $(".navover").removeClass("open");
            $(".sideNav").toggleClass("open");
            // $(".sideNav").toggleClass("origin");
            $("body").css("overflow", "auto");
            setTimeout(function () {
                $(".sideNav").removeClass("origin");
            }, 600);
        }
    });

    // Navbar Effect On Scroll
    var zero = 0;
    $(window).on("scroll", function () {
        $(".TopNav").toggleClass("hide", $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= $("header").innerHeight()) {
            $(".TopNav").addClass("back");
        } else {
            $(".TopNav").removeClass("back");
        }
        if ($(window).scrollTop() >= $(".TopNav").innerHeight()) {
            $(".TopNav").addClass("hide");
        } else {
            $(".TopNav").removeClass("hide");
        }
        AOS.refresh();
        if ($(window).scrollTop() >= 200) {
            $(".whats, .live").addClass("show");
        } else {
            $(".whats, .live").removeClass("show");
        }
    });

    // ParticlesJS Config.
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 700,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 0.1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 10,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });

    AOS.init({
        once: false,
        disable: "mobile",
    });

    $("body").niceScroll({
        cursorwidth: "0px",
    });

    $(function () {
        jQuery("img.svg").each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr("id");
            var imgClass = $img.attr("class");
            var imgURL = $img.attr("src");

            jQuery.get(
                imgURL,
                function (data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = jQuery(data).find("svg");

                    // Add replaced image's ID to the new SVG
                    if (typeof imgID !== "undefined") {
                        $svg = $svg.attr("id", imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if (typeof imgClass !== "undefined") {
                        $svg = $svg.attr("class", imgClass + " replaced-svg");
                    }

                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr("xmlns:a");

                    // Check if the viewport is set, else we gonna set it if we can.
                    if (
                        !$svg.attr("viewBox") &&
                        $svg.attr("height") &&
                        $svg.attr("width")
                    ) {
                        $svg.attr(
                            "viewBox",
                            "0 0 " +
                                $svg.attr("height") +
                                " " +
                                $svg.attr("width")
                        );
                    }

                    // Replace image with new SVG
                    $img.replaceWith($svg);
                },
                "xml"
            );
        });
    });
});
