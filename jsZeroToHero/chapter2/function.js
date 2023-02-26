function logger ()
{
 console.log( 'this is logger function' );
}
// logger();

function fruitMaker ( apple, orange )
{
 console.log( apple + ':' + orange );
 const fruit = `this is ${ apple } apple and ${ orange } orange`;
 return fruit;
}

// console.log( fruitMaker( 40, 29 ) );
const fruitApple = fruitMaker( 50, 20 );
console.log( fruitApple );