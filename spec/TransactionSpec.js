describe('A transaction', () => {
    var transaction;
    
    beforeEach(()=>{
        transaction = new Transaction();
    
    })

   it('deposits the amount in the log', () => {
    expect(transaction.recordDeposit(100)).toEqual('20/02/2021,100,||')
   }); 


   it('credits the amount in the log', () => {
    expect(transaction.recordCredit(100)).toEqual('20/02/2021,||,100')

   });
});