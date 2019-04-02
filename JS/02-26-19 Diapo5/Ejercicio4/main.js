//función calc
    //Recogida de datos
        //Variables
            //r para Radio
            //pi para Math.Pi
            //op para el select(option)
    //segun la opción
        //se lee la variable op
            //en el caso 1 se calcula el perímetro
            //en el caso 2 se calcula el area
            //en el caso 3 se calcula el diámetro
    //impresion
        //se imprime por pantalla el resultado de la operacion con un máximo de 2 decimales(toFixed)
//fin



function calc(){
    var r = parseFloat(radio.value);
    var pi = Math.PI;
    var op = parseInt(option.value);

    switch(op) {
        case 1: output.innerHTML = (2 * pi * r).toFixed(2);
        break;

        case 2: output.innerHTML = (pi * r ** 2).toFixed(2);
        break;

        case 3: output.innerHTML = (r * 2).toFixed(2);
        break;

        default:output.innerHTML = "Datos incorrectos" ;
    }
}