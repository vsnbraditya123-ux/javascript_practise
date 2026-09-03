const myarr=[1, 2, 3, 4, 5];
const heros=['spiderman','ironman','thor']

const myarr1= new Array(1, 2, 3, 4, 5);
console.log(myarr.length)

// myarr.push(6)
// console.log(myarr);

// myarr.pop()
myarr.unshift(100)
myarr.shift()
console.log(myarr.indexOf(3));

console.log(myarr.reverse());

// const h1=heros.concat(myarr)
// console.log(h1);

const h1 = [...heros, ...myarr]
console.log(h1);
let h=1
let h2=2
let h3=3
let h4=4
console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"))
console.log(Array.of(h,h2,h3,h4))