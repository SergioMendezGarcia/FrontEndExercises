var tablero = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

for ( let i = 0; i < tablero.length; i++ ) {
    for ( let j = 0; j < tablero[i].length; j++ ) {
        var rand = Math.floor(Math.random()*2
        );
        switch(rand){
            case 0: document.body.innerHTML += '<div id="' + i + "," + j + '" onclick="interruptor(this);"></div>';
                    document.getElementById(i + "," + j).style.backgroundColor = "rgb(0, 0, 0)"; break;
            case 1: document.body.innerHTML += '<div id="' + i + "," + j + '" onclick="interruptor(this);"></div>';
            document.getElementById(i + "," + j).style.backgroundColor = "rgb(0, 255, 255)"; break;
        }
        
    }
}

function interruptor(div) {
    var i = parseInt(div.id.slice(0,1));
    var j = parseInt(div.id.slice(2,3));

    ind = i-1, ind2 = j-1, ind3 = i+1, ind4 = j+1;

    switch(i){
        case 0: ind = 0;break;
        case 4: ind3 = 4;break;
        default: break;
    }

    switch(j){
        case 0: ind2 = 0;break;
        case 4: ind4 = 4;break;
        default: break;
    }
    try {
        for ( let a = ind; a <= ind3 ; a++) {
            if ( document.getElementById(a + "," + j).style.backgroundColor == "rgb(0, 0, 0)" ) {
                document.getElementById(a + "," + j).style.backgroundColor = "rgb(0, 255, 255)";
            } else {
                document.getElementById(a + "," + j).style.backgroundColor = "rgb(0, 0, 0)";
            }
        }

        for ( let a = ind2; a <= ind4; a++) {
            if ( a != j ) {
                if ( document.getElementById(i + "," + a).style.backgroundColor == "rgb(0, 0, 0)" ) {
                    document.getElementById(i + "," + a).style.backgroundColor = "rgb(0, 255, 255)";
                    } else {
                        document.getElementById(i + "," + a).style.backgroundColor = "rgb(0, 0, 0)";
                    }
            }
        }
    }catch(e){alert(e);}
    

    
}