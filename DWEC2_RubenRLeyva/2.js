/**
 * Función utilizada para recoger y validar la entrada de una cadena sring
 */
function contarCaracteres()
{
    // Variable booleana encargada del bucle
    var comprobar = false;
    
    // Bucle encargado de introducir valores
    do{
        
        // Pedimos al usuario la introducción de una cadena.
        var cadena = prompt("Introduce una cadena para saber de cuantos caracteres alfabéticos dispone: ", "");
        
        // Si la cadena es nula (se pulsa cancelar) se indica
        if(cadena == null){
            document.write("HAS PULSADO CANCELAR");
            comprobar = true;
        }else
        
        // si no se ha introducido ningún valor, se avisa mediante una ventana alert
        if(cadena.length < 1){
            alert("NO HAS INTRODUCIDO NINGÚN VALOR");
        
        // en caso de que los dos anteriores casos no se den pasamos a llamar
        // a la funcion encargada de contar la cadena.
        }else{
            comprobar = true;
            contar(cadena);
        }
        
    }while(!comprobar); // Fin do-while
}

/**
 * Función que se encarga de pasar a minúscula la cadena y contar los caracteres
 * alfabéticos.
 * 
 * @param {type} cadena La cadena introducida
 */
function contar(cadena){
    
    // Lo cambiamos a minúsculas
    var cadenaMinusculas = cadena.toLowerCase();
    
    // Iniciamos el contador de caracteres alfabéticos.
    var contador = 0;
    
    // Mostramos por pantalla la cadena que vamos a analizar.
    document.writeln("La cadena '"+cadena+"' ");
    
    // A través de un bucle for recorremos la cadena
    for(var i = 0; i < cadenaMinusculas.length; i++)
    {
        // Si encontramos en la cadena algún caracter alfabético
        if(cadenaMinusculas.charAt(i) >= 'a' && cadenaMinusculas.charAt(i) <= 'z')
        {
            // sumamos uno al contador
            contador++;
        }
            
        // Si encontramo una ñ
        if(cadenaMinusculas.charAt(i) == 'ñ'){
                
            // sumamos uno al contador
            contador++;
        }
    }
        
    // Mostramos por pantalla el resultado
    document.writeln("dispone de "+contador+" caracteres alfabéticos.");  
}


