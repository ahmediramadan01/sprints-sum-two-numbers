"use strict";

function sumNumbers() {
  let button = document.getElementById("sum-button");

  let x;
  do {
    x = Number(prompt("Enter FIRST Number:"));
  } while (typeof x !== "number");

  let y;
  do {
    y = Number(prompt("Enter SECOND Number:"));
  } while (typeof y !== "number");

  alert(x + y);
}
