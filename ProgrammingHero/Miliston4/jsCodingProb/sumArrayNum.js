let sumArr = function ( numbers )
{
 let sum = 0;
 for ( let i = 0; i < numbers.length; i++ )
 {
  const element = numbers[ i ];
  sum += element;
 }
 return sum;
}

let total = sumArr( [ 45, 23, 67, 90 ] );
console.log( `array sum is ${ total }` );
