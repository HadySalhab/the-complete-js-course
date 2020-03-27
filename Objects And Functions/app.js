let john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

//FUNCTION CONSTRUCTOR
let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//Similar,//FUNCTION CONSTRUCTOR
// function Person(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

//We know that Prototype is the place where we should add methods and properties, so it can be inherited.
Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};
//Not Very Common to include properties in a prototype.
Person.prototype.lastName = "Smith";

john = new Person("John", 1990, "teacher");
john.calculateAge();

let jane = new Person("Jane", 1969, "designer");
let mark = new Person("Mark", 1948, "Retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

console.log(john);

john.newName = "JOHN";
console.log(john.newName);
