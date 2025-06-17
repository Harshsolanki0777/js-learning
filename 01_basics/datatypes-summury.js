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