function esPrimo(n) {
    var primos = "";

    for ( let i = 1, let j = 2; i < n; i++ ) {
            if ( ++i%j == 0 ) {
            } else {
                primos += j + ", ";
            }
        }
    }
    output.innerHTML = "Los números " + primos + "son <b>primos</b>";
}