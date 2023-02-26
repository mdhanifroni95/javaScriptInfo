const checkAge = ( birthDate, fullName ) =>
{
 const checkAge = 2023 - birthDate;
 const checkRet = 65 - checkAge;
 return `${ fullName } Retired after ${ checkRet } years`;
};

const age1 = checkAge( 1996, 'Rony' );
console.log( age1 );