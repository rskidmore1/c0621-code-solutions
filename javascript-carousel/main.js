
var views = document.querySelectorAll('.view');

var counter = 0;

function reversePanel() {

  if (counter === 0) {
    counter = views.length - 1;

  } else {
    counter--;
  }

  if (counter === 0) {
    views[counter.length - 1].classList.remove('hidden');

  } else {
    views[counter].classList.remove('hidden');
  }

  for (var i = 0; i < views.length; i++) {
    if (i !== counter) {
      views[i].className = 'view hidden';
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

  for (var i = 0; i < views.length; i++) {
    if (i !== counter) {
      views[i].className = 'view hidden';
    }
  }
  console.log(counter);

}
var rightIcon = document.querySelector('.fa-chevron-right');

rightIcon.addEventListener('click', advancePanel);

var leftIcon = document.querySelector('.fa-chevron-left');

leftIcon.addEventListener('click', reversePanel);

var intervalId = setInterval(advancePanel, 3000);
