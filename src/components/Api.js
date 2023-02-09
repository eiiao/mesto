import { cohortId, token } from "../utils/constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers
    this._baseUrl = baseUrl
  }

  _fetch = (url = '/', method, body) => {
    return fetch(this._baseUrl + url, {
      headers: this._headers,
      method,
      body
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  getInitialCards = () => {
    return this._fetch('/cards', 'GET')
  }

  getUserInfo = () => {
    return this._fetch('/users/me', 'GET')
  }
  updateUserInfo = (info) => {
    return this._fetch('/users/me', 'PATCH', JSON.stringify(info))
  }
  addCard = (card) => {
    return this._fetch('/cards', 'POST', JSON.stringify(card))
  }
  deleteCard = (id) => {
    return this._fetch(`/cards/${id}`, 'DELETE')
  }
  like = (id) => {
    return this._fetch(`/cards/likes/${id}`, 'PUT')
  }
  dislike = (id) => {
    return this._fetch(`/cards/likes/${id}`, 'DELETE')
  }
  updateAvatar = (link) => {
    return this._fetch('/users/me/avatar', 'PATCH', link)
  }

}

export const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});