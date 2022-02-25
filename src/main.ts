// NUMBER 
// Explicito
let phone: number;
phone =1 ;
phone = 534242424;
// phone ='hola'; // Error
//INFERIDO
let phoneNumber = 3542235
phoneNumber = 123;
/* phoneNumber = true */
let hex: number = 0xf00d;
let binary : number= 0b1010;
let octal : number=0o744;

// Tipo: Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
// isPro = 1

// INFERIDO
let isUserPro= false;
isUserPro= true;
// isUserPro = 10;

// Strings
let username : string;
username = 'maria';
// username = true; Error

// Expresiones dentro de nuestras cadenas
// TEMPLATE
// Uso de back-tick
let userInfo:string;
userInfo = `
        User Info:
        username:  ${username}
        firstname : ${username + 'Ramos'}
        phone : ${phone}
        isPro : ${isPro}
`;
console.log('userInfo', userInfo);