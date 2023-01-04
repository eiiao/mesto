class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }


  enableValidation() {
    this._setEventListeners();
  };

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
   
    this._button = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton()
    } else {
      this.enableButton()
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  disableButton() {
    this._button.classList.add(this._config.inactiveButtonClass);
    this._button.setAttribute('disabled', 'disabled')
  }

  enableButton() {
    this._button.classList.remove(this._config.inactiveButtonClass);
    this._button.removeAttribute('disabled', 'disabled')
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