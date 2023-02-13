const massMark = 78;
const hightMark = 1.69;
const massJohn = 92;
const hightJohn = 1.95;
const markBMI = massMark / hightMark ** 2;
const johnBMI = massJohn / (hightJohn * hightJohn);
if (markBMI > johnBMI) {
  console.log(`Mark BMI:${markBMI} is Higher than john BMI:${johnBMI}`);
} else {
  console.log(`john BMI:${johnBMI} is Higher than Mark BMI:${markBMI}`);
}
