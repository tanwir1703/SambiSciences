// (function($) { 
//     $(function() { 
  
//       //  open and close nav 
//       $('#navbar-toggle').click(function() {
//         $('nav ul').slideToggle();
//       });
  
  
//       // Hamburger toggle
//       $('#navbar-toggle').on('click', function() {
//         this.classList.toggle('active');
//       });
  
  
//       // If a link has a dropdown, add sub menu toggle.
//       $('nav ul li a:not(:only-child)').click(function(e) {
//         $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
//         // Close dropdown when select another dropdown
//         $('.navbar-dropdown').not($(this).siblings()).hide("slow");
//         e.stopPropagation();
//       });
  
  
//       // Click outside the dropdown will remove the dropdown class
//       $('html').click(function() {
//         $('.navbar-dropdown').hide();
//       });
//     }); 
//   })(jQuery); 


// // Navbar Sticky
// $(window).scroll(function(){
//     if($(this).scrollTop() > 100){
//         $('.navbar').addClass('sticky')
//     } else{
//         $('.navbar').removeClass('sticky')
//     }
// });

const open = document.querySelector('.container');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});

jQuery(document).ready(function($){
    // standard on load code goes here with $ prefix
    // note: the $ is setup inside the anonymous function of the ready command
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        mouseDrag:false,
        autoplay:true,
        animateOut: 'slideOutUp',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});