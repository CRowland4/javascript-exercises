const palindromes = function(word) {
    const lettersAndNumbersArray = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    let wordArray = word.toLowerCase().split("");
    wordArray = wordArray.filter((char) => lettersAndNumbersArray.includes(char));

    let reverseWordArray = wordArray.slice().reverse();
    for (let i = 0; i < word.length; i++) {
        if (wordArray[i] !== reverseWordArray[i]) {
            return false;
        }
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
