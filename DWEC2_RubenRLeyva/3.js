/**
 * Función encargada de invertir las letras, de mayúscula en minúscula o viceversa
 */
function invertirLetras(){
    
    // Variable booleana encargada del bucle
    var comprobar = false;
   
    // Bucle encargado de introducir cadenas
    do{
        
        // Variable encargada de la cadena convertida a mayúsculas o minúsculas
        var cadenaConvertida = "";
        
        // Variable para introducir una cadena
        var cadena =  prompt("Introduce una cadena de caracteres para cambiar entre mayúsculas y minúsculas: ", "");
        
        // Si la cadena es nula (se pulsa cancelar) se indica
        if(cadena == null){
            document.write("HAS PULSADO CANCELAR");
            comprobar = true;
    
        // en caso que el tamaño sea menor de uno, significará que no se ha introducido ningún valor
        }else if(cadena.length < 1){
            alert("NO HAS INTRODUCIDO NINGÚN VALOR");
        
        // en caso contrario a las anteriores cambiamos entre mayúsculas y minúsculas
        }else{
    
            // A través de un bucle for
            for(var i = 0; i < cadena.length; i++){
            
                // Creamos una variable que cambia cada caracter a mayúsculas
                var comprobar = cadena.charAt(i).toUpperCase();
        
                // Si comprobar y el caracter son iguales la convertimo a minúscula
                if(comprobar == cadena.charAt(i)){
                cadenaConvertida += cadena.charAt(i).toLowerCase();
                
                // en caso contrario lo pasamos a mayúscula
                } else {
                    cadenaConvertida += cadena.charAt(i).toUpperCase();
                }
            }
      
        // Mostramos por pantalla el resultado y terminamos con el bucle
        document.write("La cadena sin convertir: "+cadena+" es convertida a: "+cadenaConvertida);
        comprobar = true;
        }   
    }while(!comprobar); //Fin do-while
}


