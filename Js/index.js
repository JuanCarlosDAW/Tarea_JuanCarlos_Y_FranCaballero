const menuBtn = document.getElementById("menuBtn");
const menuContent = document.getElementById("menuContent");

menuBtn.addEventListener("click", () => {
  if (menuContent.style.display === "block") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "block";
  }
});

window.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !menuContent.contains(e.target)) {
    menuContent.style.display = "none";
  }
});