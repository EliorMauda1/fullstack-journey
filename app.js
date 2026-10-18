function greet(name) {
  return `Hello, ${name}!`;
}

function sayGoodbye(name) {
  return `Goodbye, ${name}!`;
}

const message = greet("Developer");
const goodbyeMessage = sayGoodbye("Developer");

console.log(message);
console.log(goodbyeMessage);
