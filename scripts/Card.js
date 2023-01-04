class Card {
    constructor({ name, link, onClick}) {
        this._name = name;
        this._link = link;
        this._onClick = onClick;
    }

    _getTemplateCard() {
        const cardTemplate = document.querySelector('#card-list__item').content;
        const cardElement = cardTemplate.querySelector('.card-list__item').cloneNode(true);

        return cardElement;
    }
    _setData() {
        const title = this._newCard.querySelector('.card-list__footer-name')
        title.textContent = this._name;
        this._imageElement = this._newCard.querySelector('.card-list__photo')
        this._imageElement.setAttribute('src', this._link);
        this._imageElement.setAttribute('alt', this._name);
        this._likeElement = this._newCard.querySelector('.card-list__footer-button')
        this._deleteElement = this._newCard.querySelector('.card-list__header-button')
       
    }

    

    getView() {
        this._newCard = this._getTemplateCard();
        this._setData();
        this._setListeners();
        return this._newCard;
    }

    _setListeners() {
        
        this._likeElement.addEventListener('click', this._toggleLike)

        this._deleteElement.addEventListener('click', this._remove)
        this._imageElement.addEventListener('click', this._clickImage)
    }

    _toggleLike = () => {
        this._likeElement.classList.toggle('card-list__footer-button_active');
    } 

   _remove = () => {
    this._newCard.remove();
   } 

   _clickImage = () => {
    this._onClick (this._name, this._link);
   }
}

export default Card;