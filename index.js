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

var palabra1 = new Palabra(false, listadoPalabras[0]);
var jugador1 = new Jugador(0, 5);

// agarrar palabra random
// mostrar palabra q se eligio
// mostrar puntos de jugador
// mostrar vidas

$(".palabra h2").html(palabra1.palabra);

