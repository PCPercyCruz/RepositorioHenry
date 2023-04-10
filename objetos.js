//Crear un Objeto
var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

//crear con otro tipo de datos y colocar otro objeto
var persona = {
    nombre: 'Luas',edad: '26',estudios: {esProgramador: true}
};

//ACCEDER
var persona = {nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}};
console.log(persona.edad);

//ASIGNAR
var persona = {nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}};
persona.nombre = 'Percy';
console.log(persona.nombre);
//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos.marcas);
//BORRAR usa delete luego objeto y propiedad a eliminar
delete autos.marcas;
console.log(autos);

//crear una funcion dentro de un objeto
var misFunciones = {
    saludar: function() {
        console.log('Hola');
    },
};
misFunciones.saludar();

//DOT NOTATION Notacion por Punto
var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes']};
atuendos.cabeza = ['Casco', 'Gorro'];
console.log(atuendos.cabeza);

//BRACKET NOTATION , Notacion por corchetes, se usa cuando vas a ingresar una nueva propiedad con corquetes y comillas
// si vas a recibir variables usar si o si notacion con corchetes para propiedad sin comillas para recibir la variable
atuendos['Piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


//con bracket notation // usa bracket notation en corchetes para agregar una nueva propiedad este es en caso de
// recibir variables hayq ue usarlo sin comillas y con corchettes no punto
var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos){
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];

};
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);

//HAS OWN PROPERTY 
//var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
//var tienePropiedad = libro.hasOwnProperty('Borges');
//console.log(tienePropiedad);

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('autor');

console.log(tienePropiedad);

// KEYS devuelve todas las propiedades del objeto
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

//usar for in sirve para recorrer un objeto no un arreglo
var mundo = {continentes:7, Paises: 195, oceanos: 5};
for(let prop in mundo ){
    console.log('Esta es la propiedad: ' + prop);
    console.log('Este es el valor ' + mundo[prop]);
}

//this objeto de referencia o contexto
//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function() {
       console.log('Mi perro es un  ' + this.raza);
    },
 };
 mascota.info();