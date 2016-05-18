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

scrollEvent('.main-nav', 'nav-scroll-style');
scrollEvent('.phone', 'phone-scroll-style');