import React, { Component } from 'react';
import AutorService from '../service/AutorService';
import PubSub from 'pubsub-js';
import { Input } from 'react-materialize';

export default class SelectCustomizado extends Component {
    constructor() {
        super();
        this.state = {autores: [], msgErro: ''};
        this._service = new AutorService();
    }

    render() {
        return (
            <div className="pure-control-group">
                <Input {...this.props} type="select">
                    {
                        this.state.autores.map(autor => 
                            <option key={autor.id} value={autor.id}>
                                {autor.nome}
                            </option>
                        )
                    }
                </Input>
                <span className="error">{this.state.msgErro}</span>
            </div>
        );  
    }

    componentDidMount() {
        this._service.listar().then(autores =>
            this.setState({autores: autores})
        );
        PubSub.subscribe('error', (topico, erro) => {
            if (erro.field === this.props.name)
                this.setState({msgErro: erro.defaultMessage});
        });
        PubSub.subscribe('clearErrors', () => 
            this.setState({msgErro: ''}));
    }

    componentWillUnmount() {
        PubSub.unsubscribe('error');
        PubSub.unsubscribe('clearErrors');
    }
}