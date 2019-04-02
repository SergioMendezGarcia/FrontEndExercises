for (let i = 1; i<=10000; i++) {
    document.write('<div class="clear" onmouseover="myFunction(this, color.value)" onmousedown="clicked(true)" onmouseup="clicked(false)"></div>');
}

var cliked = false;

function myFunction(este, c) {
    if (cliked) {
        este.style.backgroundColor = c;
    }
}

function clicked(bo) {
    if (!bo) {
        cliked = false;
    } else {
        cliked = true;
    }
}

function limpiar() {
    // var divs = document.getElementsByTagName('div').length;
    for( a in document.getElementsByTagName('section')[0].children ){
        if (document.getElementsByTagName('section')[0].children[a].nodeName == 'DIV') {
            document.getElementsByTagName('section')[0].children[a].style.backgroundColor = '#fff';
        }
    }
}