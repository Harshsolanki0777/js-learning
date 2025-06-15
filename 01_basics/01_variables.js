const accountId = 123222
let accountEmail = "harsh@google.com"
var accountPassword = "12321"
accountCity = "junagdh"
let accountState;

// accountId = 2 // not allowed

accountEmail="hs@hs.com"
accountPassword = "343434"
accountCity = "dwarka"

console.log(accountId);

console.table([accountId , accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/