//codigo cuadrado
console.group("Cuadrados");
const ladocuadrado = 2;
function perimetrocuadrado(lado){
    return lado * 4;
}
console.log("el prerimetro del cuadrado mieden: " + perimetrocuadrado(ladocuadrado));
function areacuadrado(lado){
    return lado*lado;
}
console.log("el area del cuadrado mieden: " + areacuadrado(ladocuadrado));
console.groupEnd();

//codigo triangulo
function perimetrotriangulo(lado1,lado2,lado3){
    return lado1+lado2+lado3;
}
function areatriangulo(base,altura){
    return (base*altura)/2
}

//codigo circulo

function diametro (radio){
    return radio*2;
}
function perimetrocirculo (radio){
    return diametro(radio)*Math.PI
}
function areacirculo(radio){
    return Math.PI*Math.pow(radio,2)
}

function circulo(){
    const input = document.getElementById("inputradio");
    const radio = input.value;
    console.log("diametro: "+diametro(radio));
    console.log("permetro: "+perimetrocirculo(radio));
    console.log("area: "+areacirculo(radio));
}