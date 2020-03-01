//if / else statements

var firstName = "John";
var civilStatus = "Single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon");
}

var isMarried = true;

if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon");
}

var johnMass, johnHeight, markMass, markHeight;

johnMass = 80;
markMass = 92;
johnHeight = 1.75;
markHeight = 1.72;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);

if (johnBMI > markBMI) {
  console.log("John's BMI Is greater than Mark");
} else {
  console.log("Mark's BMI Is greater than John");
}

// isJohnBMIGreater = johnBMI > markBMI;
// console.log("Is John's BMI greater than Mark? " + isJohnBMIGreater);
