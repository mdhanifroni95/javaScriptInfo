// function modifyBy2(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] + 2);
//   }
//   return output;
// }

// const newArray = modifyBy2([1, 2, 3, 4, 5, 6]);
// console.log(newArray);

// function modifyArray(arr, fun) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(fun(arr[i]));
//   }
//   return output;
// }

// function modifyFun2(elem) {
//   return elem + 2;
// }

// const newArray = modifyArray([1, 2, 3, 4, 5, 6], modifyFun2);
// console.log(newArray);

function modifyArray(arr, callback) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }
  return output;
}

function addNumberFun(ele) {
  return ele + 2;
}

function minusFun(ele) {
  return ele - 1;
}

const addNum = modifyArray([1, 2, 3, 4, 5, 6], addNumberFun);
console.log(addNum);
const minus = modifyArray([1, 2, 3, 4, 5, 6], minusFun);
console.log(minus);
