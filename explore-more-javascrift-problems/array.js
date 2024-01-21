const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: "agun" };
const friends = [14, 12, 11, 32, 21, 30];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(Array.isArray(friends));
console.log(typeof add);

// ---------------------------------

console.log(friends.includes(19));
console.log(friends.includes(14));

if (friends.indexOf(252) !== -1) {
  // --------
}

// concat:
const newFriendsAge = [23, 24, 25, 26];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
