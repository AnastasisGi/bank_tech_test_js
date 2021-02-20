function Account (){
  this.balance = 0;
}


Account.prototype.showBalance = function() {
  return this.balance
}

Account.prototype.deposit = function(amount) {
  return this.balance += amount
};

Account.prototype.withdraw = function(amount) {
  if (amount > this.balance) {
    throw new Error("Funds are not sufficient!")
  }
  return this.balance -= amount

};