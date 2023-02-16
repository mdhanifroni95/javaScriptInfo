// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
// let minimumScore = 100;
// if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas Wins the Trophy");
// } else if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphin Wins the Trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both Team Wins the Trophy");
// }

// Bonus 1

let scoreDolphins = (97 + 112 + 101) / 3;
let scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);
let minimumScore = 100;
if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
  console.log("Dolphins Wins the Trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore) {
  console.log("Koalas Wins the Trophy");
} else if (
  scoreKoalas === scoreDolphins &&
  scoreKoalas >= minimumScore &&
  scoreDolphins >= minimumScore
) {
  console.log("Both Teams wins the trophy");
} else {
  console.log("No Teams wins the Trophy");
}
