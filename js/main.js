//Change the color of the navbar on scroll
function scrollEvent(element, style) {
    var mainbottom = $('#header').offset().top + $('#header').height();
 
    $(window).on('scroll',function(){
        var stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $(element).addClass(style);
        } else {
            $(element).removeClass(style);
        }
    });
}

//Smooth scroll navigation 
$(document).ready(function(){
  function NavScroll(elem) {
      $(elem).on('click', function(event) {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 900, function(){

        window.location.hash = hash;
        });
    });
  }
  
  NavScroll(".main-nav a");
  NavScroll(".contactScroll");  
  NavScroll(".main-footer a");
  
}); //End smooth scroll navigation

  
scrollEvent('.main-nav', 'nav-scroll-style');
scrollEvent('.phone', 'phone-scroll-style');


$(".removal img").mouseenter(function() {
    $(".removal img")
        .fadeOut(300, function() {
            $(".removal img").attr('src', "img/removalAfter.jpg");
        })
        .fadeIn(300)
});

$(".removal img").mouseleave(function() {
    $(".removal img")
        .fadeOut(300, function() {
            $(".removal img").attr('src', "img/removalBefore.jpg");
        })
        .fadeIn(300)
});
