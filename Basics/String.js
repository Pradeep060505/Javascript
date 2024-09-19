const name  = "Pradeep"
const repoCount = 15

//console.log(name + repoCount + "value");

//good way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const firstname = new String("Pradeep")

//accesing keyvalue 
console.log(firstname[0])

//access prototype
console.log(firstname.__proto__)

console.log(firstname.length)
console.log(firstname.toUpperCase())
console.log(firstname.charAt(3))
console.log(firstname.indexOf('a'))

//slice
const newString = firstname.slice(1, 2)
console.log(newString)

//replace and trim
const newString1 = "  Pradeep  "
console.log(newString1)
console.log(newString1.trim())

const url = "https:/pradeep.com/pradeep%20rathod"
console.log(
url.replace('%20', '_'))

//to find 
console.log(url.includes('pradeep'))
console.log(url.includes('dost'))