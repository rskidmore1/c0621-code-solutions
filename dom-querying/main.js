console.log('hello world');

var hOne = document.querySelector('h1');
console.log('h1', hOne);

console.dir(hOne);

var idInpsection = document.querySelector('#explanation');
console.log('id inspection: ', idInpsection);

console.dir(idInpsection);

var hint = document.querySelector('.hint');
console.log('class: ', hint);
console.dir(hint);

var allP = document.querySelectorAll('p');
for (var i = 0; i < allP.length; i++) {
  console.log('Node: ', allP[i]);
}

var example = document.querySelectorAll('.example-link');
for (var i = 0; i < example.length; i++) {
  console.log('Node: ', example[i]);
}
