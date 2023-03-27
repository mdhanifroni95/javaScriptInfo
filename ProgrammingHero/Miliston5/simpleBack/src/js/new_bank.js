const getInputVal = function ( inputText )
{
 const input = document.querySelector( inputText );
 const inputVal = parseFloat( input.value );
 input.value = '';
 return inputVal;
}

const updateDepositWindow = function ( input, amount )
{
 const total = document.querySelector( input );
 const prevAmount = parseFloat( total.innerText );

 const totalAmount = parseFloat( amount + prevAmount );
 total.innerText = totalAmount;

 const blanchTotal = document.querySelector( "#blancheTotal" );
 const prevBlanch = parseFloat( blanchTotal.innerText );

 let updateBlanch;
 if ( total === document.querySelector( "#depositTotal" ) )
 {
  updateBlanch = parseFloat( prevBlanch + totalAmount );
 } else
 {
  updateBlanch = parseFloat( prevBlanch - totalAmount );
 }

 blanchTotal.innerText = updateBlanch;
}
document.querySelector( "#deposit_button" ).addEventListener( 'click', () =>
{
 const depositInput = getInputVal( "#deposit_input" );

 updateDepositWindow( "#depositTotal", depositInput );
} )

document.getElementById( "windrow_button" ).addEventListener( "click", () =>
{
 const windrowInput = getInputVal( "#windrow_input" );

 updateDepositWindow( "#windrowTotal", windrowInput );

} )