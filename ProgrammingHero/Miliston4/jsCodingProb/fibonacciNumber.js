// Formula of Fibonacci Number
/* 
Fn = Fn - 1 + Fn - 2
Fn is term number “n”
Fn−1 is the previous term( n−1 )
Fn−2 is the term before that( n−2 )
*/

const fibonacci = function ( n )
{
 let fibo = [ 0, 1 ];
 for ( let i = 2; i <= n; i++ )
 {
  fibo[ i ] = fibo[ i - 1 ] + fibo[ i - 2 ];
 }
 return fibo;
}

const checkFibonacci = fibonacci( 10 );
console.log( checkFibonacci );