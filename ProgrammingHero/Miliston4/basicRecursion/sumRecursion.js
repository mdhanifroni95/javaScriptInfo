let sum = 0;
// for ( let i = 1; i < 6; i++ )
// {
//  console.log( sum += i );
// }

// for ( i = 5; i >= 1; i-- )
// {
//  console.log( sum += i )
// }

const recursiveSum = function ( n )
{
 console.log( n );
 if ( n == 1 )
  return 1;
 return n + recursiveSum( --n );
}

console.log( recursiveSum( 5 ) );