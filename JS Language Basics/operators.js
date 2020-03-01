var now, yearJohn, yearMark;
now = 2020;
ageMark = 33;
ageJohn = 28;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

//Math Operators
console.log(yearJohn);
console.log(now + 2);
console.log(now - 2);
console.log(now / 2);
console.log(now * 2);
console.log(now % 2);

//Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeOf operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
