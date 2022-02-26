"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Bracket syntax
let username;
username = 'maria';
// tenemos una cadena TS confia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
console.log('message', message);
let usernameWithId = 'luixaviles 1';
// como obtner el username ?
username = usernameWithId.substring(0, 10);
console.log('UserName only', username);
// Sintaxis "as"
message: username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('helloUser', username);
