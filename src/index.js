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

      drinkText.textContent = drink || "Filter";
      typeText.textContent = type || "Decaf";
      muchText.textContent = much || "250g";
      grindText.textContent = grind || "Cafetiere";
      oftenText.textContent = often || "Every Week";
    });
  });
}

changeElection(planDrink);
changeElection(planType);
changeElection(planMuch);
changeElection(planGrind);
changeElection(planOften);

// Subiendo y bajando las flechas
const arrows = document.querySelectorAll(".arrow-img");
const firstCapsule = document.querySelector(".first-capsule");
const secondCapsule = document.querySelector(".second-capsule");
const thirdCapsule = document.querySelector(".third-capsule");
const fourthCapsule = document.querySelector(".fourth-capsule");
const fifthCapsule = document.querySelector(".fifth-capsule");

function handleVisibility(capsule) {
  if (capsule.style.display === "none") {
    if (window.innerWidth >= 768) {
      capsule.style.display = "grid";
    } else {
      capsule.style.display = "block";
    }
    capsule.parentElement.style.marginBottom = "7rem";
  } else {
    capsule.style.display = "none";
    capsule.parentElement.style.marginBottom = "3rem";
  }
}

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.style.transform === "rotate(180deg)") {
      arrow.style.transform = "rotate(0deg)";
    } else {
      arrow.style.transform = "rotate(180deg)";
    }

    if (arrow.name === "first-arrow") {
      handleVisibility(firstCapsule);
    } else if (arrow.name === "second-capsule") {
      handleVisibility(secondCapsule);
    } else if (arrow.name === "third-capsule") {
      handleVisibility(thirdCapsule);
    } else if (arrow.name === "fourth-capsule") {
      handleVisibility(fourthCapsule);
    } else if (arrow.name === "fifth-capsule") {
      handleVisibility(fifthCapsule);
    }

    // switch (arrow.name) {
    //   case "first-arrow":
    //     break;
    //   case "second-capsule":
    //     handleVisibility(secondCapsule);
    //     break;
    //   case "third-capsule":
    //     handleVisibility(thirdCapsule);
    //   case "cuarta":
    //     handleVisibility(fourthCapsule);
    // }
  });
});
