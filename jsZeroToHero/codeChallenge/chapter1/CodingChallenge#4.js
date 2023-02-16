const bill = 275;
const tips = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log( `The bill was ${ bill }, the tip was ${ tips }, and the total value
${ bill + tips }` );