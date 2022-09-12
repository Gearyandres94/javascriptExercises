const invertSring = (word) => {
    const resArray = [];
    for (i = word.length - 1; i > -1; i--) {
        resArray.push(word[i]);
    }
    return resArray
};

const duplicatedWords = (phrase, word) => {
    let words = phrase.split(" ");
    wordMap = words.map(x => { if (x === word) x })
    return wordMap.length;
};

const palindrome = (str) => {
    if (typeof str === 'string') {
        const re = /[\W_]/g;
        const lowRegStr = str.toLowerCase().replace(re, '');
        const reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    };
}

export default { invertSring, duplicatedWords, palindrome }