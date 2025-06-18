// Dates

const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// const myCreatedDate = new Date(2025 , 0 , 25)
// const myCreatedDate = new Date(2025 , 0 , 25 , 5 , 6)
// const myCreatedDate = new Date("2025-01-07")
const myCreatedDate = new Date("01-07-2025")


// console.log(myCreatedDate.toLocaleString());

let myTimeStemp = Date.now()

// console.log(myTimeStemp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",
    
})