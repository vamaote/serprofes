//1. el objeto
//usamos llaves {} para crear la ficha tecnica y dos puntos para dar valor

let producto = {
    nombre: "🍎 Manzanas",
    precio: 2.5,
    categoria: "Fruta",
};

//2. ¿Cómo leemos un dato concreto y lo mandamos al html?
document.getElementById("prod-nombre").textContent=producto.nombre;
document.getElementById("prod-precio").textContent=producto.precio;
document.getElementById("prod-categoria").textContent=producto.categoria;

//mini reto
function mostrarMiFicha(){
    //1. Crea tu propio objeto "alumno"
    //2. Mostrar los datos en html

    let alumno = {
        nombre: "Vanessa",
        edad: 33,
        ciudad: "Cali",
    };

    document.getElementById("alum-nombre").textContent=alumno.nombre;
    document.getElementById("alum-edad").textContent=alumno.edad;
    document.getElementById("alum-ciudad").textContent=alumno.ciudad;


}

