
var student = {
  firstName: 'Ryan ',
  lastName: 'Skidmore',
  age: '33'

};

var fullName = student.firstName + student.lastName;
console.log('Full name: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Operation Manager';

console.log('Lives in Irvine: ', student.livesInIrvine);

console.log('Occupation: ', student.previousOccupation);

var vehicle = {
  make: 'GMC',
  model: 'K1500',
  year: 1998
};

vehicle['color'] = 'white';

vehicle['isConvertible'] = false;

console.log('COlor: ', vehicle['color']);
console.log('isConvertible: ', vehicle['isConvertible']);

console.log('Vehicle object');
console.log(vehicle);

var pet = {
  name: 'Malik',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('Pet object');
console.log(pet);
