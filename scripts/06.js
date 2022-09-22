
const typeOfLetters = (str) => {
    let vowelRegex = new RegExp(`[aeiouáéíóú]`, 'gi');
    let consonantRegex = new RegExp(`(?![aeiouáéíóú])[a-zñ]`, 'gi');
    let numberOfVocals = 0;
    let numberOfConsonants = 0;
    for (let letter of str) {
        if (letter.match(vowelRegex)) numberOfVocals++;
        if (letter.match(consonantRegex)) numberOfConsonants++;
    }
    return `There are ${numberOfVocals > 0 ? numberOfVocals + " vocal" :
        "no vocals"}${numberOfVocals > 1 ? "s" : ""} and
    ${numberOfConsonants > 0 ? numberOfConsonants + " consonant" :
            "no consonants"}${numberOfConsonants > 1 ? "s" : ""}
    in the sentence.`;
};


const validName = (name) => {
    const nameRegEx = /^[a-zA-ZÑñ'áéíóúÁÉÍÓÚ\s]+$/;
    if (nameRegEx.test(name)) return true
    else return false
}

const validEmail = (email) => {
    const emailRegEx = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    if (emailRegEx.test(email)) return true
    else return false
};


export default { typeOfLetters, validName, validEmail };