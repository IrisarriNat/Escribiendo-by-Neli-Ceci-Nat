var listadoColores = [
    '#5BC0EB',
    '#FDE74C',
    '#9BC53D',
    '#E55934',
    '#FA7921',
    '#2D2A32',
    '#EE7674',
    '#DE369D',
    '#4F6D7A',
    '#802392',
];

var listadoPalabras = [ "Compromiso", "Quince", "Profesion", "Colocar", "Boton", "Secuestrar", "Panteon",
"Santo", "Festejo", "Migaja", "Balde", "Alta", "Cejas", "Conejo", "Zodiaco", "Puro", "Rugir", "Principio", 
"Principe", "Armario", "Carambola", "Comer", "Rojo", "Sonido", "Funda", "Tempano", "Callado", "Corto", "Gusto",
"Comisario", "Paraiso", "Peine", "Inspeccionar", "Capital", "Tiza", "Anestesia", "Tabique", "Cubierto", "Alianza",
"Gimnasio", "Resonar", "Vapor", "Botanico", "Mecanica", "Mantequilla", "Puntapie", "Canal", "Inhalar", "Disco", 
"Catastrofe", "Lineas", "Cisne", "Invierno", "Ataque", "Conjunto", "Amigo", "Herradura", "Hembra", "Escalofríos", 
"Regalos", "Infantil", "Riqueza", "Calmar", "Paloma", "Estrella", "Comprar", "Funicular", "Tango", "Entero", 
"Chinche", "Vocal", "Jugo", "Alma", "Piel",  "Trenza", "Egipto", "Oveja", "Dormir", "Sujetar", "Libro", 
"Limosna", "Profilactico", "Juguetes", "Posar", "Tabaco", "Lastima", "Agujeros", "Media hora", "Controlar", 
"Perseguir", "Sacudida", "Nacer", "Escaparse", "Mitad", "Verdadero", "Carretilla", "Relampago", "Hueco", "Pulso", 
"Recuerdos", "Punta", "Medianoche", "Bonito", "Hawaiano", "Deslumbrar", "Forro", "Adormecido", "Despedida", 
"Cepillar", "Reloj", "Pelicula", "Torpe", "Parasol", "Ayuda", "Saltar", "Honrado", "Africano", "Musulman", 
"Cruz", "Urgencia",];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let numPalabra = getRandomInt(listadoPalabras.length);
let palabra1 = new Palabra(false, listadoPalabras[numPalabra]);
let jugador1 = new Jugador(0, 5);
$(".palabra h2").html(palabra1.palabra);
$(".puntos").html(jugador1.acumuladorPuntos);
$(".vidas").html(jugador1.cantidadVidas);

function procesarInput(){
    let input1 = $(".inputPalabra").val();
    return input1;
}

function conocerPalabra(Pal){
    return Pal.palabra;
}

function conocerEstadoPalabra(Pal){
    return Pal.estado;
}

function validar(){
    let user = procesarInput();
    let palabra = conocerPalabra(palabra1);
    let estado = conocerEstadoPalabra(palabra1);
    if(!estado){
        alert("Perdiste!");
    } else if(estado && palabra==user){
        alert("Ganaste!");
    } else if(estado && palabra !== user){
        alert("No pasa nada");
    }
}


// 1- variable que crea la palabra en estado false
// 2- variable que la muestra por pantalla y de estado true --> $.html 
// 3- setTimeout --> que a esa variable, le aplique un .hide() y cambie el estado a false

/* function crearPalabra(){
    let palabra1 = new Palabra(false, listadoPalabras[numPalabra]);
    return palabra1;
}
function mostrarEnPantalla(){
    let asd = crearPalabra();
    $(".palabra h2").html(asd.palabra);

    setTimeout(function(){asd.hide()}, asd.tiempo) --
} 
mostrarEnPantalla();
*/