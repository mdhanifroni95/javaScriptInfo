//remove duplicate value in array
let removeDuplicatesValue = function ( num )
{
 let unique = [];
 // for ( let i = 0; i < num.length; i++ )
 // {
 //  const element = num[ i ];
 //  if ( unique.indexOf( element ) == -1 )
 //  {
 //   unique.push( element );
 //  }
 // }

 for ( let element of num )
 {
  if ( unique.indexOf( element ) == -1 )
  {
   unique.push( element );
  }
 }
 return unique;
}


const checkRemoveDuplicates = removeDuplicatesValue( [ 45, 23, 45, 22, 23 ] );
console.log( `unique array is ${ checkRemoveDuplicates }` );