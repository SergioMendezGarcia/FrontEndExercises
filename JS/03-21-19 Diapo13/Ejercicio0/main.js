var fin = new Date();
fin.setHours(20,0,0,0);

function calcular() {
    var ahora = new Date();
    var seg = parseInt((fin-ahora)/1000);

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

    document.getElementById('segundos').innerHTML = segundos;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('horas').innerHTML = horas;
}

setInterval( calcular, 500 );