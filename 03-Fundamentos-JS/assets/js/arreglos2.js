let juegos = ['Zelda', 'Mario', 'Metroid', 'GTA VI'];
console.log('Largo: ',juegos.length);

let primero = juegos[0];
console.log(primero);

// Forma de mostrar el ultimo valor del arreglo
let ultimo = juegos[juegos.length - 1];
console.log(ultimo);

// metodo para recorrer el largo de un arreglo
juegos.forEach((Juego,posicion,total) => {
    console.log({Juego,posicion,total});
})

// Metodo que añade y luego devuelve el largo del arreglo (Array)
let nuevaLongitud = juegos.push('Sub-Zero');
console.log({nuevaLongitud,juegos});

// Metodo para añadir en la posicion [0], es decir, al inicio.
juegos.unshift('Fire Emblem');
console.log(juegos[0]);

// Metodo para eliminar el último elemento de la lista.
let juegoBorrado = juegos.pop();
console.log('El juego borrado fue:',juegoBorrado);

// Metodo para eliminar por posicion
let posicion = 1;
//splice para desde que posicion, cuantos espacios elimina.
let juegosBorrados = juegos.splice(posicion,2);
console.log(juegosBorrados, juegos);

// Metodoo para buscar la posicion en el array
let metroidIndex = juegos.indexOf('Metroid'); //caseSensitive
console.log('La posición del juego Metroid es:',metroidIndex);