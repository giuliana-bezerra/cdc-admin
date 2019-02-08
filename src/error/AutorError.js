import PubSub from 'pubsub-js';

export default class AutorError extends Error {
    constructor(err) {
        super(err);
        this._error = err;
        this._handle(err);
    }

    _handle(err) {
        this._error.then(error =>
          error.errors.forEach((erro) => {
            PubSub.publish('erro', erro);
          })
        );
    }
}