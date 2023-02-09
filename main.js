(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e){var r=this,o=e.name,i=e.id,u=e.link,a=e.likes,c=e.isOwner,s=e.isLiked,l=e.handleCardClick,f=e.cardTemplateSelector,p=e.handleDelete,d=e.handleLike,y=e.handleDislike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_toggleLike",(function(){r._isLiked?r._handleDislike(r._id).then((function(t){var e=t.likes;r._likeElement.classList.remove("card-list__footer-button_active"),r._likes=e.length,r._isLiked=!r._isLiked,r._likesCount.textContent=e.length})):r._handleLike(r._id).then((function(t){var e=t.likes;r._likes=e.length,r._likeElement.classList.add("card-list__footer-button_active"),r._isLiked=!r._isLiked,r._likesCount.textContent=e.length}))})),n(this,"_remove",(function(){r._handleDelete(r._id,(function(){return r._newCard.remove()}))})),n(this,"_clickImage",(function(){r._handleCardClick(r._name,r._link)})),this._name=o,this._id=i,this._link=u,this._isOwner=c,this._isLiked=s,this._handleCardClick=l,this._likes=a.length,this._cardTemplateSelector=f,this._handleDelete=p,this._handleLike=d,this._handleDislike=y}var r,o;return r=t,(o=[{key:"_getTemplateCard",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".card-list__item").cloneNode(!0)}},{key:"_setData",value:function(){this._newCard.querySelector(".card-list__footer-name").textContent=this._name,this._imageElement=this._newCard.querySelector(".card-list__photo"),this._likesCount=this._newCard.querySelector(".card-list__likes"),this._imageElement.setAttribute("src",this._link),this._imageElement.setAttribute("alt",this._name),this._likeElement=this._newCard.querySelector(".card-list__footer-button"),this._deleteElement=this._newCard.querySelector(".card-list__header-button"),this._likesCount.textContent=this._likes,this._isOwner||this._deleteElement.remove(),this._isLiked&&this._likeElement.classList.add("card-list__footer-button_active")}},{key:"getView",value:function(){return this._newCard=this._getTemplateCard(),this._setData(),this._setListeners(),this._newCard}},{key:"_setListeners",value:function(){this._likeElement.addEventListener("click",this._toggleLike),this._isOwner&&this._deleteElement.addEventListener("click",this._remove),this._imageElement.addEventListener("click",this._clickImage)}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();const i=o;function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}const c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._button=this._formElement.querySelector(this._config.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableButton",value:function(){this._button.classList.add(this._config.inactiveButtonClass),this._button.setAttribute("disabled","disabled")}},{key:"enableButton",value:function(){this._button.classList.remove(this._config.inactiveButtonClass),this._button.removeAttribute("disabled","disabled")}},{key:"_showInputError",value:function(t,e){var n=t.nextElementSibling;t.classList.add(this._config.inputErrorClass),n.textContent=e,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=t.nextElementSibling;t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var s=".profile__avatar",l={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button-submit",inactiveButtonClass:"form__button-submit_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"};function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function d(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var b=new(d((function t(e){var n=this,r=e.baseUrl,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,"_fetch",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return fetch(n._baseUrl+t,{headers:n._headers,method:e,body:r}).then((function(t){return t.ok?t.json():Promise.reject(t)}))})),y(this,"getInitialCards",(function(){return n._fetch("/cards","GET")})),y(this,"getUserInfo",(function(){return n._fetch("/users/me","GET")})),y(this,"updateUserInfo",(function(t){return n._fetch("/users/me","PATCH",JSON.stringify(t))})),y(this,"addCard",(function(t){return n._fetch("/cards","POST",JSON.stringify(t))})),y(this,"deleteCard",(function(t){return n._fetch("/cards/".concat(t),"DELETE")})),y(this,"like",(function(t){return n._fetch("/cards/likes/".concat(t),"PUT")})),y(this,"dislike",(function(t){return n._fetch("/cards/likes/".concat(t),"DELETE")})),y(this,"updateAvatar",(function(t){return n._fetch("/users/me/avatar","PATCH",t)})),this._headers=o,this._baseUrl=r})))({baseUrl:"https://mesto.nomoreparties.co/v1/".concat("cohort-58"),headers:{authorization:"76e75ee3-dd9d-44ce-a8d7-f318595425b3","Content-Type":"application/json"}});function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__button-close"))&&t.close()}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=E(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".form"),n._handleSubmit=e,n._button=n._form.querySelector(".form__button-submit"),n._buttonText=n._button.textContent,n}return e=u,(n=[{key:"setLoading",value:function(t){this._button.textContent=t?"Сохранение...":this._buttonText}},{key:"_getInputValues",value:function(){return(t=this._form.elements,function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reduce((function(t,e){return t[e.name]=e.value,t}),{});var t}},{key:"setEventListeners",value:function(){var t=this;w(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())}))}},{key:"close",value:function(){w(C(u.prototype),"close",this).call(this),this._form.reset()}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=x(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function x(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function R(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return R(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__image-zoom"),e._popupDescrip=e._popup.querySelector(".popup__description"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupDescrip.textContent=t,this._popupImg.setAttribute("src",e),this._popupImg.setAttribute("alt",t),I(q(u.prototype),"open",this).call(this)}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var U=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var t=this;this.clear(),this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var z=function(){function t(e){var n=e.userNameSelector,r=e.descriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,description:this._description.textContent,id:this._id,avatar:this._avatar.getAttribute("src")}}},{key:"setUserInfo",value:function(t){var e=t.userName,n=void 0===e?this._userName.textContent:e,r=t.description,o=void 0===r?this._description.textContent:r,i=t.id,u=void 0===i?this._id:i,a=t.avatar,c=void 0===a?this._avatar.getAttribute("src"):a;this._userName.textContent=n,this._description.textContent=o,this._id=u,this._avatar.setAttribute("src",c)}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}function $(t,e){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},$(t,e)}function F(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},K(t)}var Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(r);if(o){var n=K(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return F(this,t)});function u(){return M(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"setHandleSubmit",value:function(t){this._handleSubmit=t.bind(this)}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(L),W={};Array.from(document.querySelectorAll(l.formSelector)).forEach((function(t){W[t.name]=new c(l,t),W[t.name].enableValidation()}));var X=document.querySelector(".profile__edit-button"),Y=document.querySelector(".profile__add-button"),Z=document.querySelector(s),tt=document.forms["edit-form"],et=document.forms["remove-form"].elements.id,nt=tt.elements.userName,rt=tt.elements.description,ot=new B(".popup_type_card-zoom"),it=new z({userNameSelector:".profile__info-name",descriptionSelector:".profile__info-description",avatarSelector:s});b.getUserInfo().then((function(t){it.setUserInfo({userName:t.name,description:t.about,id:t._id,avatar:t.avatar})}));var ut=new U({items:[],renderer:function(t){var e=it.getUserInfo().id;ut.addItem(pt({name:t.name,id:t._id,link:t.link,likes:t.likes,isOwner:t.owner._id===e,isLiked:t.likes.some((function(t){var n=t._id;return e===n}))}))}},".card-list");b.getInitialCards().then((function(t){t.forEach((function(t){var e=it.getUserInfo().id;ut.addItem(pt({name:t.name,id:t._id,link:t.link,likes:t.likes,isOwner:t.owner._id===e,isLiked:t.likes.some((function(t){var n=t._id;return e===n}))}))}))}));var at=new L(".popup_type_user",(function(t){at.setLoading(!0),b.updateUserInfo({name:t.userName,about:t.description}).then((function(){it.setUserInfo({userName:t.userName,description:t.description}),at.close(),at.setLoading(!1)}))})),ct=new L(".popup_type_card",(function(t){ct.setLoading(!0),b.addCard({name:t.placeName,link:t.url}).then((function(t){var e=it.getUserInfo().id;ut.addItem(pt({name:t.name,id:t._id,link:t.link,likes:t.likes,isOwner:t.owner._id===e,isLiked:t.likes.some((function(t){var n=t._id;return e===n}))})),ct.close(),W["add-place"].disableButton(),ct.setLoading(!1)}))})),st=new L(".popup_type_avatar",(function(t){var e=t.avatar;st.setLoading(!0),b.updateAvatar(JSON.stringify({avatar:e})).then((function(){it.setUserInfo({avatar:e}),st.close(),W.avatar.disableButton(),st.setLoading(!1)}))})),lt=new Q(".popup_type_remove",(function(t){var e=t.id;b.deleteCard(e)}));function ft(t,e){ot.open(t,e)}function pt(t){var e=t.name,n=t.id,r=t.link,o=t.likes,u=t.isOwner,a=t.isLiked,c=new i({name:e,link:r,id:n,likes:o,isLiked:a,isOwner:u,cardTemplateSelector:"#card-list__item",handleCardClick:ft,handleDelete:function(t,e){lt.open(),et.value=t,lt.setHandleSubmit((function(t){var n=t.id;lt.setLoading(!0),b.deleteCard(n).then((function(){e(),lt.close(),lt.setLoading(!1)}))}))},handleLike:b.like,handleDislike:b.dislike});return c.getView()}lt.setEventListeners(),W["edit-form"].enableButton(),ot.setEventListeners(),st.setEventListeners(),ct.setEventListeners(),at.setEventListeners(),ut.renderItems(),X.addEventListener("click",(function(){at.open();var t=it.getUserInfo();nt.value=t.userName,rt.value=t.description,W["edit-form"].enableButton()})),Z.addEventListener("click",(function(){st.open()})),Y.addEventListener("click",(function(){ct.open()}))})();