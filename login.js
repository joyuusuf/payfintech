
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.classList.remove("fa-eye");
        passwordToggle.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        passwordToggle.classList.remove("fa-eye-slash");
        passwordToggle.classList.add("fa-eye");
    }
}

function LogIn() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let valid = true;

    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("email").style.borderColor = "";
    document.getElementById("password").style.borderColor = "";

   
    if (!email.value) {
        document.getElementById("emailError").textContent = "Field required";
        document.getElementById("email").style.borderColor = "red";
        valid = false;
    }

    
    if (!password.value) {
        document.getElementById("passwordError").textContent = "Field required";
        document.getElementById("password").style.borderColor = "red";
        valid = false;
    }

    
    if (valid) {
        window.location.href = 'reset-password.html';
    }

    return valid;
}
