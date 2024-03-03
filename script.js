const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let valid = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    if (email.length === 0) {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'Make sure email is more than 3 characters and has a @ and a .';
        valid = false;
    }

    if (password.length === 0) {
        passwordError.textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        valid = false;
    }

    if (valid) {
        if (confirm('Are you sure you want to sign up?')) {
            alert('Successful signup!');
        } else {
            window.location.href = window.location.href;
        }
    }
});

emailInput.addEventListener('input', function() {
    formInputs();
});

passwordInput.addEventListener('input', function() {
    formInputs();
});

function formInputs() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    let valid = true;

    if (email.length === 0) {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'Make sure email is more than 3 characters and has a @ and a .';
        valid = false;
    }

    if (password.length === 0) {
        passwordError.textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        valid = false;
    }

    if (valid && email.length >= 3 && email.includes('@') && email.includes('.') && password.length >= 8) {
        successMessage.textContent = 'All good to go!';
        successMessage.classList.add('success');
    }
}
