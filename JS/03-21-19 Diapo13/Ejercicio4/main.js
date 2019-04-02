var f;
var intervalo;

function calcular() {
    var ahora = new Date();

    var dia = parseInt(((((f-ahora)/1000)/60)/60)/24);
    var seg = parseInt((f-ahora)/1000);

    var segundos = seg%60;
    var minutos = parseInt(seg/60)%60;
    var horas = parseInt(seg/3600)%24;

    if ( segundos < 10 ) {
        segundos = '0' + segundos;
    }
    if ( minutos < 10 ) {
        minutos = '0' + minutos;
    }
    if ( horas < 10 ) {
        horas = '0' + horas;
    }

    if ( f < ahora ) {
        alert("Ya has alcanzado la fecha prevista");
        clearInterval(intervalo);
    } else {
        dias.innerHTML = "Dias: " + dia;
        tiempo.innerHTML = "Tiempo: <div><div>" + horas + "</div>: <div>" + minutos + "</div>: <div>" + segundos + "</div></div>";
    }
}

function cuentaAtras() {
    f = fecha.valueAsDate;
    var h =  parseInt(hora.value);
    var m =  parseInt(min.value);
    var s = parseInt(seconds.value);
    f.setHours(h,m,s,0);
    intervalo = setInterval(calcular, 500);
}