import PubSub from 'pubsub-js';

export default class AutorError extends Error {
    constructor(err) {
        super(err);
        this._error = err;
        this._handle(err);
    }

    _handle(err) {
        if (this._error) {
            this._error.then(error => {
                if (error.errors) {
                    error.errors.forEach((erro) => {
                        console.log(erro);
                        PubSub.publish('error', erro);
                    });
                }
                else {
                    console.log(error);
                    PubSub.publish('error', error); 
                }
            });
        }
    }
}