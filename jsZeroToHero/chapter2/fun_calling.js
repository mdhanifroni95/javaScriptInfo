const cutFruitsPice = function ( fruits )
{
 return fruits * 4;
}

const fruitsProcess = function ( apple, orange )
{
 const applePrice = cutFruitsPice( apple );
 const orangePrice = cutFruitsPice( orange );
 const juice = `Juice with ${ applePrice } pice of Apple and also ${ orangePrice } pice of orange}`;
 return juice;
}

const juiceMaker = fruitsProcess( 2, 4 );
console.log( juiceMaker );