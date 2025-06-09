const inputNumber = document.createElement("input");

inputNumber.setAttribute("type", "number");

inputNumber.id = "myNumberInput";
inputNumber.setAttribute("placeholder", "type numbers here");

document.body.appendChild(inputNumber);

inputNumber.addEventListener("change", (num) => {
  const number = parseFloat(inputNumber.value);
  alert(`User entered ${number}`);
});
