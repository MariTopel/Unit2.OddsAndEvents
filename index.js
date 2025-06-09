const inputNumber = document.createElement("input");

inputNumber.setAttribute("type", "number");

inputNumber.id = "myNumberInput";
inputNumber.setAttribute("placeholder", "type numbers here");

document.body.appendChild(inputNumber);

const button = document.createElement("button");
button.textContent = "Submit Number";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const number = parseFloat(inputNumber.value);

  if (isNaN(number)) {
    alert("not a valid number");
  } else {
    alert(`You entered ${number}`);
  }
});
