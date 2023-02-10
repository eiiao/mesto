class Card {
    constructor(
        {
            name,
            id,
            link,
            likes,
            isOwner,
            isLiked,
            handleCardClick,
            cardTemplateSelector,
            handleDelete,
            handleLike,
            handleDislike
        }) {
        this._name = name;
        this._id = id;
        this._link = link;
        this._isOwner = isOwner;
        this._isLiked = isLiked
        this._handleCardClick = handleCardClick;
        this._likes = likes.length
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleDelete = handleDelete;
        this._handleLike = handleLike
        this._handleDislike = handleDislike
    }

    _getTemplateCard() {
        const cardTemplate = document.querySelector(this._cardTemplateSelector).content;
        const cardElement = cardTemplate.querySelector('.card-list__item').cloneNode(true);

        return cardElement;
    }
    _setData() {
        const title = this._newCard.querySelector('.card-list__footer-name')
        title.textContent = this._name;
        this._imageElement = this._newCard.querySelector('.card-list__photo')
        this._likesCount = this._newCard.querySelector('.card-list__likes')
        this._imageElement.setAttribute('src', this._link);
        this._imageElement.setAttribute('alt', this._name);
        this._likeElement = this._newCard.querySelector('.card-list__footer-button')
        this._deleteElement = this._newCard.querySelector('.card-list__header-button')
        this._likesCount.textContent = this._likes
        if (!this._isOwner) this._deleteElement.remove()
        if (this._isLiked) this._likeElement.classList.add('card-list__footer-button_active')
    }



    getView() {
        this._newCard = this._getTemplateCard();
        this._setData();
        this._setListeners();
        return this._newCard;
    }

    _setListeners() {

        this._likeElement.addEventListener('click', this._toggleLike)
        if (this._isOwner) {
            this._deleteElement.addEventListener('click', this._remove)
        }
        this._imageElement.addEventListener('click', this._clickImage)
    }

    _toggleLike = () => {
        if (this._isLiked) {
            this._handleDislike(this._id).then(({likes}) => {
                this._likeElement.classList.remove('card-list__footer-button_active')
                this._likes = likes.length
                this._isLiked = !this._isLiked
                this._likesCount.textContent = likes.length
            }).catch(err=>console.warn(err))
        } else {
            this._handleLike(this._id).then(({likes}) => {
                this._likes = likes.length
                this._likeElement.classList.add('card-list__footer-button_active')
                this._isLiked = !this._isLiked
                this._likesCount.textContent = likes.length
            }).catch(err=>console.warn(err))
        }
    }

    _remove = () => {
        this._handleDelete(this._id,() => this._newCard.remove())
    }

    _clickImage = () => {
        this._handleCardClick(this._name, this._link);
    }
}

export default Card;