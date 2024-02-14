const popup = document.getElementById("popup-body");
const closeBtn = document.getElementById("popup__close-btn");
const popupStart = document.getElementById("popup-start");
const mainBody = document.getElementById("main-body");

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  mainBody.style.overflow = "visible";
});

popupStart.addEventListener("click", () => {
  popup.style.display = "flex";
  mainBody.style.overflow = "hidden";
});
