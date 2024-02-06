console.log("first file");
const allLi = document.getElementsByTagName("li");
console.log(allLi);

const allTitles = document.getElementsByClassName("section-title");
console.log(allTitles);

const secondSection = document.getElementById("second-section");
console.log(secondSection);
secondSection.style.color = " white";
secondSection.style.backgroundColor = "tomato";

//document.querySelectorAll
// document.querySelector

//1.
const ulItem = document.getElementById("ul-item");
console.log(ulItem);
// 2.
const li = document.createElement("li");
li.innerText = "My Dynamic item";
// 3.
ulItem.appendChild(li);

// 1.
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

// // 2.
const section = document.createElement("section");
section.innerHTML = `
<h1>This is Brand New Dynamic section</h1>
<ul>
<li>List item 1</li>
<li>List item 2</li>
<li>List item 3</li>
<li>List item 4</li>

</ul>
`;
console.log(section);

// // 3.
mainContainer.appendChild(section);
