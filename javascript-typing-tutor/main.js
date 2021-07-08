
var spanElement = document.querySelectorAll('span');
var performance = document.querySelector('.performance');
var gameNumber = document.querySelector('.game-number');

var counter = 0;
var incorrectCounter = 0;
var phrase = 'grumpy wizards make toxic brew';

document.addEventListener('keydown', function (event) {

  if (counter < phrase.length) {

    if (event.key === phrase[counter]) {
      spanElement[counter].className = 'green-text';
      if (counter < phrase.length) {
        spanElement[counter + 1].className = 'underline';
      }

      counter += 1;

    } else if (event.key !== phrase[counter]) {
      spanElement[counter].className = 'red-text underline';
      incorrectCounter += 1;
    }
  }

  performance.textContent = 'Misses: ' + incorrectCounter;

});

var gameCounter = 1;
var playAgain = document.querySelector('.play-again');
playAgain.addEventListener('click', function (event) {
  counter = 0;
  for (var i = 0; i < spanElement.length; i++) {
    spanElement[i].className = 'none';
  }

  gameCounter += 1;
  gameNumber.textContent = 'Game number: ' + gameCounter;
  performance.textContent = 'Misses: 0';

});

// Comments
