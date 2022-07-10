let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__button-close');
let profName= document.querySelector('.profile__info-name');
let profDescrip = document.querySelector('.profile__info-description');
let form = document.querySelector('.form');

function openPopup() {
    form.elements.name.value= profName.textContent;
    form.elements.description.value= profDescrip.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {  
    popup.classList.remove('popup_opened');
}

function editProfile(event) {
    event.preventDefault();
    profName.textContent = form.elements.name.value;
    profDescrip.textContent = form.elements.description.value;
    closePopup();
}


openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit',editProfile)
