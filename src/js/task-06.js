const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputChange);

function onInputChange(e) {
  if (e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
    inputEl.classList.add("valid");
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
  }

  if (!e.currentTarget.value.length) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
  }
}
