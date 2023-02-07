// hostedFun();

// function hostedFun ()
// {
//   console.log( "Hosted Function" );
// }

// var hostedFun = function ()
// {
//   console.log( "Hosted Function" );
// }

var hostingInto = "Hi I am Hosting Into one";

function hostingFun ()
{
  console.log( hostingInto );
  var hostingInto = "Hi I am Hosting into two";
  console.log( hostingInto );
}

hostingFun();
