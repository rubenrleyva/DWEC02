/**
 * Función principal encargada de lanzar el prompt para introducir la fecha
 * junto con la la verificación de los datos introducidos.
 */
function horoscopoIndio(){
    
    // Variable utilizada para el error que pueda suceder con el día introducido
    var errorDia = "";
    
    // Variable utilizada para el error que pueda generar el mes introducido
    var errorMes = "";
    
    // Variable utilizada para el error que pueda generar el mes introducido
    var errorAno = "";
    
    // Variable booleana que se encargará de 
    var comprueba = false;    
    
    // Estoy teniendo muchísimos problemas con los números, ya que javascript
    // aunque son números me los toma algunas veces como String, por eso hago uso
    // de parseInt en base diez.
    var contadorFallos = parseInt(0, 10);
    
    // Bucle encargado de pedir números hasta que sean correcto o se pulse en cancelar
    do{
        // Se utilizará para poner la fecha actual por defecto en las entradas, como ejemplo.
        // Tamién lo utilizo porque al probar la web en IE me aparece un valor por defecto
        // por lo que prefiero que aparezca la fecha a ese mensaje.
        var fechaHoy = new Date();
        
        // Pedimos el día, mes y año de nacimiento.
        var dia = prompt(errorDia+"Introduce el día de nacimiento: ", fechaHoy.getDate());
        var mes = prompt(errorMes+"Introduce el mes de nacimiento (en número): ", fechaHoy.getMonth() + 1);
        var ano = prompt(errorAno+"Introduce el año de nacimiento (en número): ", fechaHoy.getFullYear());
        
        // "Reseteamos" el valor de las variables encargadas de guardar el string de errores.
        errorDia = "";
        errorMes = "";
        errorAno = "";
        
        // En caso de pulsar cancelar sin introducir los datos pasaremos el mensaje y saldremos del bucle
        if((dia == null || mes == null || ano == null)){
            document.write("HAS PULSADO CANCELAR EN ALGUNA DE LAS VENTANAS<br>");
            comprueba = true;
            
        }else{
            /*
            // En caso de pulsar aceptar sin introducir los datos pasaremos el mensaje y saldremos del bucle
            if((dia.length < 1 || mes.length < 1 || ano.length < 1)){
                document.write("NO HAS INTRODUCIDO NINGÚN DATO EN ALGUNA DE LAS VENTANAS<br>");
                comprueba = true;
            }*/
          
            // Reiniciamos el contador de fallos y los errores de la ventana alert
            var erroresAlert = "";
           
            // Comprobamos el día, si es falso se indica que hay errores.
            if(!comprobarFechaDias(dia, mes)){
                errorDia += "Error: Encontramos errores en la anterior comprobación del día de nacimiento. \n";
                contadorFallos++;
                erroresAlert += "dia,";
            }

            // Comprobamos el mes, si es falso se indica que hay errores.
            if(!comprobarFechaMes(dia, mes)){
                errorMes += "Error: Encontramos errores en la anterior comprobación del mes de nacimiento. \n"; 
                contadorFallos++;
                erroresAlert += "mes,";
            }

            // Comprobamos el año, si es falso se indica que hay errores.
            if(!comprobarFechaAno(ano)){
                errorAno += "Error: Encontramos errores en la anterior comprobación del año de nacimiento. \n";
                contadorFallos++;
                erroresAlert += "año,";
            }
        
            // Comprobación de la fecha entera con el objeto DATE, la pongo por
            // las anteriores comprobaciones no son válidas.
            if(!comprobacionFechaDate(dia, mes, ano)){
                erroresAlert += "la fecha de nacimiento,";
                contadorFallos++;
            }
        
            // En caso de que contador de fallos sea menor de uno salimos del bucle
            if(contadorFallos < 1){
                comprueba = true;
                horoscopo(dia, mes);
        
            // en caso contrario lo indicamos con una ventana alert
            }else{
            
                alert("Error: Encontramos errores en "+erroresAlert+" por favor \n\
                    vuelva a introducir su fecha de nacimiento.");
                contadorFallos = 0;
            }  
        }
    }while(!comprueba); //Fin do-while
}

/**
 * Función que se utiliza para validar algunos datos de la fecha,
 * los cuales intenté integrar dentro de la función anterior,
 * pero no lo logré.
 * 
 * @param {type} meses El día de nacimiento.
 * @param {type} dias El día de nacimiento.
 * @returns {prueba} Retornamos true o false según corresponda
 */
function comprobarFechaDias(dias, meses)
{
    // Iniciamos la booleana
    var prueba = true;
    
    // Controlo que los días no sean inferiores a 1 o que sea otro tipo de variable.
    if(dias < 1 || isNaN(dias) || dias > 31 || ((meses == 4 || meses == 6 || meses == 9 || meses == 11) && (dias > 30)))
    {
        prueba = false;
    }
    
    // Retorno de la función con true o false
    return prueba;
}

/**
 * Función encargada de comprobar que el mes de nacimiento es correcto
 * 
 * @param {type} dias El día de nacimiento
 * @param {type} meses El mes de nacimiento
 * @returns {Boolean} Retornamos true o false según corresponda
 */
function comprobarFechaMes(dias, meses)
{
    // Iniciamos la booleana
    var prueba = true;
    
    // Controlo que no sea el mes inferior a uno o superior a 12, además de controlar que los meses de 30 días
    // se corresponda como tal, se controla también que los meses sean numeros.
    if(meses < 1 || meses > 12 || ((meses == 4 || meses == 6 || meses == 9 || meses == 11) && (dias > 30))|| isNaN(meses))
    {
        prueba = false;
    }
    
    // Retorno de la función con true o false
    return prueba;
}

/**
 * Función encargada de comprobar el año de nacimiento, si el mismo es superior
 * al actual pasaremos como false.
 * 
 * @param {type} anos El año de nacimiento
 * @returns {Boolean} Retornamos true o false según corresponda
 */
function comprobarFechaAno(anos)
{
    // Iniciamos la variable booleana
    var prueba = true;
    
    // Creamos una variable con la fecha actual
    var fechaActual = new Date();
    
    // Comprobamos si la fecha introducida es superior a la actual o que es inferor
    // a 1900(no creo que ya queden personas de ese año de nacimiento, pero por poner algo).
    if((fechaActual.getFullYear() < anos) || (anos < 1900)){
        prueba = false;
    }

    // Retorno de la función con true o false
    return prueba;
}

/**
 * Función que comprueba la fecha entera a través de el objeto DATE. Lo uso también 
 * por si acaso la otra forma expuesta no es válida o se queda corta a la hora
 * de evaluar
 * 
 * @param {type} dias El día de nacimiento introducido
 * @param {type} meses El mes de nacimiento introducido
 * @param {type} anos El año de nacimiento introducido
 * @returns {Boolean} Retorno de tru o false según corresponda
 */
function comprobacionFechaDate(dias, meses, anos){
    
    // Iniciamos la variable booleana
    var prueba = true;
    
    // Iniciamos la variable que contiene la fecha actual
    var fechaActual = new Date();

    // Iniciamos la variable que contiene la fecha introducida de nacieminto
    // con los datos introducidos a través de dia, mes, ano. A mes le restamos
    // uno ya que comienza en cero Enero.
    var fechaIntroducida = new Date(anos, meses - 1, dias, 00, 00, 00);
    
    // Verificamos que la fecha introducida no sea posterior de la actual
    if(fechaActual < fechaIntroducida){
        prueba = false;
    }
    
    // Retornamos según corresponda true o false
    return prueba;
}

/**
 * Función encargada de elegir según el día y el mes el horoscopo correspondiente.
 * 
 * @param {type} dia El día de nacimiento.
 * @param {type} mes El mes de nacimiento.
 */
function horoscopo(dia, mes){
    
    // Variables para concatenar el horoscopo y el iframe.
    var horoscopo, frame;
    
    // Según el mes
    switch(mes){
        
        // Mes de Enero
        case '1':
            
            // Si el dia es menor de 20 corresponderá al Ganso
            if(dia < 20){
                horoscopo = "Ganso de las nieves";
                frame = "<iframe width='400' height='400' src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/ganso.php'></iframe>";
                
            // en caso contrario será la Nutria
            } else {
                horoscopo = "Nutria";
                frame = "<iframe width='400' height='400' src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/nutria.php'></iframe>";
            }
        break;
        
        // Mes de Febrero
        case '2':
            
            // Si el día es menor de 19 corresponderá a una Nutria
            if(dia < 19){
                horoscopo = "Nutria";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/nutria.php'></iframe>";

            // en caso contrario corresponderá con un Puma(lobo)
            } else {
                horoscopo = "Puma";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/lobo.php'></iframe>";
            }           
        break;
        
        // Mes de Marzo
        case '3':

            // Si el día es menor de 21 corresponderá a un Puma(lobo)
            if(dia < 21){
                horoscopo = "Puma";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/lobo.php'></iframe>";
                
            // en caso contrario corresponderá con el Halcón Rojo
            } else {
                horoscopo = "Halcón Rojo";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/halcon.php'></iframe>";
            }        
        break;
        
        // Mes de Abril
        case '4':
            
            // Si el día es menor de 20 corresponderá con el Halcón Rojo
            if(dia < 20){
                horoscopo = "Halcón Rojo";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/halcon.php'></iframe>";
             
            // en caso contrario corresponderá con un Castor
            } else {
                horoscopo = "Castor";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/castor.php'></iframe>";
            }
        break;
        
        // Mes de Mayo
        case '5':

            // Si el día es menor de 21 corresponderá con el Castor
            if(dia < 21){
                horoscopo = "Castor";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/castor.php'></iframe>";
            
            // en caso contrario corresponderá con un Alce
            } else {
                horoscopo = "Alce";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/alce.php'></iframe>";
            }    
        break;
        
        // Mes de Junio
        case '6':

            // Si el día es menor de 21 corresponderá con el Alce
            if(dia < 21){
                horoscopo = "Alce";
                frame = "<iframe cwidth='400' height='400' src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/alce.php'></iframe>";
            
            // en caso contrario corresponderá con un Pájaro Carpintero
            } else {
                horoscopo = "Pájaro Carpintero";
                frame = "<iframe width='400' height='400' src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/carpintero.php'></iframe>";
            }        
        break;
        
        // Mes de Julio
        case '7':
            
            // Si el día es menor de 23 corresponderá con un Pájaro Carpintero
            if(dia < 23){
                horoscopo = "Pájaro Carpintero";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/carpintero.php'></iframe>";
            
            // en caso contrario corresponderá con un Esturión
            } else {
                horoscopo = "Esturión";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/salmon.php'></iframe>";
            }               
        break;
          
        // Mes de Agosto
        case '8':
            
            // Si el día es menor de 23 corresponderá con un Esturión
            if(dia < 23){
                horoscopo = "Esturión";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/salmon.php'></iframe>";
  
            // en caso contrario corresponderá con un Oso Pardo
            } else {
                horoscopo = "Oso Pardo";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/oso.php'></iframe>";
            }
        break;
         
        // Mes de Septiembre
        case '9':
            
            // Si el día es menor de 23 corresponderá con un Oso Pardo
            if(dia < 23){
                horoscopo = "Oso Pardo";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/oso.php'></iframe>";

            // en caso contrario corresponderá con un Cuervo
            } else {
                horoscopo = "Cuervo";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/cuervo.php'></iframe>";

            }       
        break;
        
        // Mes de Octubre
        case '10':
            
            // Si el día es menor de 24 corresponderá con un Cuervo
            if(dia < 24){
                horoscopo = "Cuervo";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/cuervo.php'></iframe>";
            
            // en caso contrario corresponderá con un Serpiente
            } else {
                horoscopo = "Serpiente";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/serpiente.php'></iframe>";
            }        
        break;
        
        // Mes de Noviembre
        case '11':
            
            // Si el día es menor de 22 corresponderá con un Serpiente
            if(dia < 22){
                horoscopo = "Serpiente";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/serpiente.php'></iframe>";
            
            // en caso contrario corresponderá con un Buho
            } else {
                horoscopo = "Buho";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/buho.php'></iframe>";
            }
        break;
        
        // Mes de Diciembre
        case '12':
            
            // Si el día es menor de 23 corresponderá con un Buho
            if(dia < 22){
                horoscopo = "Buho";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/buho.php'></iframe>";
            
            // en caso contrario corresponderá con un Ganso de las nieves
            } else {
                horoscopo = "Ganso de las nieves";
                frame = "<iframe width='400' height='400'  src='http://www.elhoroscopodehoy.es/tipos-de-horoscopos/horoscopo-indio/ganso.php'></iframe>";
            }       
        break;
        
        // Default que en este caso no se hará uso del mismo
        default:
        break;
    }
    
    // Mostramos la salida del iframe.
    document.write("<br>Tu Horoscopo Indio es '"+horoscopo+"'<br><br>");
    document.write(frame+"<br><br>");
}