var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form Submit');

  var formElements = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value
  };
  console.log('Form Elements: ', formElements);
  form.reset();

});
