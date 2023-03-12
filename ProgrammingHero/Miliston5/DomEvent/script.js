//second way event
const read = function ()
{
 document.body.style.backgroundColor = "red";
}

//third way event
const setGreen = document.getElementById( "setGreen" );
const setGreenFun = function ()
{
 document.body.style.backgroundColor = "Green";
}
setGreen.onclick = setGreenFun;


//forth way event
const getGreenYellow = document.getElementById( "setGreenYellow" );

// if function don't have name this called anonymous function
getGreenYellow.onclick = function ()
{
 document.body.style.backgroundColor = "GreenYellow";
}

// five way set event handler addEventListener
const getRoyalBlue = document.querySelector( "#setRoyalBlue" );
getRoyalBlue.addEventListener( 'click', setRoyalBlueFun );
function setRoyalBlueFun ()
{
 document.body.style.backgroundColor = "RoyalBlue";
}

// six way set event handler addEventListener
const getGold = document.querySelector( "#setGold" );
getGold.addEventListener( 'click', function ()
{
 document.body.style.backgroundColor = "Gold";
} )

//seven way set event handler addEventListener
const getHotPink = document.querySelector( "#setHotPink" );
//use arrow function
getHotPink.addEventListener( 'click', () =>
{
 document.body.style.backgroundColor = "HotPink";
} )

//eight way set event handler addEventListener
document.querySelector( '#setLawnGreen' ).addEventListener( 'click', () =>
{
 document.body.style.backgroundColor = "LawnGreen";
} );