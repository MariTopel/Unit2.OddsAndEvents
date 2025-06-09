// input for numbers
const inputNumber = document.createElement("input");
inputNumber.setAttribute("type", "number");
inputNumber.id = "myNumberInput";
inputNumber.setAttribute("placeholder", "type numbers here");
document.body.appendChild(inputNumber);

// button for click to input numbers
const button = document.createElement("button");
button.textContent = "Submit Number";
document.body.appendChild(button);

// making the bank
const bank = document.createElement("h3");
bank.textContent = "Banked";
document.body.appendChild(bank);
const showBank = document.createElement("ul");
document.body.appendChild(showBank);

const bankList = [];

button.addEventListener("click", () => {
  const number = parseFloat(inputNumber.value);

  if (isNaN(number)) {
    alert("not a valid number");
    return;
  }

  bankList.push(number);

  const listItem = document.createElement("li");
  listItem.textContent = number;
  showBank.appendChild(listItem);

  inputNumber.value = "";
});
