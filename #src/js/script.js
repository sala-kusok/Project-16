$(document).ready(function () {

    $('.element__information button, .element__information a').on('focus', function (e) {
        $(this).parents('.element__information').addClass('element__information--active');
    });

    $('.element__information button, .element__information a').on('blur', function (e) {
        $(this).parents('.element__information').removeClass('element__information--active');
    });

    function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent+'%'
            }, animationLength);
            $(item).find(tooltip).show(animationLength);
        });
    }

    let animate = true;


    $(window).scroll(function () {

        if($('.skills').offset().top <= $(window).scrollTop() + 500) {
            if(animate) {
                moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
            }
            animate = false;
        }

    });

    $('.carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText: [],
        items: 5,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            980:{
                items:5
            }
        }
    })

});