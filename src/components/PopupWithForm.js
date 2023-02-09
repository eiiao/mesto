import Popup from './Popup'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._handleSubmit = handleSubmit;
        this._button = this._form.querySelector('.form__button-submit')
        this._buttonText = this._button.textContent
    }
    setLoading(state) {
        if(state) {
            this._button.textContent = 'Сохранение...'
        } else {
            this._button.textContent = this._buttonText
        }
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