const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(20));

const otherNumber = 223.3989

// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ******************** maths ***********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.8));
// console.log(Math.ceil(5.3));
// console.log(Math.floor(5.8));
// console.log(Math.min(5,4,2,6,7,1,9));
// console.log(Math.max(5,4,2,6,7,1,9));

console.log(Math.random());     // Math.random give value between 1 & 0 
console.log((Math.random()*10) + 1 );
console.log(Math.floor(Math.random()*10) + 1 );

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min  + 1)) + min )