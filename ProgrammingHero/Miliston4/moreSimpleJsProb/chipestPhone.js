const phones = [
 { name: "Apple", "price": 10000, "model": "apple1 14 Pro" },
 { name: "oppo", price: 3400, "model": "a16" },
 { name: "Walton", price: 560, "model": "r15" }
]

let chipest = phones[ 0 ]
for ( const item_phone of phones )
{
 if ( item_phone.price < chipest.price )
 {
  chipest = item_phone;
 }
}
console.log( chipest )