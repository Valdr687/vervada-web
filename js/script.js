//Déclaration des variables
var theme ;
    
//Fonctions
function changeCSS(cssFile, cssLinkIndex) {
   var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
   var newlink = document.createElement("link");
   newlink.setAttribute("rel", "stylesheet");
   newlink.setAttribute("type", "text/css");
   newlink.setAttribute("href", cssFile);
   document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

function changeTheme() {
  if ( theme == "light" ) {
    changeCSS('./css/style_accueil_dark.css', 0) ;
    image = document.getElementById('moon_sun');
    image.src = "./images/icones/dark_light/sun.png";
    theme="dark" ;
  }
  else { 
    changeCSS('./css/style_accueil.css', 0);
    theme="light";
    image = document.getElementById('moon_sun');
    image.src = "./images/icones/dark_light/moon.png";
  }	
  return theme
}

//Script
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
if(userPrefersDark){
  changeCSS('./css/style_accueil_dark.css', 0) ;
  image = document.getElementById('moon_sun');
  image.src = "./images/icones/dark_light/sun.png";
  theme="dark" ;
}
else {
  theme="light";
}

const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".nav-sub");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
}); 
  


