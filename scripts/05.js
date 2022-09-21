const binToDecimal = (num, rB) => rB === 'B' ? Number(num).toString(2) : parseInt(num, 2);
const discount = (num, discount) => num - num * (discount * 0.01);
const yearsPassed = (date) => {
    const olderDate = new Date(date);
    const diffTime = Math.abs(Date.now() - olderDate);
    const diffyears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    return diffyears;
}

export default { binToDecimal, discount, yearsPassed }