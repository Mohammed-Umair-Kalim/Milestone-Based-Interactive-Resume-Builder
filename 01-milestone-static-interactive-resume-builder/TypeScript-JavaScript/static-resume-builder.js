"use strict";
'use client';
// Function to scroll down to bottom:
function toTheBottom() {
    const buttonId1 = document.getElementById('btn2');
    buttonId1?.addEventListener('click', () => {
        const h1_Id1 = document.getElementById('btn');
        if (h1_Id1) {
            h1_Id1.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
;
// Function to scroll up to the top:
function toTheTop() {
    const buttonId2 = document.getElementById('btn');
    buttonId2?.addEventListener('click', () => {
        const h1_Id2 = document.getElementById('h1');
        if (h1_Id2) {
            h1_Id2.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
;
// Calling/Invoking both functions:
toTheTop();
toTheBottom();
