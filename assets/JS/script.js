const project1El = document.getElementById('project1');
const project2El = document.getElementById('project2');
const project3El = document.getElementById('project3');
const project4El = document.getElementById('project4');


project1El.addEventListener("click", function() {
    window.open("https://jgault87.github.io/weather-machine/");
});

project2El.addEventListener("click", function() {
    window.open("https://github.com/jgault87/city-scapes");
});

project3El.addEventListener("click", function() {
    window.open("https://jgault87.github.io/my_destiny_planner/");
});

project4El.addEventListener("click", function() {
  window.open("https://github.com/jgault87/generateReadYou");
});

function openNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
