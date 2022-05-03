/* //Archivo: funciones.js
//Trabajando con Funciones: Procedures - Funciones (function)
//Funciones declarativas - declaradas
function saludar() {
    alert('Hola como vamos...');    
}

saludar();
saludar();
saludar(); */

//Trabajar con una función que recibe parámetros
/* var saludo = document.getElementById('saludo'); 
function saludar(nombre,apellido) {
    saludo.innerHTML = `Hola como vamos ${nombre} ${apellido}`;
    alert(`Hola como vamos ${nombre} ${apellido}`);
}

saludar('Milos','Kralicek');
saludar('Daniel', 'Fernandez');
saludar('Jan', 'Kralicek');
 */

//Funciones expresadas

//var saludar = function(){
//    alert('Hola como vamos...');
//}

//saludar();

//EcmaScript - 6 // 11
//Arrows function - Función flecha
/* let saludar = () =>{
    alert('Hola como vamos...');
}

saludar();
 */

//let saludar = () => alert('Hola como vamos...');
//Cuando hay mas de una linea de código debe usar las llaves {}
//saludar();

//Función declarada - Esta función retorna un resultado
/* function sumar(valor1,valor2){
    return valor1 + valor2;
}

let resultado = sumar(2,2);
let saludo = document.querySelector('#saludo');
let operacion = document.getElementById('operacion');

saludo.innerHTML = `El resultado de la suma es ${resultado}`; */

//Trabajando con eventos
let saludo = document.getElementById('saludo');
let botonSaludo = document.getElementById('botonSaludo');
let titulo = document.getElementById('titulo');
let fondoPantalla = document.getElementById('fondoPantalla')
let fondoBody = document.getElementById('fondoBody')
botonSaludo.style.color = 'white';
botonSaludo.style.backgroundColor = 'tomato';
botonSaludo.style.padding = '10px';
botonSaludo.style.borderRadius = '10px';
botonSaludo.style.fontFamily = 'arial';
botonSaludo.style.fontSize = '18px';

fondoPantalla.style.color = 'white';
fondoPantalla.style.backgroundColor = 'tomato';
fondoPantalla.style.padding = '10px';
fondoPantalla.style.borderRadius = '10px';
fondoPantalla.style.fontFamily = 'arial';
fondoPantalla.style.fontSize = '18px';

function saludar(){
    titulo.classList.add('titulo');
    saludo.innerHTML = 'Hola como vamos';
    saludo.classList.add('titulo');
    //alert('Hola como vamos...');
}
function fondo() {
    fondoBody.classList.add('fondoPantalla');
}

function quitarFondo() {
    fondoBody.classList.remove('fondoPantalla');
}
botonSaludo.onclick = saludar;
fondoPantalla.onmouseover = fondo;
//botonSaludo.onmouseover = saludar;
fondoPantalla.onmouseout = quitarFondo;


//                                      Trabajando con los contenidos de la clase 8

//Otra forma de trabajar con los eventos
let cambios = document.getElementById('cambios');
cambios.addEventListener('click' , function(){
    titulo.innerHTML = 'Clase 8 de JavaScript';
    titulo.classList.add('titulo');
    fondoBody.classList.add('fondoBody');
});

//EcmaScript - 6 - 11(2020) - 12 (2021)
//Ofrece una nueva forma de escribir código - Ofrece nuevas bondades
//Declaración variables
const nombre = 'Daniel';
console.log(nombre);

if(nombre === 'Daniel'){
    const nombre = 'Gloria';
    console.log(nombre);
}
console.log(nombre);
//Trabajando con la libreria SweetAlert2
Swal.fire(
    'Bienvenidos!',
    'Recuerden que todo esto deben repasarlo!',
    'success'
  )
  