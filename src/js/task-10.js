const controlsEl = document.querySelector("#controls");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", destroyBoxes);

function onCreateBtnClick() {
  const inputValue = Number(controlsEl.firstElementChild.value);
  createBoxes(inputValue);
}

function createBoxes(amount) {
  let arr = [];

  for (let i = 0, j = 30; i < amount; i += 1, j += 10) {
    const randomColor = getRandomHexColor();
    const markup = `<div style="width: ${j}px; height: ${j}px; background-color: ${randomColor};">ok</div>`;
    arr.push(markup);
  }

  boxesEl.insertAdjacentHTML("beforeend", arr.join(""));
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
