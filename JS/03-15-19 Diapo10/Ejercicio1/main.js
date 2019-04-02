function posicion(texto) {
    alert(texto.charAt(0));
}

function concatenar(texto) {
    var p = " PUTTANA";
    alert(texto.concat(p));
}

function sustituir(texto) {
    alert(texto.replace(texto, "PUTTANA"));
}

function indexDe(texto) {
    alert(texto.indexOf(texto));
}

function lastIndexDe(texto) {
    alert(texto.lastIndexOf("k"));
}

function buscar(texto) {
    alert(texto.search("sole"));
}

function trozear(texto) {
    alert(texto.slice(0,5));
}

function dividir(texto) {
    alert(texto.split("a"));
}

function substraerString(texto) {
    alert(texto.substring(0,2));
}

function minusculas(texto) {
    alert(texto.toLowerCase());
}

function mayusculas(texto) {
    alert(texto.toUpperCase());
}

function sinEspacios(texto) {
    alert(texto.trim());
}