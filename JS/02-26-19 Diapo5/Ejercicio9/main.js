//resolucion de equaciones de segundo grado (ax**2+bx+c=0)
//si se introduce un valor no numerico no se puede realizar el calculo
//si a=0 no puede ser una ecuacion de segundo grado
//equaciones -b +-(sqrt(b**2 -4ac)/2a)


//funcion calc
    //recogida de variables
        //var a valor de a
        //var b valor de b
        //var c valor de c
    //primer condicional
        //si alguno de los valores no es un número alertar de que hay valores incorrectos
        //si son números todos, comprobar si a es igual 0
            //si a es igual a 0 la equacion no es de segundo grado
            //si a no es igual a 0 se comprueba si d(que es igual a (b**2)-4*(a*c)) es mas grande que 0
                //sino lo es se alerta de que no hay solucion real
                //si lo es calcular equacion
    //ultimo condicional
        //si las dos equaciones (con + y con -) dan el mismo resultado
            //imprimir solo una vez y avisar de que solo hay un resultado
            //sino, imprimir las dos soluciones explicando cual es cual(mostrar equacion pertinente)
//fin

function calc() {
    var a = parseFloat(vala.value);
    var b = parseFloat(valb.value);
    var c = parseFloat(valc.value);
    var d = b**2 - 4 *(a*c);

    if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
        alert('Datos incorrectos, los valores deben ser numéricos');
    } else if (a == 0) {
        alert('Los valores introducidos no pertenencen a una equacion de segundo grado');
    }else if ( d < 0 ) {
        alert('La equacion no tiene solucion');
    } else {
        var calc1 = (- b - (Math.sqrt( b**2 - 4 * a * c ) ) ) / (2 * a);
        var calc2 = (- b + (Math.sqrt( b**2 - 4 * a * c ) ) ) / (2 * a);
    }

    if ( Math.abs(calc1) == Math.abs(calc2) ) {
        output.innerHTML = "Solo hay una respuesta y es: " + calc1.toFixed(2);
    }else {
        output.innerHTML = "-b -( &radic; b<sup>2</sup>-4ac ) / 2*a = <b>" + calc1.toFixed(2) + "</b><br /> -b + ( &radic; b<sup>2</sup>-4ac ) / 2*a = <b>" + calc2.toFixed(2) + "</b>";
    }
}