// console.log('tis is file')

function bankAccount(name, amount) {
  this.accountNumber = Date.now();
  this.customerName = name;
  this.amount = amount;

  this.deposite = function (value) {
    this.amount += value;
  };
}

const Vishal = new bankAccount("Vishal", 4382);

const accounts = [];
const customerName = document.getElementById("customerName");
const amount = document.getElementById("amount");
const createAccount = document.querySelector("#account");
const useraccounts = document.getElementById("accounts");

createAccount.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = customerName.value;
  const value = amount.value;

  const Account = new bankAccount(name, value);

  accounts.push(Account);
  accounts.map((value) => {
    useraccounts.innerHTML += `<p>${value.customerName}</p>`;
  });
  console.log(accounts);
});

const depositeForm = document.getElementById("deposite");

const depositeAmount = document.getElementById("depositeAmount").value;

depositeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const depositeAccountNumber = document.getElementById("accountNumber").value;
  let account = accounts.find((account) => {
    console.log(account.accountNumber, "object");
    console.log(depositeAccountNumber, "input");

    return account.accountNumber === +depositeAccountNumber;
  });
  console.log(account);
  account.deposite(depositeAmount);
  console.log(account);

  console.log(accounts);
});
