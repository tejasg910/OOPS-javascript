function BankAccount(name, amount) {
  this.accountNumber = Date.now();
  this.customerName = name;
  this.amount = amount;
  this.balance = 0;

  //   this.deposite = function (value) {
  //     this.amount += value;
  //   };

  //   this.withdraw = function (value) {
  //     this.amount = this.amount - value;
  //   };
}

BankAccount.prototype.deposite = async function (value) {
  this.amount += value;
};

BankAccount.prototype.withdraw = function (value) {
  this.amount = this.amount - value;
};

const Rakesh = new BankAccount("Rakesh");
console.log(Rakesh);
