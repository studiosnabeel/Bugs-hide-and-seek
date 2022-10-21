// Form Validation javascript

const form = document.querySelector('.form-js');
const email = document.querySelector('#email-js');
const error = document.querySelector('.error-js');

form.addEventListener('submit', (action) => {
  action.preventDefault();
  const mail = email.value;
  if (mail === mail.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    error.innerHTML = 'Error: Use lowercase for <br> email. Form not sent';
  }
};
