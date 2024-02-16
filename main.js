// DOM declaration
const sectionOne = document.querySelector(".section-one");
const sectionTwo = document.querySelector(".section-two")
const sectionThree = document.querySelector('.section-three');

const randomSign = document.querySelector('.random-alphabets');

const btnOne = document.querySelector(".btn-one")
const btnThree = document.querySelector('.btn-three')
// DOM declaration

// adding addEventListener
btnOne.addEventListener('click', () => {
    sectionOne.style.display = 'none';
    sectionTwo.style.display = 'block';
    sectionThree.style.display = 'none';
    continueGame();
})

btnThree.addEventListener('click', () => {
    sectionThree.style.display = 'none';
    sectionOne.style.display = 'none';
    sectionTwo.style.display = 'block';
})
// adding addEventListener

// random number generator
function generateRandomAlphabet() {
    const allAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = allAlphabets.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}
// random number generator

function continueGame() {
    const alphabet = generateRandomAlphabet();
    randomSign.innerText = alphabet;
}


