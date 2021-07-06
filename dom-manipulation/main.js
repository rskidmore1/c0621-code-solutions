var count = 0;

var hotBtn = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotBtn.addEventListener('click', function (event) {
  count += 1;
  clickCount.textContent = 'Clicks: ' + count;
  if (count === 4) {
    hotBtn.className = 'hot-button cool';
  } else if (count === 7) {
    hotBtn.className = 'hot-button tepid';

  } else if (count === 10) {
    hotBtn.className = 'hot-button warm';

  } else if (count === 13) {
    hotBtn.className = 'hot-button hot';

  } else if (count === 16) {
    hotBtn.className = 'hot-button nuclear';

  }
});
