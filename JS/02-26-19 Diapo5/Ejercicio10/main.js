var random;
var intentos = 1;
var nUser;

function button() {
    nUser = parseInt(numU.value);
    if (isNaN(nUser)) {
        document.getElementById('comprobar').disabled = true;
    } else {
        document.getElementById('comprobar').disabled = false;
    }
}

function comprobar() {
    nUser = parseInt(numU.value);
    if (isNaN(random)) {
        random = Math.floor(Math.random() * (128 - 1) + 1);
    }
    if (nUser == random) {
        output.innerHTML = "Acertaste a la " + intentos;
        document.getElementById('comprobar').disabled = true;
    }else if (nUser > random){
        output.innerHTML = "El número es mas pequeño que " + nUser + ". " + "És tu " + intentos + " intento";
        intentos++;
        if ( intentos == 8 ) {
            alert('Eres muy malo');
            document.getElementById('comprobar').disabled = true;
        }
    }else {
        output.innerHTML = "El número es mas grande que " + nUser + ". " + "És tu " + intentos + " intento";
        intentos++;
        if ( intentos == 8 ) {
            alert('Eres muy malo');
            document.getElementById('comprobar').disabled = true;
        }
    }
}

function reiniciar() {
    intentos = 1;
    random = NaN;
    output.innerHTML = "";
    numU.value = "";
    document.getElementById('comprobar').disabled = true;
}