//singleton object declaration
//const pUser = new Object()
//non-singleton object declaration
const pUser = {}
pUser.id = "123abc"
pUser.name = "sam"
pUser.isLoggedIn = false

console.log(pUser);

const regualrUser = {
    email:"sam@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Pradeep",
            latsname : "Rathod"
        }
    }
}

console.log(regualrUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)