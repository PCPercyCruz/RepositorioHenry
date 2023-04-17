//callback proceso en que una funcion recibe por parametro a otra funcion o lo ejecuta en su interior
// CALLBACK UNO
 function devuelvoUsuario(){
    return 'Camilo';
 }

 function devuelvoSaludo(){
    return 'Hola';
 }

 //Funcion que va a llamar a las 2 funciones por parametro(definicion)
 function saludar(cb1, cb2){
    return cb1() + ' ' + cb2();
 }

 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);

 // OTRA FORMA DE CALLBACK

 var devuelvoFrase = function(comida){
    return 'Hoy quiero comer ' + comida;
 }

 var hablar = function(comida, cb){
    return cb(comida);
 }

 //Vamos a ejecutar estas funciones con esta funcion aqui abajo
 var fraseFinal = hablar('Pizza',devuelvoFrase);
 console.log(fraseFinal);


