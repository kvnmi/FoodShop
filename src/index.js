const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) return menu.classList.remove("hidden");

  menu.classList.add("hidden");
});
