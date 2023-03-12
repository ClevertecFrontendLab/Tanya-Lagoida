export const regesp = {
    lettersUpperCase: /[A-ZА-ЯЁ]/,
    numbers: /\d/,
    email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    englishLetters: /[A-Za-z]/,
    englishLettersAndNumbers: /^[A-Za-z0-9]+$/,
    phone: /^\+375\s\((25|29|44|33)\)\s\d\d\d-\d\d-\d\d$/gmui,
}
