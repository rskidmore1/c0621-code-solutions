const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

function sum(nums) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const reduced = nums.reduce(reducer);
  return reduced;
}
console.log(sum(numbers));

function multiply(nums) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  const reduced = nums.reduce(reducer);
  return reduced;
}
console.log(multiply(numbers));

const balance = account.reduce(function (allNames, name) {
  if (name.type === 'withdrawal') {
    allNames = allNames - name.amount;
  } else if (name.type === 'deposit') {
    allNames = allNames + name.amount;
  }
  return allNames;
}, 0);
console.log(balance);

const composite = traits.reduce(function (allTraits, trait) {
  allTraits[Object.keys(trait)] = trait[Object.keys(trait)];
  return allTraits;
}, {});
console.log(composite);
