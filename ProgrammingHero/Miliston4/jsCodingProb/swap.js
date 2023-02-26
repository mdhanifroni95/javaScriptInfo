let first = 5;
let second = 9;
console.log( first, second );

//first step
// let temp = first;
// first = second;
// second = temp;
// console.log( first, second );

//second step --destructing
[ first, second ] = [ second, first ];
console.log( first, second );