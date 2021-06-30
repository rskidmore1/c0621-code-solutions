/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

var shia = {
  name: 'Shia Lebouf',
  age: 34
};

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else if (number >= 5) {
    return false;
  }
}
console.log('isunder5: ', isUnderFive(10));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('iseven: ', isEven(10));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log('startsJ: ', startsWithJ('JavaScript'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 30
};
console.log('Enoughtodrink: ', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
console.log('Todrive: ', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
console.log('drinkdrive: ', isOldEnoughToDrinkAndDrive(homer));

function categorizeAcidity(pH) {
  if (pH === 7) {
    return '"neutral"';
  } else if (pH < 7 && pH >= 0) {
    return '"acid"';
  } else if (pH > 14 && pH > 7) {
    return '"base"';
  } else {
    return '"invalid pH level"';
  }
}
console.log('Ph: ', categorizeAcidity(14.0000001));

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return "We're the warner brothers!";
  } else if (name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
console.log('Warner: ', introduceWarnerBro('minerva')
);
