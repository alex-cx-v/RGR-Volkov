(function ($) {
    "use strict";

    $.fn.sliderResponsive = function (settings) {
        var set = $.extend({
            slidePause: 5000,
            fadeSpeed: 800,
            autoPlay: "off",
            showArrows: "off",
            hideDots: "off",
            hoverZoom: "on",
            titleBarTop: "off"
        }, settings);

        var $slider = $(this);
        var size = $slider.find("> div").length;
        var position = 0;
        var sliderIntervalID;
        var animating = false;

        $slider.append("<ul></ul>");
        $slider.find("> div").each(function () {
            $slider.find("> ul").append('<li></li>');
        });

        $slider.find("div:first-of-type").addClass("show");

        $slider.find("li:first-of-type").addClass("showli");

        $slider.find("> div").not(".show").fadeOut();

        if (set.autoPlay === "on") {
            startSlider();
        }

        if (set.showArrows === "on") {
            $slider.addClass('showArrows');
        }

        if (set.hideDots === "on") {
            $slider.addClass('hideDots');
        }

        if (set.hoverZoom === "off") {
            $slider.addClass('hoverZoomOff');
        }

        if (set.titleBarTop === "on") {
            $slider.addClass('titleBarTop');
        }

        function startSlider() {
            sliderIntervalID = setInterval(function () {
                if (!animating) {
                    nextSlide();
                }
            }, set.slidePause);
        }

        $slider.mouseover(function () {
            clearInterval(sliderIntervalID);
        });

        $slider.mouseout(function () {
            startSlider();
        });

        $slider.find("> .right").click(function () {
            if (!animating) {
                nextSlide();
            }
        });

        $slider.find("> .left").click(function () {
            if (!animating) {
                prevSlide();
            }
        });

        function nextSlide() {
            animating = true;
            position = $slider.find(".show").index() + 1;
            if (position > size - 1) position = 0;
            changeCarousel(position);
        }

        function prevSlide() {
            animating = true;
            position = $slider.find(".show").index() - 1;
            if (position < 0) position = size - 1;
            changeCarousel(position);
        }

        $slider.find(" > ul > li").click(function () {
            if (!animating) {
                position = $(this).index();
                changeCarousel($(this).index());
            }
        });

        function changeCarousel() {
            $slider.find(".show").removeClass("show").fadeOut(set.fadeSpeed, function () {
                $slider.find("> div").eq(position).fadeIn(set.fadeSpeed).addClass("show");
                animating = false;
            });

            $slider.find("> ul").find(".showli").removeClass("showli");
            $slider.find("> ul > li").eq(position).addClass("showli");
        }

        return $slider;
    };
})(jQuery);

$(document).ready(function () {
    $("#slider3").sliderResponsive({
        autoPlay: "off",
        hoverZoom: "off",
        hideDots: "on"
    });
});
