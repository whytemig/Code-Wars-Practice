const modalBtn = document.querySelector(".btn");
const modalDisplay = document.querySelector(".modal-info");
const modalClose = document.querySelector(".container");
const modalCloseBtn = document.querySelector(".x-close");

modalBtn.addEventListener("click", (e) => {
  modalDisplay.style.display = "block";
});

modalClose.addEventListener("click", (e) => {
  if (e.target.className === "container") {
    modalDisplay.style.display = "none";
  }
});
modalCloseBtn.addEventListener("click", () => {
  modalDisplay.style.display = "none";
});
