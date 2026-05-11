//1. Creamos nuestra "Caja grande" (Array)
let carrito = ["🍏 Manzana", "🍌Plátano"];
//2. Imprimir el carrito nada mas al cargar la pagina
document.getElementById("pantalla-cesta").textContent = carrito.join(" - ");


//3. la funcion para agregar cosas nuevas a la lista
function añadirAlCarrito (){
    //Atrapamos lo que escribe el usuario
    let item = document.getElementById("nuevo-item").value;
    //magia de arrays: .push () mete el nuevo elemento al final de la lista
    carrito.push(item);
    //volvemos a pintar la cesta para que se vea
    document.getElementById("pantalla-cesta").textContent = carrito.join(" - ");
    //limpiamos el input
    document.getElementById("nuevo-item").value = "";
}