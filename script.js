"use strict";

1;
let sum = 0;
let totalParagraph = document.querySelector(".sum");
const cola = document.querySelector(".cola");
const peanuts = document.querySelector(".peanuts");
const chocolate = document.querySelector(".chocolate");
const gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  sum += 2;
  totalParagraph.textContent = `total: $${sum}.00`;
});

peanuts.addEventListener("click", () => {
  sum += 3;
  totalParagraph.textContent = `total: $${sum}.00`;
});

chocolate.addEventListener("click", () => {
  sum += 4;
  totalParagraph.textContent = `total: $${sum}.00`;
});

gummies.addEventListener("click", () => {
  sum += 6;
  totalParagraph.textContent = `total: $${sum}.00`;
});

// 2.

const coinsContainer = document.querySelector(".coins-container");
const coinsForm = document.querySelector("form");

coinsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = document.querySelector("#number").value;
  const coinType = document.querySelector("#coinType").value;

  for (let i = 0; i < number; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add("coin", coinType);
    newCoin.textContent = coinType;
    coinsContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

// 3.
const lightbulb = document.querySelector(".lightbulb");
const turnOn = document.querySelector(".on");
const turnOff = document.querySelector(".off");
const toggleLight = document.querySelector(".toggle");
const powerOutage = document.querySelector(".end");

turnOn.addEventListener("click", () => {
  lightbulb.style.backgroundColor = "yellow";
});

turnOff.addEventListener("click", () => {
  lightbulb.style.backgroundColor = "darkgrey";
});

toggleLight.addEventListener("click", () => {
  const backgroundColor = lightbulb.style.backgroundColor;
  if (backgroundColor === "darkgrey") {
    lightbulb.style.backgroundColor = "yellow";
  } else {
    lightbulb.style.backgroundColor = "darkgrey";
  }
});

powerOutage.addEventListener("click", () => {
  lightBulb.remove();
  turnOn.disabled = true;
  turnOff.disabled = true;
  toggleLight.disabled = true;
  powerOutage.disabled = true;
});
