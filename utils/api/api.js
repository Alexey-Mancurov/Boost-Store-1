class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkRequest = (res) => {
        if (res.ok)
            return res.json();

        return Promise.reject(new Error(`Ошибка ${res.status}`));
    }

    getGames = () => {
        return fetch(this._baseUrl + '/games', {
                headers: this._headers
            })
            .then(res => {
                return this._checkRequest(res);
            })
    }

    getGameItem = (codeGame) => {
        return fetch(`${this._baseUrl}/game/${codeGame}`, {
                headers: this._headers
            })
            .then(res => {
                return this._checkRequest(res);
            })
    }

    getReviews = () => {
        return fetch(this._baseUrl + '/reviews', {
                headers: this._headers
            })
            .then(res => {
                return this._checkRequest(res);
            })
    }

    authorisation = (email, password) => {
        return fetch(`${this._baseUrl}/user/token?login=${email}&password=${password}`, {
            headers: this._headers
        })
        .then(res=>{
            return this._checkRequest(res)
        })
    }
}

export const api = new Api({
    baseUrl: 'https://boost-center.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})