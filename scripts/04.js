const primeNumber = (num) => {
    for (let i = 2; i < Math.abs(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

const numberIsEven = (num) => num % 2 == 0 ? true : false;

const celsiusToFarenheitConverter = (num, f) => f !== 'F' ? num * 1.8 + 32 : (num - 32) * 0.5556;

export default { primeNumber, numberIsEven, celsiusToFarenheitConverter }