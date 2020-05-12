

//animação rolagem suave
$(".nav-link").click(function(e){
    e.preventDefault();
    let id = $(this).attr("href")
        targetoffset = $(id).offset().top;
    $("html, body").animate({
        scrollTop: targetoffset - 0
    }, 500)
});
