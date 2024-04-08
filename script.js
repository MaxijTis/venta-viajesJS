import{ barcelona, roma, paris, londres } from './ciudades.js'
 
//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

//Agregamos un evento click a cada enlace
enlaces.forEach(function (enlace) {  
    enlace.addEventListener('click', function(){
        //Remover el activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });
        
        //Agregar active al que corresponda
        this.classList.add('active');
    });

    //Traer info del objeto correspondiente
    let contenido = obtenerContenido(this.textContent)

    //Mostrar contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
});

//Funcion para traer info correcta desde ciudades.js
function obtenerContenido(enlace){  
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}


