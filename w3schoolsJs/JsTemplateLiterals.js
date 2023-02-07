let firstName = "John";
let lastName = " Doe";
let fullName = `Welcome ${firstName} And ${lastName}`;

console.log(fullName);

let price = 10;
let vat = 0.25;

let total = `Total: ${(price * (1 + vat)).toFixed(2)}`;
console.log(total);

// HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
console.log(html);
