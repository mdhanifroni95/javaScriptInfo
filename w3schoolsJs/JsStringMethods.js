let myText = "rony";
console.log(myText.length);

let sliceString = "my name is ifrat jahan";
console.log(sliceString.slice(5));
console.log(sliceString.slice(-12, -6));

let replaceString = "my name is ifrat ifrat jahan";
console.log(replaceString.replace("ifrat", "Elma"));

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log(replaceString.replace(/IFRAT/i, "Elma"));

// To replace all matches, use a regular expression with a /g flag (global match):
console.log(replaceString.replace(/ifrat/g, "Elma"));

//split
let splitString = "a,b,c,d";
let splitArr = sliceString.split(",");
console.log(splitArr[0]);

let matchString = "i am A student";
let machArr = matchString.match(/a/gi);
console.log(machArr.length + " " + machArr);

let text = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = text.matchAll(/Cats/g);
console.log(Array.from(iterator));

let startsWithStr = "Hello world, welcome to the universe.";
console.log(startsWithStr.startsWith("world", 12));
