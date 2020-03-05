var johnSpending = {
  bills: [124, 48, 268, 180, 42],
  paidTip: [],
  finalPaidAmount: [],
  spendingCalc: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var billValue = this.bills[i];
      if (billValue < 50) {
        this.paidTip.push(0.2 * billValue);
      } else if (billValue >= 50 && billValue < 200) {
        this.paidTip.push(0.15 * billValue);
      } else {
        this.paidTip.push(0.1 * billValue);
      }
      this.finalPaidAmount.push(this.paidTip[i] + billValue);
    }
  }
};

var markSpending = {
  bills: [77, 375, 110, 45],
  paidTip: [],
  finalPaidAmount: [],
  spendingCalc: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var billValue = this.bills[i];
      if (billValue < 50) {
        this.paidTip.push(0.2 * billValue);
      } else if (billValue >= 50 && billValue < 200) {
        this.paidTip.push(0.15 * billValue);
      } else {
        this.paidTip.push(0.1 * billValue);
      }
      this.finalPaidAmount.push(this.paidTip[i] + billValue);
    }
  }
};

//object function, that will calculate the element of paitTip and finalPaidAmount array
johnSpending.spendingCalc();
markSpending.spendingCalc();

johnSpending.paidTipAverage = calcPaidTipAverage(johnSpending.paidTip); //creating paidTipAvg key @runTime
markSpending.paidTipAverage = calcPaidTipAverage(markSpending.paidTip); //creating paidTipAvg key @runTime

console.log(johnSpending);
console.log(markSpending);

if (johnSpending.paidTipAverage === markSpending.paidTipAverage) {
  console.log("paid the same amount");
} else if (johnSpending.paidTipAverage > markSpending.paidTipAverage) {
  console.log("John family spend more");
} else {
  console.log("Mark family spend more");
}

function calcPaidTipAverage(paidTip) {
  var sum = 0;
  for (var x = 0; x < paidTip.length; x++) {
    sum = sum + paidTip[x];
  }
  return sum / paidTip.length;
}
