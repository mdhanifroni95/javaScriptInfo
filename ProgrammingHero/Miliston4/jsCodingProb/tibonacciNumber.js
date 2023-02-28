/*Formula of tibonacci Number
Fn = Fn - 1 + Fn - 2
Fn is term number “n”
Fn−1 is the previous term( n−1 )
Fn−2 is the term before that( n−2 )

The tribonacci numbers are generated by the homogeneous linear recurrence relation Tn=Tn−1+ Tn−2+ Tn−3
*/

const tibonacci = function ( n )
{
 if ( typeof n !== 'number' )
 {
  return "please enter a number";
 } else
 {
  const tibo = [ 0, 1, 2 ];
  for ( let i = 3; i <= n; i++ )
  {
   tibo[ i ] = tibo[ i - 3 ] + tibo[ i - 2 ] + tibo[ i - 1 ];
  }
  return tibo;
 }
}

const checkTibo = tibonacci( "dkfjk" );
console.log( checkTibo );