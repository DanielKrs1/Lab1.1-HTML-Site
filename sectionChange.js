let sectionDropdown = document.getElementById("section dropdown");

let onSectionChange = function() {
    let sectionDivs = document.getElementsByName("section");

    for (let i = 0; i < sectionDivs.length; i++) {
        sectionDivs[i].style.display = "none";
    }

    let selectedSection = sectionDropdown.value;
    let selectedSectionDiv = document.getElementById(selectedSection);
    selectedSectionDiv.style.display = "block";
}

sectionDropdown.addEventListener("change", onSectionChange);
onSectionChange();