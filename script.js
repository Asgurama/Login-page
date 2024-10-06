document.addEventListener("DOMContentLoaded", function() {
    // Pop-up message
    alert("This is a demo page created by Sadiq Gurama Aliyu, 3MTT Cohort 2 Fellow:FE/24/958281246 for knowledge showcase");

    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');

    switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
    });

    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });

    // Initialize the active container
    registerContainer.classList.remove('active');
    loginContainer.classList.add('active');
});




document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');

    switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
    });

    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });

    // Initialize the active container
    registerContainer.classList.remove('active');
    loginContainer.classList.add('active');
});
