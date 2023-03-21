
document.querySelector( "#deposit_button" ).addEventListener( 'click', () =>
{
 //deposit inputed
 const depositInput = document.querySelector( "#deposit_input" );

 //deposit Amount form user
 const depositAmount = parseFloat( depositInput.value );

 const depositTotal = document.querySelector( "#depositTotal" );

 const previousAmount = parseFloat( depositTotal.innerText );

 // console.log( previousAmount, depositAmount );

 //update blanched amount
 const updateDepositAmount = parseFloat( previousAmount + depositAmount );

 depositTotal.innerText = updateDepositAmount;

 depositInput.value = '';
 // console.log( previousAmount );

 //Blanche 
 const blancheTotal = document.querySelector( "#blancheTotal" );

 const previousBlanche = parseFloat( blancheTotal.innerText );

 const updateBlanche = previousBlanche + updateDepositAmount;

 //update blanche

 blancheTotal.innerText = updateBlanche;

} );
