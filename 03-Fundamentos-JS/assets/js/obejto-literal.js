let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad:40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direcciones: {
        zip:'10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultimaPelicula': 'Infinity War'
}

// Accediendo a los atributos del objeto
console.log('Nombre:',personaje.nombre)
console.log('Nombre:',personaje.codeName);
console.log('Estado:',personaje.vivo);
console.log('Edad: ',personaje.edad);
console.log('Nombre del traje:',personaje.trajes[1]);
console.log('Direccion Zip:', personaje.direcciones['zip']);
console.log('Direccion Ubicacion:', personaje.direcciones['ubicacion']);
console.log('Coordenadas, Latitud:', personaje.coords['lat'], 'Longitud:',personaje.coords['lng']);

// Ejercicio 1
// mostrar la cantidad de trajes.
console.log('N° de trajes:',personaje.trajes.length);

// Ejercicio 2
// Mostrar el ultimo traje sin saber cuantos son
console.log('Ultimo traje:', personaje.trajes[ personaje.trajes.length - 1]);

// Para buscar por clave el valor
const estado = 'vivo';
console.log('Vivo', personaje[estado]);
console.log('Ultima pelicula:', personaje['ultimaPelicula']);



// Mas detalles
// para eliminar una propiedad del objeto
delete personaje.edad;
console.log(personaje);

// Para crear una propiedad de afuera del objeto
personaje.casado = true;
console.log(personaje);

const entriesPares = Object.entries(personaje)
console.log(entriesPares);

// metodo para congelar el objeto con sus atributos, despues de esta linea nada se modificara.
Object.freeze(personaje)

personaje.dinero = 100000000;
console.log(personaje);


// Para listar todas las propiedades de un objeto.
// getOwnPropertyNames()
const propiedades = Object.getOwnPropertyNames(personaje)
console.log({propiedades});

// Para listar los valores de un objeto.
const valores = Object.values(propiedades)
console.log(propiedades);

// sitio web para descubir mas sobre JS
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object