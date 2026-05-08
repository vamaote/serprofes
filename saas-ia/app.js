function enviarprompt(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // capturar el texto
    let mensaje = document.getElementById('mensaje-input').value.trim();

    if (mensaje === '') {
        alert("⚠️¡Error! Escribe algo primero");
    } else {
        alert("🤖 mensaje recibido: \n" + mensaje);
        //3. limpiar input
        document.getElementById('mensaje-input').value = '';
    }
}

