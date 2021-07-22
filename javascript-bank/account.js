/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  var amountVar = amount;
  if (Number.isInteger(amountVar)) {
    if (amountVar > 0) {
      var newDeposit = new Transaction('deposit', amountVar);
      this.transactions.push(newDeposit);
      return true;
    }

  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  var amountVar = amount;
  var newWithdrawal = [];
  if (Number.isInteger(amountVar)) {
    if (amountVar > 0) {
      newWithdrawal = new Transaction('withdrawal', amountVar);
      this.transactions.push(newWithdrawal);
      return true;
    }
  }

  return false;

};

Account.prototype.getBalance = function () {
  var totalAmount = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalAmount += this.transactions[i].amount;

    } else if (this.transactions[i].type === 'withdrawal') {
      totalAmount -= this.transactions[i].amount;
    }
  }
  return totalAmount;
};
