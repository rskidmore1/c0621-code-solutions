/* exported Transaction */

function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
  this.transaction = { type: this.type, amount: this.amount };

}
