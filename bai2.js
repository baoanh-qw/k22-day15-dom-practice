const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Ẩn";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Hiện";
  }
});
