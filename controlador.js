var Controlador = function(jugador){
    this.listadoColores = [
        '#5BC0EB', '#FDE74C', '#9BC53D', '#E55934', '#FA7921',
        '#2D2A32', '#EE7674', '#DE369D', '#4F6D7A', '#802392',
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];

    this.listadoPalabras = [ "Compromiso", "Quince", "Profesion", "Colocar", "Boton", "Secuestrar", "Panteon",
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
    "Cruz", "Urgencia","estaba","mejor","están","va","hombre","usted","mucho","hace","entonces","siento","tenemos","puedes","alguien","hasta","sin","mí","solo","años","sobre","decir","uno","siempre","oh","ir","cosas","también","antes","has","ni","mis","día","estar","estamos","noche","nadie","otra","quiere","parece","nosotros","poco","padre","trabajo","gente","mira","vas","sea","les","donde","mismo","hecho","ellos","dijo","pasa","dinero","hijo","tal","otro","hablar","seguro","claro","estas","lugar","mundo","amigo","espera","mierda","han","tus","sabe","después","momento","desde","fuera","cosa","tipo","mañana","podemos","dije","gran","necesito","estado","podría","acuerdo","papá","tener","dice","mío","crees","buena","gusta","nuestro","nuevo","será","haciendo","días","nombre","buen","había","ven","tres","menos","debe","tenía","mal","conmigo","madre","hoy","quien","sido","mamá","tienen","luego","todas","allí","toda","hora","mujer","visto","haces","importa","contigo","ve","tarde","oye","parte","haber","hombres","problema","mas","saber","quería","aún","veces","nuestra","hacerlo","cada","hizo","veo","tanto","razón","ustedes","idea","esos","van","quizá","debo","alguna","cierto","ud","muerto","unos","estos","salir","policía","realmente","demasiado","familia","pueden","cabeza","hemos","amigos","chica","cariño","lado","allá","entre","minutos","digo","algún","serio","cuidado","pasó","buenas","somos","amor","puerta","ves","vaya","ah","suerte","eh","rápido","cuenta","quizás","io","esas","pues","pasado","pensé","todavía","hermano","debes","casi","forma","aqui","chico","ok","dicho","nueva","sabía","muchas","dentro","hice","contra","auto","camino",];
    // Filtrar listado, para que solo pasen palabras de más de 3 letras.
    // Quizá un nivel de complejidad mayor se pueda ir ampliando ese filtro
    this.myTimer = 0;
    this.jugador = jugador;
    this.highscore = 0;
    this.dificultad = 5;
};

Controlador.prototype = {

    /*DIVIDIR funcion para que la mitad este en el controlador y la mitad en la vista*/
    
    generarPalabra: function(){
        numPalabra = this.getRandomInt(this.listadoPalabras.length);  // llama o busca en MODELO
        upper = this.listadoPalabras[numPalabra].toUpperCase();
        palabra = new Palabra(true, upper); // pertenece a Index
        palabra.html(palabra.palabra);
        palabra.puntos.html(this.jugador.acumuladorPuntos);
        palabra.vidas.html(this.jugador.cantidadVidas);
        cambiarColor();
    },
    startTimer: function (display, resetInterval = false) {
        var timer = this.dificultad;
        var contexto = this;
        var display = document.querySelector('#time');
        if(resetInterval){
            clearInterval(contexto.myTimer);
            generarPalabra(); // que llama a VISTA
        }
        contexto.myTimer = setInterval(function () {
            display.textContent =  timer;
            if (--timer < 0) {
                // seconds = dificultad;
                if(contexto.jugador.cantidadVidas > 1){
                    contexto.jugador.perderVidas(1);
                } else {
                
                // Falta arreglar funcionalidad de highscore!

                    contexto.highscore = contexto.jugador.acumuladorPuntos;
                    contexto.jugador.cantidadVidas = 5;
                    contexto.jugador.acumuladorPuntos = 0;
                    mostrarPuntos(0); // que está en VISTA
                }
                generarPalabra();

                timer = contexto.dificultad;
                desaparecerPalabra(); // que está en VISTA
            }
        }, 1000);
    },

    getRandomInt: function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    },

    conocerPalabra: function(Pal){
        return Pal.palabra;
    },

    conocerEstadoPalabra: function(Pal){
        return Pal.estado;
    },

    validar: function(){
        let user = procesarInput();
        let palabra = conocerPalabra(palabra1);
        let estado = conocerEstadoPalabra(palabra1);
        if(!estado){
            desaparecerPalabra(); // que está en VISTA
        } else if(estado && palabra==user){
            jugador.acumularPuntos(palabra1); // guarda en MODELO y se muestra en VISTA 
            startTimer(10, display, true);
            desaparecerPalabra(); // que está en VISTA
        } else if(estado && palabra !== user){
            // tendría que ser reemplazado por una función que se aloje en VISTA y se llame acá (en MODELO)
            $(".vidas").html(jugador.cantidadVidas);
            $(".inputPalabra").css({"color": "red", "font-style": "italic", "font-weight": "bold"});
            setTimeout(desaparecerPalabra, 300);
        }
    },
}
