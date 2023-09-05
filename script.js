const allBtns = [...document.getElementsByClassName("btn")];

let strTodisplay = "";
const displayele = document.querySelector(".display");
console.log(displayele);

const operators = ["%"];

allBtns.map((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      strTodisplay = "";
      disply(strTodisplay);
      return;
    }

    if (val === "C") {
      strTodisplay = strTodisplay.slice(0, -1);
      return disply(strTodisplay);
    }

    if (val === "=") {
      //   let result = eval(strTodisplay).toString();

      return total;
    }

    strTodisplay += val;
    disply(strTodisplay);
  });
});

const disply = (str) => {
  displayele.innerText = str || "0.00";
};

const total = () => {
  const ttl = eval(strTodisplay);

  disply(ttl);
};
