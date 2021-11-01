function calcularporcentaje (precio, descuento) {
    const total = precio-(precio*(descuento/100))
    return total;
}

function leer(){
    const lectura1 = document.getElementById("numero");
    const numero1 = lectura1.value;
    const lectura2 = document.getElementById("porcentaje");
    const numero2 = lectura2.value;
    const precio = calcularporcentaje(numero1,numero2);
    const resultado = document.getElementById("total");
    resultado.innerText=precio;
    return;
}