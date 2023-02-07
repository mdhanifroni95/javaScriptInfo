var globalVariable = "I am Global Variable";

function myFun ()
{
 var localVariable = "I am Local Variable";
 console.log( globalVariable );
 console.log( localVariable );
}
myFun();
console.log( localVariable );