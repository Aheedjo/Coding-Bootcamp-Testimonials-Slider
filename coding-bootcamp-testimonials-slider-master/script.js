const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const quote = document.querySelector(".quote");
const namee = document.querySelector(".name");
const proffession = document.querySelector(".proffession");
const image = document.querySelector(".img");

const reviews = [{
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn' t recommend this course enough.I’ m now in the job of my dreams and so excited about the future. ”",
    name: "Tanya Sinclair",
    proffession: "UX Engineer",
    image: "./images/image-tanya.jpg"
}, {
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    name: "John Tarkpor",
    proffession: "Junior Front-end Developer",
    image: "./images/image-john.jpg"
}]
let current = 0;

function showPerson() {
    let item = reviews[current];
    namee.textContent = item.name;
    quote.textContent = item.text;
    proffession.textContent = item.proffession;
    image.src = item.image
}

function nextPerson() {
    current++;
    current > reviews.length - 1 ? current = 0 : "";
    showPerson();
}

function prevPerson() {
    current--;
    current < 0 ? current = reviews.length - 1 : "";
    showPerson();
}

document.addEventListener("DOMContentLoaded", showPerson)
next.addEventListener("click", nextPerson)
prev.addEventListener("click", prevPerson)