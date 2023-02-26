// program to find the factorial of a number
let factorialFun = function ( number )
{
 // checking if number is negative
 if ( number < 0 )
 {
  return "Error! Factorial for negative number does not exist.";
 } else if ( number === 0 )  //if number is 0
 {
  return `The factorial of ${ number } is 1`;
 } else  //if number is positive
 {
  let fact = 1;
  //for loop
  // for ( let i = 1; i <= number; i++ )
  // {
  //  fact *= i;
  // }

  //while loop
  let i = number;
  while ( i >= 1 )
  {
   fact *= i;
   i--;
  }
  return `The factorial of ${ number } is ${ fact }`;

 }
}
let factorialCheck = factorialFun( 5 );
console.log( factorialCheck );