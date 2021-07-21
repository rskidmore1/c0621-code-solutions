var views = document.querySelectorAll('.view');
var dots = document.querySelectorAll('.fa-circle');
var counter = 0;

function reversePanel() {

  if (counter === 0) {
    counter = views.length - 1;

  } else {
    counter--;
  }

  if (counter === 0) {
    views[counter.length - 1].classList.remove('hidden');
    dots[counter.length - 1].className = 'fas fa-circle';

  } else {
    views[counter].classList.remove('hidden');
    dots[counter].className = 'fas fa-circle';
  }

  for (var i = 0; i < views.length; i++) {
    if (i !== counter) {
      views[i].className = 'view hidden';
      dots[i].className = 'far fa-circle';
    }
  }

}

function advancePanel() {
  if (counter === views.length - 1) {
    counter = 0;

  } else {
    counter++;
  }

  views[counter].classList.remove('hidden');
  dots[counter].className = 'fas fa-circle';

  for (var i = 0; i < views.length; i++) {
    if (i !== counter) {
      views[i].className = 'view hidden';
      dots[i].className = 'far fa-circle';
    }
  }

}
var rightIcon = document.querySelector('.fa-chevron-right');

rightIcon.addEventListener('click', advancePanel);

var leftIcon = document.querySelector('.fa-chevron-left');

leftIcon.addEventListener('click', reversePanel);

var intervalId = setInterval(advancePanel, 3000);
