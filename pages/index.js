let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__button-close');

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

openButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);



let profName= document.querySelector('.profile__info-name');
let profDescrip = document.querySelector('.profile__info-description');
let form = document.querySelector('.popup__form');


function editProfile(event) {
    event.preventDefault();
    profName.textContent = form.elements.name.value;
    profDescrip.textContent = form.elements.description.value;
    closePopup();
}

form.addEventListener('submit',editProfile)
