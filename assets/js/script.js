document.addEventListener("DOMContentLoaded", function () {
  const open = document.getElementById("menu-open-btn");
  const close = document.getElementById("menu-close-btn");
  const nav = document.getElementById("nav-container");

  open.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  close.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
