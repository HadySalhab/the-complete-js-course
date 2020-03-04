var Mark = {
  fullName: "Mark Doe",
  mass: 82,
  height: 1.75,
  bmiCalc: function() {
    this.bmi = this.mass / (this.height * this.height); //we can create bmi key @runtime
  }
};

var John = {
  fullName: "John Smith",
  mass: 79,
  height: 1.78,
  bmiCalc: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
};

John.bmiCalc();
Mark.bmiCalc();

if (John.bmi === Mark.bmi) {
  console.log("John And Mark have the same bmi");
} else if (John.bmi > Mark.bmi) {
  console.log("John has a greater bmi");
} else {
  console.log("Mark has a greater bmi than john");
}

console.log(John);
console.log(Mark);
