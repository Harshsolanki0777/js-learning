const name = "harsh"
const repoCount = 50

// console.log(name + repoCount + " Value");    // old way to write 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // morden way string intrpolation

const  gameName = new String ('solanki')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));

// console.log(gameName.indexOf('a'));

const  newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "    harsh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://harsh.com/harsh%20solanki"

console.log(url.replace('%20', '-'));

console.log(url.includes('king'))