/* exported todos */

var todos = []; // init arr
var previousTodosJSON = localStorage.getItem('javascript-local-storage'); // retrieves item from local storage

if (previousTodosJSON !== null) { // Checks if there is anything in this
  todos = JSON.parse(previousTodosJSON); //
}

var windowEvent = window.addEventListener('beforeunload', function (event) {
  var todoJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todoJSON);

  console.log('event: ', event.target.task);
});
