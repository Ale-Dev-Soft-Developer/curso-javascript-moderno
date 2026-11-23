const arr = new Array(10);
console.log(arr);


let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

let arreglosCosas = [
    true,
    123,
    'Hola',
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ['X','Megaman','Zero','Dr.Light'],
    [
        'Dr. Willy',
        'Woodman'
    ]
];
console.log({arreglosCosas});

// Ejercicio: Obtener solo Dr.light
// 1ra forma directa
console.log(arreglosCosas[7][3]);

// 2da forma a traves de una variable
arregloEspecial = arreglosCosas[7]
console.log(arregloEspecial[3]);

// Ejercicio: Obtener solo Dr.light
console.log(arreglosCosas[7][4]);
