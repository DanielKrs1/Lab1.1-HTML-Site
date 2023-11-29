const imageNames = ["sisleyHearts", "sisleyChristmas", "sisleyMirror", "sisleyIdk", "sisleyKirby"];

let index = 0;
let imageElement = document.getElementById("gallery image");
changeImage(0);

let previousButton = document.getElementById("previous button");
previousButton.addEventListener("click", () => changeImage(1));
let nextButton = document.getElementById("next button");
nextButton.addEventListener("click", () => changeImage(-1));

function changeImage(direction) {
    index += direction;

    if (index < 0) index += imageNames.length;
    if (index >= imageNames.length) index -= imageNames.length;

    imageElement.src = "images/gallery/" + imageNames[index] + ".jpg";
}