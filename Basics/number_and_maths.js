const score = 400
console.log(score)

//defining number exclusively
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2))// for precision value 100.00

//precison value
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//*****maths*****//

console.log(Math)
//absolute means only negative value converted into positive
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2))//if value greater than given number will roundoff to next number ex.4.2>5
console.log(Math.floor(4.6))//floor choosed lower value than given 4.6 > 4

console.log(Math.random())//value will come between 0 to 1
console.log(Math.random()*10 + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1)))
