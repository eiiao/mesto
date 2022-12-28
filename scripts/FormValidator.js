class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }


  enableValidation() {
    this._setEventListeners();
  };

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const button = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState(inputList, button);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, button);
      });
    });
  };

  _toggleButtonState(inputList, button) {
    if (this._hasInvalidInput(inputList)) {
      this.disableButton(button)
    } else {
      this.enableButton(button)
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  disableButton(button) {
    button.classList.add(this._config.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled')
  }

  enableButton(button) {
    button.classList.remove(this._config.inactiveButtonClass);
    button.removeAttribute('disabled', 'disabled')
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = inputElement.nextElementSibling
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };


}


export default FormValidator;