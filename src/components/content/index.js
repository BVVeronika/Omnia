$('.collapsible-header').click(function(){
    var self = this;
    var $parent = $(this).parent(); 
    var $slick = $parent.find('.autoplay');

    if($slick.hasClass('slick-initialized')) {
        $slick.slick("unslick");
    }

    setTimeout(function() {
        $slick.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive:[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 425,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                }
            ]
        });

        $parent.find(".desc-card").dotdotdot({
            height: 50
        });
    })
    
});

$(function() {
    setTimeout(function() {
        $('.collapsible-header').first().click();
    });
});

$(function() {
    $('.open-list').click(function(){
        $('.slider-leaders').css('height', 'auto');
        $('.open-list').css('color', '#ccc');
    });
});