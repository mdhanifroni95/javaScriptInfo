function sum(a, b) {
  return a + b;
}
let result = `5+6=${sum(5, 6)}`;
console.log(result);
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList);
// str.indexOf;
let str = "Widget with id";
let str1 = str.indexOf("Widget");
let str2 = str.indexOf("widget");
let str3 = str.indexOf("id");
let str4 = str.indexOf("Widget");
let str5 = str.indexOf("id");
let str6 = str.indexOf("Widget");
let str7 = str.indexOf("et");
console.log(str7);

// If we’re interested in all occurrences, we can run indexOf in a loop
let target = "as";
let pos = 0;
let string = "As sly as a fox, as strong as an ox";
while (true) {
  let foundString = string.indexOf(target, pos);
  if (foundString == -1) break;
  console.log(`Found at ${foundString}`);
  pos = foundString + 1;
}

// The same algorithm can be layed out shorter
let string1 = "As sly as a fox, as strong as an ox";
let target1 = "as";
let pos1 = -1;
while ((pos1 = string1.indexOf(target1, pos1 + 1)) != -1) {
  console.log(`Found at ${pos1}`);
}
// console.log("a" > "Z");
console.log("a".codePointAt(0));
console.log(String.fromCodePoint(90));
