const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (!email || !password) {
    alert("Всі поля форми мають бути заповнені");
  } else {
    createObj(email, password);
  }
  e.currentTarget.reset();
}

function createObj(email, password) {
  const obj = { email, password };
  console.log(obj);
}

// FormData variant

// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   const email = e.currentTarget.elements.email.value;
//   const password = e.currentTarget.elements.password.value;

//   if (!email || !password) {
//     alert("Всі поля форми мають бути заповнені");
//   } else {
//     const formData = new FormData(e.currentTarget);

//     formData.forEach((password, email) => console.log(email, password));
//   }

//   e.currentTarget.reset();
// }
