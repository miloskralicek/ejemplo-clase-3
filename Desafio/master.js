/* flujoCaja = [{periodo: 'Enero', ingreso: 1500, egreso: 1500 },
            {periodo: 'Febrero', ingreso: 2500, egreso: 2500 },
            {periodo: 'Marzo', ingreso: 84683, egreso: 1155},
            {periodo: 'Abril', ingreso: 135353, egreso: 1533},
            {periodo: 'Mayo', ingreso: 1535 , egreso: 5434},
            {periodo: 'Junio', ingreso: 4343 , egreso: 5434534},
            {periodo: 'Julio', ingreso: 435453, egreso: 4543},
            {periodo: 'Agosto', ingreso: 78351 , egreso: 7816},
            {periodo: 'Septiembre', ingreso: 1878 , egreso: 95634},
            {periodo: 'Octubre', ingreso: 48483 , egreso: 9433},
            {periodo: 'Noviembre', ingreso: 35483 , egreso: 53133},
            {periodo: 'Diciembre', ingreso: 3843 , egreso: 348133}]

let pyme = document.getElementById('pyme')
let arreglo = '<table><tr><th>Periodo</th><th>Ingreso</th><th>Egreso</th></tr><table>'
let sumaIngreso = 0;
let sumaEgreso = 0;

for (let i = 0; i < flujoCaja.length; i++) {
    sumaIngreso += flujoCaja[i].ingreso
    sumaEgreso += flujoCaja[i].egreso
}

if(sumaIngreso > sumaEgreso){
    resultado = (sumaIngreso - sumaEgreso)
    pyme.innerHTML = 1
}
else if(sumaEgreso > sumaIngreso){
    resultado = (sumaEgreso - sumaIngreso)
    pyme.innerHTML = -1
}
else{
    pyme.innerHTML = 0
}


for (let i = 0; i < flujoCaja.length; i++) {
    arreglo += `<tr><td>${flujoCaja[i].periodo}</td><td>${flujoCaja[i].ingreso}</td><td>${flujoCaja[i].egreso}</td></tr>`
}
document.getElementById('arreglo').innerHTML = arreglo
 */

//EJERCICIO 2

var OfertasConInteres = [];
var creditos = [
    { Nombre: 'Plan 001', Capital: 150000, Plazo: 30, Tasa: 0.15 },
    { Nombre: 'Plan 002', Capital: 300000, Plazo: 180, Tasa: 0.1 },
    { Nombre: 'Plan 003', Capital: 485000, Plazo: 60, Tasa: 0.23 }
];
for (var i = 0; i < creditos.length; i++) {
    var interes = (creditos[i].Capital * creditos[i].Plazo * creditos[i].Tasa) / 100;
    OfertasConInteres.push({
        nombre: creditos[i].Nombre,
        Capital: creditos[i].Capital,
        Plazo: creditos[i].Plazo,
        Tasa: creditos[i].Tasa,
        intereses: interes
        return
    });

}
console.log(OfertasConInteres);
creditos.innerHTML = creditos
return OfertasConInteres;