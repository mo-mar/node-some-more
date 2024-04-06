const alertBtn = document.querySelector("[data-alert-btn]");

if (alertBtn) {
  alertBtn.addEventListener("click", () => {
    alert("A little bit!");
  });
}
