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
const textField02 = document.getElementsByClassName("secondTextField")[0];
const submit = document.getElementsByClassName("submit")[0];
const btnInvertWords = document.getElementById("invertWord");
const btnDupliWords = document.getElementById("dupliWords");
const btnPalindrome = document.getElementById("Palindrome");
const btnDeletePattern = document.getElementById("deletePattern");

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
    textField02.style.display = "inline-block";
    textField02.type = "number";
    textField02.min = 1;
    textField02.max = 1000;
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no sentence to cut";
            response.style.color = "red";
        }
        else if (textField02.value > textField.value.length) {
            response.innerHTML = "The number is bigger than the length of the sentence";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `The sentence is ${excer.cutString(textField.value, textField02.value)}`;
        }
    }
}

btnSplitWords.onclick = function () {
    functionName.innerHTML = "Separate by Character"
    modal.style.display = "block";
    textField02.style.display = "inline-block";
    introText.textContent = `Enter a sentence with several words
    and a character to separate those words, if none character is entered than it will separate by spaces.`
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no sentence to split";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `The words are ${excer.splitString(textField.value, textField02.value)}`;
        }
    }
}

btnRepWords.onclick = function () {
    functionName.innerHTML = "Repeat Sentence"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence, the number of times you want to repeat it
    and press submit to show the sentence repeated.`
    textField02.style.display = "inline-block";
    textField02.type = "number";
    textField02.min = 1;
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no sentence to repeat";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `Sentences: ${excer.repeatString(" " + textField.value, textField02.value)}`;
        }
    }

}

btnInvertWords.onclick = function () {
    functionName.innerHTML = "Reverse Words"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence to be reversed.`
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML =
                `There are no sentence to be reversed`;
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `Sentence:
            ${excer02.invertSring(textField.value)}`;
        }
    }

}

btnDupliWords.onclick = function () {
    functionName.innerHTML = "Duplicated Words"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence, a word in the sentence and
    press submit to know if how many times that word is in the sentence.`
    textField02.style.display = "inline-block";
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no sentence to check";
            response.style.color = "red";
        }
        else if (textField02.value === "") {
            response.innerHTML = "There are no words to check in the sentence";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `Sentences:
            ${excer02.duplicatedWords(textField.value, textField02.value)}`;
        }
    }

}

btnPalindrome.onclick = function () {
    functionName.innerHTML = "Palindrome"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence and press submit to know if the sentence is a palindrome.`
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML =
                `There are no sentence to be reversed`;
            response.style.color = "red";
        }
        else {
            if (excer02.palindrome(textField.value)) {
                response.style.color = "black";
                response.innerHTML = `The Sentence is a palindrome`
            }
            else {
                response.style.color = "black";
                response.innerHTML = `The Sentence is not a palindrome`
            }
        }
    }

}

btnDeletePattern.onclick = function () {
    functionName.innerHTML = "Delete Pattern"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence, a pattern that is in the sentence and
    press submit to delete that pattern from the sentence.`
    textField02.style.display = "inline-block";
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no sentence to check";
            response.style.color = "red";
        }
        else if (textField02.value === "") {
            response.innerHTML = "There are no patterns to delete in the sentence";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `New Sentence:
            ${excer02.deletePattern(textField.value, textField02.value)}`;
        }
    }

}


span.onclick = function () {
    modal.style.display = "none";
    response.textContent = "";
    textField02.style.display = "none";
    textField02.type = "text";
}