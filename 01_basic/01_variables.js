const accountId = 12345
let accountEmail = "Prajwal@google.com"
let accountPassword = "9876" // not advised to use
accountCity = "Bengaluru" // not good practice
let accountState;

// accountId = 121212 // not allowed

/*
prefer not to use var 
because of issue in the block scope and functional scope
*/

accountEmail = "intellipaat@google.com"
accountPassword = "1234"
accountCity = "Pune"

console.log(accountId)

console.table([accountEmail, accountPassword, accountCity, accountState])