var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form Submit');

  var formElements = {
    name: document.forms[0].elements.name.value,
    email: document.forms[0].elements.email.value,
    message: document.forms[0].elements.message.value
  };
  console.log('Form Elements: ', formElements);
  document.forms[0].reset();

});
