// Primitive 

// 7 types: String, Number, Boolean, null (Empty), undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.11

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('124')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 8738636236378989478483n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Kunj",
    age: 25,
}


const myFunction = function(){
    console.log("Hello Kunj");
}

console.log(typeof bigNumber);


// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Priitive), Heap(Non primitive)

let myName = "Kunj Sharma"

let anotherName = myName
anotherName = "Kartikey"


console.log(myName);
console.log(anotherName);




let userOne = {
    email : "user1@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmai.com"


console.log(userOne);
console.log(userTwo);