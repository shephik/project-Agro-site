$(document).ready(function(){ 
    var menu = $("nav");
	var offsetTop = menu.offset().top;
		
	
		
        $(window).scroll(function(){
            if ( $(this).scrollTop() >= offsetTop && $(window).width() >= 768 && !menu.hasClass('nav_fixed')){
                menu.addClass("nav_fixed");
            } else if($(this).scrollTop() < offsetTop && menu.hasClass("nav_fixed") && $(window).width() > 768) {
                menu.removeClass("nav_fixed");
            } 
        });
    });
	

