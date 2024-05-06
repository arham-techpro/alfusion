$(document).ready(function(){

     // single product page function
     $(".product-color-variants > li").click(function(){
        var get_color = $(this).children().css("background-color");
        var get_data_img_url = $(this).data("product-img-url");
        $(".product-color-variants > li").css({"border-color":"#fff"});
        $(".product-color-variant").removeClass("active-color");
        $(this).children().addClass("active-color");
        $(this).css({"border-color":get_color});
        $('.main-image-change-tag').attr("src",get_data_img_url);
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


    $('.product-image-slider-thumb').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        autoplay: false,
        draggable:false,
       
    });


    $('.product-detail-thum-img').click(function(){
        $('.product-detail-thum-img').removeClass('active-image-border');
        $(this).addClass('active-image-border');

        if($(this).data("thumb-type") == 'video'){
            
            let get_videp_url = $(this).data("video-url");
            $("#productVIdeoModal").modal('show');
            $('.product_video').attr("src",get_videp_url);
            
        }else{
            
            let get_src_thumb = $(this).attr("src");
            $('.main-image-change-tag').attr("src",get_src_thumb);
        }
    });

    $('.product-detail-thum-img').mouseover(function(){
        if($(this).data("thumb-type") != 'video'){

            $('.product-detail-thum-img').removeClass('active-image-border');
            $(this).addClass('active-image-border');
            let get_src_thumb = $(this).attr("src");
            $('.main-image-change-tag').attr("src",get_src_thumb);
        }
    });

});