function retirement(retirementAge) {
  let a = " Years left until retirement";
  return function(yearOfBirth) {
    let age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

let retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);

let retirementGermany = retirement(55);

retirementGermany(1990);

// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function(name) {
//       console.log(name + ", can you please explain what UX design is?");
//     };
//   } else if (job === "teacher") {
//     return function(name) {
//       console.log("What subject do you teach, " + name + "?");
//     };
//   } else {
//     return function(name) {
//       console.log(`hello ${name}, what do you do?`);
//     };
//   }
// }

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log(`hello ${name}, what do you do?`);
    }
  };
}
