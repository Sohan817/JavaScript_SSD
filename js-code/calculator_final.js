let calculation = "";
displayCal();
function updateCalculatio(val) {
  calculation += val;
  displayCal();
}
function displayCal() {
  document.querySelector(".show-result").innerHTML = `${calculation}`;
}
