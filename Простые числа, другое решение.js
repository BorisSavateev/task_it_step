let simpleNumber = [];
for (let number = 2; number <= 100; number++) {
  simpleNumber.every(item => number%item !==0) ? simpleNumber.push(number) : "";
}
console.log(simpleNumber);