const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

let counterValue = 0;

function onDecrementBtnClick() {
  counterValue -= 1;
  changeCounterValueUi();
}

function onIncrementBtnClick() {
  counterValue += 1;
  changeCounterValueUi();
}

function changeCounterValueUi() {
  valueEl.textContent = counterValue;
}
