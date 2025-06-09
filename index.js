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
button.textContent =
  "Submit Number with spaces between the desired number input";
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

// odd numbers
const oddsNum = document.createElement("h3");
oddsNum.textContent = "ODDS";
document.body.appendChild(oddsNum);
const showOdds = document.createElement("ul");
document.body.appendChild(showOdds);

// even numbers
const evenNum = document.createElement("h3");
evenNum.textContent = "EVENS";
document.body.appendChild(evenNum);
const showEvens = document.createElement("ul");
document.body.appendChild(showEvens);

// reusable function to use for each box
function styleBox(box) {
  box.style.border = "1px solid #ccc";
  box.style.padding = "8px";
  box.style.width = "200px";
  box.style.minHeight = "20px";
  box.style.marginTop = "10px";
  box.style.borderRadius = "4px";
  box.style.fontFamily = "sans-serif";
  box.style.listStyle = "none";
  box.style.backgroundColor = "#fff";
}

[showBank, showOdds, showEvens].forEach(styleBox);

[showBank, showOdds, showEvens].forEach((box) => {
  box.style.display = "flex";
  box.style.flexWrap = "wrap";
  box.style.gap = "6px";
  box.style.border = "1px solid #ccc";
  box.style.padding = "8px";
  box.style.width = "200px";
  box.style.minHeight = "20px";
  box.style.marginTop = "10px";
  box.style.borderRadius = "4px";
  box.style.fontFamily = "sans-serif";
  box.style.listStyle = "none";
  box.style.backgroundColor = "#fff";
});

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
