
const modal = document.getElementById('project-modal');
const projectHead = document.getElementById('project-header');
const projectBody = document.getElementById('project-desc');



document.getElementById('project1').addEventListener("click", () => {
    
    modal.style.display='block';
    projectHead.innerText = "Weather Machine";
    projectBody.innerHTML = `This project is a weather dashboard that calls the One Call open weather 
    API and dynamically generates weather forecast/UVI index data/saves previous searches in local browser storage. <br>
    <img src="./assets/images/weatherbanner.png" class="w3-image w3-margin w3-round" <br>
    <a href="https://github.com/jgault87/weather-machine" class="w3-button w3-margin w3-teal">Github repo</a>   <a href="https://jgault87.github.io/weather-machine/" class="w3-button w3-margin w3-teal">Deployed Page</a>`;
    
    
});

// document.getElementById('project2').addEventListener("click", () => {
//   modal.style.display='block';
//   projectHead.innerText = "CityScapes";
//   projectBody.innerHTML = `This project is a weather dashboard that calls the One Call open weather 
//   API and dynamically generates weather forecast/UVI index data/saves previous searches in local browser storage. <br>
//   <a href="https://github.com/jgault87/weather-machine" class="w3-button w3-margin w3-teal">Github repo</a>   <a href="https://jgault87.github.io/weather-machine/" class="w3-button w3-margin w3-teal">Deployed Page</a>`;
  
// });

document.getElementById('project3').addEventListener("click", () => {
    window.open("https://jgault87.github.io/my_destiny_planner/");
});

document.getElementById('project4').addEventListener("click", () => {
  window.open("https://github.com/jgault87/generateReadYou");
});

document.getElementById('project5').addEventListener("click", () => {
    
  modal.style.display='block';
  projectHead.innerText = "Teacup Yorkies (project lead)";
  projectBody.innerHTML = `This application is a collaboratively developed social media application using the full-stack MVC paradigm. 
  The concept is a social media website for pet-oriented content and showcasing a user's pet with pictures, traits and personality. It's also a place for interacting with other pet owners. We like to think of it as a twitter-like website for our furry friends. Read more about the technologies used on Github and try it out on Heroku! <br>
  <img src="./assets/images/teacup.jpg" class="w3-image w3-margin w3-round" <br>
  <a href="https://github.com/Boopdid/teacup-yorkies" class="w3-button w3-margin w3-teal">Github repo</a>   <a href="https://howler-forpets.herokuapp.com/" class="w3-button w3-margin w3-teal">Deployed Page</a>`;
  
  
});

document.getElementById('project6').addEventListener("click", () => {
    
  modal.style.display='block';
  projectHead.innerText = "Blog Buster (Full-stack application)";
  projectBody.innerHTML = `this project is my first endeavor into creating a full-stack application that makes use of front end, back end and database techs that culminate in a tech blog website that verifies user credentials, uses cookies and session data to handle user queries and UI is affected by user states. It uses bcrypt hooks to hash password data and a SQL database. Visit the Github page to learn what other technologies/languages were used and the deployed link to heroku! <br>
  <img src="./assets/images/blog.jpg" class="w3-image w3-margin w3-round" <br>
  <a href="https://github.com/jgault87/blog-buster" class="w3-button w3-margin w3-teal">Github repo</a>   <a href="https://mighty-savannah-09972.herokuapp.com/" class="w3-button w3-margin w3-teal">Deployed Page</a>`;
  
  
});

function openNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  