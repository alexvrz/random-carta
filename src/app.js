/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  //setInterval(() => {
  //document.querySelector(".card").classList.add(generateRandomSuit());
  //document.querySelector(".card").classList.remove(generateRandomSuit());
  //document.querySelector(".card").innerHTML = generateRandomNumber();
  //}, 1000);
  //setInterval(() => {
  //document.querySelector(".card").classList.add(generateRandomSuit());
  //}, 1000);
  //setTimeout(() => {
  // document.querySelector(".card").classList.add(generateRandomSuit());
  //document.querySelector(".card").classList.remove(generateRandomSuit());
  // document.querySelector(".card").innerHTML = generateRandomNumber();
  // }, 1000); no pude =(
};
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  let indexNumb = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumb];
};
let generateRandomSuit = () => {
  let suit = ["diamond", "heart", "club", "spade"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
