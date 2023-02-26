const jonObj = {
 firstName: "Hanif",
 lastName: "Rony",
 birthYear: 1996,
 friend: [ "faisal", "jaber", "Akib" ],
 hasDrivingLicenses: false,
 job: "Associate software Engineer",

 checkAge: function ()
 {
  const age = 2023 - this.birthYear;
  return age;
 },

 getSummary: function ()
 {
  return `${ this.firstName } ${ this.lastName } is a ${ this.checkAge() } -years old ${ this.job } and has ${ this.hasDrivingLicenses ? "a" : "no" } driving licenses`
 }
};

//dot notation
// console.log( jonObj.firstName );

//brackets notation
// console.log( jonObj[ 'firstName' ] )
// console.log( jonObj[ 'lastName' ] )

// const nameKey = "Name";
// console.log( jonObj[ 'first' + nameKey ] )
// console.log( jonObj[ 'last' + nameKey ] )

//dot notation
console.log( jonObj.checkAge() );
console.log( jonObj.getSummary() );

//brackets notation
// console.log( jonObj[ 'checkAge' ]( 1996 ) );