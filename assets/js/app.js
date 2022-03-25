const boxes = document.querySelectorAll(".box");
boxes.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.backgroundColor = "blue";
    e.textContent = "Алишер гейское имя";
  });
});
