const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-submit',
  inactiveButtonClass: 'form__button-submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};


function enableButton(button, config) {
  button.classList.remove(config.inactiveButtonClass);
  button.setAttribute('disabled', 'disabled')
}

function disableButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.removeAttribute('disabled')
}

const isValid = (formElement, inputElement, config) => {
  const formButton = formElement.querySelector(config.submitButtonSelector);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
    disableButton(formButton, config)
  } else {
    hideInputError(formElement, inputElement, config);
    enableButton(formButton, config)
  }
};



const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = inputElement.nextElementSibling
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};





const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config)
    });
  });
};


const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

enableValidation(validationConfig);