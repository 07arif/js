console.log("hello");
console.log(document.body);

// document.getElementByTagName:
const liCollection = document.getElementsByTagName("li");
console.log(liCollection);
for (const li of liCollection) {
  console.log("By tagName:", li.innerText);
}

// c
const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  console.log(h1.innerText);
}
