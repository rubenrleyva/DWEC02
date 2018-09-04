/**
 * Función que nos cuenta los días que quedan pasándolos a días, horas
 * minutos y segundos.
 */
function cuantoQueda(){
    
    // Sacamos la fecha de hoy
    var hoy = new Date();
    var nuevaFecha = new Date();
    
    // Creamos algunas variables
    var _segundos = 1000;
    var _minutos = _segundos * 60;
    var _horas = _minutos * 60;
    var _dias = _horas * 24;
    
    // Imprimimos la misma por pantalla.
    document.writeln("<br>Hoy es el día: "+hoy.toLocaleDateString("es-ES")+"<br>");
    
    // Sacamos la fecha con su hora de estreno según kinepolis Granada,
    // (fecha que me pone si saco ahora las entradas).
    var estreno = new Date(2017,11,15,00,01,0,0);
    
    // Mostramos el día del estreno
    document.writeln("El día del estreno es: "+estreno.toLocaleDateString("es-ES")+"<br>");
    
    // hacemos la diferencia en milisegundos entre las dos fechas
    var nuevaFecha = estreno.getTime() - hoy.getTime();
    
    // Averiguamos los días que faltan
    var dias = Math.floor(nuevaFecha / _dias);
    
    // Averiguamos las horas
    var horas = Math.floor((nuevaFecha % _dias) / _horas);
    
    // Averiguamos los minutos
    var minutos = Math.floor((nuevaFecha % _horas) / _minutos);
    
    // Averiguamos los segundos
    var segundos = Math.floor((nuevaFecha % _minutos) / _segundos);
 
    // Imprimimos el resultado
    document.writeln("QUEDAN:<br>");
    document.writeln("Días: " +dias+ "<br>");
    document.writeln("Horas: " +horas+ "<br>");
    document.writeln("Minutos: " +minutos+ "<br>");
    document.writeln("Segundos: " +segundos+ "<br><br>");
    

}


