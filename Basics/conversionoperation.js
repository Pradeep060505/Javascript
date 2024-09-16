let score = "44"
//if score is "44abc" it will convert using number but it output will be" NaN"

console.log(typeof score)
console.log(typeof(score));

let valueInNUmber = Number(score)
console.log(typeof valueInNUmber);
console.log(valueInNUmber);

//NaN = not a number ...
//"33" => 33
//"33abc"=> NaN
// true = 1; false = 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true; 0=> false
//""=> false
//"pradeep" => true

let someNumber = 33 
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);
