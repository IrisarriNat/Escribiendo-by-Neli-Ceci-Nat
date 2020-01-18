class Palabra{
    constructor(estado, palabra){
        this.estado = estado;
        this.palabra = palabra;
        this.puntos = this.palabra.length;
        this.tiempo = this.puntos*2;
        
    }
    estadoPalabra(){}
}


/* 
cambiar el alert por sumar puntos
restar vidas si terminó el timer
resetear juego pero guardar highscore
si apretas boton y no coincide la palabra se borra la palabra pero no se detiene el timer, 
        y el user puede seguir intentando hasta que acabe el tiempo sino pierde punto
*/