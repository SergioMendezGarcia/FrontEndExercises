function calc(d, m, a) {
    var fecha = new Date();
    var fecha2 = new Date();
    var hoy = new Date();
    fecha.setDate(d);
    fecha.setMonth(m-1);
    fecha.setFullYear(fecha2.getFullYear());
    fecha.setHours(0, 0, 0, 0);
    hoy.setHours(0, 0, 0, 0);

    var anyDif = hoy.getFullYear()-a;

    if ( fecha.getTime() == hoy.getTime() ) {
        cumple.innerHTML = ("Feliz cumpleaños, hoycumples " + anyDif + " años <br /> <img src='hb.gif' />");
    }else if ( fecha > hoy ) {
        var diferencia = parseInt(((((fecha-hoy)/1000)/60)/60)/24);
        cumple.innerHTML = "Quedan " + diferencia +" días para tu cumpleaños, y cumplas " + anyDif + " años";
    } else {
        fecha.toString();
        fecha2 = new Date(fecha);
        fecha2.setFullYear(fecha2.getFullYear()+1);
        fecha = new Date(fecha);
        var diferencia = parseInt(((((fecha2-hoy)/1000)/60)/60)/24);
        cumple.innerHTML = "Quedan " + diferencia +" días para tu cumpleaños, y cumplas " + (anyDif+1) + " años";
    }
    
}