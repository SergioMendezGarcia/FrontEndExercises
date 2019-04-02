//función calc
    //Recogida de datos
        //Variables
            //r para Radio
            //pi para Math.Pi
            //per para el perimetro
            //a para el area
            //d para el diametro
    //impresion para resetear
        //imprimir las 3 variables para hacer reset al desmarcar un checkbox
    //segun la opción
        //condicional 1
            //se lee la variable per(automaticamente comprueba si esta checked)
            //calcular el perimetro
            //imprimir el resultado
        //condicional 2
            //se lee la variable a(automaticamente comprueba si esta checked)
            //calcular el area
            //imprimir el resultado
        //condicional 3
            //se lee la variable d(automaticamente comprueba si esta checked)
            //calcular el diametro
            //imprimir el resultado
//fin



function calc(){
    var r = parseFloat(radio.value);
    var pi = Math.PI;
    var per = perimetro.checked;
    var a = area.checked;
    var d = diam.checked;
    outputp.innerHTML = "";
    outputa.innerHTML = "";
    outputd.innerHTML = "";

    if (per) {
        per = 2 * pi * r;
        outputp.innerHTML = "Perímetro: " + per.toFixed(2);
    }

    if (a) {
        a = pi * r**2;
        outputa.innerHTML = "Area: " + a.toFixed(2);
    }

    if (d) {
        d = r * 2;
        outputd.innerHTML = "Diámetro: " + d.toFixed(2);
    }
    if(!per && !a && !d) {
        alert('Marca alguna de las opciones');
    }
}