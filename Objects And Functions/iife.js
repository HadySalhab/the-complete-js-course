//Immediately invoked function expression.
// function game() {
//   let score = Math.random * 10;
//   console.log(score >= 5);
// }

// game();

//good to obtain privacy
//this iife will invoke immediately all the expression in it, and returns hello
// const msg = (function() {
//   let score = Math.random() * 10;
//   console.log(score >= 5);
//   return "hello";
// })();

const msg2 = (function() {
  let score = Math.random() * 10;
  console.log(score >= 5);
  function getScore() {
    return score;
  }
  return {
    getScore
  };
})();
//iffe will invoke all the expressions in it, does not invoke getScore() ofcourse and returns an object that has getScore:getScore() property and assign it to ms2.
//with the help of closure, will have access to the private properties, when invoking getScore();
//msg2 = {getScore}

let score = msg2.getScore();
console.log(score);
