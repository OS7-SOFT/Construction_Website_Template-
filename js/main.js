//Open  Color-panel
let colorPanel = document.querySelector(".color-panel");

document.querySelector(".toggle-setting").addEventListener("click", () => {
  colorPanel.classList.toggle("open-panel");
});

//Change Color

if (window.localStorage.color) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.color
  );
}

let colors = document.querySelectorAll(".segment ul li");

colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    colors.forEach((li) => {
      li.classList.remove("active");
    });
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    e.target.classList.add("active");
    window.localStorage.setItem("color", e.target.dataset.color);
  });
});
