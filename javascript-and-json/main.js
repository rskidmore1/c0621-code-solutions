var array = [{ isbn: '1234412341', title: 'bible', author: 'God' }, { isbn: '23090239481234', title: 'My Life', author: 'SomeOne Important, Dr. ' }, { isbn: '666', title: 'Down to Georgia', author: 'The Devil' }];

for (var i = 0; i < array.length; i++) {
  console.log('isbn: ', array[i].isbn, 'Type: ', typeof array[i].isbn);
  console.log('title', array[i].title, 'Type: ', typeof array[i].title);
  console.log('author', array[i].author, 'Type: ', typeof array[i].author);
}

console.log('');

for (var j = 0; j < array.length; j++) {
  console.log('Stringify');

  console.log(JSON.stringify(array[j]), ' type: ', typeof JSON.stringify(array[i]));

}
console.log('');

var student = '[{ "name": "James Brown", "id": "1"}]';
console.log('student: ', student, ' type: ', typeof student);

var imParsed = JSON.parse(student);

console.log('');

console.log('json: ', imParsed, ' type: ', typeof imParsed);
