const inputEl = document.querySelector("#name-input");
const greetingEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(e) {
  greetingEl.textContent = e.currentTarget.value || "Anonymous";
}
