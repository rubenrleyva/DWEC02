/**
 * Función que devuelve el área de un triángulo y el tipo del mismo.
 */
function calculoTriangulos(){
     
    // Variables que guardarán los diferentes errores según sea el caso, lado A, lado B, lado C
    var errorA = "";
    var errorB = "";
    var errorC = "";
     
    // Variable booleana que se encargará de la comprobación de los datos
    var comprueba = false;
    
    // Bucle encargado de pedir números para los diferentes lados hasta que sea correcto
    // o se pulse en cancelar.
    do{
        
        // Pedimos el primer lado A, le pongo un valor por defecto ya que en IE 
        // si no se pone por defecto aparece la palabra undefined.
        var a = prompt(errorA+"Introduce uno de los lados(A): ", "");
              
        // Pedimos el segundo lado B, le pongo un valor por defecto ya que en IE 
        // si no se pone por defecto aparece la palabra undefined.
        var b = prompt(errorB+"Introduce uno de los lados(B): ", "");
        
        // Pedimos el tercer lado C, le pongo un valor por defecto ya que en IE 
        // si no se pone por defecto aparece la palabra undefined.
        var c = prompt(errorC+"Introduce uno de los lados(C): ", "");
        
        // "Reseteamos" el valor de las variables encargadas de guardar el string de errores.
        errorA = "";
        errorB = "";
        errorC = "";
        
        // En caso de pulsar cancelar al introducir los datos pasaremos el mensaje y saldremos del bucle.
        if((a == null || b == null || c == null)){
            document.write("HAS PULSADO CANCELAR EN ALGUNA DE LAS VENTANAS");
            comprueba = true;
            
        // en caso contrario (se han introducido datos) continuamos
        }else{

            // Variable creada para controlar los errores de los valores
            var errorAlert = "";
            var contadorFallos = 0;
        
            // Comprobamos que el valor del lado A es correcto y en caso contrario se
            // añade el lado que tiene el error y un mensaje al mismo.
            if(!compruebaDatos(a)){
                errorAlert += " A,";
                errorA += "Error: En la anterior introducción de datos se produjo un error.\n"
                contadorFallos++;
            }
        
            // Comprobamos que el valor del lado B es correcto y en caso contrario se
            // añade el lado que tiene el error y un mensaje al mismo.
            if(!compruebaDatos(b)){
                errorAlert += " B,";
                errorB += "Error: En la anterior introducción de datos se produjo un error.\n"
                contadorFallos++;
            }
        
            // Comprobamos que el valor del lado A es correcto y en caso contrario se
            // añade el lado que tiene el error y un mensaje al mismo.
            if(!compruebaDatos(c)){
                errorAlert += " C,";
                errorC += "Error: En la anterior introducción de datos se produjo un error.\n"
                contadorFallos++;
            }
      
            // Si encontramos fallos le añadimos el/los nombre/s del/los lado/s al aviso.
            if(contadorFallos > 0){
            
                // Mensaje con los lados que tienen un error
                alert("Error: El valor del/los lado/s"+errorAlert+" es menor de 0 o no has introducido un número.");
        
            // en caso contrario
            }else {
            
                // Salimos del bucle do-while
                comprueba = true;
            
                // y llamamos a la función para averguar el area y el tipo de triángulo
                triangulos(a, b, c);
            }
        }
    } while(!comprueba); // Fin do-while 
}
 
/**
 * Función encargada de comprobar el tipo de triángulo y su área.
 * 
 * @param {type} a El valor del lado a
 * @param {type} b El valor del lado b
 * @param {type} c el valor del lado c
 */
function triangulos(a, b, c){
    
    // Creamos la variable para el tipo de triángulo
    var tipoTriangulo = "";
   
    // Comprobamos si los tres números son iguales, aunque solo hacemos dos
    // hay que tener en cuenta que si a es igual a b y b lo es a c, entonces
    // a será igual a c
    if((a == b) && (b == c)){
        tipoTriangulo = "Equilátero";

    // Comprobamos si hay algún número se parece a otro, es decir dos iguales.
    }else if(a == b || a == c || b == c){
        tipoTriangulo = "Isósceles";
 
    // Por último comprobamos que todos los números sean diferentes  
    } else if(a != b || a != c || c != b){
        tipoTriangulo = "Escaleno";
    }
    
    // Creamos la variable para el tipo de error al formar el triángulo
    var errorValores = "";
    
    // Comprobamos que los diferentes números suministrados siguen las reglas para la fomación de triángulos
    if((a + b <= c) || (a - b >= c) || (b - a >= c)){
        
        // Suma para comprobar el máximo para uno de los lados
        var suma = parseInt(a) + parseInt(b);
        
        // Variable para comprobar el mínimo para uno de los lados
        var restar = 0;
        
        // Si b es mayor que a, restamos en el mismo orden
        if(b > a){
           restar =  parseInt(b) - parseInt(a);
           
        // al contrario restamos a menos b
        } else{
            restar =  parseInt(a) - parseInt(b);
        }
        
        // Pasamos a la variable errorValores su contenido
        errorValores = "El valor del lado C debe estar comprendido entre " +suma+ " y "+restar+" sin incluir ambos para ser un triángulo.";
    }
    
    // Variable que calcula el semiperímetro
    var semiperimetro = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
    
    // Variable intermedia utilizada para calcular
    var subarea = semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c);
    
    // Variable usada para calcular el area a través de la raíz cuadrada de la variable subarea
    var area = Math.sqrt(subarea);
    
    // En caso de que area sea mayor de 0 lo mostramos por pantalla el resultado.
    if(area > 0){
        
        // Se utiliza el método toFixed para quitar decimales
        document.write("Es un Triángulo "+tipoTriangulo+" con un area de: "+area.toFixed(5));
        
    // en caso contrario avisamos del error
    } else {
        
        alert(errorValores);
        
        // y volvemos a pedir valores para los lados
        calculoTriangulos();
        
    }
}

/**
 * Función para comprobar los diferentes datos introducidos
 * 
 * @param {type} dato El valor de un lado
 * @returns {Number} El número de retorno
 */
function compruebaDatos(dato){
    
    // Variable que se retornará
    var retorno = true;
    
    // Si el valor del lado es menor de uno o no es un número
    if(dato < 1 || isNaN(dato)){
        retorno = false;
    }
    
    // El retorno
    return retorno;
}


