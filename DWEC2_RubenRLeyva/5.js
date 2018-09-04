/**
 * Función que nos muestra por pantalla 10 números aleatorios dentro de
 * un rango entre 5 y 107
 */
function numerosAleatorios(){
    
    // Mostramos un mensaje 
    document.writeln("Números aleatorios: ");
    
    // Bucle para generar 10 números aleatorios
    for(var i = 0; i < 10; i++){
        
        // Variable para el número aleatorio
        var numeroAleatorio = parseInt(Math.random()* 107) + 5;
        
        // Me he dado cuenta que algunas veces saca números mayores de
        // 107 por lo que voy a impedir que se impriman dichos valores
        // y a la vez restar uno a i para que vuelva a sacar otro 
        // número.
        if(numeroAleatorio > 107){
            i--;
        
        // en caso contrario se muestra el número aleatorio
        }else{
            document.writeln("  "+numeroAleatorio);
        }       
    }   
}


