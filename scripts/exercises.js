import ex from './01.js';
import ex02 from './02.js';
import ex03 from './03.js';
import ex04 from './04.js';
import ex05 from './05.js';
import ex06 from './06.js';
import ex07 from './07.js';
import ex08 from './08.js';

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
const btnPalindrome = document.getElementById("palindrome");
const btnDeletePattern = document.getElementById("deletePattern");
const btnRandom = document.getElementById("random");
const btnPalindromeNumber = document.getElementById("palindromeNumber");
const btnFactorial = document.getElementById("factorial");
const btnIsPrimeNumber = document.getElementById("primeNumber");
const btnIsNumberEven = document.getElementById("numberIsEven");
const btnCelsiusToFahrenheitConverter = document.getElementById("celsiusToFahrenheitConverter");
const tempAll = document.getElementsByClassName("temp");
const btnNumericalConverter = document.getElementById("numericalConverter");
const btnDiscount = document.getElementById("discount");
const btnYearsPassed = document.getElementById("yearsPassed");
const btnNumberOfLetters = document.getElementById("numberOfLetters");
const btnValidName = document.getElementById("validName");
const btnValidEmail = document.getElementById("validEmail");
const btnArrayElevatedToSquare = document.getElementById("arrayElevatedToSquare");
const btnHighAndLowNumbers = document.getElementById("highAndLowNumbers");
const btnOddAndEvenNumber = document.getElementById("oddAndEvenNumber");
const btnSortArray = document.getElementById("sortArray");
const btnDeleteDuplicated = document.getElementById("deleteDuplicated");
const btnArrayMedian = document.getElementById("arrayMedian");
const btnMovieDatabase = document.getElementById("movieDatabase");

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
            response.innerHTML = `The number of characters in the sentence is ${ex.countChar(textField.value)}`;
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
            response.innerHTML = `The sentence is ${ex.cutString(textField.value, textField02.value)}`;
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
            response.innerHTML = `The words are ${ex.splitString(textField.value, textField02.value)}`;
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
            response.innerHTML = `Sentences: ${ex.repeatString(" " + textField.value, textField02.value)}`;
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
            ${ex02.invertSring(textField.value)}`;
        }
    }

}

btnDupliWords.onclick = function () {
    functionName.innerHTML = "Duplicated Words"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence, a word in the sentence and
    press submit to know how many times that word is in the sentence.`
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
            ${ex02.duplicatedWords(textField.value, textField02.value)}`;
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
            if (ex02.palindrome(textField.value)) {
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
            ${ex02.deletePattern(textField.value, textField02.value)}`;
        }
    }

}

btnRandom.onclick = function () {
    functionName.innerHTML = "Random Number"
    modal.style.display = "block";
    introText.textContent = "Press submit to show a number between 501 and 600."
    textField.style.display = "none";
    submit.onclick = function () {
        response.innerHTML = ex03.random();
    }
}

btnPalindromeNumber.onclick = function () {
    functionName.innerHTML = "Palindrome Number"
    modal.style.display = "block";
    textField.type = "number";
    introText.textContent = "Enter a number and press submit to know if that number is a Palindrome Number."
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "The field is empty";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            if (ex03.palindromicNumber(textField.value)) response.innerHTML = `The number  is a palindrome number`;
            else response.innerHTML = `The number  is not a palindrome number`;
        }
    }
}

btnFactorial.onclick = function () {
    functionName.innerHTML = "Factorial"
    modal.style.display = "block";
    textField.type = "number";
    introText.textContent = "Enter a number and press submit to know the factorial of that number."
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "The field is empty";
            response.style.color = "red";
        }
        else if (textField.value < 1) {
            response.innerHTML = "The value can not be less than 1";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ex03.factorial(textField.value);
        }
    }
}

btnIsPrimeNumber.onclick = function () {
    functionName.innerHTML = "Is Number a Prime?"
    modal.style.display = "block";
    textField.type = "number";
    introText.textContent = `Enter a number a press submit to know if the number is prime.`
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "The field is empty";
            response.style.color = "red";
        }
        else if (textField.value == 0) {
            response.innerHTML = "0 is a composite number";
            response.style.color = "black";
        }
        else if (textField.value == 1) {
            response.innerHTML = "1 is not a prime or a composite number";
            response.style.color = "black";
        }
        else {
            response.style.color = "black";
            if (ex04.primeNumber(textField.value)) response.innerHTML = `${textField.value} is a prime number`;
            else response.innerHTML = `${textField.value} is a composite number`;
        }
    }
}

btnIsNumberEven.onclick = function () {
    functionName.innerHTML = "Is Number even?"
    modal.style.display = "block";
    textField.type = "number";
    introText.textContent = `Enter a number a press submit to know if the number is an even number.`
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "The field is empty";
            response.style.color = "red";
        }
        else {
            response.style.color = "black";
            if (ex04.numberIsEven(textField.value)) response.innerHTML = `${textField.value} is even`;
            else response.innerHTML = `${textField.value} is odd`;
        }
    }
}

btnCelsiusToFahrenheitConverter.onclick = function () {
    functionName.innerHTML = "Temperature Converter"
    for (let i = 0; i < tempAll.length; i++) {
        tempAll[i].style.display = "inline-block";
    }
    tempAll[1].innerHTML = "C";
    tempAll[3].innerHTML = "F";
    textField.type = "number";
    modal.style.display = "block";
    introText.textContent = `Enter a number, select F to convert from Celsius to Farenheit or C to
    convert from Farenheit to Celsius and press submit to do the conversion.`
    submit.onclick = function () {
        if (textField.value === "") {
            response.style.color = "red";
            response.innerHTML = "There are no numbers to convert";
        }
        else if (isNaN(textField.value)) {
            response.style.color = "red";
            response.innerHTML = "The value of the field is not a number.";
        }
        else if (isNaN(textField.value)) {
            response.style.color = "red";
            response.innerHTML = "The value of the field is not a number";
        }
        else {
            response.style.color = "black";
            if (tempAll[0].checked) response.innerHTML = `The new Temperature is
                ${Math.round(ex04.celsiusToFarenheitConverter(textField.value, 'C'))}?? C`;

            else response.innerHTML = `The new Temperature is
                ${Math.round(ex04.celsiusToFarenheitConverter(textField.value, 'F'))}?? F`;
        }
    }

}

btnNumericalConverter.onclick = function () {
    functionName.innerHTML = "Number Converter"
    for (let i = 0; i < tempAll.length; i++) {
        tempAll[i].style.display = "inline-block";
    }
    tempAll[1].innerHTML = "B";
    tempAll[3].innerHTML = "D";
    modal.style.display = "block";
    textField.type = "number";
    introText.textContent = `Enter a number, select B to convert from decimal to binary or D to
    convert from Binary to decimal and press submit to do the conversion.`
    submit.onclick = function () {
        if (textField.value === "") {
            response.style.color = "red";
            response.innerHTML = "There are no numbers to convert.";
        }
        else {
            response.style.color = "black";
            if (tempAll[0].checked) {
                response.innerHTML = `The new number is
                ${ex05.binToDecimal(textField.value, 'B')}.`;
            }
            else {
                if (!checkString(textField.value)) {
                    response.style.color = "red";
                    response.innerHTML = `The number entered is not a binary.`
                }
                else response.innerHTML = `The new number is
                ${ex05.binToDecimal(textField.value, 'D')}.`;

            }
        }
    }

}

btnDiscount.onclick = function () {
    functionName.innerHTML = "Apply Discount"
    modal.style.display = "block";
    introText.textContent = `Enter a number, and a discount you want to apply to that number and
    press submit to apply it.`
    textField.type = "number";
    textField02.type = "number";
    textField02.style.display = "inline-block";
    submit.onclick = function () {
        if (textField.value === "") {
            response.innerHTML = "There are no number to apply that discount";
            response.style.color = "red";
        }
        else if (textField02.value === "") {
            response.innerHTML = "There are no discount to apply to the number";
            response.style.color = "red";
        }
        else if (textField02.value < 1) {
            response.style.color = "red";
            response.innerHTML = "The discount can not be negative or zero.";
        }
        else if (textField02.value > 99) {
            response.style.color = "red";
            response.innerHTML = "The discount can't be bigger than 99.";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `New Sentence:
            ${ex05.discount(textField.value, textField02.value)}`;
        }
    }

}

btnYearsPassed.onclick = function () {
    functionName.innerHTML = "How Many Years Have Passed?"
    modal.style.display = "block";
    textField.type = "date";
    introText.textContent = `Select a date and press submit to know how many years have passed from that date.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to select a date.";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ` ${ex05.yearsPassed(textField.value)} years have passed since that date`;
        }

    }
}

btnNumberOfLetters.onclick = function () {
    functionName.innerHTML = "How Many Consonants and Vocals Are There?"
    modal.style.display = "block";
    introText.textContent = `Enter a sentence and press submit to know the number of consonants
    and vocals are in the sentence.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter a sentence.";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ex06.typeOfLetters(textField.value);
        }

    }
}

btnValidName.onclick = function () {
    functionName.innerHTML = "Is The Name Valid?"
    modal.style.display = "block";
    introText.textContent = `Enter a name and press submit to check if it's valid.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter a name.";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ex06.validName(textField.value) ? `The name is valid` : `The name is invalid`;
        }

    }
}

btnValidEmail.onclick = function () {
    functionName.innerHTML = "Is The Email Valid?"
    modal.style.display = "block";
    introText.textContent = `Enter an email and press submit to check if it's valid.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter an email.";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ex06.validEmail(textField.value) ? `The email is valid` : `The email is invalid`;
        }

    }
}

btnArrayElevatedToSquare.onclick = function () {
    functionName.innerHTML = "Array raised to Power 2"
    modal.style.display = "block";
    introText.textContent = `Enter several numbers separated by a "," and press submit
    to raise all the numbers to potency 2.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter at least a number";
        }
        else if (!checkArrayMembers(textField.value)) {
            response.style.color = "red";
            response.innerHTML = "One of the entered numbers is not a number, please check it";
        }
        else {
            response.style.color = "black";
            response.innerHTML = `The numbers raised to potency 2 are
            ${ex07.arrayElevatedToSquare(textField.value)}`;
        }

    }
}

btnHighAndLowNumbers.onclick = function () {
    functionName.innerHTML = "Highest And Low Numbers"
    modal.style.display = "block";
    introText.textContent = `Enter several numbers separated by a "," and press submit
    to know which is the biggest and the smallest.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter at least a number";
        }
        else if (!checkArrayMembers(textField.value)) {
            response.style.color = "red";
            response.innerHTML = "One of the entered numbers is not a number, please check it";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ex07.highAndLowNumbers(textField.value);
        }

    }
}

btnOddAndEvenNumber.onclick = function () {
    functionName.innerHTML = "Even And Odd Numbers"
    modal.style.display = "block";
    introText.textContent = `Enter several numbers separated by a "," and press submit
    to know which are the odd numbers and which are the even numbers.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter at least a number";
        }
        else if (!checkArrayMembers(textField.value)) {
            response.style.color = "red";
            response.innerHTML = "One of the entered numbers is not a number, please check it";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ex07.evenAndOddNumbers(textField.value);
        }

    }
}

btnSortArray.onclick = function () {
    functionName.innerHTML = "Order The Numbers"
    modal.style.display = "block";
    introText.textContent = `Enter several numbers separated by a "," and press submit
    to order them from minor to mayor and mayor to minor.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter at least a number";
        }
        else if (!checkArrayMembers(textField.value)) {
            response.style.color = "red";
            response.innerHTML = "One of the entered numbers is not a number, please check it";
        }
        else {
            response.style.color = "black";
            const resp = ex08.sortArray(textField.value);
            response.innerHTML = `The numbers sorted from minor to mayor are [${resp.arr1}]
            and from mayor to minor are [${resp.arr2}]`;
        }

    }
}

btnDeleteDuplicated.onclick = function () {
    functionName.innerHTML = "Delete Duplicates"
    modal.style.display = "block";
    introText.textContent = `Enter several numbers separated by a "," and press submit
    to delete the duplicated numbers.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter at least a number";
        }
        else if (!checkArrayMembers(textField.value)) {
            response.style.color = "red";
            response.innerHTML = "One of the entered numbers is not a number, please check it";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ex08.deleteDuplicated(textField.value);
        }

    }
}

btnArrayMedian.onclick = function () {
    functionName.innerHTML = "Median Of a Group Of Numbers"
    modal.style.display = "block";
    introText.textContent = `Enter several numbers separated by a "," and press submit
    to know the median of those numbers.`
    submit.onclick = function () {
        if (!textField.value) {
            response.style.color = "red";
            response.innerHTML = "You need to enter at least a number";
        }
        else if (!checkArrayMembers(textField.value)) {
            response.style.color = "red";
            response.innerHTML = "One of the entered numbers is not a number, please check it";
        }
        else {
            response.style.color = "black";
            response.innerHTML = ex08.arrayMedian(textField.value);
        }

    }
}

btnMovieDatabase.onclick = function () {
    functionName.innerHTML = "Class Movie";
    textField.style.display = "none";
    modal.style.display = "block";
    introText.textContent = `This exercise can only be seen in the console.
    Please open the console and press submit.`;
    submit.onclick = function () {
        response.style.color = "black";
        response.innerHTML = "Running exercises";
        console.info(`It's being created an instance of a class called Movie with several
        parameters. `)
        // const movie01 = new Movie({
        //     id: `aa1234567`,
        //     director: "Dom",
        //     title: "Abba",
        //     year: 2020,
        //     country: ["Cuba"],
        //     genres: ["Comedy"],
        //     score: 6.789
        // });
        // movie01.showMovieData();
        const movieArray = [
            {
                id: `aa1234567`,
                director: "Dom",
                title: "Dark Knight",
                year: 2020,
                country: ["Cuba"],
                genres: ["Comedy"],
                score: 6.789
            },
            {
                id: `aa1234567`,
                director: "Dom",
                title: "Into the wild",
                year: 2020,
                country: ["Cuba"],
                genres: ["Comedy"],
                score: 6.789
            },
            {
                id: `aa1234567`,
                director: "Rocky Balboa",
                title: "Abba",
                year: 2020,
                country: ["Cuba"],
                genres: ["Comedy"],
                score: 6.789
            }
        ]
        movieArray.forEach(el => new Movie(el).showMovieData());
    }
}

function checkString(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "0" && str[i] !== "1") {
            return false;
        }
    } return true
}

function checkArrayMembers(str) {
    const arrayNum = str.split(',').map(Number);
    for (let num of arrayNum) if (isNaN(num)) return false;
    return true;
}


class Movie {
    constructor({ id, title, director, year, country, genres, score }) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.country = country;
        this.genres = genres;
        this.score = score;

        this.validateIMDB(id);
        this.validateTitle(title);
        this.validateDirector(director);
        this.validateYear(year);
        this.validateCountry(country);
        this.validateGenre(genres);
        this.validateScore(score);
    }
    validateNumber(property, value) {
        if (!value) return console.warn(`${property} "${value}" is empty.`);
        if (typeof value !== "number") return console.error(`${property} "${value}" is not a Number`);
        return true;
    }

    validateString(str, value) {
        if (!value) return console.warn(`${str} "${value}" is empty.`);
        if (typeof value !== "string") return console.error(`${str} "${value}" is not a String`);
        return true;
    }

    validateArray(property, value) {
        if (!value) return console.warn(`${property} "${value}" is empty.`);
        if (!(value instanceof Array)) return console.error(`${property} "${value}" is not an array`);

        if (value.length === 0) return console.error(`${property} "${value}" is an empty array`);

        for (let str of value) {
            if (typeof str !== "string") return console.error(`${str} is not a String`);
        }
    }

    validateIMDB(id) {
        if (this.validateString("IMDB ID", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`"IMDB ID" ${id}
            is not valid, it should have 9 chars,
            the 2 first should be lowercase letters, and the rest numbers`)
        }
    };

    validateTitle(title) {
        if (this.validateString("Title", title)) {
            this.validateStringLength("Title", title, 100);
        }
    };

    validateDirector(director) {
        if (this.validateString("Director", director)) {
            this.validateStringLength("Director", director, 50);
        }
    };

    validateYear(year) {
        if (this.validateNumber("Release Year", year)) {
            if (!(/^([0-9]){4}$/.test(year))) return console.error(`"Release Year" ${year}
            is not valid, it should be a number of 4 digits`);
        }
    };

    validateCountry(country) {
        this.validateArray("Country", country);
    }

    validateGenre(genres) {
        this.validateArray("Genres", genres);
        for (let genre of genres) if (!Movie.getGenres().includes(genre)) {
            console.error(`Incorrect Genres ${genres.join()}`);
            Movie.acceptedGenres();
        }
    }

    validateScore(score) {
        if (this.validateNumber("Score", score)) {
            return (score < 0 || score > 10) ?
                console.error(`The score should be in a range between 0 and 10`)
                : this.score = score.toFixed(1);
        }
    };

    validateStringLength(property, value, max) {
        if (value.length > max) return console.error(`${property} "${value}
        it's bigger than the number of allowed characters"`);
        return true;
    }

    static getGenres() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography",
            "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir",
            "Game Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality",
            "Romance", "SciFi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static acceptedGenres() {
        return console.info(`The accepted Genres are ${Movie.getGenres().join()}`);
    }

    showMovieData() {
        console.info(`Data of the Movie:\nTitle:"${this.title}".\nDirector:"${this.director}".
        Release Year:"${this.year}".\nCountry: "${this.country}".\nGenres:"${this.genres.join()}".Score: "${this.score}".
        IMDB Id: "${this.id}".`);
    }
}



span.onclick = function () {
    modal.style.display = "none";
    response.textContent = "";
    textField.style.display = "inline-block";
    textField02.style.display = "none";
    textField.type = "text";
    textField02.type = "text";
    textField.value = "";
}