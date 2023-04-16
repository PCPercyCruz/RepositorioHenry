//Permite tener una clase general y heredadr propiedades y metodos a otras clases o subentidades que erender metodos 
//y propiedad de la clase general y sus propios propiedades o metodos desubclases
//Palabras CLAVE
//EXTENDS //Permite extender una clase
//SUPER //Permite indicar que propiedades se heredaran de la clase orincipal

//Crear plase persona con su metodo saludar
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log('Hola, mi nombre es '+ this.nombre + '. tengo '+ this.edad + ' años.');
    }
}



//crear otra clase con nombre programador y disignarla como extension de la clase principal persona

class Programador extends Persona{
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear(){
        console.log('Soy '+this.nombre+'. codeo desde hace '+this.añosDeExperiencia+' años.')
    }
}

let martin = new Persona('Martin',25);
let maria = new Programador('María', 30,4);
martin.saludar();
maria.codear();

