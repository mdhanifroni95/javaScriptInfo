document.querySelector( "#btn_submit" ).addEventListener( "click", () =>
{
 const emailAddress = document.querySelector( "#email_address" ).value;
 const userPassword = document.querySelector( "#user_password" ).value;
 if ( emailAddress == "eng.hanif.roni63@gmail.com" && userPassword == "Rony@elma596391" )
 {
  window.location.href = 'banking.html';
 }
} );