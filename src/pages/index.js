import '../pages/index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import {api} from '../components/Api' 
import {userNameSelector,descriptionSelector,cardTemplateSelector, containerSelector,validationConfig,avatarSelector} from '../utils/constants'

import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section';
import UserInfo from '../components/UserInfo'
import PopupWithConfirm from '../components/PopupWithConfirm'

const validators = {}
Array.from(document.querySelectorAll(validationConfig.formSelector)).forEach((form) => {
  validators[form.name] = new FormValidator(validationConfig, form)
  validators[form.name].enableValidation();
});

const userPopupOpenButton = document.querySelector('.profile__edit-button');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
const avatarPopupOpenButton = document.querySelector(avatarSelector);
const userPopupForm = document.forms['edit-form']
const removeForm = document.forms['remove-form']
const removeInput = removeForm.elements.id
const nameInput = userPopupForm.elements.userName
const jobInput = userPopupForm.elements.description
const zoomPopup = new PopupWithImage('.popup_type_card-zoom')
const userInfo = new UserInfo({
  userNameSelector,
  descriptionSelector,
  avatarSelector
})

api.getUserInfo().then(info=> {
  userInfo.setUserInfo({userName: info.name, description: info.about, id: info._id,avatar: info.avatar})
})
const cardList = new Section({
  items: [],
  renderer: (data) => {
    const userId = userInfo.getUserInfo().id;
    cardList.addItem(createCard({
      name: data.name,
      id: data._id,
      link: data.link,
      likes: data.likes,
      isOwner: data.owner._id === userId,
      isLiked: data.likes.some(({_id})=>userId===_id),
    }))
  }
},
containerSelector)

api.getInitialCards().then(cards=> {
  cards.forEach(card => {
    const userId = userInfo.getUserInfo().id;
    cardList.addItem(createCard({
      name: card.name,
      id: card._id,
      link: card.link,
      likes: card.likes,
      isOwner: card.owner._id === userId,
      isLiked: card.likes.some(({_id})=>userId===_id),
    }))
  })
})
const userPopup = new PopupWithForm('.popup_type_user', (data) => {
  userPopup.setLoading(true)
  api.updateUserInfo({name: data.userName, about: data.description }).then(()=> {
    userInfo.setUserInfo({ userName: data.userName, description: data.description })
    userPopup.close()
    userPopup.setLoading(false)
  })
})

const cardPopup = new PopupWithForm('.popup_type_card', (data) => {
  cardPopup.setLoading(true)
  api.addCard({name: data.placeName, link: data.url}).then((response)=> {
    const userId = userInfo.getUserInfo().id;

    cardList.addItem(createCard({
      name: response.name,
      id: response._id,
      link: response.link,
      likes: response.likes,
      isOwner: response.owner._id === userId,
      isLiked: response.likes.some(({_id})=>userId===_id),
    }))
    cardPopup.close()
    validators['add-place'].disableButton()
    cardPopup.setLoading(false)
  })
})


const avatarPopup = new PopupWithForm('.popup_type_avatar',({avatar}) => {
  avatarPopup.setLoading(true)
  api.updateAvatar(JSON.stringify({avatar,})).then(()=> {
    userInfo.setUserInfo({avatar})
    avatarPopup.close()
    validators.avatar.disableButton()
    avatarPopup.setLoading(false)
  })
})

const removePopup = new PopupWithConfirm('.popup_type_remove',({id})=> {
  api.deleteCard(id)
})

removePopup.setEventListeners()

validators['edit-form'].enableButton()

zoomPopup.setEventListeners()
avatarPopup.setEventListeners()
cardPopup.setEventListeners()
userPopup.setEventListeners();
cardList.renderItems();

function handleCardClick(name,link) {
  zoomPopup.open(name,link)
}

function createCard({
  name,
  id,
  link,
  likes,
  isOwner,
  isLiked,

}) {
  const card = new Card(
    { name,
      link,
      id,
      likes,
      isLiked,
      isOwner,
      cardTemplateSelector, 
      handleCardClick: handleCardClick,
      handleDelete: (id,deleteCard)=>{
        removePopup.open()
        removeInput.value = id
        removePopup.setHandleSubmit(({id})=> {
          removePopup.setLoading(true)
          api.deleteCard(id).then(()=>{
            deleteCard();
            removePopup.close()
            removePopup.setLoading(false)
          })
        })
      },
      handleLike: api.like,
      handleDislike: api.dislike,
    })
  return card.getView()
}
userPopupOpenButton.addEventListener('click', () => {
  userPopup.open();
  const infoObject = userInfo.getUserInfo();
  nameInput.value = infoObject.userName;
  jobInput.value = infoObject.description;
  validators['edit-form'].enableButton()
});

avatarPopupOpenButton.addEventListener('click',()=> {
  avatarPopup.open()
})

cardPopupOpenButton.addEventListener('click', () => {
  cardPopup.open();
});