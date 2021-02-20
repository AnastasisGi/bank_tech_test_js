// new Date().toLocaleDateString()

function Transaction () {

}


Transaction.prototype.recordDeposit = function(amount) {
    var transactionlog = []
    var credit = "||"
    var date = new Date().toLocaleDateString();
    var newItems = [date, amount, credit]
    transactionlog.push(newItems) 
    return transactionlog.toString();
};

Transaction.prototype.recordCredit = function(amount) {
    var transactionlog = []
    var debit = "||"
    var date = new Date().toLocaleDateString();
    var newItems = [date, debit, amount]
    transactionlog.push(newItems) 
    return transactionlog.toString();
}