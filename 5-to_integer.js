const arg =Progress.arg[2]
const number = parseInt(arg);
if (isNaN(number)) {
    console.log('not a number');
}
else {
    console.log ('my number' + number);
}