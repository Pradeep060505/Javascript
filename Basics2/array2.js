const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//concat
const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

//spread works like concat
const all_new_hero = [...marvel_heros, ...dc_heros]
console.log(all_new_hero)

const newarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_array = newarray.flat(Infinity)
console.log(real_array)

//checking array
console.log(Array.isArray("Pradeep"))
//converting to array
console.log(Array.from("Pradeep"))

//intersting
console.log(Array.isArray({name: "Pradeep"}))//confusing about key or their value will array so it will return empty if not mentioned

let arr1 = 100;
let arr2 = 200;
let arr3 = 300;

console.log(Array.of(arr1, arr2, arr3))