export default class HttpService {
    constructor() {
        this._errorMessage = '';
    }

    _handleErrors(res) {
        if (!res.ok) {
            this._errorMessage = res.json();
            throw new Error(this._errorMessage);
        }
        return res;
    }

    get(url) {
        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }

    post(url, data) {
        return fetch(url, {
            headers: {'Content-Type': 'application/json'},
            method: 'post',
            body: JSON.stringify(data)
        })
        .then(res => this._handleErrors(res))
        .then(res => res.json());
    }

    getErrorMessage() {
        return this._errorMessage;
    }
}