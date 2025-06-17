//  Primitive 

//  7 types : String, Number, Boolean, null, undefined, Symbol, Bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

// const bigNumber = 3457025707312701357n


// Reference (no primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
        name : "harsh",
        age : 20,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros);

// ********************************************************

// Stack (Primitie) , Heap (Non-Primitive)

let myYoutubename = "harshsolankidotcom"

let anothername = myYoutubename
anothername = "harshsolanki"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@rbi"
}

let userTwo = userOne

userTwo.email = "solanki@google.com"

console.log(userOne.email);
console.log(userTwo.email);
