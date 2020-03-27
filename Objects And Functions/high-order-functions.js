// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, func) {
//   var arrRes = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrRes.push(func(arr[i]));
//   }
//   return arrRes;
// }
// function calculateAge(el) {
//   return 2020 - el;
// }
// function isFullAge(el) {
//   return el >= 18;
// }
// function maxHeartRate(el) {
//   if (el > 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   }
//   return -1;
// }
// let ages = arrayCalc(years, calculateAge);
// console.log(ages);

// console.log(arrayCalc(ages, isFullAge));
// console.log(arrayCalc(ages, maxHeartRate));

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log(`hello ${name}, what do you do?`);
    };
  }
}
let teacherQuestion = interviewQuestion("teacher");
let designerQuestion = interviewQuestion("designer");
teacherQuestion("hady");
designerQuestion("john");

interviewQuestion("teacher")("Mark");
