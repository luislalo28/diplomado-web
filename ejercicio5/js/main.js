/*
    La funcion ·ready" de Jquery puede utilizar cualquiera de las siguientes sintaxis:

    1.- $(window).load(function() {});
    2.- $(function() {});
    */

    $(function(){
        var slider = $('#slider');
        slider.flexslider({
            animation: 'slide',
            slideshowSpeed: 4000,
            prevText: "anterior",
            nextText: "Siguiente",
            customDirectionNav: ".slider__direction-nav a"
        });
    });