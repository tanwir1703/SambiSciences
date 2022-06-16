(function($) { 
    "use strict"; 

    // loader
    $("#loader").fakeLoader({

        timeToHide:2222, //Time in milliseconds for fakeLoader disappear
        
        zIndex:"999",//Default zIndex
        
        spinner:"spinner7",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        
        bgColor:"#111", //Hex, RGB or RGBA colors
        
        imagePath:"" //If you want can you insert your custom image
    
    });
    
    // menu toggle click
    $('#toggle').on('click',function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
       });
    
    
    // Work pagepolling scroll
    $('.pagepiling').pagepiling({
        menu: '.work-nav',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors:  ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eightPage'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: false,
        css3: true,
        navigation: false,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
    
        //events
        onLeave: function(index, nextIndex, direction){
            var indexNumber= [1, 2, 3, 4, 5, 6, 7, 8];
            for(var i = 0; i < indexNumber.length; i++) {
                if(indexNumber){
                    $('.title-work').removeClass('animated fadeInUp delay-0.5s');
                    } 
            }    
        },
        afterLoad: function(anchorLink, index){
            var indexNumber= [1, 2, 3, 4, 5, 6, 7, 8];
            for(var i = 0; i < indexNumber.length; i++) {
                if(indexNumber){
                        $('.title-work').addClass('animated fadeInUp delay-0.5s');
                    } 
            }         
        },
        afterRender: function(){
            
        },
    });
    
    // Parallax setup on works
    var scene = ['#--1', '#--2', '#--3', '#--4', '#--5', '#--6', '#--7', '#--8'];
    var sceneSelector = document.querySelectorAll(".layer .prx");
    for(var i = 0; i < scene.length; i++) {
        scene[i] = new Parallax(sceneSelector[i],{
                invertX: !0,
                invertY: !0,
                frictionX: .1,
                frictionY: .05
            });
           
      };

    //moblie touch to scroll
    $('.bottom-nav-m').on('click', function(){
        $.fn.pagepiling.moveSectionDown();
    });
    

    // Custom Cursor
    
})(jQuery);
