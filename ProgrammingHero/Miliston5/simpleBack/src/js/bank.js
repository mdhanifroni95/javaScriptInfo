const getInputValue = function ( inputValue )
{ 
 //deposit inputed
 const InputVal = document.querySelector( inputValue );

 //deposit Amount form user
 const inputAmount = parseFloat( InputVal.value );

 InputVal.value = '';
 return inputAmount;
}

const getPrevValue = function ( inputPrev )
{
 const Total = document.querySelector( inputPrev );

 const previousAmount = parseFloat( Total.innerText );
 return previousAmount;
}

document.querySelector( "#deposit_button" ).addEventListener( 'click', () =>
{
 const depositAmount = getInputValue( "#deposit_input" );

 //previous amount
 const previousAmount = getPrevValue( "#depositTotal" )

 //update blanched amount
 const updateDepositAmount = parseFloat( previousAmount + depositAmount );

 depositTotal.innerText = updateDepositAmount;
 // console.log( previousAmount );

 //Blanche 
 const previousBlanche = getPrevValue( "#blancheTotal" );

 const updateBlanche = previousBlanche + updateDepositAmount;

 //update blanche

 blancheTotal.innerText = updateBlanche;

} );

document.querySelector( "#windrow_button" ).addEventListener( 'click', () =>
{
 //windrow value
 const windrowVal = getInputValue( "#windrow_input" )

 //windrow amount from user
 // const windrowTotal = document.getElementById( "windrowTotal" );
 const PreWindrowValue = getPrevValue( "#windrowTotal" );

 const updateWindrow = parseFloat( PreWindrowValue + windrowVal );
 windrowTotal.innerText = updateWindrow;

 //update blanch
 const prevBlanche = getPrevValue( "#blancheTotal" );

 const updateBlanche = prevBlanche - updateWindrow;
 blancheTotal.innerText = updateBlanche;

} )
