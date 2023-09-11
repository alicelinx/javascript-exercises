const findTheOldest = function(arr) {
  return arr.reduce((oldestPerson, currentPerson) => {
    let oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge > currentAge ? oldestPerson : currentPerson;
  });
};

const getAge = function(birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
