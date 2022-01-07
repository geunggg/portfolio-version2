$(document).ready(function() {
     var owl = $("#slider-carousel");
     owl.owlCarousel({
       items: 3,
       itemsDesktop: [1100, 3],
       itemsDesktopSmall: [1024, 2],
       itemsTablet: [600, 1],
       itemsMobile: false,
       pagination: false,
     });
     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })
   });