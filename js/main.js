//alert();

// programa de supervivencia I LAND
function Participante(n, g, l) {
    this.nombre = n;
    this.grupo = g;
    this.special = l;
    this.line = function () {
        console.log(this.nombre + " se especializa en " + this.special);
    };
};

let Jimin = new Participante( "Jimin", "BTS", "BAILE");
console.log(Jimin);
console.log(typeof Jimin);

let Rose = new Participante( "Rose", "BLACKPINK", "VOCAL");
console.log(Rose);
console.log(typeof Rose);

Rose.line();
Jimin.line();


let vocalJimin = 100;
let vocalRose = 100;

function saludar() {
    console.log("Programa I-LAND");
}
saludar();


function nombre() {
    let ingresarNombre = prompt("Ingresar nombre");
    console.log("Bienvenid@ " + ingresarNombre);
}
nombre();


function competir(playerUno = "Jimin", playerDos = "Rose") {
    console.log(playerUno + " compite con " + playerDos);
}
competir();


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