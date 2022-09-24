// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());

// sate second
let date1 = new Date();
date1.setSeconds(date1.getSeconds() + 70);
console.log(date1);

// We can also set zero or even negative values. For example:
let date2 = new Date(2016, 0, 2);
date2.setDate(1);
console.log(date2);
date2.setDate(0);
console.log(date2);

// When a Date object is converted to number, it becomes the timestamp same as date.getTime()
let date3 = new Date();
console.log(+date3);

// The important side effect: dates can be subtracted, the result is their difference in ms.
// That can be used for time measurements:
let start = new Date();
// do the job
for (let i = 0; i < 100000; i++) {
  const doSomething = i * i * i;
}

let end = new Date(); // end measuring time
console.log(`The loop took ${end - start} ms`);

// Date.now()
// So this is probably better:
let start1 = Date.now();
for (let i = 0; i < 100000; i++) {
  const doSomething = i * i * i;
}
let end1 = Date.now();
console.log(`The loop took ${end1 - start1} ms`);

// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();
  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    f(date1, date2);
  }
  return Date.now() - start;
}

console.log("Time of DiffSubtract is:" + bench(diffSubtract) + "ms");
console.log("Time DiffGetTime is:" + bench(diffGetTime) + "ms");
