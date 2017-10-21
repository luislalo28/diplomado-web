// Ready Function
$(function() {
    var tableProms = $('.table-prom');
    var prom = $('#prom');
    var numeroTableProms = tableProms.length;
    var sumProms = 0;
    
    for(var i = 0; i < numeroTableProms; i++){
        var valorProm = $(tableProms[i]).text();
        var valorPromNumber = parseInt(valorProm, 10);
        
        
        // sumProms= sumProms + ValorPromNumber;
        sumProms += valorPromNumber;
        
     
    }
    
    var promedio = sumProms / numeroTableProms;
    prom.text(promedio);
});