var i = 1;

function pasar(p) {
    if ( i<=5 ) {
        if ( p.style.transform != "rotateY(-" + (140 - i + 1) + "deg)" ) {
            p.style.transform = "rotateY(-" + (140 - i) + "deg)";
            i++;
        } else {
            p.style.transform = "";
            i--;
        }   
    } else {
        var p1 = document.getElementsByClassName('portada')[0];
        var p2 = document.getElementsByClassName('hoja')[0];
        var p3 = document.getElementsByClassName('hoja')[1];
        var p4 = document.getElementsByClassName('hoja')[2];
        var p5 = document.getElementsByClassName('hoja')[3];

        p1.style.transform = "rotateY(0deg)";
        p2.style.transform = "rotateY(5deg)";
        p3.style.transform = "rotateY(10deg)";
        p4.style.transform = "rotateY(15deg)";
        p5.style.transform = "rotateY(20deg)";
        i = 1;
    }
}