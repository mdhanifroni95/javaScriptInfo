const isFriendFun = function ( friends )
{
 if ( Array.isArray( friends ) )
 {
  let mage = friends[ 0 ];
  for ( const friend of friends )
  {
   if ( friend.length > mage.length )
   {
    mage = friend;
   }
  }
  return mage;
 } else
 {
  return "Please provide an array";
 }

}

const friends = [ "rony", "al jaber", "akib shidiki apu" ];
const largestFriend = isFriendFun( friends );
console.log( largestFriend );

if ( friends.indexOf( "kfgj" ) != -1 )
{
 console.log( "Rony exists" );
} else
{
 console.log( "Rony does not" );
}

if ( friends.includes( "k" ) )
{
 console.log( "k exists" );
} else
{
 console.log( "k does not" );
}