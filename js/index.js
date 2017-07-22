$(window).scroll(function(){
    var st = $(this).scrollTop();
    $(".p").css({
        "transform":"translate(0%,"+ st +"%"
    });
    $(".section_2 img").css({
        "transform":"translate(0%,"+ st/20 +"%"
    });
});