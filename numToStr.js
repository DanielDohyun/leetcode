function numberToWords(number) {
    var units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    var scales = ["", "Thousand", "Lakh", "Crore"];

    function toWords(number, scaleIndex = 0) {
        let words = [];
        let remainder = number;

        // Split the number in hundreds, remainder
        let hundreds = Math.floor(remainder / 100);
        remainder = remainder % 100;

        // Split the remainder in tens, remainder
        let _tens = Math.floor(remainder / 10);
        remainder = remainder % 10;

        // ScaleIndex 0 for < 1000, 1 for < 100_000 and so on
        if(scaleIndex > 0 && (hundreds > 0 || _tens > 0 || remainder > 0)) {
            words.push(scales[scaleIndex]);
        }

        if(hundreds > 0) {
            words.push(units[hundreds]);
            words.push("Hundred");
        }

        if (_tens > 1) {
            words.push(tens[_tens]);
        }
        
        if (_tens === 1 && remainder > 0) {
            words.push(teens[remainder]);
            remainder = 0;
        }

        if (remainder > 0) {
            words.push(units[remainder]);
        }

        return words;
    }

    if (number === 0) return "Zero";

    let wordList = [];

    let crore = Math.floor(number / 1_00_00_000);
    number = number % 1_00_00_000;

    let lakh = Math.floor(number / 1_00_000);
    number = number % 1_00_000;

    let thousand = Math.floor(number / 1000);
    number = number % 1000;

    if(crore > 0) {
        wordList = [...wordList, ...toWords(crore, 3)];
    }

    if(lakh > 0) {
        wordList = [...wordList, ...toWords(lakh, 2)];
    }

    if(thousand > 0) {
        wordList = [...wordList, ...toWords(thousand, 1)];
    }

    if(number > 0) {
        wordList = [...wordList, ...toWords(number)];
    }

    return wordList.join(" ");
}

// Example
console.log(numberToWords(65237819)); // Sixty Five Lakh Twenty Three Thousand Seven Hundred Nineteen
