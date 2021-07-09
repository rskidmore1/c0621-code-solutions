var tabContainer = document.querySelector('.tab-container');
var tab = document.querySelectorAll('.tab');
var view = document.querySelectorAll('.view');
tabContainer.addEventListener('click', function (event) {
  var tabAttribute = event.target.getAttribute('data-view');

  if (event.target.matches('.tab')) {
    for (var i = 0; i < tab.length; i++) {

      if (event.target === tab[i]) {
        tab[i].className = 'tab active';

      } else {
        tab[i].className = 'tab';
      }

    }
    for (var j = 0; j < view.length; j++) {
      if (tabAttribute === view[j].getAttribute('data-view')) {
        view[j].className = 'view';
      } else {
        view[j].className = 'view hidden';
      }
    }

  }

});
