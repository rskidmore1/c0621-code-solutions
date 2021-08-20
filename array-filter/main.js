const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function evenNumbers(nums) {
  const div = nums.filter(num => num % 2 === 0);
  return div;
}
console.log('evenNumbers:', evenNumbers(numbers));

function overFive(nums) {
  const fiv = nums.filter(num => num > 5);
  return fiv;
}
console.log('overFive:', overFive(numbers));

function startWithE(nams) {
  const startE = nams.filter(nam => nam[0] === 'E');
  return startE;
}
console.log('startWithE:', startWithE(names));

function haveD(nams) {
  const hav = nams.filter(nam => nam.toLowerCase().includes('d'));
  return hav;
}
console.log('haveD:', haveD(names));
