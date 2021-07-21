/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  //
  var balanceVar = balance;
  var holderVar = holder;
  var returnNumber = this.nextAccountNumber;
  if (Number.isInteger(balanceVar)) {
    if (balanceVar > 0) {
      var account = new Account(this.nextAccountNumber, holderVar);
      account.deposit(balanceVar);
      this.accounts.push(account);
      this.nextAccountNumber++;
      return returnNumber;
    }
    return null;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {

  var num = number;
  var account = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === num) {
      account = this.accounts[i];

    }

  }
  return account;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  if (this.accounts.length === 0) {
    return totalAssets;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      var actArr = this.getAccount(this.accounts[i].number);

      totalAssets += actArr.getBalance();

    }
  }
  return totalAssets;
};
