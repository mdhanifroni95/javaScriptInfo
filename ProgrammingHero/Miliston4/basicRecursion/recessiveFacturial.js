const recessiveFac = function ( n )
{
 console.log( n );
 if ( n == 1 )
  return 1
 return n * recessiveFac( --n );
}

const checkRecessiveFac = recessiveFac( 5 );
console.log( checkRecessiveFac )