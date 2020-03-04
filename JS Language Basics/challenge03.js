var tipArray = [];
var paidAmountArray = [];

function tipCalculator(bill) {
  var paidAmount;
  var tipAmout;
  if (bill < 50) {
    tipAmout = 0.2 * bill;
  } else if (bill >= 50 && bill < 200) {
    tipAmout = 0.15 * bill;
  } else {
    tipAmout = 0.1 * bill;
  }
  paidAmount = tipAmout + bill;
  tipArray.push(tipAmout);
  paidAmountArray.push(paidAmount);
}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268);

console.log(tipArray);
console.log(paidAmountArray);
