import React, { Component } from 'react';
import InputCustomizado from '../../component/InputCustomizado';
import AutorDTO from '../../model/AutorDTO';
import AutorService from '../../service/AutorService';
import AutorError from '../../error/AutorError';
import PubSub from 'pubsub-js';

export default class FormAutor extends Component {
    constructor() {
        super();
        this.state = {nome: '', email: '', senha: ''};
        this._service = new AutorService();
    }

    _clearState() {
        this.setState({nome: '', email: '', senha: ''});
    }

    render() {
        return (
            <div className="pure-form">
                <form className="pure-form pure-form-aligned" onSubmit={this.gravarAutor} method="post">
                    <InputCustomizado label="Nome:" id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setStateForm}/>
                    <InputCustomizado label="Email:" id="email" type="email" name="email" value={this.state.email} onChange={this.setStateForm}/>
                    <InputCustomizado label="Senha:" id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setStateForm}/>
                    <div className="pure-control-group">
                        <label></label>
                        <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                    </div>
                </form>
            </div>
        );
    }

    gravarAutor = eventoReact => {
        eventoReact.preventDefault();
        // Publica uma informação num tópico.
        PubSub.publish('clearErrors');

        this._service.gravar(new AutorDTO(
            this.state.nome, 
            this.state.email,
            this.state.senha
        ))
        .then(autores => {
            this.props.update(autores);
            this._clearState();
        })
        .catch(err => Promise.resolve(new AutorError(err)));
    }

    setStateForm = event => 
        this.setState({[event.target.name]: event.target.value});
}