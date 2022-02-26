// Type: object
let user : object;
user ={}; // Object

user = {
    id:1,
    username :'paparazzi',
    firstName : 'Pablo',
    isPro: true
}
console.log('user', user)
// Object vs object
// Nose puede acceder a las propiedades del objeto que usa javaScript desde ts
// console.log('user.username', user.username);
const myObj={
    id:1,
    username: 'paparazzi',
    firstName : 'Pablo',
    isPro : true
};

const instance = myObj instanceof Object;

console.log('instance',instance)
console.log(myObj)
console.log('user.username', myObj.username);
