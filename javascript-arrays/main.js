var colors = ['red', 'white', 'blue'];

console.log('color: ', colors[0]);
console.log('color: ', colors[1]);
console.log('colors: ', colors[2]);

var americanColors = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];

console.log(americanColors);

colors[2] = 'green ';

var mexicanColors = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];

console.log(mexicanColors);

console.log('Colors array: ');
console.log(colors);

var students = ['ryan', 'jc', 'jumana', 'paul'];

var numberOfStudents = students.length;
console.log('number of students: ', numberOfStudents);

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('last student: ', lastStudent);

console.log('Students array: ');
console.log(students);
