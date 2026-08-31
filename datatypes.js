//primitive datatypes

// 7 types
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt



const score=33
const scorevalue=100.3
const isLoggedIn=true
const outsideTemp=null 

let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123")


console.log(id===anotherId);
// Reference datatypes
// Arrays
// Objects
// Functions

const heros=["shaktiman","naagraj","doga"]
let user={
    name:"aditya",
    age:19,
    isLoggedIn:true
}

const myFunction= function(){
    console.log("hello world");
}

console.log(typeof myFunction);




// Stack, Heap

let myVariable=10

let anotherVariable=myVariable
console.log({myVariable,anotherVariable});
anotherVariable=20
console.log({myVariable,anotherVariable});