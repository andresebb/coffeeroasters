import "./assets/styles/styles.css";

const planDrink = document.querySelectorAll(".plan-drink");
const planType = document.querySelectorAll(".plan-type");
const planMuch = document.querySelectorAll(".plan-much");
const planGrind = document.querySelectorAll(".plan-grind");
const planOften = document.querySelectorAll(".plan-often");

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

//Opciones Disponibles
const drinkText = document.getElementById("drink");
const typeText = document.getElementById("type");
const muchText = document.getElementById("much");
const grindText = document.getElementById("grind");
const oftenText = document.getElementById("often");
let drink;
let type;
let much;
let grind;
let often;

// Cambian color en una lista al elegir una opcion
function changeElection(list) {
  list.forEach((item) => {
    item.addEventListener("click", () => {
      list.forEach((item) => {
        item.classList.remove("choose");
      });
      item.classList.add("choose");

      switch (list) {
        case planDrink:
          drink = item.firstElementChild.textContent;
          break;
        case planType:
          type = item.firstElementChild.textContent;
          break;
        case planMuch:
          much = item.firstElementChild.textContent;
          break;
        case planGrind:
          grind = item.firstElementChild.textContent;
          break;
        case planOften:
          often = item.firstElementChild.textContent;
      }

      drinkText.textContent = drink;
      typeText.textContent = type;
      muchText.textContent = much;
      grindText.textContent = grind;
      oftenText.textContent = often;
    });
  });
}

changeElection(planDrink);

changeElection(planType);

changeElection(planMuch);

changeElection(planGrind);

changeElection(planOften);
