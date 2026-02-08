const testButton = document.querySelector(".js-button");
console.log(testButton.classList.contains("js-button"));

// function gamingButton() {
//   const gamingButton = document.querySelector(".gaming-button");
//   if (gamingButton.classList.contains("is-toggle")) {
//     gamingButton.classList.remove("is-toggle");
//   } else {
//     gamingButton.classList.add("is-toggle");
//   }
// }
// function musicButton() {
//   const gamingButton = document.querySelector(".music-button");
//   if (gamingButton.classList.contains("is-toggle")) {
//     gamingButton.classList.remove("is-toggle");
//   } else {
//     gamingButton.classList.add("is-toggle");
//   }
// }
// function techButton(selectClass) {
//   const gamingButton = document.querySelector(".tech-button");
//   if (gamingButton.classList.contains("is-toggle")) {
//     gamingButton.classList.remove("is-toggle");
//   } else {
//     gamingButton.classList.add("is-toggle");
//   }
// }

function gmtButton(selectClass) {
  const currentButton = document.querySelector(selectClass);
  if (!currentButton.classList.contains("is-toggle")) {
    turnoffPreviusButton();
    currentButton.classList.add("is-toggle");
  } else {
    currentButton.classList.remove("is-toggle");
  }
}

function turnoffPreviusButton() {
  const previousButton = document.querySelector(".is-toggle");
  if (previousButton) {
    previousButton.classList.remove("is-toggle");
  }
}

//Calculate shipping cost

function calculateCost() {
  let inputValue = document.querySelector(".js-cost").value;
  inputValue = Number(inputValue);
  if (inputValue < 0) {
    document.querySelector(".js-cost-result").innerHTML =
      `Error: Cost can not be less than $0 `;
    document.querySelector(".js-cost-result").classList.add("error-button");
  } else {
    if (inputValue < 40) {
      document.querySelector(".js-cost-result").innerHTML =
        `$${inputValue + 10}`;
      document
        .querySelector(".js-cost-result")
        .classList.remove("error-button");
    } else {
      document.querySelector(".js-cost-result").innerHTML = `$${inputValue}`;
      document
        .querySelector(".js-cost-result")
        .classList.remove("error-button");
    }
  }
}

function calculationOnKeyDown(event) {
  if (event.key === "Enter") {
    calculateCost();
  }
}
