// singleton

// object literals


//symbol
const mysym = Symbol("key1")
const JsUser = {
   name: "Pradeep",
   [mysym]:"mykey1",
   age: 18,
   location: "mumbai",
   email: "abc@gmail.com",
   isLoggedIn: false
}

console.log(JsUser[mysym])

//ways to access object 
console.log(JsUser.email)

//right way 
console.log(JsUser["email"])
//constructor method to create object
Object.create

JsUser.email = "pradeep@12.com"
//Object.freeze(JsUser)//no changes will aplly after using freeze
JsUser.email = "pradeep2.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log(`hello jsuser, ${this.name}`)
}

console.log(JsUser.greeting())