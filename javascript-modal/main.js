
var clickButton = document.querySelector('.click-button');
var dialog = document.getElementById('modal-window');
clickButton.addEventListener('click', function () {
  dialog.showModal();
});

var modalButton = document.querySelector('.modal-button');
modalButton.addEventListener('click', function () {
  dialog.close();
});
