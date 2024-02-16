// DOM declaration
const sectionOne = document.querySelector(".section-one");
const sectionTwo = document.querySelector(".section-two")
const sectionThree = document.querySelector('.section-three');

const btnOne = document.querySelector(".btn-one")
const btnThree = document.querySelector('.btn-three')
// DOM declaration

// adding addEventListener
btnOne.addEventListener('click', () => {
    sectionOne.style.display = 'none';
    sectionTwo.style.display = 'block';
    sectionThree.style.display = 'none';
})

btnThree.addEventListener('click', () => {
    sectionThree.style.display = 'none';
    sectionOne.style.display = 'none';
    sectionTwo.style.display = 'block';
})
// adding addEventListener

