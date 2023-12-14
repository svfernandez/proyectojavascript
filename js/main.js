//alert();

// programa de supervivencia I LAND
function saludar() {
    console.log("Programa I-LAND");
}
saludar();


function nombre() {
    let ingresarNombre = prompt("Ingresar nombre");
    console.log("Bienvenid@ " + ingresarNombre);
}
nombre();

const competidores = [
    { nombre: "Jennie", puntaje: 40 },
    { nombre: "Jimin", puntaje: 25 },
    { nombre: "Rose", puntaje: 25 },
    { nombre: "Lisa", puntaje: 40 },
    { nombre: "Namjoon", puntaje: 35 },
    { nombre: "Jungkook", puntaje: 55 },
];

competidores.sort((a, b) => a.puntaje - b.puntaje);
console.log(competidores);



function Participante(n, g, l) {
    this.nombre = n;
    this.grupo = g;
    this.special = l;
    this.line = function () {
        console.log(this.nombre + " se especializa en " + this.special);
    };
};

let Jimin = new Participante("Jimin", "BTS", "BAILE");
console.log(Jimin);

let Rose = new Participante("Rose", "BLACKPINK", "VOCAL");
console.log(Rose);

Rose.line();
Jimin.line();


let vocalJimin = 100;
let vocalRose = 100;



function quienesCompiten(nombres) {
    return function () {
        console.log("¡Hola, hoy compiten " + nombres + "!");
    };
}

let clasificacion = quienesCompiten("Jimin y Rose");
clasificacion();

let versus = ["Jimin", "VS", "Rose"];
function mostrarVersus(vs) {
    console.log(vs);
}

versus.forEach(mostrarVersus);


let land = 0;

const MIN_CANTO = 10;
const MAX_CANTO = 30;

while (vocalJimin > 0 && vocalRose > 0) {
    land += 1;
    let notaJimin = Math.ceil(Math.random() * (MAX_CANTO - MIN_CANTO) + MIN_CANTO);
    let notaRose = Math.ceil(Math.random() * (MAX_CANTO - MIN_CANTO) + MIN_CANTO);
    console.log("--land " + land + "--");
    if (notaJimin === notaRose) {
        console.log("siga");
    } else if (notaJimin > notaRose) {
        console.log("Jimin alcanzo una nota de" + " " + notaJimin);
        vocalRose = vocalRose - notaJimin;
        if (vocalRose < 0) {
            vocalRose = 0;
        }
        console.log("El puntaje de Rose baja a" + " " + vocalRose);
    } else {
        console.log("Rose alcanza una nota de" + " " + notaRose);
        vocalJimin = vocalJimin - notaRose;
        if (vocalJimin < 0) {
            vocalJimin = 0;
        }
        console.log("el puntaje de Jimin baja a" + " " + vocalJimin);
    }
}

if (vocalRose > 0) {
    console.log("Gano el DESAENG Rose");
} else {
    console.log("Gano el DESAENG Jimin");
}