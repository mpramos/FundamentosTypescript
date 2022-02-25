// NUMBER 
// Explicito
let phone;
phone = 1;
phone = 534242424;
// phone ='hola'; // Error
//INFERIDO
let phoneNumber = 3542235;
phoneNumber = 123;
/* phoneNumber = true */
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Tipo: Boolean
// Tipado Explicito
let isPro;
isPro = true;
// isPro = 1
// INFERIDO
let isUserPro = false;
isUserPro = true;
// isUserPro = 10;
// Strings
let username;
username = 'maria';
// username = true; Error
// Expresiones dentro de nuestras cadenas
// TEMPLATE
// Uso de back-tick
let userInfo;
userInfo = `
        User Info:
        username:  ${username}
        firstname : ${username + 'Ramos'}
        phone : ${phone}
        isPro : ${isPro}
`;
console.log('userInfo', userInfo);
