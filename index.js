// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    update()
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  function update() {
    document.querySelector("#text").textContent = "This is really cool!";
  }