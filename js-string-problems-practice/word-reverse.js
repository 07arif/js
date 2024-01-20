function reverseWords(str) {
  const words = str.split(" ");
  const result = [];
  //   console.log(word);
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  // console.log(result);
  const reversed = result.join(" ");
  return reversed;
}
const myString = "I am a good boy";
const ReversedWord = reverseWords(myString);
console.log(ReversedWord);
