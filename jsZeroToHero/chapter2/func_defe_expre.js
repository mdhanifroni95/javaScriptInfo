//function declaration
//difference between function declaration and function expression
// const age1 = calcAge( 1996 );
// const age2 = calcAge2( 1996 );
function calcAge ( birthDate )
{
 const age = 2023 - birthDate;
 return age;
}

const age1 = calcAge( 1996 );

//function expiration
const calcAge2 = function ( birthDate )
{
 const age = 2023 - birthDate;
 return age;
}
const age2 = calcAge2( 1996 );
console.log( age1, age2 );