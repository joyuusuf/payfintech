// function ValidateKyc() {
//     const homeAddress = document.getElementById('homeAddress').value.trim();
//     const country = document.getElementById('country').value.trim();
//     const state = document.getElementById('state').value.trim();
//     const city = document.getElementById('city').value.trim();
//     const utilityBill = document.getElementById('utilityBillUpload').files.length > 0;
//     const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
//     const gender = document.getElementById('gender').value.trim();
//     const occupation = document.getElementById('occupation').value.trim();


//     if (homeAddress && country && state && city && utilityBill && dateOfBirth && gender && occupation) {
//         window.location.href = "kycverify.html"
//     } else {
       
//     }
// }


// document.getElementById('utilityBillUpload').addEventListener('change', function () {
//     const fileNameDisplay = document.getElementById('fileNameDisplay');
//     const fileName = this.files[0] ? this.files[0].name : "";
//     fileNameDisplay.textContent = fileName ? `Selected file: ${fileName}` : "";
// });

// function toggleSubmitButtonState() {
//     const inputs = document.querySelectorAll('input');
//     const submitButton = document.querySelector('.submit-button');

//     const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '');

//     if (allFieldsFilled) {
//         submitButton.disabled = false;
//         submitButton.style.backgroundColor = '#CC33CC';
//     } else {
//         submitButton.disabled = true;
//         submitButton.style.backgroundColor = '';
//     }
// }

// document.querySelector('.submit-button').addEventListener('click', function (e) {
//     e.preventDefault();
//     validateForm();
// });


// document.querySelectorAll('input').forEach(input => {
//     input.addEventListener('input', toggleSubmitButtonState);
// });


// document.querySelector('.submit-button').disabled = true;



// This function validates the KYC form fields and navigates to the next page
function ValidateKyc() {
    const homeAddress = document.getElementById('homeAddress').value.trim();
    const country = document.getElementById('country').value.trim();
    const state = document.getElementById('state').value.trim();
    const city = document.getElementById('city').value.trim();
    const utilityBill = document.getElementById('utilityBillUpload').files.length > 0;
    const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const occupation = document.getElementById('occupation').value.trim();


    if (homeAddress && country && state && city && utilityBill && dateOfBirth && gender && occupation) {
        window.location.href = "kycverify.html";
    } else {
       
    }
}


document.getElementById('utilityBillUpload').addEventListener('change', function () {
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    const fileName = this.files[0] ? this.files[0].name : "";
    fileNameDisplay.textContent = fileName ? `Selected file: ${fileName}` : "";
});


function toggleSubmitButtonState() {
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');
    const submitButton = document.querySelector('.submit-button');


    const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '') &&
                            Array.from(selects).every(select => select.value.trim() !== '') &&
                            document.getElementById('utilityBillUpload').files.length > 0; 


    if (allFieldsFilled) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '#CC33CC';  
    } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = ''; 
    }
}

document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', toggleSubmitButtonState);
});
document.getElementById('utilityBillUpload').addEventListener('change', toggleSubmitButtonState);

document.querySelector('.submit-button').disabled = true;
