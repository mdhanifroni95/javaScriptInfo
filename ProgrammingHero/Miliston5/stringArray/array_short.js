const num = [ 4, 7, 2, 5, 9, 1 ];
const shortNum = num.sort();
console.log( shortNum );

const person = [ "rony", "eilma", "mim", "Rohim" ];
const sortPerson = person.sort();
console.log( sortPerson );
const points = [ 40, 100, 1, 5, 25, 10 ];
const sortPoints = points.sort( ( a, b ) =>
{
 return a - b;
} );
console.log( sortPoints );