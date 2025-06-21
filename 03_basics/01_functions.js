
function sayMyName() {
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}

// sayMyName    ---- reference
// sayMyName()  ---- execution

// function addTwoNumbers(number1, number2) {  ---> function input value parameters
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
// console.log(loginUserMessage("harsh"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(300, 300, 400, 4000));

const user = {
    username : "harsh",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);   
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 299
})

const myNewArray = [200, 300, 500, 800]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));