// Here’s an example of using Object.values to loop over property values:
let user = {
 name: "john",
 age: 30
}

for (let value of Object.values(user)) {
 console.log(value);
}

// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

function sumSalaries(salaries)
{
 let sum = 0;
 for (let salary of Object.values(salaries)) {
  sum += salary;
 }
 return sum;
}

let salaries = {
 "John": 100,
 "Pete": 300,
 "Mary": 250
}

console.log(sumSalaries(salaries));