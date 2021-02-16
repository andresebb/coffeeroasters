import "./assets/styles/styles.css";

const openBurgerMenu =
  "https://firebasestorage.googleapis.com/v0/b/woorki-ve.appspot.com/o/icon-hamburger.svg?alt=media&token=cc5191a7-2762-43ef-af85-6fa72ce027ff";
const closeBurgerMenu =
  "https://firebasestorage.googleapis.com/v0/b/woorki-ve.appspot.com/o/icon-close.svg?alt=media&token=3eab5dc9-204b-4402-aaad-10ae6e004c56";

const button = document.getElementById("burger-boton");
const menu = document.getElementById("menu");

button.onclick = () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    button.src = openBurgerMenu;
  } else {
    menu.style.display = "block";
    button.src = closeBurgerMenu;
  }
};
