/*glopal $, alert, console*/

$(function(){

    'use strict';
    

     /****** nav ******/
     $("main > nav > .container > .row > div:nth-child(2) > div").on("click", function(){

        var menu_div = $("main > nav > .container > .row > div:nth-child(1)");
        if($(menu_div).css("display") == "none") {
            $("main > nav > .container > .row > div:nth-child(2) > div > span:nth-child(2)").animate({
                left: 0
            },300);
            menu_div.show(300);
        }
        else {
            menu_div.hide(300);
            $("main > nav > .container > .row > div:nth-child(2) > div > span:nth-child(2)").animate({
                left: -4
            },300);
        }
    })
    $(window).resize(function(){
        var sw = $(window).innerWidth();
        if(sw > 750) {
            $("main > nav > .container > .row > div:nth-child(1)").show();
        }
        else {
            $("main > nav > .container > .row > div:nth-child(1)").hide();
        }
    });
    
    /******  counter  , CounterFactory ******/
    if($("body").data("counter") == "c") {
        var check = true;
        check = true;
        $(window).scroll(function(){

            if($(window).scrollTop() > $(".counter").offset().top - 350 && check){
                check = false;
                $('.timer').countTo({
                    from: 0,
                    speed: 3500
                });
            }
        });
    }
    
          
    
});