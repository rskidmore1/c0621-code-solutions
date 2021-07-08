var toggle = false;

var body = document.querySelector('.body');
var circle = document.querySelector('.circle');

circle.addEventListener('click', function (event) {

  if (toggle === true) {
    body.className = 'body white';
    circle.className = 'circle on';
    toggle = false;
  } else if (toggle === false) {
    body.className = 'body black';
    circle.className = 'circle off';
    toggle = true;

  }
});
