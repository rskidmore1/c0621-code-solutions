const takeAChance = require('./take-a-chance');

const prom = takeAChance('Ryan');

prom.then(value => {
  console.log(value);
}).catch(function (e) {
  console.error(e.message);
});
