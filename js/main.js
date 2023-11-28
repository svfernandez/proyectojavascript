//alert();

// programa de supervivencia I LAND

let vocalJimin = 100;
let vocalRose = 100;

let land = 0;

const MIN_POWER = 10;
const MAX_POWER = 30;

while (vocalJimin > 0 && vocalRose > 0) {
    land += 1;
    let notaJimin = Math.ceil(
        Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
    );
    let notaRose = Math.ceil(
        Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
    );

    console.log(
        "--land " + land + "--"
    );
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

console.log("GANADOR");

if (vocalRose > 0) {
    console.log("Gano el DESAENG Rose");
} else {
    console.log("Gano el DESAENG Jimin");
}