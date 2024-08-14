module.exports = function toReadable(number) {
    let arr_ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr_tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr_special_tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let hundreds = Math.floor(number / 100);
    number = number % 100;

    let tens = Math.floor(number / 10);
    let ones = number % 10;

    let answer = [];

    if (hundreds != 0) {
        let str_hundred = arr_ones[hundreds] + ' hundred';
        answer.push(str_hundred);
    }

    if (tens == 1) {
        answer.push(arr_special_tens[ones]);
    }

    else if (tens != 0) {
        answer.push(arr_tens[tens]);
        if (ones != 0) {
            answer.push(arr_ones[ones]);
        }
    }

    else if ((tens == 0) && (ones != 0)){
        answer.push(arr_ones[ones]);
    }

    

    return answer.join(' ');
}
