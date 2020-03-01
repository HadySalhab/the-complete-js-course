// console.log("Hello World !!!");

// var firstName = "John";
// console.log(firstName);

// var lastName = "Doe";

// var age = 25;

// var fullAge = true;

// console.log(fullAge);

// var job;
// console.log(job);

// job = "teacher";
// console.log(job);

//NUll means non-existent
//Undefined means that the variable does not have a value yet
//variables cannot start with numbers, they should start either with $ sign , character or underscore

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
