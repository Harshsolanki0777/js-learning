const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"] 

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHero = marvel_heros.concat(dc_heros)
// console.log(allHero);

const all_new_Heros = [...marvel_heros, ...dc_heros] // spread opration
// console.log(all_new_Heros);

const another_array  = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));
console.log(Array.from({name:"Harsh"})); // interesting becuse it output is [] empty arry


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));