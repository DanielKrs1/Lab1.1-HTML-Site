let sectionDivs = document.getElementsByName("section");
let sectionDropdown = document.getElementById("section dropdown");
let categoryImage = document.getElementById("category image");

let divImages = {
    "introduction" : "images/sisleyDippinDots.jpg",
    "what she likes" : "images/sisleyHappy.jpg",
    "what she doesn't like" : "images/sisleySad.jpg",
}

let onSectionChange = function() {
    for (let sectionDiv of sectionDivs) {
        sectionDiv.style.display = "none";
    }

    let selectedSection = sectionDropdown.value;
    let selectedSectionDiv = document.getElementById(selectedSection);
    selectedSectionDiv.style.display = "block";

    categoryImage.src = divImages[selectedSectionDiv.id];
}

sectionDropdown.addEventListener("change", onSectionChange);
onSectionChange();