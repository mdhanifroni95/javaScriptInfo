const num = [ 3, 5, 2, 7, 9, 34, 22, 90 ]
const sliceNum = num.slice( 3, 7 );
const sliceNum2 = num.slice( 4, 6 );
//we are slice in an array array not change 
console.log( sliceNum );
console.log( sliceNum2 );
console.log( num );

const spliceNum = num.splice( 2, 1 );
console.log( spliceNum );
console.log( num );

const spliceNum2 = num.splice( 3, 2 );
console.log( sliceNum2 );
console.log( num );

