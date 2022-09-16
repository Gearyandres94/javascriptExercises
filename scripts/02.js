const invertSring = (word) => {
    const resArray = [];
    for (let i = word.length - 1; i > -1; i--) {
        resArray.push(word[i]);
    }
    return resArray.join("");
};

const duplicatedWords = (phrase, word) => {
    let words = phrase.toLowerCase().split(" ");
    const wordMap = words.filter(x => {
        if (x === word.toLowerCase()) return x;
    })
    return wordMap.length;
};

const palindrome = (str) => {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

const deletePattern = (str, chars) => {
    const regEx = new RegExp(`${chars}`, 'g');
    str = str.replace(regEx, "");
    return str;
}

export default { invertSring, duplicatedWords, palindrome, deletePattern }