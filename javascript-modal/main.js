
var clickButton = document.querySelector('.click-button');
var modalDiv = document.querySelector('.modal-div');
var overLay = document.querySelector('.overlay-off');

clickButton.addEventListener('click', function () {
  modalDiv.className = 'onscreen';
  overLay.className = 'overlay-on';
});

var modalButton = document.querySelector('.modal-button');
modalButton.addEventListener('click', function () {
  modalDiv.className = 'modal-div';
  overLay.className = 'overlay-off';
});
