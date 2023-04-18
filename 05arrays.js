//vamos a crear arrays o arreglos sirve para guardar y gestionar datos
// se maneja los elementos es decir los datos guardados y los indices que es la posicion
// el indice siempre empieza desde 0


//crear arreglo lista de compras

//var listaDeCompras = [];

//listaDeCompras[3] = "Tomates";
//listaDeCompras[1] = "lechugas";
//listaDeCompras[0] = "zanahorias";
//listaDeCompras[2] = "pepinos";
//para ver la lisra puede llamar directo al nombre del arreglo o asignar a otra variable
//console.log(listaDeCompras);
//console.log(listaDeCompras.length);
//crear variable y asignarlo para ver lista de arreglo
//var elemntoDeArray = listaDeCompras[0]
//console.log(elemntoDeArray);

//console.log(listaDeCompras[0].length);
//ver el elemnto length(longitud)
///ar nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
//console.log(nombres);
//console.log(nombres);

//hay varias formas de usar length arriba al costado del arreglo o fuera permite una vez hay que probar
//PUSH Y UNSHIFT
 
//var colores = ['amarillo','azul'];
 ///colores.push('Rojo');
 //colores.unshift('Verde');

 //console.log(colores);

 //// POP y SHIFT
 //POP y SHIFT
//colores.shift();
//colores.pop();

//console.log(colores);

//includes
//var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
//var existeDali = pintores.includes('Dalfí');
//console.log(existeDali);

//Metodo every verifica si todos los elemntos del array cumplen ncon una condicion su opuesto
//seria some

//var numeros = [1, 6, 8, 9, 43 ];
//var cumpleCondicion = numeros.every((num) => {num > 5});
//console.log(cumpleCondicion);

//SOME verifica si algun elemento cumple con la condicion
//var numeros = [1, 6, 8, 9, 43];
//var cumpleCondicion = numeros.some((num) => {num === 43});
//console.log(cumpleCondicion);

//SPLIT
 //var palabra = 'Henri';
 //var palabraSeparada = palabra.split('');
 //palabraSeparada.pop();
 //palabraSeparada.push('y');
  //console.log(palabraSeparada)
//vamos  a convertirlo de arreglo a string
//var palabraAreglada = palabraSeparada.join('');
//console.log(palabraAreglada);

//foreach permite recorrer una matris arreglo sin cambios
//var numeros = [1, 2, 3, 4];
//numeros.forEach( (num) => {console.log(num)})

//Map permite buscar pero realizar una modificacion
//var numeros = [1, 2, 3, 4, 5];
//var masUno = numeros.map((num) => { return num + 1});
//console.log(masUno);

//Con if
//var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => {
  //  if (num ===3 ) {
   //     console.log(num);
   // }
//})


//BUCLES DENTRO DEL ARRAY

//Usar FOR para recorrer un arreglo
 //var arr = [1, 2, 3, 4, 5];
 //for(var i=0; i < arr.length;i++) {
    //console.log(arr[i]);
 //}
//imprime todo arreglo el for pero en formato cada uno
 //console.log(arr);//imprimer todo pero tipo arreglo

 //WHILE para ver un arreglo
 //var arr = [];
 //while(arr.length < 5){
    //arr.push('camilo');
 //}
 //console.log(arr);
 
 




