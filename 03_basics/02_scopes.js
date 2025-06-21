// var c = 300     // Globle scope
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("Inner :", a);
    
}//block scope

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log(a);
// console.log(b);
// console.log(c);