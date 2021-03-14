$(document).ready(()=>{
    myOverflow();
    $(window).resize(()=>{
        myOverflow();
    });
});

function myOverflow() {
    let scrollHeight = $(document).height() - $(window).height(); // 1328 - 100 ; x - 1
    let value = parseFloat(100 / scrollHeight);
    $(window).scroll(()=>{
        let scroll = parseInt($(window).scrollTop());
        if (scroll == scrollHeight) {
            $('#barra').css({
                'width': '100%'
            }); 
        }
        $('#barra').css({
            'width': `${parseInt(scroll * value + 0.001)}% `
        });
    });
}