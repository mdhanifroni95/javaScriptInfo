const massMark = 78;
const hightMark = 1.69;
const massJohn = 92;
const hightJohn = 1.95;
const markBMI = massMark / hightMark ** 2;
const johnBMI = massJohn / (hightJohn * hightJohn);
const markHigherBMI = markBMI < johnBMI;
console.log({ markBMI, johnBMI, markHigherBMI });
