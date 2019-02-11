import React, { Component, Fragment } from 'react';
import InputCustomizado from '../../component/InputCustomizado';
import AutorDTO from '../../model/AutorDTO';
import AutorService from '../../service/AutorService';
import AutorError from '../../error/AutorError';
import PubSub from 'pubsub-js';
import { Button } from 'react-materialize';
import { Alert } from 'react-bootstrap';

export default class FormAutor extends Component {
    constructor() {
        super();
        this.state = {nome: '', email: '', senha: '', show: false};
        this._service = new AutorService();
    }

    _clearState() {
        this.setState({nome: '', email: '', senha: ''});
    }

    _handleHide = () => this.setState({ show: false });
    _handleShow = () => this.setState({ show: true });

    render() {
        return (
            <Fragment>
                <Alert key="msgAutor" variant='success' show={this.state.show} onClose={this._handleHide}  dismissible>
                    Autor cadastrado com sucesso!
                </Alert>
                <form onSubmit={this.gravarAutor} method="post">
                    <InputCustomizado label="Nome:" id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setStateForm}/>
                    <InputCustomizado label="Email:" id="email" type="email" name="email" value={this.state.email} onChange={this.setStateForm}/>
                    <InputCustomizado label="Senha:" id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setStateForm}/>
                    <div className="pure-control-group">
                        <label></label>
                        <Button waves="light" type="submit">Gravar</Button>
                    </div>
                </form>
            </Fragment>
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
            this._handleShow();
            this._clearState();
        })
        .catch(err => Promise.resolve(new AutorError(err)));
    }

    setStateForm = event => 
        this.setState({[event.target.name]: event.target.value});
}