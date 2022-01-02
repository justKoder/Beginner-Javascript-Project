
let Alert = document.querySelector('.alert');
let alertMessage = document.querySelector('.alert-message');


// Login Form Validation

function validateLogin() {
    const userName = document.getElementById('username');
    const password = document.getElementById('password');
    if (userName.value == "") {
        Alert.classList.add('error')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Username is required';
        console.log('Username is required');
    }
    else if (password.value === "") {
        Alert.classList.add('error')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Password is required';
        console.log('Password is required');
    }
    else {
        Alert.classList.add('correct')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Logged in successfully';
        Alert.style.display = 'block';
        console.log('Form submitted');
    }
}


function validateRegister() {
    let userName = document.getElementById('username2');
    let email = document.getElementById('email');
    let password = document.getElementById('password2');
    let password2 = document.getElementById('password3');
    if (userName.value == "") {
        Alert.classList.add('error')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Username is required';
        console.log('Username is required');
    }
    else if (email.value == "") {
        Alert.classList.add('error')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Email is required';
        console.log('Email is required');
    }
    else if (password.value == "") {
        Alert.classList.add('error')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Password is required';
        console.log('Password is required');
    }
    else if (password2.value == "") {
        Alert.classList.add('error')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Password Confirmation is required';
        console.log('Password Confirmation is required');
    }
    else if (password.value != password2.value) {
        Alert.classList.add('error')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Confirmation password is not same as your password';
        console.log('Confirmation password is not same as your password');
    }
    else if (password.value.length < 8) {
        Alert.classList.add('error')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Password is too short';
        console.log('Password is too short');
    }
    else {
        Alert.classList.add('correct')
        Alert.style.display = 'block';
        alertMessage.textContent = 'Form Submitted successfully';
        Alert.style.display = 'block';
        console.log('Form submitted');
    }
}