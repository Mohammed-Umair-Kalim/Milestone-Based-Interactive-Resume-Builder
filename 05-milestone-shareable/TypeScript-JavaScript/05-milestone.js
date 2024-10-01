"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById("resumeForm");
    // function for checking required input:
    function validateForm() {
        const requiredInputs = resumeForm.querySelectorAll("input[required]");
        for (let input of requiredInputs) {
            const inputElement = input;
            if (!inputElement.value.trim()) {
                return false;
            }
        }
        return true;
    }
});
function generateResume() {
    const name200 = document.getElementById('name').value;
    const age200 = document.getElementById('age').value;
    const email200 = document.getElementById('email').value;
    const edu200 = document.getElementById('edu').value;
    const exp200 = document.getElementById('exp').value;
    const ski200 = document.getElementById('ski1').value;
    const ski2200 = document.getElementById('ski2').value;
    const ski3200 = document.getElementById('ski3').value;
    const div2 = document.getElementById("div2");
    const shareableLink = `resume-generated.html?name=${encodeURIComponent(name200)}&age=${encodeURIComponent(age200)}&email=${encodeURIComponent(email200)}&edu=${encodeURIComponent(edu200)}&exp=${encodeURIComponent(exp200)}&ski1=${encodeURIComponent(ski200)}&ski2=${encodeURIComponent(ski2200)}&ski3=${encodeURIComponent(ski3200)}`;
    div2.innerHTML = `
        <p>Your shareable resume link: <a href="${shareableLink}" target="_blank">${shareableLink}</a></p>
    `;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const edu = document.getElementById('edu').value;
    const exp = document.getElementById('exp').value;
    const ski = document.getElementById('ski1').value;
    const ski2 = document.getElementById('ski2').value;
    const ski3 = document.getElementById('ski3').value;
    const url = `./resume-generated.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&email=${encodeURIComponent(email)}&edu=${encodeURIComponent(edu)}&exp=${encodeURIComponent(exp)}&ski1=${encodeURIComponent(ski)}&ski2=${encodeURIComponent(ski2)}&ski3=${encodeURIComponent(ski3)}`;
    window.open(url, '_blank');
}
