const names = [
  "arif",
  "hossain",
  "sumon singho",
  "soykot",
  "arif",
  "didar",
  "nasir",
  "arif",
  "harun",
  "arif",
  "rony",
  "nasir",
  "shahin",
  "arif",
  "nasir",
];

function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    // console.log(name);
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(names);

console.log(uniqueNames);
