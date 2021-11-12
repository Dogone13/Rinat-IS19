const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".n");
menuButton.addEventListener("click", () => {
    console.log("Кликнули по меню");
    menu.classList.toggle("is-open");
});