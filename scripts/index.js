const userPopupOpenButton = document.querySelector('.profile__edit-button');
const userPopup = document.querySelector('.popup_type_user');
const userPopupCloseButton = userPopup.querySelector('.popup__button-close');
const profName = document.querySelector('.profile__info-name');
const profDescrip = document.querySelector('.profile__info-description');
const userForm = document.querySelector('.form');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_card');
const cardPopupCloseButton = cardPopup.querySelector('.popup__button-close');
const cardsContainer = document.querySelector('.card-list');
const cardForm = cardPopup.querySelector('.form');
const zoomPopup = document.querySelector('.popup_type_card-zoom');
const popupDescrip = zoomPopup.querySelector('.popup__description');
const popupImg = zoomPopup.querySelector('.popup__image-zoom');
const zoomPopupCloseButton = zoomPopup.querySelector('.popup__button-close');
const cardTemplate = document.querySelector('#card-list__item').content;
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closeByOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

function openUserPopup() {
  userForm.elements.name.value = profName.textContent;
  userForm.elements.description.value = profDescrip.textContent;
  openPopup(userPopup);
}

function openCardPopup() {
  openPopup(cardPopup);
  cardForm.elements.name.value = "";
  cardForm.elements.url.value = "";
}

function closeUserPopup() {
  closePopup(userPopup);
}

function closeCardPopup() {
  closePopup(cardPopup);
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



function closeZoomPopup() {
  closePopup(zoomPopup);
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
    likeElement.removeEventListener('click', likeCard);
    deleteElement.removeEventListener('click', deleteCard);
    imageElement.removeEventListener('click', openZoomCardPopup);
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
userPopupCloseButton.addEventListener('click', closeUserPopup);
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 || evt.key === "Escape") {
    closeZoomPopup();
    closeCardPopup();
    closeUserPopup();
  };
});
userPopup.addEventListener('mousedown', closeByOverlay)
cardPopup.addEventListener('mousedown', closeByOverlay)
zoomPopup.addEventListener('mousedown', closeByOverlay)

userForm.addEventListener('submit', editProfile)

cardPopupOpenButton.addEventListener('click', openCardPopup);
cardPopupCloseButton.addEventListener('click', closeCardPopup);
cardForm.addEventListener('submit', addCard);
zoomPopupCloseButton.addEventListener('click', closeZoomPopup);


initialCards.forEach(function (el) {
  const cardElement = createCard(el.name, el.link);
  cardsContainer.append(cardElement);
})