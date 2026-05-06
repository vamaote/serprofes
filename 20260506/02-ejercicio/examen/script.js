function comprobarnumero() {
    // 1. Atrapamos el numero usando let
    let numero = Number(document.getElementById("number-Input").value);
    let etiqueta = document.getElementById("mensaje-salida");


    // 2. Tomamos la decision con IF / ELSE
    if (numero >= 5) {
        //Si el número es mayor o igual a 5...
        etiqueta.textContent = "El número " + numero + " es Aprobado";
        etiqueta.style.color = "green";
    } else {
        etiqueta.textContent = "El número " + numero + " es Suspenso";
        etiqueta.style.color = "red";
    }
}
