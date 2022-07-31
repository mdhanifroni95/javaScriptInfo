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