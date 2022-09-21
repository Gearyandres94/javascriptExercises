
const typeOfLetters = (str) => {
    let vowelRegex = new RegExp(`[aeiou]`, 'gi');
    let consonantRegex = new RegExp(`(?![aeiou])[a-z]`, 'gi');
    let numberOfVocals = 0;
    let numberOfConsonants = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(vowelRegex)) numberOfVocals++;
        if (str[i].match(consonantRegex)) numberOfConsonants++;
    }
    return `There are ${numberOfVocals > 0 ? numberOfVocals + " vocal" :
        "no vocals"}${numberOfVocals > 1 ? "s" : ""} and
    ${numberOfConsonants > 0 ? numberOfConsonants + " consonant" :
            "no consonants"}${numberOfConsonants > 1 ? "s" : ""}
    in the sentence.`;
};


const validName = (name) => {
    const nameRegEx = /^[a-zA-Z'+ ]+$/;
    if (nameRegEx.test(name)) return true
    else return false
}

const validEmail = (email) => {
    const emailRegEx = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    if (emailRegEx.test(email)) return true
    else return false
};


export default { typeOfLetters, validName, validEmail };