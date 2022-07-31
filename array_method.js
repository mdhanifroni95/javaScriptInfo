const arr = NaN;
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));
// A comparison function may return any number
let arr1 = [1, 50, 5, 54, 8, 20];

arr1.sort(function (a, b)
{
 // return a - b;  //Ascending to Descending
 return b - a;  //Descending to Ascending
})
console.log(arr1);

// Arrow functions for the best
arr1.sort((a, b) => a - b);
console.log(arr1);

// Use localeCompare for strings
let country = ['Österreich', 'Andorra', 'Vietnam'];
country.sort((a, b) => a > b ? 1 : -1);
console.log(country);
country.sort((a, b) => a.localeCompare(b));
console.log(country);

// reverse
let arr2 = [1, 5, 8, 7, 4];
arr2.reverse();
console.log(arr2);

// split and join

let arr3 = "john,Marry,bobs";
let names = arr3.split(',');
for (let name of names) {
 console.log(`A message to ${name}.`);
}

// Split into letters
let spt = "test";
console.log(spt.split(''));

// reduce / reduceRight

let arr4 = [1, 2, 3, 4, 5];
// removed initial value from reduce (no 0)
let result = arr4.reduce((sum, current) => sum + current, 0);
console.log(result);

let arr5 = [1, 2];

// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr5.reduce((sum, current) => sum + current);

// Array.isArray
console.log(Array.isArray({}));
console.log(Array.isArray([]));