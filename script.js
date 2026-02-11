const display = document.getElementById("display");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let lastExpression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      lastExpression = "";
      display.value = "";
      history.textContent = "";
      return;
    }

    if (value === "=") {
      try {
        const result = eval(currentInput);
        lastExpression = currentInput + " =";
        history.textContent = lastExpression;
        currentInput = result.toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
      return;
    }

    if (value === "±") {
      if (currentInput) {
        if (currentInput.startsWith("-")) {
          currentInput = currentInput.slice(1);
        } else {
          currentInput = "-" + currentInput;
        }
        display.value = currentInput;
      }
      return;
    }

    if (value === "%") {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
      }
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});
