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
        const imageElement = this._newCard.querySelector('.card-list__photo')
        imageElement.setAttribute('src', this._link);
        imageElement.setAttribute('alt', this._name);
        const likeElement = this._newCard.querySelector('.card-list__footer-button')
        likeElement.addEventListener('click', () => {
            likeElement.classList.toggle('card-list__footer-button_active');
        });
        const deleteElement = this._newCard.querySelector('.card-list__header-button')
        deleteElement.addEventListener('click', () => {
            this._newCard.remove();
        });
        imageElement.addEventListener('click', () => {
            this._onClick (this._name, this._link);
        });
    }

    getView() {
        this._newCard = this._getTemplateCard();
        this._setData();
        return this._newCard;
    }
}

export default Card;