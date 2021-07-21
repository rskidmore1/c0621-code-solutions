var h1 = document.querySelector('h1');
var counter = 3;
function count() {
  if (counter > 0) {
    h1.textContent = counter;
  } else {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
  counter--;
}
var intervalId = setInterval(count, 1000);
