//Ejecutar la funcion calc
    //recoida de datos
        //var n1 para el primer número
        //var n2 para el segundo número
        //var n3 para el tercer número
    //Condicional 1
        //Si n1 es mas grande que n2 y 
            //si n3 me imprime n1 y me dice que es el número mas grande
    //Condicional 2
        //Si n2 es mas grande que n1 y n3 me imprime n1 y
         //si me dice que es el número mas grande
    //Condicional 3
        //Si n3 es mas grande que n2 y n1 me imprime n1 y
            //si me dice que es el número mas grande
//fin

function calc() {
    var n1 = parseFloat(numero1.value);
    var n2 = parseFloat(numero2.value);
    var n3 = parseFloat(numero3.value);

    if ( n1 > n2) {
        if ( n1 > n3 ) {
            output.innerHTML = n1 + " Es el número mas grande";
        }
    }
    if ( n2 > n1 ) {
        if ( n2 > n3 ) {
            output.innerHTML = n2 + " Es el número mas grande";
        }
    }
    if ( n3 > n2 ) {
        if ( n3 > n1 ) {
            output.innerHTML = n3 + " Es el número mas grande";
        }
    }
}