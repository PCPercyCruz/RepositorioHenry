//acceder al objeto array por medio del prototipo para crear propiedades y metodods y usarlos como herencia
 Array.prototype.mayorQueTres = function(){
    var arregloModificado = [];
    for(var i=0; i < this.length; i++){
        if (this[i] > 3){
            arregloModificado.push(false);
        } else {
            arregloModificado.push(this[i]);
        }
    }

    return arregloModificado;
}

var areglo1 = [1,2,3,4,5];
var nuevoarreglo = areglo1.mayorQueTres();

console.log(nuevoarreglo);

//
//
//CREAR un metodo de  CLASE utilzando el proptipo

class Latinoamerica {
    constructor(){
        this.paises = [];
    };
};

Latinoamerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
    
}

var continente = new Latinoamerica();
continente.agregarPais('Peru');
console.log(continente);
