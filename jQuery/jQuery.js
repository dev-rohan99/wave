$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
    });

    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-bars");
    });

    $(".fa-bars").click(function(){
        $(".nav_link_mobile").toggleClass("nav_click_animation_menu");
    });


    $(".link_page_two").click(function () {
        $(".first_show").toggleClass("sub_main_block_mb_two");
    });
    $(".link_page_three").click(function () {
        $(".second_show").toggleClass("sub_main_block_mb_two");
    });
    $(".link_page_fore").click(function () {
        $(".thard_show").toggleClass("sub_main_block_mb_two");
    });



    $('.main_slide_content').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        autoplay:true,
        center:true,
        responsive:{
            10:{
                items:1,
                nav:true
            },
            550:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});