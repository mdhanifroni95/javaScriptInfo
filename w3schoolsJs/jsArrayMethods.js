const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits.join("*"));
console.log(fruits.pop());
fruits.push("Lemon");
console.log(fruits);
console.log(fruits.shift());
fruits.unshift("Banana");
console.log(fruits);

// Merging (Concatenating) Arrays
const myGirls = ["Mary", "jany", "elma"];
const myBoys = ["Roy", "jon", "hassan"];
const myAnimal = ["dog", "cat", "doll"];
const myChidden = myGirls.concat(myBoys, myAnimal);
console.log(myChidden);

// Splicing and Slicing Arrays
myGirls.splice(1, 2, "ifrat", "jahan");
console.log(myGirls);

// JavaScript Array slice()
let myGirlsSlice = myGirls.slice(2);
console.log(myGirlsSlice);
