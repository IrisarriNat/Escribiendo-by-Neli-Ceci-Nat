class Palabra{
    constructor(estado, palabra){
        this.estado = estado;
        this.palabra = palabra;
        this.puntos = this.palabra.length();
        this.tiempo = this.puntos*2;
    }
    estadoPalabra(){}
}
