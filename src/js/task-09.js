const textEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", onBtnClick);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
}
