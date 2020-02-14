class Jugador {
    constructor(puntos, vidas, hs){
        this.acumuladorPuntos = puntos;
        this.cantidadVidas = vidas;
        this.hs = hs;
    }

    perderVidas(cantidad){
        this.cantidadVidas -= cantidad;
    }

    acumularPuntos(palabra){
        this.acumuladorPuntos += palabra.puntos;
    }

    highscore(num){
        this.hs = num;
    }
}
