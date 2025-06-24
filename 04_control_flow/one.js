// if

const isUserloggedIN = true
const temprature = 41

// if ( temprature < 50 ) {
//     console.log("temprature less then 50");   
// }
// else{
//     console.log("temprature is greater then 50");
// }

// <, >, <=, >=, ==, !=, ===

// const score = 200

// if (score > 100) {
//     const power = "flay"
//     console.log(`User power : ${power}`);
    
// }

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");  ---> not professional

// if (balance < 500) {
//     console.log("less then 500");
// } else if (balance < 750){
//     console.log("less then 750");
// } else if (balance < 900){
//     console.log("less then 900");
// } else {
//     console.log("less then 1200");
// }




const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitCard && 2 == 3 ) {
    console.log("Allow to buy course");   
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
       
}