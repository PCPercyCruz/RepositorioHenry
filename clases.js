//clases hay 2 maneras 
//Antiguo Funcion constructora
//nuevo: Expresion de clase
//Siempre al declaran una clase la primera consonante o vocal ews en mayuscula lo demas en miniscula
//para declarar propiedades de usa la palabra reservada this

//*****PRIMER METODO DE CREAR CLASE ANTIGUO
//Funcion constructora
 function Auto(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this. año = año;
    this.ruedas = ruedas;
    //crear metofo o funcion this se va a usar par acceder a propiedades desde una funcion metodo contexto
    this.informacion = function(){
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    }
 }

 //esta creado la plantilla que se va  usar para crear cada llamada o instancia o plantilla
 //llamar o hacer referencia instancia
 //crear una variable
 var miPrimerAuto = new Auto(2, 'Rojo', 'Toyota', 2023, 4);
 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);
 //llamar metodo o funcion escrita arriba
 miPrimerAuto.informacion();
 //te devuelve el resultado de la funcion metodo de arriba

//****Segundo METODO ACTUAL de crear CLASES
//EXPRESION DE CLASE //pRIMER LETRA en Mayuscula dema sne minuscula cuando es clase
//palabra reservada constructor va a ir los parametros que se van a recibir
//actualizacion ECAM 2015

class Auto {
    constructor(puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;

    }

    //afuera de constructor puede crear metodos que son funciones de la clase
    //para desde los metodos a las propiedades de la clase y reconosca la funcion metodo 
    //use this para indicar al metodo funcion de donde tiene que tomar la informacion
    informacion(){
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    }


}

//llamar instancia
var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);

//llamar al metodo funcion creado arriba
miSegundoAuto.informacion();


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
