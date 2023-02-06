import Popup from './Popup'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._handleSubmit = handleSubmit;
    }

    _getInputValues() {
        return [...this._form.elements].reduce((acc,input)=> {
            acc[input.name] = input.value
            return acc
        },{})
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault()
            this._handleSubmit(this._getInputValues())
        })

    }

    close() {
        super.close();
        this._form.reset();
    }
}