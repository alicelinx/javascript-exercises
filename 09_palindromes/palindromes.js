const palindromes = function(str) {
  const processedStr = str.toLowerCase().replace(/[^A-Z0-9]+/ig, '');
  return processedStr === processedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
