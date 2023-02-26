// let a = [ "apple", "orange", "Pineapple" ];

// console.log( a );
//add elements to the array

//add element last index of array
// a.push( "banana" );
// console.log( a );

//add element first index of array
// a.unshift( "mango" );
// console.log( a );

//remove element an array

//remove element last index of array
// a.pop( a );
// console.log( a );

//remove element first index of array
// a.shift();
// console.log( a );

//find element position of an array
// console.log( a.indexOf( "Pineapple" ) );

//included
// console.log( a.includes( "Pineapple" ) );

//JavaScript Array copyWithin() --The copyWithin() method copies array elements to another position in the array --The copyWithin() method overwrites the existing values --The copyWithin() method does not add items to the array --array.copyWithin(target, start, end)
// const a = [ "Banana", "Orange", "Apple", "Mango", "Kiwi" ];
// console.log( a.copyWithin( 2, 0, 2 ) );

//JavaScript Array valueOf() --The valueOf() method returns the array itself. --The valueOf() method does not change the original array. --fruits.valueOf() returns the same as fruits
// const a = [ "Banana", "Orange", "Apple", "Mango", "Kiwi" ];
// const aValue = a.valueOf();
// console.log( aValue )

//JavaScript Array splice() --The splice() method adds and/or removes array elements. --The splice() method overwrites the original array. --array.splice(index, howmany, item1, ....., itemX)
const a = [ "Banana", "Orange", "Apple", "Mango" ];
a.splice( 2, 2, "Lemon", "Kiwi" );
console.log( a );

