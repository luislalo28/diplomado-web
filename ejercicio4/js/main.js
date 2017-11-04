//ready method

$(function() {
    /*
    Variables
    */
    var formContact = $('#formContact');

    /*
    ste default values
    */
    $.extend($.validator.messages, {
        required: 'Este campo es obligatorio',
        email: 'Ingresa un correo valido',
        url:'Ingresa una url valida',
        minlength: 'Ingresa al menos {0} caracteres'
    });

    /*
    Apply validation plugin
    */

    formContact.validate();

    // $('#formContact').validate();
});