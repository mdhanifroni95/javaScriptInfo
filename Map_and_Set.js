/** @format */

// Map
let map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key
console.log(map.get("1")); //get string Key
console.log(map.get(1)); //get number key
console.log(map.get(true)); //get boolean key
console.log(map.size);
// Map can also use objects as keys.
let john = { name: "john" };
// for every user, let's store their visits count
let visitsCountKey = new Map();
// john is the key for the map
visitsCountKey.set(john, 123);
console.log(visitsCountKey.get(john));

let john1 = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john1] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log(visitsCountObj["[object Object]"]); // 123

// Chaining
let map1 = map.set("1", "string").set(1, 123).set(true, "bool");

// Iteration over Map
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetables of recipeMap.keys()) {
  console.log(vegetables);
}

// iterate over values (amounts)
for (let amounts of recipeMap.values()) {
  console.log(amounts);
}

// iterate over [key, value] entries
for (let entry of recipeMap.entries()) {
  console.log(entry);
}

// Besides that, Map has a built-in forEach method, similar to Array:
// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}:${value}`);
});

// So we can create a map from an object like this:

let obj = {
  name: "elma",
  age: 18,
};

let map2 = new Map(Object.entries(obj));
console.log(map2);

// Object.fromEntries: Object from Map

let obj1 = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.

let map3 = new Map();
map3.set("Banana", 4);
map3.set("Apply", 34);
map3.set("orange", 56);

let obj2 = Object.fromEntries(map3.entries()); // make a plain object (*)
console.log(obj2.orange);

// Set is just the right thing for that:
let set = new Set();
let John = { name: "John" };
let pete = { name: "pete" };
let mary = { name: "mary" };
// visits, some users come multiple times'
set.add(John);
set.add(pete);
set.add(mary);
set.add(John);
set.add(pete);

// set keeps only unique values
console.log(set.size);

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

let set1 = new Set(["oranges", "apples", "bananas"]);
for (let value of set) console.log(value);
// the same with forEach:
set1.forEach((value, valueAgain, set1) => {
  console.log(value);
});
