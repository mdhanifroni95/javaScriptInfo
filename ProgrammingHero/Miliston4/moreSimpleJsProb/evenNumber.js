const evenNumber = function ( num )
{
 let evenNum = [];
 let j = 0;
 for ( let i = 0; i < num.length; i++ )
 {
  const element = num[ i ];
  if ( element % 2 == 0 )
  {
   evenNum[ j++ ] = element;
  }

  //bigger 80 
  // if ( element > 80 )
  // {
  //  evenNum[ j++ ] = element;
  // }
 }
 return evenNum;
}

const checkEvenNum = evenNumber( [ 23, 34, 33, 12, 77, 56, 99, 85 ] );
console.log( `Even Number is ${ checkEvenNum }` );