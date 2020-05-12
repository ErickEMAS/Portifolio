

//animação rolagem suave
$(".nav-link").click(function(e){
    e.preventDefault();
    let id = $(this).attr("href")
        targetoffset = $(id).offset().top;
    $("html, body").animate({
        scrollTop: targetoffset - 0
    }, 500)
});

//menu mobile
$(document).ready(function(){

    $(".open-nav").click(function(){
        let altura = window.innerHeight;
        document.querySelector("header").style.height = `${altura}px`;
        $("header").toggleClass("active");
        $(".open-nav").toggleClass("close");
    });
    
});