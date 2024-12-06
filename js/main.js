(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


function spark(event) {
    let i = document.createElement("i");
    // Set the position of the element based on the mouse event
    i.style.left = event.pageX + "px";
    i.style.top = event.pageY + "px";
  
    // Randomly scale the element
    i.style.transform = `scale(${Math.random() * 2 + 1})`;
  
    // Set random transition values
    i.style.setProperty("--x", getRandomTransitionValue());
    i.style.setProperty("--y", getRandomTransitionValue());
    document.body.appendChild(i);
  
    // Remove the element after 2 seconds
    setTimeout(() => {
      document.body.removeChild(i);
    }, 2000);
  };
  
  function getRandomTransitionValue() {
    // Generate a random value between -200 and 200 pixels
    return `${Math.random() * 400 - 200}px`;
  }
  
  // Add event listener to track mouse movements and create spark effect
  document.addEventListener("mousemove", spark);
  
  $(".seo1").click(function(){
   
   window.open("./seo.html");
    });
    $(".seo2").click(function(){
        
        window.open("./imgToText.html");
         });
    $(".seo3").click(function(){
            
            window.open("./taskMgmnt.html");
             });
    $(".seo4").click(function(){
                ;
                window.open("./eCommerce.html");
                 });
    $(".seo5").click(function(){
                   
                    window.open("./dashboard.html");
                     });
					 
					 
					 
					 
	$(".linkedIn").click(function(){
		window.open("https://www.linkedin.com/in/chethana-g-185a02121");
    });
  /*const settings = {
	async: true,
	crossDomain: true,
	url: 'https://text-case-converter.p.rapidapi.com/',
	method: 'POST',
	headers: {
		'x-rapidapi-key': '5c84e2d242mshda8da898589a987p1669e3jsn909ef5a11cb8',
		'x-rapidapi-host': 'text-case-converter.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	processData: false,
	data: '{"text":"This is a Sample Text","conversion":"uppercase"}'
};

$.ajax(settings).done(function (response) {
	console.log(response);
});*/

