const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "Chế độ sáng";
  } else {
    themeBtn.textContent = "Chế độ tối";
  }
});
