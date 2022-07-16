$(function(){
    $('.page-scroll').click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 50
        }, 1250, "easeInOutExpo");
    });
});