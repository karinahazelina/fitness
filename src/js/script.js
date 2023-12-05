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

    $('ul.catalog-tabs').on('click', 'li:not(catalog-tab-active)', function () {
        $(this)
            .addClass('catalog-tab-active')
            .siblings()
            .removeClass('catalog-tab-active')
            .closest('div.container')
            .find('div.catalog-content')
            .removeClass('catalog-content-active')
            .eq($(this).index())
            .addClass('catalog-content-active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item-content')
                    .eq(i)
                    .toggleClass('catalog-item-content-active');
                $('.catalog-item-list')
                    .eq(i)
                    .toggleClass('catalog-item-list-active');
            });
        });
    }

    toggleSlide('.catalog-item-link');
    toggleSlide('.catalog-item-back');

    //Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal-close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
    });

    $('.button-mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal-descr').text(
                $('.catalog-item-subtitle').eq(i).text()
            );
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(formValue){
        $(formValue).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true 
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите ваше имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите ваш номер телефона",
                email: {
                  required: "Пожалуйста, введите вашу эл. почту",
                  email: "Неправильно введен адрес эл. почты"
                }
            }
        });
    };
    
    validateForms('#consultation-main');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+1 (999) 999-9999");

    // $(this).find("input").val("");
    // $('#consultation, #order').fadeOut();
    // $('.overlay, #thanks').fadeIn('slow');
    // $('form').trigger('reset');

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});
