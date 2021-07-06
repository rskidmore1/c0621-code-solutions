var count = 0;

var hotBtn = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotBtn.addEventListener('click', function (event) {
  count += 1;
  clickCount.textContent = 'Clicks: ' + count;
  if (count === 4) {
    var temp = document.querySelector('.hot-button.cold');
    temp.className = 'hot-button cool';
  } else if (count === 7) {
    temp = document.querySelector('.hot-button.cool');
    temp.className = 'hot-button tepid';

  } else if (count === 10) {
    temp = document.querySelector('.hot-button.tepid');
    temp.className = 'hot-button warm';

  } else if (count === 13) {
    temp = document.querySelector('.hot-button.warm');
    temp.className = 'hot-button hot';

  } else if (count === 16) {
    temp = document.querySelector('.hot-button.hot');
    temp.className = 'hot-button nuclear';

  }
});
