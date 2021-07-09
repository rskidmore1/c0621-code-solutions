function handleFocus(event) {
  console.log('focus');
  console.log('    Event name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log('    Event name: ', event.target.name);
}

function handleInput(event) {
  console.log('Event name: ', event.target.name);
  console.log('Event value: ', event.target.value);
}

var input1 = document.querySelector('#user-name');
var input2 = document.querySelector('#user-email');
var textarea = document.querySelector('#user-message');

input1.addEventListener('focus', handleFocus);
input1.addEventListener('blur', handleBlur);
input1.addEventListener('input', handleInput);

input2.addEventListener('focus', handleFocus);
input2.addEventListener('blur', handleBlur);
input2.addEventListener('input', handleInput);

textarea.addEventListener('focus', handleFocus);
textarea.addEventListener('blur', handleBlur);
textarea.addEventListener('input', handleInput);
