console.log("hello");
console.log(document.body);

// document.getElementByTagName:
const liCollection = document.getElementsByTagName("li");
console.log(liCollection);
for (const li of liCollection) {
  console.log("By tagName:", li.innerText);
}

// document.getElementByTagName
const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  console.log(h1.innerText);
}

// document.getElementById:
const fruitsTitle = document.getElementById("fruits-title");
console.log(fruitsTitle);
fruitsTitle.innerText = "Fruits Changed by JS";

// document.getElementById:
const placesTitle = document.getElementById("places-title");
console.log(placesTitle);

//document.getElementByClassName:
const importantPlaces = document.getElementsByClassName("important-places");
for (const place of importantPlaces) {
  console.log(place.innerText);
}
