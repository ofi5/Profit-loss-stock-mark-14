let CP = document.querySelector("#cp");
let IP = document.querySelector("#ip");
let QB = document.querySelector("#qb");
let BTN = document.querySelector("#btn");
let RESULT = document.querySelector("#result");
let msg;
let col;

const stockValueCalculator = (current, quan, intitialVal) => {
  if (current.value === "" || quan.value === "" || intitialVal.value === "") {
    RESULT.innerHTML = "Please Enter all data";
  } else {


    if (current.value - intitialVal.value > 0) {
      console.log(current.value);
      console.log(intitialVal.value);

      let profit = (current.value - intitialVal.value) * quan.value;
      let profitPerc = (profit / (intitialVal.value * quan.value)) * 100;

      console.log(profit);

      msg = `You have a profit of ${profit} and ${profitPerc.toFixed(2)} percent`;
      col = "green";

    } else if (current.value - intitialVal.value < 0 ) {
      console.log(current.value);
      console.log(intitialVal.value);

      let loss = (intitialVal.value - current.value) * quan.value;
      let lossPerc = (loss / (intitialVal.value * quan.value)) * 100;

      msg = `You have a loss of ${loss} and ${lossPerc.toFixed(2)} percent`;
      col = "darkred";
    } else {
      console.log(current.value);
      console.log(intitialVal.value);
      msg = "No loss no profit";
      col = "Blue";
      console.log("constant");
    }

    RESULT.innerHTML = `<p style=color:${col}>${msg}</p>`;
  }
};

BTN.addEventListener("click", () => stockValueCalculator(CP, QB, IP));
