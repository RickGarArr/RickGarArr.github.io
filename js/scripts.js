$(document).ready(()=>{
    myOverflow();
    $(window).resize(()=>{
        myOverflow();
    });

    $(window).on("orientationchange",()=>{
        myOverflow();
    });

    $('.nav-header a').each((i, a) => {
        if (i != 4) {   
            a.addEventListener('click', (e)=>{
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(`${e.target.getAttribute('href')}`).offset().top - 24
                }, 200);
            });
        }
    });
});

function myOverflow() {
    let scrollHeight = $(document).height() - $(window).height(); // 1328 - 100 ; x - 1
    let value = parseFloat(101 / scrollHeight);
    $(window).scroll(()=>{
        let scroll = parseInt($(window).scrollTop());
        if (scroll == scrollHeight) {
            $('#barra').css({
                'width': '100%'
            }); 
        }
        $('#barra').css({
            'width': `${parseInt(scroll * value)}% `
        });
    });
}