const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const openUserPopupButton = document.querySelector('.profile__edit-button');
const userPopup = document.querySelector('.popup_type_user');
const closeUserPopupButton = userPopup.querySelector('.popup__button-close');
const profName= document.querySelector('.profile__info-name');
const profDescrip = document.querySelector('.profile__info-description');
const userForm = document.querySelector('.form');
const openCardPopupButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_card');
const closeCardPopupButton = cardPopup.querySelector('.popup__button-close');
const cardList = document.querySelector('.card-list');
const cardForm = cardPopup.querySelector('.form');
const zoomPopup = document.querySelector('.popup_type_card-zoom');
const popupDescrip = zoomPopup.querySelector('.popup__description');
const popupImg = zoomPopup.querySelector('.popup__image-zoom');
const closeZoomPopupButton = zoomPopup.querySelector('.popup__button-close');


function openUserPopup() {
    userForm.elements.name.value= profName.textContent;
    userForm.elements.description.value= profDescrip.textContent;
    userPopup.classList.add('popup_opened');
}

function openCardPopup() {
    cardPopup.classList.add('popup_opened');
}

function closeUserPopup() {  
    userPopup.classList.remove('popup_opened');
}

function closeCardPopup() {  
    cardPopup.classList.remove('popup_opened');
}

function editProfile(event) {
    event.preventDefault();
    profName.textContent = userForm.elements.name.value;
    profDescrip.textContent = userForm.elements.description.value;
    closeUserPopup();
}

function addCard(event) {
  event.preventDefault();
  appendCard(cardForm.elements.name.value, cardForm.elements.url.value)
  closeCardPopup();
}



function closeZoomPopup() {  
  zoomPopup.classList.remove('popup_opened');
}


function appendCard(name, link) {
  console.log({name, link});
    const divElement = document.createElement('div');
    divElement.classList.add('card-list__item')
    const deleteElement = document.createElement('button');
    deleteElement.classList.add('card-list__header-button');
    divElement.append(deleteElement);
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', link);
    imageElement.setAttribute('alt', name);
    imageElement.classList.add('card-list__photo');
    divElement.append(imageElement);
    const footerElement = document.createElement('div');
    footerElement.classList.add('card-list__footer');
    const nameElement = document.createElement('h2');
    nameElement.classList.add('card-list__footer-name');
    nameElement.textContent = name;
    const likeElement = document.createElement('button');
    likeElement.classList.add('card-list__footer-button');


    function likeCard() {  
      likeElement.classList.toggle('card-list__footer-button_active');
    }
    
    function openZoomCardPopup() {
      zoomPopup.classList.add('popup_opened');
      popupDescrip.textContent = name;
      popupImg.setAttribute('src', link);
      popupImg.setAttribute('alt', name);
    }

    function deleteCard() {
      likeElement.removeEventListener('click', likeCard);
      deleteElement.removeEventListener('click', deleteCard);
      imageElement.removeEventListener('click', openZoomCardPopup);
      divElement.remove();
    }
    
    likeElement.addEventListener('click', likeCard);
    divElement.append(footerElement);
    footerElement.append(nameElement, likeElement);
    cardList.append(divElement);
    deleteElement.addEventListener('click', deleteCard);
    imageElement.addEventListener('click', openZoomCardPopup);
}



openUserPopupButton.addEventListener('click', openUserPopup);
closeUserPopupButton.addEventListener('click', closeUserPopup);
userForm.addEventListener('submit',editProfile)

openCardPopupButton.addEventListener('click', openCardPopup);
closeCardPopupButton.addEventListener('click', closeCardPopup);
cardForm.addEventListener ('submit', addCard);
closeZoomPopupButton.addEventListener('click', closeZoomPopup);

for (let i = 0; i < initialCards.length; i++) {
  appendCard(initialCards[i].name, initialCards[i].link);
}
