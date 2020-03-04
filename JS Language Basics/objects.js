//Objects and properties
//Similar to array but the storing is key-value pair and the order does not matter
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  familyMember: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john.lastName);
console.log(john.familyMember);

console.log(john["job"]); //way-1 (same as array, but not index-based, instead it is key-based)
console.log(john.job); //way-2

john.job = "designer"; //changing the value of a specific key (way1)
john["isMarried"] = true; //(way2)

console.log(john.gender); //undefined

//second way to declare an object
var jane = new Object();
jane.firstName = "Jane"; //assigning jane value to firstName key
jane.birthYear = 1969;
jane["lastName"] = "Smith"; //assigning Smith value to lastName key
console.log(jane);
