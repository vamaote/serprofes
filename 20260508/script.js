// GENERAR NÚMERO ALEATORIO
// Math.random() genera un número entre 0 y 1
// *10 => entre 0 y 9.999...
// Math.floor => entre 0 y 9
// +1 => entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Variables del juego
let vidas = 3;

// FUNCIÓN PRINCIPAL
function comprobarNumero() {

    // Captura el número que escribe el usuario
    let intento = Number(document.getElementById("input-numero").value);

    // Captura elementos del DOM
    let etiqueta = document.getElementById("mensaje-salida");
    let textoVidas = document.getElementById("texto-vidas");
    let btnJugar = document.getElementById("btn-jugar");

    // SI EL USUARIO GANA
    if (intento === numeroSecreto) {

        etiqueta.textContent =
            "¡HAS GANADO! 🎉 El número era " + numeroSecreto;

        etiqueta.style.color = "green";

        // Desactivar botón al ganar
        btnJugar.disabled = true;

        return; // IMPORTANTE: detener la función aquí
    }

    // SI FALLA
    vidas--;

    // Actualizar vidas
    textoVidas.textContent = "Vidas: " + vidas + " 💗";

    // PISTAS
    if (intento < numeroSecreto) {

        etiqueta.textContent =
            "¡Fallo! El número es MAYOR ⬆";

    } else {

        etiqueta.textContent =
            "¡Fallo! El número es MENOR ⬇️";
    }

    etiqueta.style.color = "red";

    // SI SE QUEDA SIN VIDAS
    if (vidas <= 0) {

        etiqueta.textContent =
            "💀 GAME OVER. El número era " + numeroSecreto;

        etiqueta.style.color = "black";

        btnJugar.disabled = true;
    }
}
