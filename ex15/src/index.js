function convertToInt(str) {
    var a = parseInt(str, 16);
    return a;
}
console.log (convertToInt("BA"));
console.log (convertToInt("F1"));
console.log (convertToInt("JeffBezos"));
convertToInt();
module.exports = convertToInt;