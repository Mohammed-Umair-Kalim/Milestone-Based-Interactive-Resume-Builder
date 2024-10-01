"use strict";
// function to download PDF:
const downloadPDF = document.getElementById("pdf");
downloadPDF.addEventListener("click", () => {
    window.print();
});
// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
// Retrieve and display data
const name1 = getQueryParam("name");
const age = getQueryParam("age");
const email = getQueryParam("email");
const edu = getQueryParam("edu");
const exp = getQueryParam("exp");
const ski1 = getQueryParam("ski");
const ski2 = getQueryParam("ski2");
const ski3 = getQueryParam("ski3");
const resume = document.getElementById("resume");
const output = `
<center>
<h2><u>Personal Information:</u></h2>
<p><b>Name: ${name1} </b></p><hr>
<p><b>Age: ${age}</b></p><hr>
<p><b>Email: ${email}</b></p><hr>

<h2><u>Education:</u></h2>
<p><b>Qualification: ${edu}</b></p><hr>

<h2><u>Work Experience:</u></h2>
<p><b>Experience: ${exp}</b></p><hr>

<h2><u>Skills:</u></h2></li> </b></p>
<p><b> ${ski1} </b></p>
<p><b> ${ski2} </b></p>
<p><b> ${ski3} </b></p>
</center>
`;
resume.innerHTML = output || "<p>No data provided.</p>";
// function to get output:
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const age = params.get('age');
    const email = params.get('email');
    const edu = params.get('edu');
    const exp = params.get('exp');
    const ski1 = params.get('ski1');
    const ski2 = params.get('ski2');
    const ski3 = params.get('ski3');
    const resume = document.getElementById("resume");
    const resumeContent = `
      <center>
<h2><u>Personal Information:</u></h2>
<p><b>Name: <i contenteditable="true">${name}</i> </b></p><hr>
<p><b>Age: <i contenteditable="true">${age}</i> </b></p><hr>
<p><b>Email: <i contenteditable="true">${email}</i> </b></p><hr>

<h2><u>Education:</u></h2>
<p><b>Qualification: <i contenteditable="true">${edu}</i> </b></p><hr>

<h2><u>Work Experience:</u></h2>
<p><b>Experience: <i contenteditable="true">${exp}</i> </b></p><hr>

<h2><u>Skills:</u></h2></li> </b></p>
<p><b> <i contenteditable="true">${ski1}</i>  </b></p>
<p><b> <i contenteditable="true">${ski2}</i>  </b></p>
<p><b> <i contenteditable="true">${ski3}</i>  </b></p>
</center>
  `;
    resume.innerHTML = resumeContent;
};
