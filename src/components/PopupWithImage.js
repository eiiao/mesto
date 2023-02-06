import Popup from './Popup'
export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__image-zoom');
        this._popupDescrip = this._popup.querySelector('.popup__description');
    }
    open(name, link) {
        this._popupDescrip.textContent = name;
        console.log(this._popupDescrip)
        this._popupImg.setAttribute('src', link);
        this._popupImg.setAttribute('alt', name);

        super.open();
    }
}

