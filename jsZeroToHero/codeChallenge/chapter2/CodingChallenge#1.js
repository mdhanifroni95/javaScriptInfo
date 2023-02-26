const calcAverage = ( a, b, c ) => { return ( a + b + c ) / 3; }
const scoreDolphins = calcAverage( 44, 23, 71 );
const scoreKoalas = calcAverage( 65, 54, 49 );
console.log( scoreDolphins, scoreKoalas );
const checkWinner = function ( avgDolhins, avgKoalas )
{
 if ( avgDolhins >= 2 * avgKoalas )
 {
  console.log( `Dolphins win (${ avgDolhins } vs ${ avgKoalas })` );
 } else if ( avgKoalas >= 2 * avgDolhins )
 {
  console.log( `Koalas win (${ avgKoalas } vs ${ avgDolhins })` );
 } else
 {
  console.log( "No Team wins!" );
 }
}

checkWinner( scoreDolphins, scoreKoalas );
checkWinner( 556, 90 );
