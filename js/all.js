$(document).ready(function () {
    // cart 選單
    $('.open').on('click', function (event) {
        event.preventDefault();
        $(this).parent().toggleClass('active');
    });
    // pad & mobile 選單
    $('.nav-btn').on('click', function (event) {
        event.preventDefault();
        $('body').toggleClass('active');
        // cart 選單收
        $('.open').parent().removeClass('active');
    });
    
    // 移至 index 指定位置
    $(".nav li a[href^='#']").on('click', function (event) {
        event.preventDefault();
        $('body').removeClass('active');
        // cart 選單收
        $('.open').parent().removeClass('active');
        var href = $(this).attr('href');
        // console.log(href);
        $('html,body').animate({
            scrollTop: $(href).offset().top-52
        },1000);
    });

    // cart-item 購物車
    $('.cart-item li a').on('click', function (event) {
        event.preventDefault();
        $(this).parent().toggleClass('active');
        // 購物車提醒
        $('.favo-remind').fadeIn().delay(400).fadeOut();
        if ($(this).parent().hasClass('active')) {
            // 加入購物車
            $('.favo-remind').removeClass('active');
        } else {
            // 移除購物車
            $('.favo-remind').addClass('active');
        }
    });

    // top 至頂
    $('.top').on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $('.cart').offset().top-53
        },1000);
    });

    
    $(window).scroll(function(){
        // 過 banner後出現\
        if($(window).scrollTop() > 367){
        $(".top").show();
        } else {
            $('.top').hide();
        }
   })
});