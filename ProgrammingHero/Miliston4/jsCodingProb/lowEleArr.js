let lowEleArr = function ( numbers )
{
 let lowNumber = numbers[ 0 ];
 for ( let i = 0; i < numbers.length; i++ )
 {
  const element = numbers[ i ];
  if ( element < lowNumber )
  {
   lowNumber = element;
  }
 }
 return lowNumber;
}

const lowNumberCheck = lowEleArr( [ 45, 23, 67, 90 ] );
console.log( `Lowest number is array: ${ lowNumberCheck }` );