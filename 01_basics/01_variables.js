const account_ID = 144553   // no changes happened 
let account_Email = "aditya@gmail.com"   
var account_password = "12345"
account_city = "Nashik"
let account_state;
  
 //  account_ID = 2    // const changes not allowed
console.log(account_ID);

account_Email = "adi@gmail.com"
console.log(account_Email);

account_city = "Banglore"
console.log(account_city);

console.log([account_ID,account_Email,account_city,account_state]);

/*
Prefer not to use var
beacause of issue in block scope and functional scope
*/