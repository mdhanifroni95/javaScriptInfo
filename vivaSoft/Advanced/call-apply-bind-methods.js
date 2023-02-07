let person = {
 name: "Md. Hanif Rony",
}

let getInfo = function ( id )
{
 return `Welcome ${ this.name }, Your roll number is ${ id }`;
}

console.log( getInfo.call( person, 99 ) );

//before call function same name have two function
// function Person ( fName, lName, age )
// {
//  this._fName = fName;
//  this._lName = lName;
//  this._age = age;
// }

// function student ( fName, lName, age, roll, section )
// {
//  this._fName = fName;
//  this._lName = lName;
//  this._age = age;
//  this._roll = roll;
//  this._section = section;
// }

// let std1 = new student( "Hanif", "Rony", 23, 21, "B" );
// console.log( std1 );

//after call function same name have two function
function Person ( fName, lName, age )
{
 this._fName = fName;
 this._lName = lName;
 this._age = age;
}

function student ( fName, lName, age, roll, section )
{
 Person.call( this, fName, lName, age )
 this._roll = roll;
 this._section = section;
}

let std1 = new student( "Hanif", "Rony", 23, 21, "B" );
console.log( std1 );

// Apply() method
function PersonApply ( fName, lName, age )
{
 this._fName = fName;
 this._lName = lName;
 this._age = age;
}

function studentApply ( fName, lName, age, roll, section )
{
 PersonApply.apply( this, [ fName, lName, age ] );
 this._roll = roll;
 this._section = section;
}

let std2 = new studentApply( "Ifrat", "Jahan", 18, 5, "Ars" );
console.log( std2 );

//if we do not know how many argument have

function PersonApplyAr ( fName, lName, age )
{
 this._fName = fName;
 this._lName = lName;
 this._age = age;
}

function studentApplyAr ( fName, lName, age, roll, section )
{
 PersonApplyAr.apply( this, arguments );
 this._roll = roll;
 this._section = section;
}

let std3 = new studentApplyAr( "jahan", "ifrat", 19, 3, "A" );
console.log( std3 );

// Bind() Method

let personBind = {
 name: "Saroar Hossain Shahan",
};

let getInfoBind = function ( id )
{
 return `Welcome ${ this.name }, Your roll number is ${ id }.`;
};

let boundInfo = getInfoBind.bind( personBind );

console.log( boundInfo( 99 ) );