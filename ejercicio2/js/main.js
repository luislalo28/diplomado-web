/* 
    1. Clic sobre la imagen Thumbnail.
    2. Tomar el valor del atributo "href" de la etiqueta "anchor"
    3. guardar dicho valor en una variable con nombre  "imagenOriginal"
    4. cambiar el valor del atributo "src" de la imagen principal por el valor del atributo "href"
       que tenemos guardada en la variable "imagenOriginal".
*/

/* 
   Método "ready" de Jquery asegura que el codigo de JS se ejecutara cuando el 
   arbol "DOM" del html este renderizado.

   La sintaxis de la funcion anonima de JS es:
    function() {}

    La sintaxis del metodo "ready" de jquery es:

        $( funcion anonima )
        es decir:

        $( function() {} )
    
    El codigo escrito adentro de las llaves es el codigo que se va a ejecutar cuando el "DOM" del HTML este reenderizado

    $( function() {
        //code here...
    } )

    Método on de Jquary sirve para escuchar eventos, por ejemplo (click, doble click, scroll, entre otros)
    la sisntaxis es:
        El elemento que desencadena.on( evento a escuchar, codigo a ejecutar );
        por lo tanto :

        elemento.on(evento, funcion anonima )

        la sintaxis queda de la siguiente manera:
        elemento.on( "click", function() {})
    
    El metodo "preventDefault" del evento (evento), bloquea el comportamiento por defecto
    que tenga el elemento que desencadena el evento "click" 

    El método attr de Jquary funciona para dos cosas:
        1. Para devolvernos el valor del atributo especificado, es decir, 
        recibe un parametro el cual es el nombre del atributo del que queremos obtener su valor.
            vgr.
            elemento.attr("href");
        2. Para cambiar el valor del atributo especificado, es decir
            recibe dos parametros.
                -nombre del atributo que queremos modificar.
                -el nuevo valor para éste atributo.

            vgr.
            elemento.attr("href", "images/img-2.jpg");

*/

$(function () {
    var imgMini = $(".img-mini");
    var imgPrincipal = $("#imgPrincipal");

    imgMini.on("click", function (event) {
        event.preventDefault();
        var imagenOriginal = $(this).attr("href");
        imgPrincipal.attr("src", imagenOriginal);
    });
});