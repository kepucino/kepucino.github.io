const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);


// input fields

const clearButton = document.querySelector('.trailing.clear');
const form20 = document.querySelector("#form20");

const showElement = (element) => {
  if (element.classList.contains('d-none')) {
    element.classList.remove('d-none');
  }
}

const hideElement = (element) => {
  if (!element.classList.contains('d-none')) {
    element.classList.add('d-none');
  }
}

const clearInput = (button) => {
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("blur", false, true);

    const input = button.parentNode.querySelector(".form-icon-trailing");
    input.value = null;
    input.dispatchEvent(evt);
    hideElement(button);
}

clearButton.addEventListener('click', () => clearInput(clearButton));
clearButton.addEventListener('keydown', (event) => {
  if (event.code === "Enter") {
    event.preventDefault();
    clearButton.click();
  }
});

form20.addEventListener('input', () => {
  if (form20.value !== null) {
    showElement(clearButton);
  }
})