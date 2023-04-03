const p = "Hello Bangladesh we are looking for this";
//return string to array what is this we are split
const pArr = p.split( "o" );
console.log( pArr );

//slice how many length we need to slice in string
const sliceString = p.slice( 4, 9 );
console.log( sliceString );

//substr

const subString = p.substr( 0, 4 );
console.log( subString );

//substring

const subString2 = p.substring( 0, 5 );
console.log( subString2 );

//concat
const firstName = "Sohanur";
const lastName = "Rohaman";
// const concatName = firstName + " " + lastName;
const concatName = firstName.concat( " " ).concat( lastName );
console.log( concatName );

//join
const a = [ 'a', 'b', 'c', 'd' ];
const joinA = a.join( "" );
console.log( joinA );

