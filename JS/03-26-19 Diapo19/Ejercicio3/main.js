for ( i in document.images ) {
    document.images[i].setAttribute('onclick', 'grande(this);');
}

function grande(imag){
    var figura = document.createElement('figure');
    figura.appendChild(document.createElement('img'));
    figura.firstElementChild.src = imag.src;
    figura.setAttribute('id', 'grande');
    figura.setAttribute('onclick', 'this.remove()');
    document.body.appendChild(figura);
    figura.appendChild(document.createElement('figcaption'));
    figura.lastElementChild.innerHTML = imag.dataset.nombre;
}