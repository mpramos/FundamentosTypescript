/* ANY
    Sole se debe usar cuando no se se sepa cual es el valor
    que se alamacenará en mi variable
*/
// Tipo expicito
let IdUser;
IdUser = 1; // number
IdUser = '1'; // string
console.log('idUser', IdUser);
// Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
// otherId = true;
console.log('otherId', otherId);
// any se acerca a var 
let surprise = 'hello typescript';
//
let re = surprise.substring(6);
console.log('re:', re);
