const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

// falys values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN,

// truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 100




// console.log(val1);


// Terniary Opration 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ?  console.log("less then 80") : console.log("more then 80");

