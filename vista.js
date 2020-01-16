var Vista = function(controlador, elementos){
    this.controlador = controlador;
    this.elementos = elementos;
    var contexto = this;

    this.elementos.input.on("keyup", function (event) {
        // Number 13 is the “Enter” key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            contexto.elementos.boton.click();
            contexto.controlador.generarPalabra();
        }
    });

    function cambiarColor(){
        var nuevoColor = getRandomInt(this.controlador.listadoColores.length);
        this.elementos.fondoPalabra.css("background-color", this.controlador.listadoColores[nuevoColor]);
    }

    function mostrarPuntos(numero){
        this.controlador.puntos.html(numero);
    }

    function desaparecerPalabra(){
        this.controlador.claseInput.val("");
        this.controlador.claseInput.css({"color": "black", "font-style": "normal", "font-weight": "normal"});
    }

    function procesarInput(){
        let input1 = this.controlador.claseInput.val();
        return input1.toUpperCase();
    }
}