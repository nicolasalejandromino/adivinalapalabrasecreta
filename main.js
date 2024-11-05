const palabras = ["perrito con chaucha", "chuchumeque", "palabra secreta"];
let palabraSecreta = "";
let intentos = 0;
const maximoDeIntentos = 2;
let palabrasAdivinadas = [];

function selectorPalabraRandom() {
    const randomIndex = Math.floor(Math.random() * palabras.length);
    palabraSecreta = palabras[randomIndex];
}

function iniciarJuego() {
    selectorPalabraRandom();
    alert("¡Bienvenido al juego de adivinar las palabras!");
    jugarJuego();
}

function jugarJuego() {
    while (intentos < maximoDeIntentos) {
        let intentosUsuario = prompt("Adivina la palabra secreta \np_ _ _ _ _o c_n ch_ _ _ _a \nch_ _ _ _ _ _ _ _e \np_ _ _ _ _a s_ _ _ _ _a \n(tienes " + (maximoDeIntentos - intentos) + " intentos restantes):");
        if (palabrasAdivinadas.includes(intentosUsuario)) {
            alert("Ya has adivinado esa palabra. Intenta con otra.");
            continue;
        }
        palabrasAdivinadas.push(intentosUsuario);
        intentos++;

        if (intentosUsuario === palabraSecreta) {
            alert("¡Felicidades! Adivinaste la palabra secreta: " + palabraSecreta + " en " + intentos + " intentos.");
            return;
        } else {
            alert("Incorrecto. Intenta de nuevo.");
        }
    }

    alert("Lo siento, has agotado tus intentos. La palabra secreta era: " + palabraSecreta + ".");
}

iniciarJuego();