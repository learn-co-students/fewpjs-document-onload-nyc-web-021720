// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has been loaded");
  document.querySelector("#text").innerHTML = "This is really cool.";
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
