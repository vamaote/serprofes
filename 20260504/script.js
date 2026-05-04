console.log("¡El cerebro de la web esta funcionando!");
//Funcion para saludar
function saludar(){
    let nombre = prompt("¿Cómo te llamas?");
    alert("¡Hola, " + nombre + "! Ya eres programador");
}

//Funcion para verificar acceso
function verificarAcceso(){
    let edad = prompt("¿Cuál es tu edad?: ");
    if(edad >= 18){
        alert("¡Bienvenido! Puedes entrar.");
        console.log("Estado mayor de edad");
    } else {
        alert("Lo siento, no puedes entrar.");
        console.log("Estado: menor de edad detectado");
    }
}
