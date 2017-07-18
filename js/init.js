(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.collapsible').collapsible();
        $('.owl-carousel').owlCarousel({
            margin:22.5,
            responsiveClass:true,
            nav: true,
            dots: false,
            items: 4,
            navText: ["<i class='fa fa-chevron-circle-left'></i>", "<i class='fa fa-chevron-circle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav: false,
                },
                568:{
                    items:1,
                    nav: false,
                },
                667:{
                    items:2,
                    nav: false,
                },
                768:{
                    items:2,
                    nav: false,
                },
                960:{
                    items:3,
                    nav: true,
                },
                1200:{
                    items:4,
                    nav: true,
                }
            }
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space