"use strict";
$(function () {

    setTimeout( () => {
        
        $("#load img").delay(300).fadeOut();
        $("#load").addClass("animated fadeOutUp").fadeOut()

        // particlesJS("particles", {
        //     "particles": {
        //         "number": {
        //             "value": 500,
        //             "density": {
        //                 "enable": true,
        //                 "value_area": 3000
        //             }
        //         },
        //         "color": {
        //             "value": "#F58A1F"
        //         },
        //         "shape": {
        //             "type": "circle",
        //             // "stroke": {
        //             //     "width": 0,
        //             //     "color": "#ED3035"
        //             // },
        //             "polygon": {
        //                 "nb_sides": 3
        //             },
        //             "image": {
        //                 "src": "img/github.svg",
        //                 "width": 100,
        //                 "height": 100
        //             }
        //         },
        //         "opacity": {
        //             "value": 0.5,
        //             "random": true,
        //             "anim": {
        //                 "enable": false,
        //                 "speed": 1,
        //                 "opacity_min": 0.1,
        //                 "sync": false
        //             }
        //         },
        //         "size": {
        //             "value": 8,
        //             "random": true,
        //             "anim": {
        //                 "enable": true,
        //                 "speed": 5,
        //                 "size_min": 0,
        //                 "sync": false
        //             }
        //         },
        //         "line_linked": {
        //             "enable": false,
        //             "distance": 500,
        //             "color": "#ED3035",
        //             "opacity": 0.4,
        //             "width": 2
        //         },
        //         "move": {
        //             "enable": true,
        //             "speed": 3,
        //             "direction": "top",
        //             "random": true,
        //             "straight": false,
        //             "out_mode": "out",
        //             "bounce": false,
        //             "attract": {
        //                 "enable": false,
        //                 "rotateX": 600,
        //                 "rotateY": 1000
        //             }
        //         }
        //     },
        //     "interactivity": {
        //         "detect_on": "canvas",
        //         "events": {
        //             "onhover": {
        //                 "enable": false,
        //                 "mode": "bubble"
        //             },
        //             "onclick": {
        //                 "enable": false,
        //                 "mode": "repulse"
        //             },
        //             "resize": true
        //         },
        //         "modes": {
        //             "grab": {
        //                 "distance": 400,
        //                 "line_linked": {
        //                     "opacity": 0.5
        //                 }
        //             },
        //             "bubble": {
        //                 "distance": 400,
        //                 "size": 10,
        //                 "duration": 0.3,
        //                 "opacity": 1,
        //                 "speed": 3
        //             },
        //             "repulse": {
        //                 "distance": 200,
        //                 "duration": 0.4
        //             },
        //             "push": {
        //                 "particles_nb": 4
        //             },
        //             "remove": {
        //                 "particles_nb": 2
        //             }
        //         }
        //     },
        //     "retina_detect": true
        // })


    }, 800)

    //$("section *[data-aos]").addClass('load__block')
    //$("section").addClass('section')

    // $("section img").addClass('lazy')
    // var lazyLoadInstance = new LazyLoad({
    //     elements_selector: ".lazy"
    // })

    // new fullpage('#fullpage', {
    //      menu: 'nav',
    //     //  autoScrolling:true,
    //      scrollBar:true,
    //     //  scrollHorizontally: true,
    //      navigation: true,
    // });

})


$(document).ready(function() {

    AOS.init({
        offset: 120,
        delay: 100,
        duration: 1000,
        easing: "ease",
        disable: 'mobile'
    })

    $(window).scroll( () => {
        var s = $(window).scrollTop(),
            e = $(".ticket").position().top,
            eb = e + $(".ticket").outerHeight(true),
            opacityVal = ( (s - e) / 700);
        if ( s > e )
            $('.timetable .orange_bg').css('opacity', opacityVal)
        if ( s > eb ) 
            $('.timetable .orange_bg').css('opacity', 1)
    });

    $('.menu li a[href^="#"]').on("click", () => {
        $("#menuToggle input, #menuToggle checkbox").prop('checked', false)
    })

});