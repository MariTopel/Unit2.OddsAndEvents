// input for numbers
const inputNumber = document.createElement("input");
inputNumber.setAttribute("type", "text");
inputNumber.id = "myNumberInput";
inputNumber.setAttribute(
  "placeholder",
  "type numbers here with a space between the numbers. no commas."
);
document.body.appendChild(inputNumber);

// button for click to input numbers
const button = document.createElement("button");
button.textContent = "Submit Number with spaces";
document.body.appendChild(button);

// sort 1 button
const sort1 = document.createElement("button");
sort1.textContent = "Sort 1";
document.body.appendChild(sort1);

// making the bank
const bank = document.createElement("h3");
bank.textContent = "Banked";
document.body.appendChild(bank);
const showBank = document.createElement("ul");
document.body.appendChild(showBank);

// added styling to make the box around the numbers
showBank.style.border = "1px solid #ccc";
showBank.style.padding = "8px";
showBank.style.width = "200px";
showBank.style.minHeight = "20px";
showBank.style.marginTop = "10px";
showBank.style.borderRadius = "4px";
showBank.style.fontFamily = "sans-serif";
showBank.style.listStyle = "none";
showBank.style.backgroundColor = "#fff";

const bankList = [];

// button with event listener to execute commands
button.addEventListener("click", () => {
  const textNumbers = inputNumber.value;
  const nums = textNumbers.split(/\s+/);
  const realNums = nums
    .map((part) => parseFloat(part))
    .filter((num) => !isNaN(num));

  if (realNums.length === 0) {
    alert("no numbers entered");
    return;
  }

  realNums.forEach((num) => {
    bankList.push(num);

    const listItem = document.createElement("li");
    listItem.textContent = num;
    showBank.appendChild(listItem);
  });

  inputNumber.value = "";
});
