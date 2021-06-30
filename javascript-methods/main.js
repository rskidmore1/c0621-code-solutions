var num1 = 27;
var num2 = 35;
var num3 = 2;

var maximumValue = Math.max(num1, num2, num3);

console.log('Max value: ', maximumValue);

var heroes = ['Cap', 'thor', 'iron man', 'black panther'];

var randomNumber = Math.random();

randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);

console.log('RandomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random Hero: ', randomHero);

var library = [{
  title: 'LOTR',
  author: 'JRR Tolkien'
},
{
  title: 'Mere christainity',
  author: 'CS Louis'
},
{
  title: 'Sexual Politics',
  author: 'Kate Millett'
}];

var lastBook = library.pop();
console.log('Last Book: ', lastBook);

var firstBook = library.shift();
console.log('First Book: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library: remaining books: ', library);

var fullName = 'Ryan Skidmore';
var firstAndLastName = fullName.split(' ');
console.log('First and Last name: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say My name var: ', sayMyName);
