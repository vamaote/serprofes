function comprobarnumero() {
    // 1. Atrapamos el numero usando let
    let numero = Number(document.getElementById("number-Input").value);
    let etiqueta = document.getElementById("mensaje-salida");


    // 2. Tomamos la decision con IF / ELSE
    if (numero % 2 === 0) {
        //Si el resto de la division entre 2 es 0...
        etiqueta.textContent = "El número " + numero + " es Par";
        etiqueta.style.color = "green";
    } else {
        etiqueta.textContent = "El número " + numero + " es Impar";
        etiqueta.style.color = "red";
    }
}

