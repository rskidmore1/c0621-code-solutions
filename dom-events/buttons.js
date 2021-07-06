function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var mouseOver = document.querySelector('.hover-button');
mouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var dblclick = document.querySelector('.double-click-button');
dblclick.addEventListener('dblclick', handleDoubleClick);
