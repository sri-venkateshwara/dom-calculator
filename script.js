document.addEventListener("DOMContentLoaded", function () {
  const calculator = document.createElement("div");
  calculator.className = "calculator";

  const display = document.createElement("input");
  display.id = "display";
  display.type = "text";
  display.readOnly = true;
  display.style.gridColumn = "span 4";
  calculator.appendChild(display);

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "Del", "+", "="
  ];

  buttons.forEach(buttonText => {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.addEventListener("click", function () {
      handleButtonClick(buttonText);
    });
    if (buttonText === "=") {
      button.className = "equals-button";
    } else if (buttonText === "Del") {
      button.className = "delete-button";
    }
    calculator.appendChild(button);
  });

  document.body.appendChild(calculator);
});

let currentValue = "";

function handleButtonClick(buttonText) {
  const display = document.getElementById("display");

  switch (buttonText) {
    case "C":
      currentValue = "";
      break;
    case "Del":
      currentValue = currentValue.slice(0, -1);
      break;
    case "=":
      try {
        currentValue = eval(currentValue);
      } catch (error) {
        currentValue = "Error";
      }
      break;
    default:
      if (currentValue === "Error") {
        currentValue = buttonText;
      } else {
        currentValue += buttonText;
      }
  }

  display.value = currentValue;
}
