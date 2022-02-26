// Corchetes []

// Tipo Explicito
let users: string[];
users = ['maria','julia','luna'];
// users = ['maria', 1,true,2] // Error no se puede mezclar otros tipos de datos 

// Tipo diferido
let otherUsers = ['abx','dcbf','jeje'];
// otherUsers = [1,2,'jd','dcbf','jeje'] // El mismo error de la linea 6


// Array<TIPO>
let pictureTitles : Array<string>;
pictureTitles = ['cesar','mario','juana','julio','julia'];
// Accediendo a los valores en un Array
console.log('first user : ', users[0]);
console.log('first title :', pictureTitles[0]);

// Propiedades en Array
console.log('users.lenght', users.length)

// Uso de funciones en array
users.push('aMaria')
users.sort()
console.log('users', users);
