/* // 10 , '10'
let idUser: number | string;
idUser = 10;
idUser = '10';
// Buscar username dado un ID
function getUsernameById(id:number | string) {
     return 'hola';
}
getUsernameById(20);
getUsernameById('20'); */

// Alias de Tipos para TS
type IdUser = number | string;
type Username = string
let idUser: IdUser;
idUser = 10;
idUser = '10';
// Buscar username dado un ID
// Username sera como el tipo de retorno
function getUsernameById(id:IdUser): Username {
     return 'hola';
}
getUsernameById(20);
getUsernameById('20');

// Tipos Literales
// 100x100, 500x500, 10000x10000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200';// Error porque 200x200 no esta dentro de la variable SquareSize
let smallPicture: SquareSize = '500x500'