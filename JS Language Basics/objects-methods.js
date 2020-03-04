//first way
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  familyMember: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    return 2020 - this.birthYear;
  }
};

console.log(john.calcAge());

john.age = john.calcAge(); //in the last lecture we learned that we can create key inside an object @runtime.
console.log(john);

//2nd way
var Mike = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  familyMember: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    this.age = 2020 - this.birthYear; //will create an age key inside the object, and assign a value to it, 'this' refers to the object itself
  }
};
