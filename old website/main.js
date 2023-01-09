$(document).ready(function (){
    $('.radio_butt').click(function() { 
        var inputted = $(this).find('input');
        var inputValue = inputted.attr("value");
        var inputClass = inputted.attr("id");
        var targetBox = $("." + inputValue); 
        var targetClass = $("." + inputClass); 
        $(".selected").not(targetBox).fadeOut(300); 
        $(".radio_butt").not(targetClass).removeClass("active_radio");
        $(targetBox).delay(300).fadeIn(300); 
        $(targetClass).addClass("active_radio"); 
    });

});

function darkMode() {
  let classList = document.body.classList;
  document.getElementById("toggle").addEventListener("change", event => {
    event.target.checked ? classList.add("dark_mode") : classList.remove("dark_mode");
  });
  console.log(document.body.classList);
}