/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

var windowEvent = window.addEventListener('beforeunload', function (event) {
  var todoJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todoJSON);
  console.log('event: ', event);
});
