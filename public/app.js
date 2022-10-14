const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const cointainer = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  cointainer.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  cointainer.classList.remove("sign-up-mode");
});
