$(document).ready(function() {
    
    "use strict";

    // functions
    anchor_links();
    arrow_click();
    animate_text();
    navbar_scroll();

    $(window).load('body', function(){
        setTimeout(()=>{
            $('.preloader').addClass('loaded');
        }, 1500);
    });

});

function anchor_links() {
    "use strict";
    $('.nav-header a').off().on('click', function(event) {
        const element = $(this);
        const url = element.attr('href');
        if( url.charAt(0) === '#' ) {
            $('html, body').animate({
                scrollTop: $(url).offset().top - 75
            }, 500);
        }
    });
}


function animate_text() {
    "use strict";
    const animatedText = $('.animate_text span');
    animatedText.typed({
        strings: ["Desarrollador <strong>Web</strong>", "<strong>Front</strong>End", "Back<strong>End</strong>"],
        loop: true,
        startDelay: 500,
        backDelay: 1000,
        typeSpeed: 75
    });
}

function arrow_click() {
    "use strict";

    $('.arrow-wrap a').on('click', function(event){
        const element = $(this);
        const url = element.attr('href');
        if(url.charAt(0) === '#' ) {
            $('html, body').animate({
                scrollTop: $(url).offset().top - 75
            }, 500);
        }
    });
}

function navbar_scroll() {
    "use strict";
    $(window).on('scroll', function() {
        const navBar = $('.nav-header');
        const windowScroll = $(window).scrollTop();
        if (windowScroll > 16) {
            navBar.addClass('animate');
        } else {
            navBar.removeClass('animate');
        }
    });
}