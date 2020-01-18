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

    
    this.myTimer = 0;
    this.jugador = jugador;
    this.highscore = 0;
    this.dificultad = 5;
    
};

Controlador.prototype = {

    /*DIVIDIR funcion para que la mitad este en el controlador y la mitad en la vista*/
    
    generarPalabra: function(numPalabra,upper,jugador){
        

        numPalabra = this.getRandomInt();  // llama o busca en MODELO
        upper = numPalabra.toUpperCase();
        var palabra = new Palabra(true, upper);
       // this.modelo.html(numPalabra);
        vista.elementos.palabra.html(numPalabra);
        vista.elementos.puntos.html(this.jugador.acumuladorPuntos);
        vista.elementos.vidas.html(this.jugador.cantidadVidas);
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

    getRandomInt: function () {
        return modelo.listadoPalabras[Math.floor(modelo.listadoPalabras.length * Math.random())];
    },
    // aleatorio = Math.floor(Math.random() * (listado.length));
    // seleccion = listado[aleatorio]
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
