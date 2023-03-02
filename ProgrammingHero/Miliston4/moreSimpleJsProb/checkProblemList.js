const feetToInch = function ( feet )
{
 const inc = feet * 12;
 return `${ feet } feet to ${ inc } inch`;
}

const checkFeetToInch = feetToInch( 4 );
console.log( checkFeetToInch );

const centimeterToMeter = function ( cen )
{
 const meter = cen / 100;
 return `${ cen } centimeter to ${ meter } meter`;
}
const checkCentimeterToMeters = centimeterToMeter( 100 );
console.log( checkCentimeterToMeters );

const pageRequirement = function ( page, quantity )
{
 const requireBook = [ { page: page, quantity: quantity } ];

 let total = 0;
 for ( let reqPag of requireBook )
 {
  total = reqPag.page * reqPag.quantity;
 }
 return `total page need ${ total }`;
}

const checkPageReq = pageRequirement( 100, 4 );
console.log( checkPageReq );

const onlyPositive = function ( num )
{
 let positiveNum = [];
 let j = 0;
 for ( const x of num )
 {
  if ( x < 0 )
   break
  else
   positiveNum[ j++ ] = x;
 }
 return `positive number of array is ${ positiveNum }`;
}

const checkOnlyPositiveNum = onlyPositive( [ 23, 45, -67, 58, 5 ] );
console.log( checkOnlyPositiveNum );