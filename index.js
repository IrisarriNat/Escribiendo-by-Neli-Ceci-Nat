var input = document.getElementById("inputPalabra");
input.addEventListener("keyup", function (event) {
    // Number 13 is the “Enter” key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
        generarPalabra();
    }
});

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

var myTimer, palabra1, numPalabra, jugador1, highscore;
jugador1 = new Jugador(0, 1);

function generarPalabra (){
    numPalabra = getRandomInt(listadoPalabras.length);
    palabra1 = new Palabra(true, listadoPalabras[numPalabra]);
    $(".palabra h2").html(palabra1.palabra);
    $(".puntos").html(jugador1.acumuladorPuntos);
    $(".vidas").html(jugador1.cantidadVidas);
}

function startTimer(duration, display, resetInterval = false) {
    var timer = duration, minutes, seconds;
    if(resetInterval){
        clearInterval(myTimer);
        generarPalabra();
    }
    myTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  seconds;

        if(seconds == 0) { 
            seconds = 10;
        if(jugador1.cantidadVidas > 0){
            jugador1.perderVidas(1);
        } else {
            
            // Falta arreglar funcionalidad de highscore!

            highscore = jugador1.acumuladorPuntos;
            jugador1.cantidadVidas = 5;
            jugador1.acumuladorPuntos = 0;
            mostrarPuntos(0);
        }
        generarPalabra();
        }

        if (--timer < 0) {
            timer = duration;
            desaparecerPalabra();
        }
    }, 1000);
}
display = document.querySelector('#time');


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


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

function desaparecerPalabra(){
    $(".inputPalabra").val("");
    $(".inputPalabra").css({"color": "black", "font-style": "normal", "font-weight": "normal"});
}
function validar(){
    let user = procesarInput();
    let palabra = conocerPalabra(palabra1);
    let estado = conocerEstadoPalabra(palabra1);
    if(!estado){
        desaparecerPalabra();
    } else if(estado && palabra==user){
        jugador1.acumularPuntos(palabra1);
        startTimer(10, display, true);
        desaparecerPalabra();
    } else if(estado && palabra !== user){
        $(".vidas").html(jugador1.cantidadVidas);
        $(".inputPalabra").css({"color": "red", "font-style": "italic", "font-weight": "bold"});
        setTimeout(desaparecerPalabra, 300);
    }
}
generarPalabra();


window.onload = function () {
    startTimer(10, display);
};

