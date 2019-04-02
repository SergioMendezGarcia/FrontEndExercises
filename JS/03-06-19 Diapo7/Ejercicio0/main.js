function colorea(target, bkclr) {
    if (bkclr >= '#ccc') {
        target.style.backgroundColor = bkclr;
        target.style.color = '#000';
    } else {
        target.style.backgroundColor = bkclr;
        target.style.color = '#fff';
    }
}