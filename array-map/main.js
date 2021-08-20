const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

function doubled(nums) {
  const doub = nums.map(num => num * 2);
  return doub;
}
console.log('doubled: ', doubled(numbers));

function prices(nums) {
  const pri = nums.map(num => `$${num}.00`);
  return pri;
}
console.log('prices: ', prices(numbers));

function upperCased(langs) {
  const lan = langs.map(lang => lang.toUpperCase());
  return lan;
}
console.log('upperCased: ', upperCased(languages));

function firstLetters(langs) {
  const lan = langs.map(lang => lang[0]);
  return lan;
}
console.log('firstLetters: ', firstLetters(languages));
