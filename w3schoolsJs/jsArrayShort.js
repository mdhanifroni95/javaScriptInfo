const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());
const points = [40, 100, 1, 5, 25, 10];
console.log(
  points.sort(function (a, b) {
    return a - b;
  })
);

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
console.log(
  cars.sort(function (a, b) {
    return a - b;
  })
);
