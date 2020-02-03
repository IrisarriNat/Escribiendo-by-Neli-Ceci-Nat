class Jugador {
    constructor(puntos, vidas){
        this.acumuladorPuntos = puntos;
        this.cantidadVidas = vidas;
    }

    perderVidas(cantidad){
        this.cantidadVidas -= cantidad;
    };

    acumularPuntos(palabra){
        this.acumuladorPuntos += palabra.puntos;
    }
}
