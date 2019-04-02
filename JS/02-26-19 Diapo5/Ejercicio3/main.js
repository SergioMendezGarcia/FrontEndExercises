function calc() {
    var act = parseFloat(actual.value);
    var lvl = level.value;

    if (isNaN(act)) {
        alert('¡El sueldo introducido es incorrecto!');
        act = 0;
    } else {
        if (lvl != 0.07) {
        var newIncome = act * lvl;
        } else {
        var newIncome = act - (act * lvl);
        }
    }
    output.innerHTML = "Tu nuevo salario es de " + newIncome.toFixed(2) + "€";
}