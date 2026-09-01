let mydate= new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);



// let mycreatedDate= new Date(2023,0,24)
// let mycreatedDate= new Date(2027,5,3,11,9)
let mycreatedDate= new Date("12-01-2026")
// console.log(mycreatedDate.toLocaleString());
// console.log(mycreatedDate.toDateString());


let mytimeStamp= Date.now()

// console.log(mytimeStamp);
// console.log(mycreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newdate= new Date()
console.log(newdate.getMonth()+1)
console.log(newdate.getDay())


console.log(`hiii guys today's date is "${newdate.getDate()}" and its "${newdate.getMonth()+1} month`)

console.log(newdate.toLocaleString('default',{
    weekday: "narrow",

}))