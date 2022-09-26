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
    for (let num of arrayNum) {
        if (num > highestNumber) highestNumber = num;
        if (num < lowestNumber) lowestNumber = num;
    }
    return `The biggest number is ${highestNumber} and the smallest number is ${lowestNumber}`;
};

const evenAndOddNumbers = (str) => {
    const arrayNum = str.split(',').map(Number);
    const evenNum = [], oddNum = [];

    for (let num of arrayNum) num % 2 !== 0 ? oddNum.push(num) : evenNum.push(num);

    return `The even numbers are [${evenNum.join()}] and the odd numbers are [${oddNum.join()}]`;
};



export default { arrayElevatedToSquare, highAndLowNumbers, evenAndOddNumbers }