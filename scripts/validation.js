const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-submit',
  inactiveButtonClass: 'form__button-submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};


const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = inputElement.nextElementSibling
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};



const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}


const hideInputError = (formElement, inputElement, config) => {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const toggleButtonState = (inputList, button, config) => {
  if (hasInvalidInput(inputList)) {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled')
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled')
  }
}


const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const button = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, button, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, button, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};


enableValidation(validationConfig);