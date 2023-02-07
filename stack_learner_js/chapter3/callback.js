function greeting(name) {
  return `Hello, ${name}`;
}

function processUserInput(callback) {
  const name = "this is";
  callback(name);
}

console.log(processUserInput(greeting));
