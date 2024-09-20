//Dates

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());

let mynewDate = new Date(2024, 1, 25)
console.log(mynewDate.toLocaleDateString());

//timestamp

let myTimeStamp = Date.now()

console.log(myTimeStamp);
//to simplify

console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now()/1000));

//methods

let newDate2 = new Date()

console.log(newDate2)
console.log(newDate2.getDay())

