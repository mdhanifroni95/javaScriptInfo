// Map
let map = new Map();
map.set("1", "str1");      // a string key
map.set(1, 'num1');       // a numeric key
map.set(true, 'bool1');  // a boolean key
console.log(map.get('1')); //get string Key
console.log(map.get(1));   //get number key
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
let map1 = map.set("1", "string").set(1, 123).set(true, 'bool');