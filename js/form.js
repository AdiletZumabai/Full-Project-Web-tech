//form
let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');
let registeredUsername = '';
let registeredPassword = '';

function nextStep() {
  formSteps[currentStep].classList.remove('active');
  currentStep++;
  formSteps[currentStep].classList.add('active');
  if (currentStep === 1) {
    registeredUsername = document.getElementById('new-username').value;
    registeredPassword = document.getElementById('new-password').value;
  }
}

function prevStep() {
  formSteps[currentStep].classList.remove('active');
  currentStep--;
  formSteps[currentStep].classList.add('active');
}

function validateLogin() {
  const enteredUsername = document.getElementById('login-username').value;
  const enteredPassword = document.getElementById('login-password').value;

  if (enteredUsername === registeredUsername && enteredPassword === registeredPassword) {
    
    alert('Login Successful!');
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 2000); 
  } else {
    alert('Incorrect username or password. Please try again.');
  }
}