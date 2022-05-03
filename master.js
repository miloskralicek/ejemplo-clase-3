//Trabajando con Objetos Literales
var persona = {
    //Propiedad : Valor,
    nombre: 'Milos',
    apellido: 'Kralicek',
    email: 'Milos2002@hotmail.com.ar',
    saludar: function () {
        console.log('Hola, estoy saludando');
    }
}

console.log(persona.nombre);
console.log(persona.saludar());

//Arrays de objetos
var personas = [
    /* {
        //Propiedad : Valor,
        nombre: 'Milos',
        apellido: 'Kralicek',
        email: 'Milos2002@hotmail.com.ar'
    },
    {
        //Propiedad : Valor,
        nombre: 'Jan',
        apellido: 'Kralicek',
        email: 'Jan1996@hotmail.com.ar'
    },
    {
        //Propiedad : Valor,
        nombre : 'Claudio',
        apellido : 'Kralicek',
        email : 'Claudiokra@hotmail.com.ar'
        } */
]
//console.log(personas[2].nombre);

//Capturando elementos del formulario
var nombreCap = document.getElementById('nombre');
var apellidoCap = document.getElementById('apellido');
var emailCap = document.getElementById('email');
var botonCap = document.getElementById('boton');

//console.log(`Este dato viene del formulario ${nombre.value}`);
personas.push({
    nombre : nombreCap.value,
    apelido : apellidoCap.value,
    email : emailCap.value
})

console.log(personas);