const accountId = 112345
let accountEmail = "katarakartik706@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"


// accountId = 2 //not allowed

accountEmail = "kunj@gmail.com"
accountPassword = "8973"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/