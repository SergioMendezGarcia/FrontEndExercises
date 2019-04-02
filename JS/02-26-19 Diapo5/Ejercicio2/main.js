function calc() {
    var b = parseFloat(base.value);
    var h = parseFloat(height.value);

    if (isNaN(b)) {
        b = 0;
    }

    if (isNaN(h)) {
        h = 0;
    }

    if (b > 0 && h > 0) {
        var area = b * h;
        var per = 2 * (b + h);
        output.innerHTML = "Perímetro: " + per + "<br />" + "Area: " + area;
    } else {
        alert('¡Datos incorrectos!');
    }
}