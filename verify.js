const pinInputs = document.querySelectorAll('.pin-input');
let verifyBtn = document.getElementById('verifyBtn');


function moveToNextInput(currentInput, inputArray) {
    const currentIndex = Array.from(inputArray).indexOf(currentInput);
    if (currentInput.value !== '' && currentIndex < inputArray.length - 1) {
        inputArray[currentIndex + 1].focus();
    }
}


function moveToPreviousInput(currentInput, inputArray) {
    const currentIndex = Array.from(inputArray).indexOf(currentInput);
    if (currentIndex > 0 && currentInput.value === '') {
        inputArray[currentIndex - 1].focus();
    }
}


function checkIfAllFilled() {
    let allFilled = true;
    pinInputs.forEach(input => {
        if (input.value === '') {
            allFilled = false;
        }
    });
    verifyBtn.disabled = !allFilled;
}


pinInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (!/^[0-9]$/.test(e.target.value)) {
            e.target.value = '';
        }
        moveToNextInput(input, pinInputs);
        checkIfAllFilled();
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            moveToPreviousInput(input, pinInputs);
            checkIfAllFilled();
        }
    });
});

let date = new Date();
let year = date.getFullYear();
console.log(year);

const copyright = document.querySelectorAll('.copyright');
copyright.forEach(copyrights => {
    copyrights.textContent = year;
})