var toggle = 0;

var body = document.querySelector('.body');
var circle = document.querySelector('.circle');

circle.addEventListener('click', function (event) {

  if (toggle === 1) {
    body.className = 'body white';
    circle.className = 'circle on';
    toggle = 0;
  } else if (toggle === 0) {
    body.className = 'body black';
    circle.className = 'circle off';
    toggle = 1;

  }
});
