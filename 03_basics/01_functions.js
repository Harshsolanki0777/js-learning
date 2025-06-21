
function sayMyName() {
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}

// sayMyName    ---- reference
// sayMyName()  ---- execution

// function addTwoNumbers(number1, number2) {  ---> function input value paramiters
// 
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    
        // let result = number1 + number2
        // return result    
        return number1 + number2     
}

const result = addTwoNumbers(7, 8)  // arguments

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
        return `${username} just logged in`
}

// console.log(loginUserMessage("harsh"));
console.log(loginUserMessage("harsh"));
