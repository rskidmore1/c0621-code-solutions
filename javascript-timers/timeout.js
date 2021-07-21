
function change() {
  var h1 = document.querySelector('h1');
  h1.textContent = 'Hello There';
}
// function call(callback) {
//   callback(callback);
// }
//
// var timeoutID = setTimeout(change(), 20000);
setTimeout(change, 2000);
