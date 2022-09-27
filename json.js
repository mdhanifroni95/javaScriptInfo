// For instance, here we JSON.stringify a student:
let student = {
  name: "john",
  age: 30,
  inAdmin: false,
  course: ["html", "css", "javaScript"],
  spouse: null,
};

let json = JSON.stringify(student);
console.log(json);

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

let user = {
  sayHi() {
    //ignored
    console.log("Hello World");
  },
  [Symbol("id")]: 123, //ignored
  something: undefined, //ignored
};
console.log(JSON.stringify(user));
