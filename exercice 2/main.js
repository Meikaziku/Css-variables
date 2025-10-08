// Définir la variable permettant de récupérer l'input de type color

/* A cette variable, appliquer la méthode (addEventListener) écoutant l'événement de type change et jouant la fonction permettant d'ajouter une propriété de style (SetProperty) au document :
- le nom de la propriété est la variable CSS --main-color 
- La valeur est définie par la valeur de l'input
*/

let inputColor = document.querySelector("input")
let root = document.querySelector(":root")

inputColor.addEventListener("change", changeBgColor)

function changeBgColor(event) {

    console.log(getComputedStyle(root).getPropertyValue('--main-color'));
    root.style.setProperty('--main-color', event.target.value);
    
    
    
    

    
}


