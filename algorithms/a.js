for (let i = 0; i < 5; i++) {
  let asciiString = "";
  for (let j = 0; j < 5; j++) {
    if (
      (i === 0 && j >= 1 && j <= 3) ||
      (i === 1 && (j === 0 || j === 4)) ||
      (i === 2 && (j === 0 || j === 4)) ||
      (i === 3 && j >= 0 && j <= 4) ||
      (i === 4 && (j === 0 || j === 4))
    ) {
      asciiString += "*";
    } else {
      asciiString += " ";
    }
  }
  console.log(asciiString);
}