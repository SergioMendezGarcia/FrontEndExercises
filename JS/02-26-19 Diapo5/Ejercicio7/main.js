//funcion nContestadas
    //recoger variables
        //var pTotal para numero de preguntas
        //var pErr para numero de fallos
        //var pA para numero de aciertos
    //condicionales
        //si pTotal no es un número, hacer que sea cero
        //si pErr no es un número, hacer que sea cero
        //si pA no es un número, hacer que sea cero
    //calculo
        //pSinContestar pTotal - (pErr + pA)
        //imprimir  pSinContestar
//fin

function nContestadas() {
    var pTotal = parseInt(preguntas.value);
    var pErr = parseInt(errores.value);
    var pA = parseInt(aciertos.value);

    if (isNaN(pTotal)) {
        pTotal = 0;
    }
    if (isNaN(pErr)) {
        pErr = 0;
    }
    if (isNaN(pA)) {
        pA = 0;
    }
    var pSinContestar = pTotal - (pErr + pA);
    noContestadas.innerHTML = "Preguntas no contestadas: " + pSinContestar;
    nA.innerHTML = pA;
    nErr.innerHTML = pErr;
}

//funcion calc
    //recoger valores
        //var pTotal para numero de preguntas
        //var pErr para numero de fallos
        //var pA para numero de aciertos
        //var fallo para el descuento por fallo
        //var sobre10 es 10 / pTotal
    //condicionales
        //si pTotal no es un número, hacer que sea cero
        //si pErr no es un número, hacer que sea cero
        //si pA no es un número, hacer que sea cero
    //calcular notas
        //notaSinFallos
            //pA * sobre10
            //Imprimi notaSinFallos
        //notaFinal
            //notaSinFallos - ((sobre10 * fallo) * pErr)
    //condicional
        //si la nota Final >= 5
            //condicional interior
                //si es >=9 imprimir excellente, sino aprobado
            //si no es >= 5 imprimir suspendido
//fin

function calc() {
    var pTotal = parseInt(preguntas.value);
    var pErr = parseInt(errores.value);
    var pA = parseInt(aciertos.value);
    var fallo = parseFloat(descuento.value);
    var sobre10 = 10 / pTotal;

    if (isNaN(pTotal)) {
        pTotal = 0;
    }
    if (isNaN(pErr)) {
        pErr = 0;
    }
    if (isNaN(pA)) {
        pA = 0;
    }

    var notaSinFallos = pA * sobre10;
    nota1.innerHTML =notaSinFallos.toFixed(2);

    var nFinal = notaSinFallos - ((sobre10 * fallo) * pErr);
    notaF.innerHTML =nFinal;

    if (nFinal >= 5) {
        if (nFinal >=9) {
            notaTexto.innerHTML = "¡Excelente!";
        }else {
            notaTexto.innerHTML = "Aprobado";
        }
    }else {
        notaTexto.innerHTML = "¡Suspendido!";
    }
}