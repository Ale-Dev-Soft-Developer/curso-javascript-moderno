// Forma tradicional de armar una funcion.
function saludar(nombre){
    console.log('Hola ' + nombre);
};

saludar('Ale')

// Forma de armar una funcion lambda.
const saludarFlecha = (nombre) => {
    console.log('Hola '+ nombre);
};

saludarFlecha('loco Pepe')

// Funcion lambda de suma
const suma = (a,b) => {
    return a + b
};
console.log(suma(12,12));

// funcion lambda mas resumida.
// por defecto retorna (return) el resultado.
const suma2 = (a,b) => a+b;

console.log(suma2(24,24));

// funcion para obtener un numero aleatorio
function getAleatorio() {
    return Math.random()
};
console.log(getAleatorio());

// ejercicio 1: 
// optimizar la funcion getAleatorio()
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
