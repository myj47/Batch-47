const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    let ordinal = "th";
    if (number === 1) {
      ordinal = "st";
    } else if (number === 2) {
      ordinal = "nd";
    } else if (number === 3) {
      ordinal = "rd";
    }
  console.log(`${number}${ordinal}`)
}