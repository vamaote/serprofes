console.log(" ¡Cerebro conectado con defer!");
function calcularPrecioFinal() {
    //1. ATRAPAMOS LOS DATOS DE HTML -- USAMOS let porque son valores que el usuario puede cambiar cada vez que teclea
    let precio = Number(document.getElementById("precio").value);
    let porcentaje = Number(document.getElementById("descuento").value);
    //2. LOGICA (MATEMATICA)
    //USAMOS CONST porque el resultado de la formula no cambia, es un valor fijo
    const descuentoEnEuros = precio * (porcentaje / 100);
    const precioFinal = precio - descuentoEnEuros;
    //3. MOSTRAR EL RESULTADO EN EL HTML
    document.getElementById("texto-resultado").textContent = precioFinal.toFixed(2) + " €";
}