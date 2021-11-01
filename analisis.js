const salarios = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariossort = salarios.sort(
    function(salaryA,salatyB){
        return salaryA-salatyB;
    }
)

function espar(numero){
    return (numero % 2 === 0);
}
function mediana(lista){
    const mitad = parseInt(lista.length / 2);
    if (espar(lista.length)){
        const personamitad1 = lista[mitad-1];
        const personamitad2 = lista[mitad];
        return (personamitad1+personamitad2)/2;

    }else{
        const personamitad = lista[mitad];
        return personamitad;
    }
}
function medianatop(lista){
    const splicestart = (lista.length * 0.9);
    const splicesend = lista.length - splicestart;
    const salariostop = lista.splice(splicestart,splicesend)
    return mediana(salariostop);
}
console.log(mediana(salariossort));
console.log(medianatop(salariossort));