function tiempo() {
    var hora = new Date();

    if (hora.getHours() < 10) {
        horas.innerHTML = "0" + hora.getHours();
    } else {
        horas.innerHTML = hora.getHours();
    }
    if (hora.getMinutes() < 10) {
        minutos.innerHTML = "0" + hora.getMinutes();
    } else {
        minutos.innerHTML = hora.getMinutes();
    }
    if (hora.getSeconds() < 10) {
        segundos.innerHTML = "0" + hora.getSeconds();
    } else {
        segundos.innerHTML = hora.getSeconds();
    }
}

setInterval (tiempo, 500 );