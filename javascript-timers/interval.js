var h1Tag = document.querySelector('h1');
var counter = h1Tag.textContent;

function count() {
  if (counter > 0) {
    h1Tag.textContent = counter;
  } else {
    h1Tag.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }

  counter--;
}
var intervalId = setInterval(count, 1111);
