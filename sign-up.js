// Eye Toggle on the Password
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const passwordIcon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    }
}

// Eye toggle for the Confirm Password
function changePassword() {
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPasswordIcon = document.querySelector(".confirm-toggle-password");


    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        confirmPasswordIcon.classList.remove("fa-eye");
        confirmPasswordIcon.classList.add("fa-eye-slash");
    } else {
        confirmPasswordInput.type = "password";
        confirmPasswordIcon.classList.remove("fa-eye-slash");
        confirmPasswordIcon.classList.add("fa-eye");
    }
}


    // Button to Submit all the forms

function validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const middleName = document.getElementById('middleName');
    const dob = document.getElementById('dob');
    const bvn = document.getElementById('bvn');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const middleNameError = document.getElementById('middleNameError');
    const dobError = document.getElementById('dobError');
    const bvnError = document.getElementById('bvnError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    let isValid = true;

    const validateText = (input, errorDiv, errorMessage) => {
        if (!/^[a-zA-Z]+$/.test(input.value.trim())) {
            errorDiv.textContent = errorMessage;
            isValid = false;
        } else {
            errorDiv.textContent = '';
        }
    };

    validateText(firstName, firstNameError, 'Field Required*');
    validateText(lastName, lastNameError, 'Field Required*');
    validateText(middleName, middleNameError, 'Field Required*');

    const dobValue = new Date(dob.value);
    const today = new Date();
    const age = today.getFullYear() - dobValue.getFullYear();
    if (!dob.value || age < 18 || (age === 18 && today < new Date(dobValue.setFullYear(today.getFullYear())))) {
        dobError.textContent = 'Must be at least 18 years old';
        isValid = false;
    } else {
        dobError.textContent = '';
    }

    if (bvn.value.length > 11 || bvn.value.length < 11) {
        bvnError.textContent = 'BVN must not exceed 11 numbers';
        isValid = false;
    } else {
        bvnError.textContent = '';
    }

    if (phone.value.length > 11 || phone.value.length < 10) {
        phoneError.textContent = 'Enter a valid phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        emailError.textContent = 'Enter a valid email';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Password does not match';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (isValid) {
        window.location.href = 'verifyemail.html';
    }
}

function toggleSubmitButtonState() {
    const inputs = document.querySelectorAll('input:not(#referral)');
    const submitButton = document.querySelector('.submit-button');

    const allRequiredFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '');

    if (allRequiredFieldsFilled) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '#CC33CC';
    } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '';
    }
}

document.querySelector('.submit-button').addEventListener('click', function (e) {
    e.preventDefault();
    validateForm();
});


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', toggleSubmitButtonState);
});


document.querySelector('.submit-button').disabled = true;
