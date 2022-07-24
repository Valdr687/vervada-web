//Déclaration des variables
var theme ;
    
//Fonctions
function changeTheme() {
  if ( theme == "light" ) {
    var element = document.body;
    element.classList.toggle("dark");
    image = document.getElementById('moon_sun');
    image.src = "./images/icones/dark_light/sun.png";
    theme="dark" ;
  }
  else { 
    var element = document.body;
    element.classList.toggle("dark");
    image = document.getElementById('moon_sun');
    image.src = "./images/icones/dark_light/moon.png";
    theme="light";
  }	
  return theme
}

//Script
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
if(userPrefersDark){
  theme="light" ;
  changeTheme()
}
else {
  theme="dark";
  changeTheme()
}

const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".nav-sub");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
}); 
  


