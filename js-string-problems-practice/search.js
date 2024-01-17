const lyrics =
  "Tumi bondo kala Paki ami jeno ki? bosonto kale tumai bolte parini";

// const doesExist = lyrics.includes("paki");

const searchString = "PakI";

const lyricsLowerCase = lyrics.toLocaleLowerCase();
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLowerCase);
const doesExistOneLine = lyrics
  .toLocaleLowerCase()
  .includes(searchString.toLocaleLowerCase());
// console.log(doesExist, searchStringLowerCase);
// console.log(doesExistOneLine);

// ------------------------------------------------
// indexOf

// console.log(lyrics.indexOf("kaila"));
// console.log(lyrics.indexOf("tumi"));

if (lyrics.indexOf("tumi") !== -1) {
  console.log("exist inside the string");
} else {
  console.log("can not find");
}

// -----------------------
// startsWith
console.log(lyrics.startsWith("Tumi"));

// ------------
// endsWith
const fileName = "mybiodata.pdf";
const otherFiles = "mypic.png";

console.log(fileName.endsWith(".pdf"));
