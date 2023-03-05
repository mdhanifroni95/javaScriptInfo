// for ( let i = 1; i < 6; i++ )
// {
//  console.log( i );
// }

function addFun ( n )
{
 if ( n > 5 )
  return;
 console.log( n );
 addFun( ++n );
}

addFun( 1 );