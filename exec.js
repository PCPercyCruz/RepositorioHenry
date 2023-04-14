//ver el contexto del meto this
class football {
    constructor(jugador){
        this.jugador = jugador;
    }
    //crear metodo por fuera del constructor
    //metodo es como si fuera una funcion sin variable a = es decir var a= function(){}
    //sino solo x(){}
    obtenerNombre(){
        console.log(this.jugador);
    }
}

//crear varias instancias o referencias a partir de la plantilla
var argentina = new football('Messi');
var brasil = new football('Pele');

//vamos a llamar al metodo funcion que creamos arriba para saber el nombre del jugador por cada instancia variable
argentina.obtenerNombre();
brasil.obtenerNombre();