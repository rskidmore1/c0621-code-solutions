/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  this.amount = amount;
  if (Number.isInteger(this.amount)) {
    if (this.amount > 0) {
      var newDeposit = new Transaction('deposit', this.amount);
      this.transactions.push(newDeposit);
      return true;
    }

  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  this.amount = amount;
  this.newWithdrawal = [];
  if (Number.isInteger(this.amount)) {
    if (this.amount > 0) {
      this.newWithdrawal = new Transaction('withdrawal', this.amount);
      this.transactions.push(this.newWithdrawal);
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
