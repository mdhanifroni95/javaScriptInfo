//procedure way
const myDisplayFun = ( content ) => { return `total sum is: ${ content }`; }
const myCalculator = function ( x, y )
{
 let sum = x + y;
 return sum;
}

let result = myCalculator( 9, 10 );
console.log( myDisplayFun( result ) );

//callback way
let myDisplayFunCallback = ( num ) => { return `Total Sum is: ${ num }` };
const myCalculatorFunCallback = function ( x, y, callback )
{
 let sum = x + y;
 callback( sum );
}

let resultCallback = myCalculatorFunCallback( 79, 20, myDisplayFunCallback );
console.log( resultCallback )
// console.log( myDisplayFunCallback( resultCallback ) );

//javaScript CallBack Function
const getter = function ( name, callback )
{
 console.log( `Hi my name is ${ name }` );
 callback();
}

const callMe = () => { console.log( `I am callback function` ) }
getter( "rony", callMe );

//Synchronous Programming
function someLongRunningFun ()
{
 let start = Date.now();
 while ( Date.now() - start < 5000 )
 {
  //do nothing
 }
 return "Hello";
}

console.log( 'Starting...' );
let result3 = someLongRunningFun();
console.log( result3 );
console.log( '...Finishing' );

//Asynchronous Programming
console.log( 'Start of script' );
setTimeout( () =>
{
 console.log( "First timeout expired" );
}, 2000 );

console.log( 'End of script' );