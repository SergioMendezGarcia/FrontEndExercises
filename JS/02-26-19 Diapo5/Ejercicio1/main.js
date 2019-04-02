function calc() {
    var n1 = parseFloat(nota1.value);
    var n2 = parseFloat(nota2.value);
    var n3 = parseFloat(nota3.value);

    if (isNaN(n1)) {
        n1 = 0;
    }

    if (isNaN(n2)) {
        n2 = 0;
    }

    if (isNaN(n3)) {
        n3 = 0;
    }

    var prom = (n1 + n2 + n3) / 2;

    if (prom >= 5) {
        output.innerHTML = "Has aprobado con un " + prom.toFixed(2);
    }else {
        output.innerHTML = "Has suspendido con un " + prom.toFixed(2);
    }
}