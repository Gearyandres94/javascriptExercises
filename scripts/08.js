const sortArray = (str) => {
    const arrayNum = str.split(',').map(Number), arr1 = arrayNum.sort((a, b) => a - b), arr2 = [];
    for (let i = arr1.length - 1; i >= 0; i--) arr2.push(arr1[i]);
    const responseObj = { arr1, arr2 };
    return responseObj;
};

const deleteDuplicated = (str) => {
    const arrayNum = str.split(',').map(Number);
    const uniqueNum = [...new Set(arrayNum)];
    return `The original numbers are [${arrayNum.join()}] the numbers without
    duplicates are [${uniqueNum.join()}]`;
};

const arrayMedian = (str) => {
    const arrayNum = str.split(',').map(Number);
    let response = 0;
    for (let num of arrayNum) response += num;
    response = response / arrayNum.length;
    return `The median of [${arrayNum.join()}] is ${response}`
};

export default { sortArray, deleteDuplicated, arrayMedian };