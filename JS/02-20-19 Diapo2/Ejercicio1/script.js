function calcular() {
    var i = parseFloat(init.value);
    var v = vel.value;
    var t = time.value;

    var calc = i+v*t;

    resultado.innerHTML = calc;
}