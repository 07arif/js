const lyrics =
  "tumi bondhu kala pakhi ami jeno ki. bosonto kale tumay bolte parini. sada sada kala kala rong jomeche sada kala";

const parts = lyrics.split(" ");
const sentences = lyrics.split(".");
const chars = lyrics.split("");
// console.log(lyrics);
// console.log(parts);
// console.log(sentences);
// console.log(chars);

const partial = lyrics.slice(5, 8);
// console.log(partial);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = [
  "Tumi bondhu kala pakhi ami jeno ki",
  "bosonto kale tomai bolte pari ni",
  "kala kala sada sada",
];

const newSong = lines.join(". ");
console.log(newSong);
