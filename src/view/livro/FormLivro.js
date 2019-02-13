import React, { Component, Fragment } from 'react';
import InputCustomizado from '../../component/InputCustomizado';
import LivroService from '../../service/LivroService';
import LivroDTO from '../../model/LivroDTO';
import SelectCustomizado from '../../component/SelectCustomizado';
import AutorError from '../../error/AutorError';
import PubSub from 'pubsub-js';
import { Button } from 'react-materialize';
import { Alert } from 'react-bootstrap';

export default class FormLivro extends Component {
    constructor() {
        super();
        this.state = {titulo: '', preco: undefined, autorId: 1, autores: [], show: false};
        this._service = new LivroService();
    }

    _handleHide = () => this.setState({ show: false });
    _handleShow = () => this.setState({ show: true });

    render() {
        return (
            <Fragment key="formLivro">
                <Alert key="msgAutor" variant='success' show={this.state.show} onClose={this._handleHide}  dismissible>
                    Livro cadastrado com sucesso!
                </Alert>
                <form onSubmit={this.save} method="post">
                    <InputCustomizado label="Título:" id="titulo" type="text" name="titulo" value={this.state.titulo} onChange={this.setStateForm}/>
                    <InputCustomizado label="Preço:" id="preco" type="number" name="preco" value={this.state.preco} onChange={this.setStateForm} step="0.01" min="0"/>
                    <SelectCustomizado id="autorId" name="autorId" label="Autores:" onChange={this.setStateForm}/>
                    <Button waves='light' type="submit">Gravar</Button>
                </form>
            </Fragment>
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
            this._handleShow();
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