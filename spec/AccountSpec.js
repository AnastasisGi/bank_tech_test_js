describe('An account ', () => {
  var account;

  beforeEach(function () {
    account = new Account();
  })

  it('can show a balance of 0 when it is created', () => {
    expect(account.showBalance()).toEqual(0);
  });

  it('can show an amount deposit', () => {
    account.deposit(100);
    expect(account.showBalance()).toEqual(100)
  });

  it('can sghow an amount that is credited', () => {
    account.deposit(100);
    account.withdraw(50);
    expect(account.showBalance()).toEqual(50);
});

});