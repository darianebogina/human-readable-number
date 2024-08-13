module.exports = function toReadable(number) {
    //897
    let hundreds = Math.floor(number / 100); //8
    number = number % 100; //97

    let tens = Math.floor(number / 10); //9
    let ones = number % 10; //7

    return 0;
}
