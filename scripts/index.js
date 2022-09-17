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
  disableButton(cardPopupSubmitButton, validationConfig)
}

function editProfile(event) {
  event.preventDefault();
  profName.textContent = userForm.elements.name.value;
  profDescrip.textContent = userForm.elements.description.value;
  closePopup(userPopup);
}

function addCard(event) {
  event.preventDefault();
  renderCard(cardForm.elements.name.value, cardForm.elements.url.value)
  closePopup(cardPopup);
}

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card-list__item').cloneNode(true);
  const deleteElement = cardElement.querySelector('.card-list__header-button')
  const imageElement = cardElement.querySelector('.card-list__photo')
  imageElement.setAttribute('src', link);
  imageElement.setAttribute('alt', name);
  const nameElement = cardElement.querySelector('.card-list__footer-name')
  nameElement.textContent = name;
  const likeElement = cardElement.querySelector('.card-list__footer-button')

  function likeCard() {
    likeElement.classList.toggle('card-list__footer-button_active');
  }

  function openZoomCardPopup() {
    openPopup(zoomPopup);
    popupDescrip.textContent = name;
    popupImg.setAttribute('src', link);
    popupImg.setAttribute('alt', name);
  }

  function deleteCard() {
    cardElement.remove();
  }

  likeElement.addEventListener('click', likeCard);
  deleteElement.addEventListener('click', deleteCard);
  imageElement.addEventListener('click', openZoomCardPopup);
  return cardElement;
}

function renderCard(name, link) {
  cardsContainer.prepend(createCard(name, link));
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

initialCards.forEach(function (el) {
  const cardElement = createCard(el.name, el.link);
  cardsContainer.append(cardElement);
})