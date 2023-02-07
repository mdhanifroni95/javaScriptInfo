// let x = "Johon";
// let x;
var x = "Jon";
var x = "Ron";
console.log(x);

//Block Scope
let c = "outside block";
{
  let c = "can not access without block scope";
}
console.log(c);

{
  var b = "Access without block scope";
}
console.log(b);
