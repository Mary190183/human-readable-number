module.exports = function toReadable (number) {
    let zero = 'zero'
    let one_nineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let scales = ['', 'hundred', 'thousand', 'million', 'billion', 'trillion'];
    let numberString = number.toString();
        if(number == 0) {
            return zero;
        }
        if(number < 20) {
            return one_nineteen[number];
        }
    
    
        if (numberString.length == 2) {
            return (tens[numberString[0]] + ' ' + one_nineteen[numberString[1]]).trim();
        }
        
        if (numberString.length == 3) {
            if (numberString[1] == '0' && numberString[2] == '0')
              return (one_nineteen[numberString[0]] +' '+ scales[1]).trim();
            else
              return (one_nineteen[numberString[0]] +' '+ scales[1] +' '+ toReadable(+(numberString[1] + numberString[2]))).trim();
          }
    
    }
