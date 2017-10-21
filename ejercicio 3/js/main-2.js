//Ready Function
$(function() {
    var tableProm = $('.table-prom');
    
    //console.log(tableProm.length);
    
    /*
    Tipos de valores:
        -Valores de cadena de texto    -> STRING
        -Valor numerico                -> NUMBER
        - Valor de tipo arreglo        -> ARRAY
        -Valor Booleano                -> BOOLEAN
        
    */
    
    var verdadero = true;
    var falso = false;
    
    var texto1 = 'Hola Mundo';
    var texto2 = '2017';
    
    var numero1 = 10;
    var numero2 = 20;
    
    var resultado = numero1 + numero2;
    
    // ARRAY === Arreglo, Vector o Matriz
    var diasSemana = ['lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    

    /* "Menor que"  devuelve un BOOLEAN. p.ej: 5<10 ===TRUE
        "++" Incremento. p.ej: 10++ === 11
        "--" Decremento. p.ej: 10-- === 9
    
    
    resultado--;
    resultado--;
    resultado--;
    resultado--;
    
    console.log(resultado);
        // iterador "for"
        
        */
    var numeroDiasSemana = diasSemana.length;
    
    for(var i = 0; i < numeroDiasSemana; i++) {
        console.log(diasSemana[i]);
        //Code...
        
    }
});