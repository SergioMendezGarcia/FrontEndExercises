var num1, num2, num3, num4;

function sumar() {

    num1 = parseFloat(document.getElementById("num1").value);

    num2 = parseFloat(document.getElementById("num2").value);

    num3 = parseFloat(document.getElementById("num3").value);

    num4 = parseFloat(document.getElementById("num4").value);

    var resultado = num1 + num2 + num3  +num4;

    document.getElementById('resultado').innerHTML = ": " + resultado + ".";
}

function restar() {

    num1 = parseFloat(document.getElementById("num1").value);

    num2 = parseFloat(document.getElementById("num2").value);

    num3 = parseFloat(document.getElementById("num3").value);

    num4 = parseFloat(document.getElementById("num4").value);

    var resultado = num1 - num2 - num3 - num4;

    document.getElementById('resultado').innerHTML = ": " + resultado + ".";
}

function producto() {

    num1 = parseFloat(document.getElementById("num1").value);

    num2 = parseFloat(document.getElementById("num2").value);

    num3 = parseFloat(document.getElementById("num3").value);

    num4 = parseFloat(document.getElementById("num4").value);

    var resultado = num1 * num2 * num3 * num4;

    document.getElementById('resultado').innerHTML = ": " + resultado + ".";
}

function dividir() {

    num1 = parseFloat(document.getElementById("num1").value);

    num2 = parseFloat(document.getElementById("num2").value);

    num3 = parseFloat(document.getElementById("num3").value);

    num4 = parseFloat(document.getElementById("num4").value);

    var resultado = num1 / num2 / num3 / num4;

    document.getElementById('resultado').innerHTML = ": " + resultado + ".";
}