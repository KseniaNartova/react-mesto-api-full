class Api {
    #onResponce(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject({ message: "Ошибка на стороне сервера", res });
    }
  
    constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
    }
  
    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    getCards() {
      return fetch(`${this._url}/cards`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    editProfileUser(data) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    addNewCard(data) {
      return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    deleteСard(id) {
      return fetch(`${this._url}/cards/${id}`, {
        method: "DELETE",
        headers: this._headers,
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    addLike(id) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    deleteLike(id) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    changeAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: data,
        }),
      }).then((res) => {
        return this.#onResponce(res);
      });
    }

    changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this._url}cards/${cardId}/likes`, {
        method: `${isLiked ? 'PUT' : 'DELETE'}`,
        headers: this._headers,
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  };
  
  export const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-51/",
    headers: {
      authorization: "2828649d-c727-4213-9471-433d3a2fcadf",
      "content-Type": "application/json",
    },
  });