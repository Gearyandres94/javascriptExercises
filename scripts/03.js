const random = () => (Math.floor(Math.random() * (600 - 501 + 1)) + 501);

const palindromicNumber = (num) => {
    const re = /[\W_]/g;
    const lowRegStr = num.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

const factorial = (num) => {
    let a = 1;
    for (let i = 1; i <= num; i++) a *= i;
    return a;
}

export default { random, palindromicNumber, factorial }