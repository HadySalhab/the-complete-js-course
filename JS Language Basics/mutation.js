var firstName = "John";
var age = 28;

//javascript automatically convert age to string (type coersion)
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;
console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

//Variable mutation
age = "twenty eight"; //js is dynamic type language
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
