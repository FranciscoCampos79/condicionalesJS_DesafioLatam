const verificar = document.querySelector(".verificar");

verificar.addEventListener("click", function() {
    const cantidad_1 = document.querySelector(".cantidad_1").value;
    const cantidad_2 = document.querySelector(".cantidad_2").value;
    const cantidad_3 = document.querySelector(".cantidad_3").value;

    const cantidadTotal = Number(cantidad_1) + Number(cantidad_2) + Number(cantidad_3);

    if(cantidadTotal <= 10) {
        const respuesta = document.querySelector(".respuesta");
        respuesta.innerHTML = "Llevas " + cantidadTotal + " sticker";
    }else{
        const respuesta = document.querySelector(".respuesta")
        respuesta.innerHTML = "Llevas demasiados sticker"
    }
})