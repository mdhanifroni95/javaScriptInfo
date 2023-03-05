const products = [
 { name: "Shop", price: 120000, qty: 2 },
 { name: "HP Elite book", price: 4500, qty: 2 },
 { name: "Asus Life book", price: 75000, qty: 7 },
 { name: "Mi Note 8 pro", price: 23000, qty: 5 },
 { name: "Readme 7", price: 45000, qty: 1 }
]

const searchProduct = function ( products, searchTxt )
{
 const result = [];
 for ( const pro of products )
 {
  if ( pro.name.includes( searchTxt ) )
  {
   result.push( pro );
  }
 }
 return result;
}

const result = searchProduct( products, "book" );
console.log( result );

const breakContinue = function ( products )
{
 for ( const x of products )
 {
  if ( x.price <= 23000 )
   continue;  //if condition fluffily break stop work, continue condition fluffily skip this condition
  console.log( x );
 }
}
breakContinue( products );