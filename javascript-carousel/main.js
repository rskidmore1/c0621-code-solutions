// grab view class
// Make class that advances
// set class on a timer

var views = document.querySelectorAll('.view');

// views[0].classList.add('hidden');
// views[1].classList.remove('hidden');
// console.log();
var counter = 0;

// unlock view with index of counter
// make all the others hidden

function reversePanel() {

  if (counter === 0) {
    counter = views.length - 1;

  } else {
    counter--;
  }

  console.log('view:', views[counter - 1]);
  console.log('counter after decrement:', counter);
  if (counter === 0) {
    console.log('views.length - 1', views.length - 1);
    console.log('views[counter.length - 1]', views[counter.length - 1]);
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
  console.log(views[counter]);
  console.log(counter);
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
