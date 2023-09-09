const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  let firstNum = 1;
  let secondNum = 0;

  for (let i = 2; i <= count; i++) {
    let currentNum = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = currentNum;
  }
  return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
