function randomRangeNumber(minNumber, maxNumber) {
    if (minNumber > maxNumber) {
        return "undefined";
    }
return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
console.log (randomRangeNumber(2, 7));
randomRangeNumber();

module.exports = randomRangeNumber;