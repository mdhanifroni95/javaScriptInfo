// Reverse string one way
const reverseStrOne = function ( str )
{
 let revers = "";
 for ( const later of str )
 {
  // Reverse string
  revers = later + revers;
 }
 return revers;
}

const checkRevOne = reverseStrOne( "hello" );
console.log( checkRevOne )

//Reverse string another way
const reverseStrTwo = function ( str )
{
 let revers = "";
 for ( let i = str.length - 1; i >= 0; i-- )
 {
  revers += str[ i ];
 }
 return revers;
}

const checkRevTwo = reverseStrTwo( "hello" );
console.log( checkRevTwo )

// reverse string another way
const reverseStrThree = function ( str )
{
 const splitLater = str.split( "" );
 const reverseLater = splitLater.reverse();
 const joinLater = reverseLater.join( "" );
 return joinLater;
}

const checkRevThree = reverseStrThree( "hello" );
console.log( checkRevThree )