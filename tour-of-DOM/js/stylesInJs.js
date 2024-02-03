const sections = document.querySelectorAll("section");
// console.log(sections);
for (const section of sections) {
  section.style.border = "2px solid green";
  section.style.margin = "5px";
  section.style.borderRadius = "10px";
  section.style.padding = "7px";
  section.style.backgroundColor = "lightgray";
}

const placesContainer = document.getElementById("places-container");
placesContainer.style.backgroundColor = "yellow";

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("yellow-bg");
