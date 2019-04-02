var lista = ['Imagine Dragons', 'ACDC', 'Metallica', 'U2', 'The OffSpring', 'Russkaja', 'Alestorm', 'Santiano', 'Arctic Monkeys'];

uno.innerHTML = lista.slice(0, 2);

dos.innerHTML = lista.sort();

lista.splice(2, 0, 'Tierra Santa');
tre.innerHTML = lista;

cuatro.innerHTML = lista.toString();

cinco.innerHTML = lista.unshift('Rammstein');

sei.innerHTML = lista.valueOf();

siete.innerHTML = lista.concat(lista, lista);

ocho.innerHTML = lista.indexOf('Imagine Dragons');

neve.innerHTML = lista.join("/");

diez.innerHTML = lista.lastIndexOf('U2');

once.innerHTML = lista.pop();

doce.innerHMTL = lista.push('U3');

trece.innerHTML = lista.reverse();

catorce.innerHTML = lista.shift();