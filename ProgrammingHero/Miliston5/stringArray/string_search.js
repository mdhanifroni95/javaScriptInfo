const products = [
 'laptop dell Laptop ',
 'lenovo laptop',
 'hp laptop',
 'assus Laptop'
]

const search = 'laptop';
const output = [];
//index of
for ( const product of products )
{
 if ( product.toLocaleLowerCase().indexOf( search.toLocaleLowerCase() ) != -1 )
 {
  // output.push( product );
 }
}
// console.log( output );

//includes
for ( const x of products )
{
 if ( x.toLocaleLowerCase().includes( search.toLocaleLowerCase() ) )
 {
  // output.push( x );
 }
}

// console.log( output );

//starts with
for ( const y of products )
{
 if ( y.toLocaleLowerCase().startsWith( search.toLocaleLowerCase() ) )
 {
  output.push( y );
 }
}

console.log( output );