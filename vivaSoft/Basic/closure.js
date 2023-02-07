// problem initial asing global variable
// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => console.log(i), 1000);
//   // console.log(i);
// }

// solution 1
// for (var i = 1; i <= 5; i++) {
//   (function () {
//     var val = i;
//     setTimeout(() => {
//       console.log(val);
//     }, 1000);
//   })();
// }

// solution 2
// for (var i = 1; i <= 5; i++) {
//   (function (val) {
//     setTimeout(() => {
//       console.log(val);
//     });
//   })(i);
// }

// solution 3

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// let addTen = add(10);
// let addSeven = addTen(7);
// console.log(addSeven);
