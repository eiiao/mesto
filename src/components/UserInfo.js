export default class UserInfo {
    constructor({ userNameSelector, descriptionSelector,avatarSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._description = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector)
    }

    getUserInfo() {
        return {
            userName: this._userName.textContent,
            description: this._description.textContent,
            id: this._id,
            avatar: this._avatar.getAttribute('src')
        }
    }
    setUserInfo({ 
        userName = this._userName.textContent, 
        description=this._description.textContent,
        id = this._id, 
        avatar = this._avatar.getAttribute('src')
    }) {
        this._userName.textContent = userName
        this._description.textContent = description
        this._id = id
        this._avatar.setAttribute('src',avatar)
    }
}