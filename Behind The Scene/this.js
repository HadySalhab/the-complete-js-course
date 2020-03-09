console.log(this); //window object

calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this); //window
}

var john = {
  name: "John",
  yearOfBirth: 1989,
  calculateAge: function() {
    console.log(this); //john object
    console.log(2020 - this.yearOfBirth);

    // function innerFunction() {
    //   console.log(this); //window, strange!!! select the default object which is the window in the browser
    //   innerFunction();
    // }
  }
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};

//Method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge(); //invoke it , we use paranthesis
