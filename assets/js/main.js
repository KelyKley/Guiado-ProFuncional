/*EJERCICIO 1*/
console.log("Ejercicio1");
//Forma IMPERATIVA
console.log("Modo Imperativo");
function intersection(l1, l2) {
    var l3 = [];
    for (var i = 0; i < l1.length; i++) {
        for (var j = 0; j < l2.length; j++) {
            if (l1[i] == l2[j]) {
                l3.push(l1[i]);
            }
        }
    }
    console.log(l3);
}
intersection([1, 2, 3], [2, 3, 4]);


//Forma DECLARATIVA
console.log("Modo Declarativo");
function intersectionSet2(l1, l2) {
    return l1.filter(function(n) {
        return l2.indexOf(n) !== -1
    });
};


/*EJERCICIO 2*/
console.log("Ejercicio 2");
var productos = [{
        nombre: "pijama",
        tipo: "ropa"
    },
    {
        nombre: "nevera",
        tipo: "electrodomestico"
    },
    {
        nombre: "asus",
        tipo: "computador"
    },
    {
        nombre: "macbook",
        tipo: "computador"
    },
    {
        nombre: "pijama",
        tipo: "ropa"
    },
    {
        nombre: "toshiba",
        tipo: "computador"
    }
];


//Forma IMPERATIVA
console.log("Modo Imperativo");
var computadores = [];
for (var i = 0; i < productos.length; i++) {
    if (productos[i].tipo === "computador") {
        computadores.push(productos[i]);
    }
}
console.log(computadores);

//Forma DECLARATIVA
console.log("Modo Declarativo");
var computadores = productos.filter(function(producto) {
    console.log(producto.tipo === "computador");
});