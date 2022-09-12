const countChar = (str) => str.length;

const cutString = (str, num) => str.slice(0, num);

const splitString = (cadena, char) => {
    const arr = char === "" ? cadena.split(" ") : cadena.split(char);
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + ", ";
    }
    return str;
}

const repeatString = (str, num) => str.repeat(num);

export default { countChar, cutString, splitString, repeatString };
