const myArray : number[]= [1,2,3,4,5,6];

//if we need to cone a array of objects we have to use structuredClone() instead spread operator
const myArray2 = [...myArray]; 
myArray2.push(5);

console.log(myArray,myArray2);