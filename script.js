const allBtns = [...document.getElementsByClassName("btn")];

let strToDisplay = "";

const displaElm = document.querySelector(".display");
console.log(displaElm);

const operators = ["%", "/", "*", "+", "-"];
let Operator = "";
const audio = new Audio("./audioo.wav");

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    displaElm.style.background = "";
    displaElm.style.color = "";
    displaElm.classList.remove("prank");

    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      disply(strToDisplay);
      return;
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return disply(strToDisplay);
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (operators.includes(val)) {
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    if (val === ".") {
      const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);
      const lastNumberSet = strToDisplay.slice(indexOfLastOperator);

      if (lastNumberSet.includes(".")) {
        return;
      }

      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }
    strToDisplay += val;
    disply(strToDisplay);
  });
});

const disply = (str) => {
  displaElm.innerText = str || "0.00";
};

const total = () => {
  const extraVal = randomNumber();
  if (extraVal) {
    audio.play();
    displaElm.style.background = "red";
    displaElm.style.color = "white";
    displaElm.classList.add("prank");
  }
  const ttl = eval(strToDisplay) + extraVal;
  disply(ttl);
  strToDisplay = ttl.toString();
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10);
  return num < 4 ? num : 0;
};
