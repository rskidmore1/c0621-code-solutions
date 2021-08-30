
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => console.log(users));
