function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("Enter the number of sides on the dice:"));
const list = document.getElementById("results");
let roll;

do {
  roll = rollDice(sides);
  const li = document.createElement("li");
  li.textContent = `You rolled: ${roll}`;
  list.appendChild(li);
} while (roll !== sides);
