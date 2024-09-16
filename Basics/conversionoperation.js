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

// ********* Operations **********//

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(2%2)

//other things
let str1 = "hello"
let str2 = "pradeep"
let str3 =  str1 + str2
console.log(str3)

//complex

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")


console.log(+true)
console.log(+"")

//tricky assigning
let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)