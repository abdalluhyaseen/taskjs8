function squareNumber(input) {
  if (typeof input !== "number") {
    throw "argument is not a number"; 
  }
  return input * input;
}
try {
  console.log(squareNumber(7)); 
  console.log(squareNumber("yes")); 
} catch (error) {
  console.error("Error:", error);
}
