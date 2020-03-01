var johnMass, johnHeight, markMass, markHeight;

johnMass = 80;
markMass = 92;
johnHeight = 1.75;
markHeight = 1.72;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);

isJohnBMIGreater = johnBMI > markBMI;

console.log("Is John's BMI greater than Mark? " + isJohnBMIGreater);
