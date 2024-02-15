const sectionOne = document.querySelector(".section-one")

const btnOne = document.querySelector(".btn-one")
// DOM declaration

btnOne.addEventListener("click", () => {
    console.log("OK!")
    sectionOne.classList.add("hide-one")
})


