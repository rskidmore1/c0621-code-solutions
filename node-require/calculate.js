const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');


switch(process.argv[3]){
  case 'plus':
    console.log(add(Number(process.argv[2]), Number(process.argv[4])))
    break;
  case 'minus':
    console.log(subtract(Number(process.argv[2]), Number(process.argv[4])))
    break;
  case 'over':
    console.log(divide(Number(process.argv[2]), Number(process.argv[4])))
    break;
  case 'times':
    console.log(multiply(Number(process.argv[2]), Number(process.argv[4])))
    break;
  }
