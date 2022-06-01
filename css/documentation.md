# How this css does works ?
- I will try to answer to you or the future myself, please note than most of this will be written in french.

# Linktree.css

```css
.profil {
    margin: 10px auto; /* marge en haut de 10px - contenu centré*/
    width: fit-content; /* la div s'adapte au contenu*/
}
.icone {
   width: 96px; height: 96px; /* icone en 96/96px*/
   margin: 0 calc(50% - 48px); /* marge basse et haute nulle - contenu centré grace à soustraction de 50% du parent - 50% de l'image*/
}
.bio {
    max-width: 60%; /* choix esthétique = widht de .vignette*/
    margin: 0 auto; /* auto permet de centrer*/
}
```

## Liens
- <div .liens> --> tous les liens 
  - <a .lien> --> lien unique vers un réseau social, élément parent de la div d'affichage <div .vignette>
    - <div .vignette> --> élément enfant ( petit fils de <div .liens> ) contenant l'icone et le texte représentatif du compte
	
```css
.liens { display: flex; /* design responsif*/
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%; /* la div occupe tt l'espace */
}

.lien { 
    display: block; /*permet l'affichage de la div enfant*/
}
      
.vignette {
    width: 60%; 
    margin: 1em 20%;
    display: grid; /* grid permet de gérer l'icone et le texte
    grid-auto-rows: 100%; 
    grid-template-columns: 30% 70%; /* icone représente 30 % et le texte 70%*/
    gap: 0px 5px; /* ecart null car inutile - 5px entre la gauche et la droite*/
    height: 80px;
    z-index: 2;
    cursor: pointer; /*curseur indique le lien*/
    /*aspect similaire à du verre, semi-transparent */
    border-radius: 25% 10%;
    box-shadow: 20px 20px 50px #10101040;
    border-radius: 15px;
    border-top: 1px solid #e8f5f550;
    border-left: 1px solid #e8f5f550;
    background: #10101010;
    backdrop-filter: blur(5px);
    overflow: hidden;
}
.gauche { grid-area: 1 / 1 / 2 / 2;
    place-items: center; /*centre le contenu*/
    padding:24px 0;
}
.droite { grid-area: 1 / 2 / 2 / 3; 
    place-items: center; /*centre le contenu*/
    text-align: center; /*centre le contenu*/
}
.droite p {
    position: absolute;
    top: 10px;
    margin: 5px;
}
.image { /*image en 32px format 1/1
    width: 32px;
    height: 32px;
    margin: 24px auto; position: absolute; top: 50% ; left: 10px; /* permet de centrer */
}
/*Police, gestion des titres*/

a:any-link {
    text-decoration: inherit;
    color: inherit;
}

p {
	font-family:  sans-serif;
	font-size: 14px;
}
h1 {
	font-family:  serif;
	font-size: 2em;
  margin: 0 0.5em;
}



/*Structure basique*/
/*footer doit avoir une taille fixe : 100% de large et 38px de haut*/
footer {
	text-align: center !important;
	padding: 0px 5%;
	width: 90%;
	height: auto;
	position: relative ;
  margin: 5px 0px !important;
}
footer p {
    margin: 0; 
}


main {
    margin: 0px auto; /* div centrée
    min-height: calc(100vh - 38px); /* hauteur minale de la hauteur de l'écran moins celle du <footer>*/
    width: fit-content; max-width: 680px; 
    text-align: center !important; /* le texte doit etre centré*/
   
}

/* déclaration de base - filet de secours pr gérer les moindres détails*/
html {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    
}
      
body {
  background: linear-gradient(180deg, rgba(46,226,255,1) 0%, rgba(18,53,98,1) 100%); /* dégradé*/
  background: rgb(46,226,255); /* si le dégradé plante coté client*/
	color: #e8f5f5; /*couleur du texte - proche du blanc*/
  margin: 0;
  padding: 0;
}
```
