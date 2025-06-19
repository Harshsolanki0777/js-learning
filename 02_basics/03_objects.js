// singleton
//  construction ---- Object.create 

// object literal

const mysym = Symbol("key1")

const JsUser = {
    name : "Harsh",
    "full name" : "Harsh Solanki",
    [mysym] : "mykey1",   
    age : 18,
    location : "Junagdh",
    email : "harsh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "harsh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "harsh@fascebook.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());