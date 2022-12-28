import Card from './Card.js'
import FormValidator from './FormValidator.js'

const userPopupOpenButton = document.querySelector('.profile__edit-button');
const userPopup = document.querySelector('.popup_type_user');
const profName = document.querySelector('.profile__info-name');
const profDescrip = document.querySelector('.profile__info-description');
const userForm = document.querySelector('.form');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_card');
const cardPopupSubmitButton = cardPopup.querySelector('.form__button-submit')
const cardsContainer = document.querySelector('.card-list');
const cardForm = cardPopup.querySelector('.form');
const zoomPopup = document.querySelector('.popup_type_card-zoom');
const popupDescrip = zoomPopup.querySelector('.popup__description');
const popupImg = zoomPopup.querySelector('.popup__image-zoom');
const cardTemplate = document.querySelector('#card-list__item').content;
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');


const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-submit',
  inactiveButtonClass: 'form__button-submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};


const formList = Array.from(document.querySelectorAll(validationConfig.formSelector)).map((formElement) => {
 const form = new FormValidator (validationConfig, formElement);
 form.enableValidation ();
 return form;
});


function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc)

}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
}


function openUserPopup() {
  userForm.elements.name.value = profName.textContent;
  userForm.elements.description.value = profDescrip.textContent;
  openPopup(userPopup);
}

function openCardPopup() {
  openPopup(cardPopup);
  cardForm.reset()
  formList[0].disableButton(cardPopupSubmitButton, validationConfig)
}

function editProfile(event) {
  event.preventDefault();
  profName.textContent = userForm.elements.name.value;
  profDescrip.textContent = userForm.elements.description.value;
  closePopup(userPopup);
}

function addCard(event) {
  event.preventDefault();
  renderCard ({name: cardForm.elements.name.value, link: cardForm.elements.url.value})
  closePopup(cardPopup);
}



function renderCard(data) {
  const card = new Card ({...data,onClick:openZoomCardPopup})
  cardsContainer.prepend(card.getView());
}

function openZoomCardPopup(name, link) {
  openPopup(zoomPopup);
  popupDescrip.textContent = name;
  popupImg.setAttribute('src', link);
  popupImg.setAttribute('alt', name);
}


userPopupOpenButton.addEventListener('click', openUserPopup);

userForm.addEventListener('submit', editProfile)

cardPopupOpenButton.addEventListener('click', openCardPopup);

cardForm.addEventListener('submit', addCard);


document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    };
  });
});

initialCards.forEach(renderCard);



