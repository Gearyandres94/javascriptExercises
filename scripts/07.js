const arrayElevatedToSquare = (str) => {
    const arrayNum = str.split(',').map(Number);
    for (let i = 0; i < arrayNum.length; i++) {
        arrayNum[i] *= arrayNum[i];
    }
    return arrayNum.join();
};

const highAndLowNumbers = (str) => {
    const arrayNum = str.split(',').map(Number);
    let lowestNumber = arrayNum[0], highestNumber = arrayNum[0];
    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > highestNumber) highestNumber = arrayNum[i];
        if (arrayNum[i] < lowestNumber) lowestNumber = arrayNum[i];
    }
    return `The biggest number is ${highestNumber} and the smallest number is ${lowestNumber}`;
};

const evenAndOddNumbers = (str) => {
    const arrayNum = str.split(',').map(Number);
    const evenNum = [];
    const oddNum = [];

    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] % 2 !== 0) oddNum.push(arrayNum[i]);
        else evenNum.push(arrayNum[i]);
    }
    return `The even numbers are [${evenNum.join()}] and the odd numbers are [${oddNum.join()}]`;
};



export default { arrayElevatedToSquare, highAndLowNumbers, evenAndOddNumbers }