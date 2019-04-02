var gana = "";
    var empates = 0;
    var victorias = 0;
    var derrotas = 0;
    var partidas = 0;

function tirada(j) {
    var cpu = Math.floor(Math.random() * 3 + 1);
    var p1 = player1.src;
    var comp = pc.src;
    
    if ( j == 1 ) {
        player1.src = "./img/paper2.png";
    } else if ( j == 2 ) {
        player1.src = "./img/rock2.png";
    } else {
        player1.src = "./img/scissors2.png";
    }

    if ( cpu == 1 ) {
        pc.src = "./img/paper2.png";
    } else if ( cpu == 2 ) {
        pc.src = "./img/rock2.png";
    } else {
        pc.src = "./img/scissors2.png";
    }
    if ( cpu == j ) {
        gana = 'Empate';
        empates++;
    } else {
        if ( cpu == 1 && j == 2 || cpu == 2 && j == 3 || cpu == 3 && j == 1 ) {
            gana = '¡Gana la máquina!';
            derrotas++;
        } else {
            gana = '¡Has ganado!';
            victorias++;
        }
    }
    partidas++;

    res.innerHTML = gana;
    games.innerHTML = partidas;
    emp.innerHTML = empates;
    der.innerHTML = derrotas;
    vic.innerHTML = victorias;
}