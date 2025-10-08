let inputColor = document.querySelector("input.shift");
let inputBlur = document.querySelector('input[name="blur"]');
let inputSpacing = document.querySelector('input[name="spacing"')

let root = document.querySelector(":root");

inputColor.addEventListener("change", changeImgColor);

function changeImgColor(event) {
  getComputedStyle(root).getPropertyValue("--color");
  root.style.setProperty("--color", event.target.value);
}

inputBlur.addEventListener("change", changeBlur);

function changeBlur(event) {
    console.log(getComputedStyle(root).getPropertyValue("--blur"));
    let uniteMesure = event.target.dataset.sizing ;
    let valeurAvecUnite = event.target.value + uniteMesure;
    console.log(valeurAvecUnite);

    
    root.style.setProperty("--blur", valeurAvecUnite);
}

inputSpacing.addEventListener("change", changeSpacing)
function changeSpacing(event) {

    console.log(getComputedStyle(root).getPropertyValue("--spacing"));
    let uniteMesure = event.target.dataset.sizing ;
    let valeurAvecUnite = event.target.value + uniteMesure;
    console.log(valeurAvecUnite);

    
    root.style.setProperty("--spacing", valeurAvecUnite);
    
}