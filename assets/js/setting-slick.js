
const widthPantalla = window.innerWidth;
if(widthPantalla > 767){
    $('.testimonio').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
    });
}else{
    $('.testimonio').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
}


if(widthPantalla > 544){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
}else{
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
}
/*
window.onresize = function(event) {
    console.log(event)
    const widthPantalla = window.innerWidth;
    if(widthPantalla > 767){
        $('.testimonio').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true
        });
    }else{
        $('.testimonio').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        });
    }
};*/