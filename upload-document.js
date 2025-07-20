const proceedButton = document.getElementById('proceedButton');
const radioButtons = document.querySelectorAll('input[name="verification"]');
const countrySelect = document.getElementById('country');

function toggleProceedButton() {
    const isRadioSelected = Array.from(radioButtons).some(radio => radio.checked); 
    const isCountrySelected = countrySelect.value !== ""; 

    if (isRadioSelected && isCountrySelected) {
        proceedButton.disabled = false; 
        proceedButton.style.cursor = 'pointer'; 
        proceedButton.style.backgroundColor = ''; 
    } else {
        proceedButton.disabled = true; 
        proceedButton.style.cursor = 'not-allowed'; 
        proceedButton.style.backgroundColor = ''; 
    }
}

radioButtons.forEach(radio => {
    radio.addEventListener('change', toggleProceedButton);
});

countrySelect.addEventListener('change', toggleProceedButton);


toggleProceedButton();

proceedButton.addEventListener('click', (event) => {
    event.preventDefault();

    const isRadioSelected = Array.from(radioButtons).some(radio => radio.checked);
    const isCountrySelected = countrySelect.value !== "";

    if (isRadioSelected && isCountrySelected) {
        window.location.href = 'upload-id.html'; 
    }
});
