(()=>{"use strict";var e,t,n,o,l,c=document.querySelectorAll(".plan-drink"),r=document.querySelectorAll(".plan-type"),a=document.querySelectorAll(".plan-much"),s=document.querySelectorAll(".plan-grind"),d=document.querySelectorAll(".plan-often"),i=document.getElementById("drink"),m=document.getElementById("type"),u=document.getElementById("much"),y=document.getElementById("grind"),p=document.getElementById("often"),f=document.getElementById("burger-boton"),g=document.getElementById("menu"),h=document.getElementById("plan-btn"),E=document.getElementById("banner"),b=document.querySelectorAll(".close-banner");function k(f){f.forEach((g=>{g.addEventListener("click",(()=>{switch(f.forEach((e=>{e.classList.remove("choose")})),g.classList.add("choose"),f){case c:e=g.firstElementChild.textContent;break;case r:t=g.firstElementChild.textContent;break;case a:n=g.firstElementChild.textContent;break;case s:o=g.firstElementChild.textContent;break;case d:l=g.firstElementChild.textContent}i.textContent=e||"Filter",m.textContent=t||"Decaf",u.textContent=n||"250g",y.textContent=o||"Cafetiere",p.textContent=l||"Every Week"}))}))}f.onclick=()=>{"block"===g.style.display?(g.style.display="none",f.src="https://firebasestorage.googleapis.com/v0/b/woorki-ve.appspot.com/o/icon-hamburger.svg?alt=media&token=cc5191a7-2762-43ef-af85-6fa72ce027ff"):(g.style.display="block",f.src="https://firebasestorage.googleapis.com/v0/b/woorki-ve.appspot.com/o/icon-close.svg?alt=media&token=3eab5dc9-204b-4402-aaad-10ae6e004c56")},k(c),k(r),k(a),k(s),k(d);var v=document.querySelectorAll(".arrow-img"),C=document.querySelector(".first-capsule"),q=document.querySelector(".second-capsule"),x=document.querySelector(".third-capsule"),S=document.querySelector(".fourth-capsule"),B=document.querySelector(".fifth-capsule");function L(e){"none"===e.style.display?(window.innerWidth>=768?e.style.display="grid":e.style.display="block",e.parentElement.style.marginBottom="7rem"):(e.style.display="none",e.parentElement.style.marginBottom="3rem")}v.forEach((e=>{e.addEventListener("click",(()=>{"rotate(180deg)"===e.style.transform?e.style.transform="rotate(0deg)":e.style.transform="rotate(180deg)","first-arrow"===e.name?L(C):"second-capsule"===e.name?L(q):"third-capsule"===e.name?L(x):"fourth-capsule"===e.name?L(S):"fifth-capsule"===e.name&&L(B)}))})),h.addEventListener("click",(()=>{E.classList.remove("hidden"),E.classList.add("flex")})),b.forEach((e=>{e.addEventListener("click",(()=>{E.classList.remove("flex"),E.classList.add("hidden")}))}))})();