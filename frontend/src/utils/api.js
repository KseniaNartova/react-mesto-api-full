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
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: {authorization: `Bearer ${jwt}`},
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    getCards() {
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards`, {
        method: "GET",
        headers: {authorization: `Bearer ${jwt}`},
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    editProfileUser(data) {
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {authorization: `Bearer ${jwt}`},
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    addNewCard(data) {
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: {authorization: `Bearer ${jwt}`},
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    deleteСard(id) {
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards/${id}`, {
        method: "DELETE",
        headers: {authorization: `Bearer ${jwt}`},
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    addLike(id) {
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "PUT",
        headers: {authorization: `Bearer ${jwt}`},
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    deleteLike(id) {
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "DELETE",
        headers: {authorization: `Bearer ${jwt}`},
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  
    changeAvatar(data) {
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: {authorization: `Bearer ${jwt}`},
        body: JSON.stringify({
          avatar: data,
        }),
      }).then((res) => {
        return this.#onResponce(res);
      });
    }

    changeLikeCardStatus(cardId, isLiked) {
      const jwt = localStorage.getItem("jwt");
      return fetch(`${this._url}cards/${cardId}/likes`, {
        method: `${isLiked ? 'PUT' : 'DELETE'}`,
        headers: {authorization: `Bearer ${jwt}`},
      }).then((res) => {
        return this.#onResponce(res);
      });
    }
  };
  
  export const api = new Api({
    url: "https://api.nartovaksu.nomoredomains.rocks",
    headers: {
      "content-Type": "application/json",
    },
  });