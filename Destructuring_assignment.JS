// Now we can work with variables instead of array members.
// let [firstName, surname] = "John Smith".split(" ");
// alert(firstName); // John
// alert(surname);  // Smith
let [firstName, sureName] = "john Smith".split(" ");
console.log(firstName);
console.log(sureName);

// Looping with .entries()

let user = {
 name: "john",
 age: 30
};

for (let [key, value] of Object.entries(user)) {
 console.log(`${key}:${value}`);
}

// The similar code for a Map is simpler, as it’s iterable:
let user1 = new Map();
user1.set('name', 'john');
user1.set('age', 30);
for (let [key, value] of user1) {
 console.log(`${key}:${value}`);
}

// Swap variables trick
let guest = "john";
let admin = "peter";
[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`);