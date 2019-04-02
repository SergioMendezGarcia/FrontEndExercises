//Equilatero todos los lados son iguales
//isosceles dos iguales
//escaleno todos diferentes
//si dos lados sumados son mayor que un tercero, es un triangulo(tiene que hacerse la comprobacion con todos los lados)


//funcion calc
    //Recogida de valores
        //var l1 para el primer valor
        //var l2 para el segundo valor
        //var l3 para el tercer valor
    //Primer condicional
        //Si dos lados sumados son mayores que un tercero, es un triangulo
        //sino, mandar una alerta conforme los datos introducidos no pertenecen a un triangulo
    //Si es un triangulo, siguiente condicional
        //si todos los lados son iguales
        //impirmir que es un triangulo equilatero
            //sino tercer condicional
                //si ningun lado es igual
                //imprimir que es un triangulo escaleno
                    //sino imprimir que es isosceles
//fin

function calc() {
    var l1 = parseFloat(val1.value);
    var l2 = parseFloat(val2.value);
    var l3 = parseFloat(val3.value);

    if ( l1 +l2 > l3 && l2 + l3 > l1 && l1 + l3 > l2 ) {
        if (l1 == l2 && l1 == l3) {
            output.innerHTML = "Es un triangulo equilatero";
        } else if (l1 != l2 && l2 != l3 && l1 != l3) {
            output.innerHTML = "Es un triangulo escaleno";
        } else {
            output.innerHTML = "Es un triangulo isosceles";
        }
    } else {
        alert('Los daots introducidos no pertenecen a un triangulo');
    }
}