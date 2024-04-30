$(document).ready(function(){
    $('.banner-slider-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Categoy Slider
    $('.category-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Featured Product Slider
    $('.featured-product-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    // Woman Fashion Slider
    $('.woman-fashion-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    // Woman Fashion Slider
    $('.kids-item-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    // Woman Fashion Slider
    $('.trending-now-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});