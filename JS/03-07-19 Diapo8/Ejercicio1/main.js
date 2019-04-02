function praise(imagen) {
    var ruta = imagen.getAttribute('src');

    if ( ruta == "./img/solaire.png" ) {
        imagen.parentElement.style.opacity = "0";
        imagen.parentElement.style.zIndex = "0";
        document.body.children[1].style.opacity = "1";
        document.body.children[1].style.zIndex = "1";
    } else if ( ruta == "./img/praise.png" ) {
        imagen.parentElement.style.opacity = "0";
        imagen.parentElement.style.zIndex = "0";
        document.body.children[2].style.opacity = "1";
        document.body.children[2].style.zIndex = "1";
    } else if ( ruta == "./img/the.png" ) {
        imagen.parentElement.style.opacity = "0";
        imagen.parentElement.style.zIndex = "0";
        document.body.children[3].style.opacity = "1";
        document.body.children[3].style.zIndex = "1";
    } else {
        imagen.parentElement.style.opacity = "0";
        imagen.parentElement.style.zIndex = "0";
        document.body.children[0].style.opacity = "1";
        document.body.children[0].style.zIndex = "1";
}

}