// Forma tradicional de armar una funcion.
function saludar(nombre){
    console.log('Hola ' + nombre);
};

saludar('Ale')

// Forma de armar una funcion lambda.
const saludarFlecha = (nombre) => {
    console.log('Hola '+ nombre);
};

saludarFlecha('Ale Guty')