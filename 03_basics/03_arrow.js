const user = {
    username: "harsh",
    price: 199,

    walcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.walcomeMessage()
// user.username = "sam"
// user.walcomeMessage()

// console.log(this);

// function chai(){
//     let username = "harsh"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "harsh"
//     console.log(this.username);   
// }

const chai = () => {
    let username = "harsh"
    console.log(this);   
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } -----> curly brasces return

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2) //----> parenthesse do not required return

const addTwo = (num1, num2) => ({username: "harsh"})

console.log(addTwo(3,4));

const myArray = [2, 4, 5, 5, 7]

// Array.forEach()