$(window).on('load', function () {
    $("#cover").fadeOut(1000);
});
$(document).on('click',function(){
    $('.search-content').removeClass('d-block');
})

$(document).ready(function(){

    if($(document).width() < 1300){
        $('.main-category-button').click(function(e){
            e.preventDefault();
            
        });
    }

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


    $('.header-search-container input').click(function(){
        
        $('.header-search-container').toggleClass('extend-header'); 

        if(!$('.header-search-container').hasClass('extend-header')){
            if($(this).val().length > 0){
                $('.search-content').removeClass('d-block');
            }
        }else{
            if($(this).val().length > 0){
                $('.search-content').addClass('d-block');
            }
        }
    });
    $('.header-search-container input').on('keyup',function(){
        if( $(this).val().length > 0){  
            $('.header-search-container').addClass('extend-header');
            $('.search-content').addClass('d-block');
        }else{  
            $('.search-content').removeClass('d-block');

        }
    });


    $('.show-password').click(function(){
        let get_input_type = $(this).siblings("input").attr('type');
        let get_icon_link = $(this).children().children();
        if(get_input_type == 'text'){
            $(this).siblings("input").attr('type','password');
            get_icon_link.attr("xlink:href","./assets/icons/icons.svg#eye-slash-icon");
            
        }else{
            $(this).siblings("input").attr('type','text');
            get_icon_link.attr("xlink:href","./assets/icons/icons.svg#eye-icon");
        }
        
    });

    $("#root-items-select").click(function(){
        $(this).toggleClass('checked');
        if($(this).hasClass('checked')){
            $('.single-product-select').prop("checked", true);
        }else{
            $('.single-product-select').prop("checked", false);

        }
    });

    $("#checkoutBtn").click(function(){
        $('.success-modal').toggleClass('open-modal');
        $('body').addClass('overflow-hidden');
    });
    $(".success-modal").click(function(){
        $('.success-modal').toggleClass('open-modal');
        $('body').removeClass('overflow-hidden');
    });


});



$(document).ready(function(){

    // Categoy Slider
    $('.category-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]

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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
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
        responsive: [
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    
});