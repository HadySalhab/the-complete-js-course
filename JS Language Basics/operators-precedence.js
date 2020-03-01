var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8*4-6 //32-6 //26 , //it works because assignment operators start from right to left
console.log(x);

//More operators
x = x * 2;
x *= 2;
x += 10;
x++; // x= x + 1
