import React, { Component } from 'react';
import InputCustomizado from '../../component/InputCustomizado';
import LivroService from '../../service/LivroService';
import LivroDTO from '../../model/LivroDTO';
import SelectCustomizado from '../../component/SelectCustomizado';
import AutorError from '../../error/AutorError';
import PubSub from 'pubsub-js';

export default class FormLivro extends Component {
    constructor() {
        super();
        this.state = {titulo: '', preco: 0.0, autorId: 1, autores: []};
        this._service = new LivroService();
    }

    render() {
        return (
            <div id="formLivro" className="pure-form">
                <form className="pure-form pure-form-aligned" onSubmit={this.save} method="post">
                    <InputCustomizado label="Título:" id="titulo" type="text" name="titulo" value={this.state.titulo} onChange={this.setStateForm}/>
                    <InputCustomizado label="Preço:" id="preco" type="number" name="preco" value={this.state.preco} onChange={this.setStateForm} step="0.01" min="0"/>
                    <SelectCustomizado id="autorId" name="autorId" label="Autores:" onChange={this.setStateForm}/>
                    <div className="pure-control-group">
                        <label></label>
                        <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                    </div>
                </form>
            </div>
        );
    }

    save = event => {
        event.preventDefault();
        // Publica uma informação num tópico.
        PubSub.publish('clearErrors');

        this._service.gravar(new LivroDTO(
            this.state.titulo,
            this.state.preco,
            this.state.autorId
        )).then(livros => {
            this.props.update(livros);
            this._clearState();
        })
        .catch(err => Promise.resolve(new AutorError(err)));;
    }

    _clearState() {
        this.setState({titulo: '', preco: 0.0, autorId: 1, autores: []});
    }

    setStateForm = event => 
        this.setState({[event.target.name]: event.target.value});
}