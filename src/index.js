module.exports = function toReadable(number) {
    let array = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let hundreds = Math.floor(number / 100); //8
    number = number % 100; //97

    let tens = Math.floor(number / 10); //9
    let ones = number % 10; //7

    let str_hundred = array[hundreds] + ' hundred';
    if (hundreds == 0) {
        str_hundred = array[hundreds];
    }
    console.log(str_hundred);
    return 0;
}
