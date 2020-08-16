$(document).ready(function (){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $("nav").addClass("bar_scroll");  
            $("nav").removeClass("bar_og"); 
        }
        else{
            $("nav").removeClass("bar_scroll");
            $("nav").addClass("bar_og");
        }
    })
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-75
        }, 500);
    })
    $('input[type="radio"]').click(function() { 
        var inputValue = $(this).attr("value");
        var inputClass = $(this).attr("id");
        var targetBox = $("." + inputValue); 
        var targetClass = $("." + inputClass); 
        $(".selected").not(targetBox).fadeOut(300); 
        $(".radio_butt").not(targetClass).removeClass("active_radio");
        $(targetBox).delay(300).fadeIn(300); 
        $(targetClass).addClass("active_radio"); 
    });

});