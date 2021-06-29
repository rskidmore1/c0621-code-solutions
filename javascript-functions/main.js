function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('Convert Minutes to Seconds: ', convertMinutesToSeconds(5));

function greet(name) {
  var phrase = 'Hey, ' + name;
  return phrase;
}
console.log('Greeting: ', greet('Jefferson Franklin'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('Area: ', getArea(17, 42));

function getFirstName(array) {
  var fName = array.firstName;
  return fName;
}
console.log('First Name: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var len = array.length;
  var lastItem = array[len - 1];
  return lastItem;
}
console.log('Last Element: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
