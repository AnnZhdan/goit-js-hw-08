

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');


function saveFormDataToLocalStorage() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function loadFormDataFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}


function clearFormDataAndLocalStorage() {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
}


function handleSubmit(event) {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);
  clearFormDataAndLocalStorage();
}


form.addEventListener('input', _.throttle(saveFormDataToLocalStorage, 500));
window.addEventListener('load', loadFormDataFromLocalStorage);
form.addEventListener('submit', handleSubmit);