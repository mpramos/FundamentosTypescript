"use strict";
/* VOID */
// Tipos explicito
function showInfo(user) {
    console.log('userInfo', user.id, user.name, user.edad);
}
showInfo({ id: 5, name: 'lupe', edad: 31 });
// tipo Inferido
function FormatedInfo(user) {
    console.log(`
          userId : ${user.id}
          userName : ${user.name}
          userEdad : ${user.edad}
        `);
}
FormatedInfo({ id: 5, name: 'lupe', edad: 31 });
/*  Tipo void como tipo de dato en variable

 */ // solo se puede asignar un null o un undefined
// Como no me deja los dos por el modo estricto de js entonces tenemos que desactivar  el checkeo
// de los tipos estrictos
let unusable;
// unusable = null;
unusable = undefined;
/* Tipo: Never */
// con Never decimos que nunca retorna un valor objeto simplemente lanza la aplicacion
function handleError(code, message) {
    // Process your code here
    // Generate message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
// funcion donde nunca devolvera nada porq entra en un ciclo infinito
function sumInfinite(limite) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
sumInfinite(5); // ciclo infinito
