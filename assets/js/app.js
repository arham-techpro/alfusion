$(document).ready(function(){


    $('.category-btn').click(function(){
        $('.category-btn').removeClass('category-button-active');
        $(this).addClass('category-button-active');
        $(".loading-text").removeClass('d-none');
        $(".custom-tab-content .custom-tab-item").empty();
        
        var page_name = $(this).data("tab-target");
        var full_page_name = "components/"+page_name+".html";
        $(".custom-tab-content .custom-tab-item").load(full_page_name,function(){
            $(".loading-text").addClass('d-none');
        });
    });

    // single product page function
    $(".product-color-variants > li").click(function(){
        var get_color = $(this).children().css("background-color");
        $(".product-color-variants > li").css({"border-color":"#fff"});
        $(".product-color-variant").removeClass("active-color");
        $(this).children().addClass("active-color");
        $(this).css({"border-color":get_color});
    });

    $(".size-variant-button").click(function(){
        $(".size-variant-button").removeClass("active-size");
        $(this).addClass("active-size");
    });


    // quantity plus minus function
    $('.add').click(function () {
		$(this).prev().val(+$(this).prev().val() + 1);
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });


});


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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    // Woman Fashion Slider
    $('.woman-fashion-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    // Woman Fashion Slider
    $('.weekly-populer-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
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