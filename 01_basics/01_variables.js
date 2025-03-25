const accountId = 144553
let accountEmail ="nitish@google.com"
var accountPassword = "12345"
accountCity  = "jaipur"

let accountState;


//accountId =2 // not allowed in js

/*  
 1. prefer not to use var because of use in block scope and functional scope 
 2. sometimes without using the variable or constant we can resere a block of memory in js
 but it is not a good practice.
 3. when we do not put any value in the varible is prints undefined e.g accountState print the value as undefined.
*/
console.log(accountId);

accountEmail = "hac@np.com";
accountPassword ="21212121"
accountCity = "bangluru"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);
console.log(accountState);
