/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  this.amount = amount;
  this.newDeposit = [];
  this.success = false;
  if (Number.isInteger(this.amount)) {
    if (this.amount > 0) {
      this.success = true;
      this.newDeposit = new Transaction('deposit', this.amount);
      this.transactions.push(this.newDeposit);
    }

  } else {
    this.success = false;
  }
  return this.success;

};

Account.prototype.withdraw = function (amount) {
  this.amount = amount;
  this.success = false;
  this.newWithdrawal = [];
  if (Number.isInteger(this.amount)) {
    if (this.amount > 0) {
      this.success = true;
      this.newWithdrawal = new Transaction('withdrawal', this.amount);
      this.transactions.push(this.newWithdrawal);
    }

  } else {
    this.success = false;
  }
  return this.success;

};

Account.prototype.getBalance = function () {
  this.totalAmount = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      this.totalAmount += this.transactions[i].amount;

    } else if (this.transactions[i].type === 'withdrawal') {
      this.totalAmount -= this.transactions[i].amount;
    }
  }
  return this.totalAmount;
};
