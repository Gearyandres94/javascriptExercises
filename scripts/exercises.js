import excer from './01.js';
import excer02 from './02.js';

const modal = document.getElementsByClassName("modal")[0];
const functionName = document.getElementsByClassName("functionName")[0];
const btnCountChar = document.getElementById("countChar");
const btnCutWords = document.getElementById("cutWord");
const btnSplitWords = document.getElementById("splitWords");
const btnRepWords = document.getElementById("repeatWords");
const span = document.getElementsByClassName("close")[0];
const introText = document.getElementsByClassName("introText")[0];
const textField = document.getElementsByClassName("textField")[0];
const response = document.getElementsByClassName("response")[0];
const secondTextField = document.getElementsByClassName("secondTextField")[0];
const submit = document.getElementsByClassName("submit")[0];

btnCountChar.onclick = function () {
    functionName.innerHTML = "Count Characters"
    modal.style.display = "block";
    introText.textContent = "Enter a sentence to show the number of characters in that sentence."
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "The field is empty";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `The number of characters in the sentence is ${excer.countChar(textField.value)}`;
        }
    }
}

btnCutWords.onclick = function () {
    functionName.innerHTML = "Cut Sentence"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence and a number that represents how many characters
    you don't want to cut and press submit.`;
    secondTextField.style.display = "inline-block";
    secondTextField.type = "number";
    secondTextField.min = 0;
    secondTextField.max = 1000;
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no sentence to cut";
            response.style.color = "red";
        }
        else if (secondTextField.value > textField.value.length) {
            response.innerHTML = "The number is bigger than the length of the sentence";
            response.style.color = "red";
        }
        else if (secondTextField.value == 0) {
            response.innerHTML = "There are no characters to show";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `The sentence is ${excer.cutString(textField.value, secondTextField.value)}`;
        }
    }
}

btnSplitWords.onclick = function () {
    functionName.innerHTML = "Separate by Character"
    modal.style.display = "block";
    secondTextField.style.display = "inline-block";
    introText.textContent = `Enter a sentence with several words
    and a character to separate those words, if none character is entered than it will separate by spaces.`
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no sentence to split";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `The words are ${excer.splitString(textField.value, secondTextField.value)}`;
        }
    }
}

btnRepWords.onclick = function () {
    functionName.innerHTML = "Repeat Sentence"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence, the number of times you want to repeat it
    and press submit to show the sentence repeated.`
    secondTextField.style.display = "inline-block";
    secondTextField.type = "number";
    secondTextField.min = 1;
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no sentence to repeat";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `Sentences: ${excer.repeatString(" " + textField.value, secondTextField.value)}`;
        }
    }

}

span.onclick = function () {
    modal.style.display = "none";
    response.textContent = "";
    secondTextField.style.display = "none";
}