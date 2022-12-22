const dropdown = document.getElementById("dropdown");
const formations = document.getElementById("formations");
const chevron = document.getElementById("chevron");
const etudiantn1 = document.getElementById("etudiantn1");
const etudiantn2 = document.getElementById("etudiantn2");
const etudiantn3 = document.getElementById("etudiantn3");
const etudiant1 = document.getElementById("etudiant1");
const etudiant2 = document.getElementById("etudiant2");
const etudiant3 = document.getElementById("etudiant3");
const e1 = document.querySelector("#etudiantn1 i");
const e2 = document.querySelector("#etudiantn2 i");
const e3 = document.querySelector("#etudiantn3 i");


formations.addEventListener("click", () => {
    formations.classList.toggle("active");
    dropdown.classList.toggle("invisible");
    chevron.classList.toggle("fa-flip-vertical");
});

addEventListener("scroll", () => {
    formations.classList.remove("active");
    dropdown.classList.add("invisible");
    chevron.classList.add("fa-flip-vertical");
});

etudiantn1.addEventListener("click", () => {
    e1.classList.add("circle-color");
    e2.classList.remove("circle-color");
    e3.classList.remove("circle-color");
    etudiant1.classList.remove("etudiant-display");
    etudiant2.classList.add("etudiant-display");
    etudiant3.classList.add("etudiant-display");
});

etudiantn2.addEventListener("click", () => {
    e1.classList.remove("circle-color");
    e2.classList.add("circle-color");
    e3.classList.remove("circle-color");
    etudiant1.classList.add("etudiant-display");
    etudiant2.classList.remove("etudiant-display");
    etudiant3.classList.add("etudiant-display");
});

etudiantn3.addEventListener("click", () => {
    e1.classList.remove("circle-color");
    e2.classList.remove("circle-color");
    e3.classList.add("circle-color");
    etudiant1.classList.add("etudiant-display");
    etudiant2.classList.add("etudiant-display");
    etudiant3.classList.remove("etudiant-display");
});