$(document).ready(function () {
    $('.carousel-body').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow:
            '<button class="slick-prev"><img src="icons/chevron-left.png"></button>',
        nextArrow:
            '<button class="slick-next"><img src="icons/chevron-right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });
});
