export {} ;

// [1,'user']
let user: [number, string];
user = [1,'luixaviles']
console.log('user', user);
console.log('userName', user[1])
console.log('lenth',user[1].length)
console.log('id', user[0]) 
// Tupas con varios valores
// id , username, isPro
let userInfo : [number, string , boolean]
userInfo =[1,'maria', true];
console.log('userInfo', userInfo);

// Arreglo de Tupas
let array: [number, string][] =[]; // [] el ultimo corchete es para decir que tendremos un conjutno de tuplas
array.push([1,'luixaviles']); // 0
array.push([2,'paparazzi']); // 1
array.push([3,'lensQueen']); // 2
console.log('array1',array) //  3

// Uso de funciones Array
// lensQueen -> lensQueen001
array[2][1] = array[2][1].concat('001');
console.log('array2',array) //  3
