const john = {
  name: "john",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        `Good ${timeOfDay} ', Ladies and gentlemen! I'm ${this.name} ,I'm ${this.job}, and I'm ${this.age} years old`
      );
    } else if (style === "friendly") {
      console.log(
        `Hey what's up?  I'm ${this.name} ,I'm ${this.job}, and I'm ${this.age} years old. Have a nice ${timeOfDay}.`
      );
    }
  }
};

let emily = {
  name: "Emely",
  age: 35,
  job: "designer"
};

john.presentation("formal", "morning");

//allows us to change the `this` variable , the first parameter
john.presentation.call(emily, "friendly", "afternoon");

//john.presentation.apply(emily,['friendly','afternoon']);

let johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("morning");
johnFriendly("night");

//the first parameter is the `this` keyword,
//bind allows us to clone a function with a fixed argument value.
//emilyFormal , will always have the formal style argument
let emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("morning");

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, func) {
  var arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(func(arr[i]));
  }
  return arrRes;
}
function calculateAge(el) {
  return 2020 - el;
}
function isFullAge(limit, el) {
  return el >= limit;
}

let ages = arrayCalc(years, calculateAge);

//we are passing a 2 arguments function to a function that takes a 1 argument function.
//to overpass this issue, we can use bind that allows us to set a fixed argument value.
//limit = 20 , el will be provided by arrayCalc
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
