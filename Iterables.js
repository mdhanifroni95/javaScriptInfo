// Symbol.iterator
let range = {
 form: 1,
 to: 5
}

// 1. call to for..of initially calls this
range[Symbol.iterator] = function ()
{
 // ...it returns the iterator object:
 // 2. Onward, for..of works only with the iterator object below, asking it for next values
 return {
  current: this.form,
  last: this.to,

  // 3. next() is called on each iteration by the for..of loop

  next()
  {
   // 4. it should return the value as an object {done:.., value :...}
   if (this.current <= this.last) {
    return { done: false, value: this.current++ }
   } else {
    return { done: true }
   }
  }
 };
};

// now it works!
for (let num of range) {
 console.log(num);
}

// another way Symbol.iterator
let range1 = {
 form: 1,
 to: 5,
 [Symbol.iterator]()
 {
  this.current = this.form;
  return this;
 },
 next()
 {
  if (this.current <= this.to) {
   return { done: false, value: this.current++ }
  } else {
   return { done: true }
  }
 }
}
for (let num1 of range1) {
 console.log(num1);
}

// String is iterable
for (let char of "test") {
 console.log(char);
}
let str = '𝒳😂';
for (let chat of str) {
 console.log(chat); // 𝒳, and then 😂
}

// Calling an iterator explicitly

let str1 = "Hello";
let iterator = str1[Symbol.iterator]();
while (true) {
 let result = iterator.next();
 if (result.done) break;
 console.log(result.value);
}

// Array.from
let arrayLike = {
 0: "Hello",
 1: "world",
 length: 2
}
let arr = Array.from(arrayLike);
console.log(arr.pop());

// Create larray with random value(min, max) lenght
let randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

create_random = {
 min: -1,
 max: 90,
 lenght: 100,
};

create_random[Symbol.iterator] = function ()
{
 return {
  start: 0,
  min: this.min,
  max: this.max,
  lenght: this.lenght,
  next()
  {
   this.start++;
   return this.start < this.lenght ? { done: false, value: randint(this.min, this.max) } : { done: true };
  }
 };
};

let array = Array.from(create_random);
console.log(array);