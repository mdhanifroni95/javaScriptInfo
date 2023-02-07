// function myFunction() {
//   console.log(this);
// }
// window.myFunction();

let Persion = {
  name: "Rony",
  sayName: function () {
    console.log(this);
  },
};

Persion.sayName();
