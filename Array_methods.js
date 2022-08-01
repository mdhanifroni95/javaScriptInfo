/*splice*/
let arr = ["I", "Am", "array"];
delete arr[1];
console.log(arr);

let arr0 = ["I", "Am", "array"];
arr0.splice(1, 1);
console.log(arr0.length);

// In the next example we remove 3 elements and replace them with the other two:
let arr1 = ["I", "Study", "javascript", "right", "now"];
arr1.splice(0, 3, "Let's", "dance");
console.log(arr1);
// Here we can see that splice returns the array of removed elements:
let arr2 = ["I", "Study", "javascript", "right", "now"];
let remove = arr2.splice(0, 2);
console.log(remove);
// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
let arr3 = ["I", "study", "javascript"];
arr3.splice(2, 0, "complex", "language");
console.log(arr3);

// Negative indexes allowed
let arr4 = [1, 2, 5];
arr4.splice(-1, 0, 3, 4);
console.log(arr4);

/*slice*/
let sl = ["t", "e", "s", "t"];
console.log(sl.slice(1, 3));
console.log(sl.slice(-2));

// indexOf/lastIndexOf and includes
let ar = [1, 0, false];
console.log(ar.indexOf(0));
console.log(ar.lastIndexOf(false));
console.log(ar.includes(1));

// The includes method handles NaN correctly
const arra = [NaN];
console.log(arra.indexOf(NaN));
console.log(arra.includes(NaN));

// find and findIndex/findLastIndex
let users = [
  { id: 1, name: "John" },
  { id: 1, name: "ron" },
  { id: 1, name: "mon" },
];

let user = users.find((item) => item.id == 1);
console.log(user);

// filter
let fil = users.filter((item) => item.id < 3);
console.log(fil.length);

// map
let lengths = ["Rony", "Elma", "mim"].map((item) => item.length);
console.log(lengths);

// sort(fn);
let ar1 = [1, 3, 15, 2];
ar1.sort();
console.log(ar1);
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let ar2 = [1, 23, 5, 6, 20, 2];
ar2.sort(compareNumeric);
console.log(ar2);
