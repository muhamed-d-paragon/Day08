var sum = 0;

function addThree() {
return sum = sum + 3;
}
function addFive() {
return sum = sum + 5;
}

console.log(addThree());
console.log(addFive());

addThree();
addFive();

module.exports = {
    addThree,
    addFive
};