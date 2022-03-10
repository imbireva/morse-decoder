const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    MORSE_TABLE['**********'] = ' '; // add space to our dictionary
    let strings = []; // array for "letters" (1 letter - 10 symbols)
    let withoutZeroArr = []; // array for numbers (without start zeros) and **********-strings
    let dotsDashesArr = []; // array for dots and dashes and **********-strings
    let result = '';
    
    let counter = expr.length / 10; // get number of "letters" (1 letter - 10 symbols)

    for (let i = 0; i < counter; i++) {
        strings.push(expr.slice(0, 10)); // put 10-symbols-slices to array 
        expr = expr.slice(10); // cut our expression to put next 10-symbols-slice in future
    }

    strings.forEach((item) => {
        if (item.includes('*') === false) {
            item = Number(item);  // delete zeros ('00011' -> 11)
        }
        withoutZeroArr.push(item);
    })

    withoutZeroArr.forEach((item) => { // replace (заменяем) letters 
        item = String(item).replace(/10/g, '.');
        item = String(item).replace(/11/g, '-');
        dotsDashesArr.push(item);
    })

    dotsDashesArr.forEach((item) => {
        result = result + MORSE_TABLE[item];
    })

    return result;
}

module.exports = {
    decode
}