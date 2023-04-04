const sumFun = function ( num1, num2 )
{
 let result = 0;
 for ( const num of arguments )
 {
  result += num;
 }
 // let result = num1 + num2;
 return result;
}

const twoSum = sumFun( 45, 23, 53, 34, 346 );
console.log( twoSum );