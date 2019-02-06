export default class HttpService {
    _handleErrors(res) {
        if (!res.ok) throw new Error(res.statusText);
        return res;
    }

    get(url) {
        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }

    post(url, body) {
        return fetch(url, {
            method: 'post',
            body: JSON.stringify(body)
        })
        .then(res => this._handleErrors(res));
    }
}