import PopupWithForm from './PopupWithForm'
export default class PopupWithConfirm  extends PopupWithForm {
    setHandleSubmit(handleSubmit) {
        this._handleSubmit = handleSubmit.bind(this)
    }
}