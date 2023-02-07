import '../pages/index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import {userNameSelector,descriptionSelector,cardTemplateSelector,initialCards, containerSelector,validationConfig} from '../utils/constants'

import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section';
import UserInfo from '../components/UserInfo'

const validators = {}
Array.from(document.querySelectorAll(validationConfig.formSelector)).forEach((form) => {
  validators[form.name] = new FormValidator(validationConfig, form)
  validators[form.name].enableValidation();
});

const userPopupOpenButton = document.querySelector('.profile__edit-button');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
const userPopupForm = document.forms['edit-form']
const nameInput = userPopupForm.elements.userName
const jobInput = userPopupForm.elements.description
const zoomPopup = new PopupWithImage('.popup_type_card-zoom')
const userInfo = new UserInfo({
  userNameSelector,
  descriptionSelector
})

const cardList = new Section({
  items: initialCards,
  renderer: (data) => cardList.addItem(createCard(data.name, data.link))
},
containerSelector)

const userPopup = new PopupWithForm('.popup_type_user', (data) => {
  userInfo.setUserInfo({ userName: data.userName, description: data.description })
  userPopup.close()
})

const cardPopup = new PopupWithForm('.popup_type_card', (data) => {
  cardList.addItem(createCard(data.placeName, data.url))
  cardPopup.close()
  validators['add-place'].disableButton()
})

zoomPopup.setEventListeners()

cardPopup.setEventListeners()
userPopup.setEventListeners();
cardList.renderItems();

function handleCardClick(name,link) {
  zoomPopup.open(name,link)
}

function createCard(name,link) {
  const card = new Card({ name,link,cardTemplateSelector, handleCardClick:handleCardClick })
  return card.getView()
}
userPopupOpenButton.addEventListener('click', () => {
  userPopup.open();
  const infoObject = userInfo.getUserInfo();
  nameInput.value = infoObject.userName;
  jobInput.value = infoObject.description;
  validators['edit-form'].enableButton()
});

cardPopupOpenButton.addEventListener('click', () => {
  cardPopup.open();
});
