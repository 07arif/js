function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

const isMyYearLeapYear = isLeapYear(2023);
console.log("my year:", isMyYearLeapYear);

const isYourYearLeapYear = isLeapYear(2024);
console.log("her year:", isYourYearLeapYear);
