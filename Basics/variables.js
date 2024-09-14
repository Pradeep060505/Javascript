const accountId = 144553
let accountEmail = "pradeep@gmail.com"
var accountPassword = "12345"
accountCity = "vasai"
let accountState;
//accountId = 2

accountEmail = "ap@gmail.com"
accountPassword = "22123"
accountCity = "delhi"

console.log(accountId);

/*
note: Prefer not to use var 
because of issue of block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);