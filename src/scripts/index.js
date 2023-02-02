import '../pages/index.css'
import Card from './Card.js'
import FormValidator from './FormValidator.js'

import PopupWithForm from './PopupWithForm.js'
import PopupWithImage from './PopupWithImage.js'
import initialCards from './cards.js'
import Section from './Section';
import UserInfo from './UserInfo'

const userPopupOpenButton = document.querySelector('.profile__edit-button');
// const profName = document.querySelector('.profile__info-name');
// const profDescrip = document.querySelector('.profile__info-description');
// const userForm = userPopup.querySelector('.form');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
// const cardPopup = document.querySelector('.popup_type_card');
// const cardPopupSubmitButton = cardPopup.querySelector('.form__button-submit');
// const cardForm = cardPopup.querySelector('.form');
const zoomPopup = new PopupWithImage('.popup_type_card-zoom')
const userInfo = new UserInfo({
  userNameSelector: '.profile__info-name',
  descriptionSelector: '.profile__info-description'
})

const cardList = new Section({
  items: initialCards,
  renderer: (data) => cardList.addItem(new Card({ ...data, handleCardClick:handleCardClick }).getView())
},
  '.card-list')

const userPopup = new PopupWithForm('.popup_type_user', (data) => {
  userInfo.setUserInfo({ userName: data.name, description: data.description })
  userPopup.close()
})

const cardPopup = new PopupWithForm('.popup_type_card', (data) => {
  cardList.addItem(new Card({ name: data.name,link:data.url, handleCardClick: handleCardClick}).getView())
  cardPopup.close()
})
zoomPopup.setEventListeners()

cardPopup.setEventListeners()
userPopup.setEventListeners();
cardList.renderItems();

function handleCardClick(name,link) {
  zoomPopup.open(name,link)
}

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-submit',
  inactiveButtonClass: 'form__button-submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};

const validators = {}
Array.from(document.querySelectorAll(validationConfig.formSelector)).forEach((form) => {
  validators[form.name] = new FormValidator(validationConfig, form)
  validators[form.name].enableValidation();
});

userPopupOpenButton.addEventListener('click', () => {
  userPopup.open();
});

cardPopupOpenButton.addEventListener('click', () => {
  cardPopup.open();
});