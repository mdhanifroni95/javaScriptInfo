const cars = ["volvo", "Honda", "Toyta"];
cars[0] = "Porsche";

console.log(cars[0]);
console.log(typeof cars);

const person = {
  firstName: "Hasim",
  lastName: "amla",
  profession: "cricketer",
  age: "45",
};
console.log(person.firstName);

const fruits = ["apple", "mango", "pineapple"];
fruits.push("banana");

console.log(fruits);

const personArr = [];
personArr["firstName"] = "Rony";
personArr["lastName"] = "el";
personArr["age"] = 26;
console.log(personArr.length);
console.log(typeof personArr);

//isarray
console.log(Array.isArray(personArr));

//instanceof
console.log(personArr instanceof Array);
