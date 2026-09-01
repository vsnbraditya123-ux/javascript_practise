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

let user1= {
    name :'Aditya',
    upi :'user123@ybl'
}
console.log(user1);

let name1='Aditya Vardhan'
let place='Hyderabad'

console.log(`My name is ${name1} and I live in "${place}"`);

const myname= String("Aditya-vardhan")

console.log(myname[0]);
console.log(myname.length);
console.log(myname.toUpperCase());
// console.log(myname.__proto__);
console.log(myname.toLowerCase());
console.log(myname.trim(2,5));
console.log(myname.split(" "));

const newstring=myname.substring(0,3)
console.log(newstring);
