module.exports = function toReadable(number) {
    let arr_ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr_tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr_special_tens =['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let hundreds = Math.floor(number / 100);
    number = number % 100;

    let tens = Math.floor(number / 10);
    let ones = number % 10;

    let answer = '';
    
    let str_hundred = arr_ones[hundreds] + ' hundred';
    if (hundreds == 0) {
        str_hundred = arr_ones[hundreds];
    }

    if (tens == 0) {
        answer += arr_ones[ones];
    }
    else if (tens == 1) {
        answer += arr_special_tens[ones];
    }
    else {
        answer += arr_tens[tens] + arr_ones[ones] ;
    }

    let str_ten = arr_tens[tens];
    let str_ones = arr_ones[ones];
    

    return 0;
}
