const numbers = [45, 23, 56, 12, 45, 4];
let txt = "";
numbers.forEach(function (value) {
  txt += value;
  return txt;
});
console.log(txt);

// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.
const numbers1 = [12, 24, 9, 6];
const numbers2 = numbers1.map(myMapFun);
function myMapFun(value) {
  return value;
}
console.log(numbers2);

const over10 = numbers1.filter(myFilterFun);
function myFilterFun(value) {
  return value > 9;
}
console.log(over10);
