const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("resume-visitors-counter");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();