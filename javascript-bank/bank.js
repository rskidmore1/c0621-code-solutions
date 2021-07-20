/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
  this.bank = { nextAccountNumber: this.nextAccountNumber, accounts: this.accounts };
}

Bank.prototype.openAccount = function (holder, balance) {
  this.balance = balance;
  this.holder = holder;
  this.newAccount = [];
  var returnNumber = this.nextAccountNumber;
  if (Number.isInteger(this.balance)) {
    if (this.balance > 0) {
      this.newAccount = new Account(this.nextAccountNumber, this.holder);
      this.newAccount.deposit(this.balance);
      this.accounts.push(this.newAccount);
      this.nextAccountNumber++;
      return returnNumber;
    }
    return null;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {

  this.number = number;
  var account = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === this.number) {
      account = this.accounts[i];

    }

  }
  return account;
};

Bank.prototype.getTotalAssets = function () {
  this.totalAssets = 0;
  if (this.accounts.length === 0) {
    return this.totalAssets;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      var actArr = this.getAccount(this.accounts[i].number);

      this.totalAssets += actArr.getBalance();

    }
  }
  return this.totalAssets;
};
